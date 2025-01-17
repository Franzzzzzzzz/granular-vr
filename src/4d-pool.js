import css from "../css/main.css";
import pool_css from "../css/pool.css";
import track from "../text-to-speech/4d-pool.mp3";
import table from "../resources/4d-pool.stl";

import * as THREE from "three";
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

import * as SPHERES from "../libs/SphereHandler.js"
import { NDSTLLoader, renderSTL } from '../libs/NDSTLLoader.js';
import * as CONTROLLERS from '../libs/controllers.js';
import * as BUTTONS from "../libs/buttons";
import * as POOLCUE from '../libs/PoolCue.js';
import * as AUDIO from '../libs/audio.js';
import * as LIGHTS from "../libs/lights";


import { camera, scene, renderer, controls, clock, apps } from "./index";

let gui;
let S;
let NDsolids, material, STLFilename;
let meshes;
// var direction = new THREE.Vector3();
// const mouse = new THREE.Vector2();

var params = {
    radius: 0.05,
    dimension: 4,
    L1: 2,
    L2: 0.1,  // this is the direction of gravity
    L3: 1,
    L4: 0.5,
    pocket_size: 0.15,
    pyramid_size: 5,
    d4: { cur: 0 },
    particle_density: 2700,
    quality: 7,
    dt: 1e-3,
    table_height: 1.1,
    lut: 'None',
    audio: true,
}

params.N = get_num_particles(params.pyramid_size);

params.d4.min = -params.L4;
params.d4.max =  params.L4;

params.particle_volume = Math.PI * Math.PI * Math.pow(params.radius, 4) / 2.;
params.particle_mass = params.particle_volume * params.particle_density;

let sunk_balls = [];

export async function init() {
    SPHERES.createNDParticleShader(params).then(main());
}

async function main() {
    AUDIO.make_listener(camera);
    AUDIO.add_fixed_sound_source([0, 0, 0]);
    
    await NDDEMPhysics();

    const base_geometry = new THREE.PlaneGeometry(4 * params.L1, 2 * params.L3 + 2 * params.L1);
    const base_material = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });
    const plane = new THREE.Mesh(base_geometry, base_material);
    plane.rotateX(Math.PI / 2.);
    scene.add(plane);

    LIGHTS.add_default_lights(scene);

    SPHERES.add_pool_spheres(S, params, scene);

    STLFilename = './4d-pool.stl'; // this one has crap pockets
    material = new THREE.MeshStandardMaterial({
        color: 0x00aa00,
        roughness: 1,
        // map: texture,
    });

    loadSTL();

    add_table_legs();

    // gui
    gui = new GUI();
    gui.width = 400;

    gui.add(params.d4, 'cur', -params.L4, params.L4, 0.001).name('D4 location (e/q)').listen();
    gui.remove_me = true;

    BUTTONS.add_scene_change_button('menu', 'Main menu', controls, scene, [-1.5, 1, 1.5], 0.25, [0, Math.PI / 4, 0]);

    renderer.setAnimationLoop(function () {
        update();
        renderer.render(scene, camera);
    });

    AUDIO.play_track('4d-pool.mp3', camera, 3000);

    POOLCUE.add_pool_cue( controls.vrControls.controllers.right ).then(() => {
        console.log('UPDATED RADIUS')
        S.simu_setRadius(params.N-1, POOLCUE.small_end_radius);
        S.simu_setMass(params.N-1, params.particle_mass / 10.);
        SPHERES.update_radii(S);
        SPHERES.spheres.children[params.N-1].material.transparent = true;
        SPHERES.spheres.children[params.N-1].material.opacity = 0.;
    });
}

function add_table_legs() {
    let thickness = 2 * params.radius;
    let cylinder = new THREE.CylinderGeometry(thickness, thickness, 0.98 * (params.table_height - params.L2), Math.pow(2, params.quality), Math.pow(2, params.quality));
    let material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });

    let leg = new THREE.Mesh(cylinder, material);
    leg.position.set(0.75 * (-params.L1 + thickness), (params.table_height - params.L2) / 2., -params.L3 + thickness);
    scene.add(leg.clone());
    leg.position.set(0.75 * (params.L1 - thickness), (params.table_height - params.L2) / 2., -params.L3 + thickness);
    scene.add(leg.clone());
    leg.position.set(0.75 * (-params.L1 + thickness), (params.table_height - params.L2) / 2., params.L3 - thickness);
    scene.add(leg.clone());
    leg.position.set(0.75 * (params.L1 - thickness), (params.table_height - params.L2) / 2., params.L3 - thickness);
    scene.add(leg);

}

function update() {
    params = CONTROLLERS.moveInD4(params, controls);
    POOLCUE.snap( controls );
    SPHERES.move_spheres(S, params);
    if (params.audio) {
        SPHERES.update_fixed_sounds(S, params);
    }

    if ( POOLCUE.pool_cue !== undefined ) {

        let end_of_pool_cue = new THREE.Vector3();

        POOLCUE.small_sphere.getWorldPosition(end_of_pool_cue);

        S.simu_fixParticle(params.N-1,
            [end_of_pool_cue.x,
             end_of_pool_cue.z,
             end_of_pool_cue.y,
             params.d4.cur
            ]);
    }

    S.simu_step_forward(20);

    check_pockets();

    controls.update();

}

let pocket_locs = [
    [-params.L1, -params.L3],
    [-params.L1, params.L3],
    [params.L1, -params.L3],
    [params.L1, params.L3],
    [0, -params.L3],
    [0, params.L3],
];

function in_pocket(loc) {
    let retval = false;

    pocket_locs.forEach(pocket => {
        if (Math.pow(loc[0] - pocket[0], 2) + Math.pow(loc[1] - pocket[1], 2) < params.pocket_size * params.pocket_size) {
            console.log('fallen off table (hopefully out of a hole)')
            retval = true;
        }
    });
    return retval;
}

function check_pockets() {
    for (let i = 0; i < params.N-1; i++) {
        var object = SPHERES.spheres.children[i];
        if (!(i in sunk_balls)) {
            if (in_pocket(SPHERES.x[i])) {
                if (i == 0) {
                    console.log('sunk white ball')
                    S.simu_fixParticle(0, params.white_ball_initial_loc)
                }
                else if (i == 11) {
                    console.log('sunk black ball')
                    if (sunk_balls.length < params.N - 1) {
                        alert('You need to sink all of the coloured balls before the black ball. You lose.')
                    } else {
                        alert('You win!')
                    }
                    set_ball_positions();
                }
                else {
                    console.log('SUNK BALL ' + String(i))
                    // object.visible = false;
                    sunk_balls.push(i)
                    S.simu_fixParticle(i, [1.1 * params.L1, params.table_height, sunk_balls.length * 2 * params.radius, 0])
                    S.simu_setFrozen(i);

                }
            }
        }
    }
}

async function NDDEMPhysics() {

    await DEMCGND().then((NDDEMCGLib) => {
        if (params.dimension == 3) {
            S = new NDDEMCGLib.DEMCG3D(params.N);
        } else if (params.dimension == 4) {
            S = new NDDEMCGLib.DEMCG4D(params.N);
        } else if (params.dimension == 5) {
            S = new NDDEMCGLib.DEMCG5D(params.N);

        }
        finish_setup();
    });


    function finish_setup() {
        S.simu_interpret_command("dimensions " + String(params.dimension) + " " + String(params.N));

        S.simu_interpret_command("radius -1 " + String(params.radius));
        // now need to find the mass of a particle with diameter 1

        S.simu_interpret_command("mass -1 " + String(params.particle_mass));
        S.simu_interpret_command("auto rho");
        S.simu_interpret_command("auto mass");
        S.simu_interpret_command("auto inertia");
        S.simu_interpret_command("auto skin");

        S.simu_interpret_command("boundary 0 WALL -" + String(params.L1) + " " + String(params.L1));
        S.simu_interpret_command("boundary 1 WALL -" + String(params.L3) + " " + String(params.L3));
        S.simu_interpret_command("boundary 2 WALL " + String(-params.L2 + params.table_height) + " " + String(params.L2 + params.table_height));
        S.simu_interpret_command("boundary 3 WALL -" + String(params.L4) + " " + String(params.L4));
        // S.interpret_command("body " + STLFilename);
        S.simu_interpret_command("gravity 0 0 -9.81 0");
        // S.interpret_command("auto location randomdrop");

        set_ball_positions();

        let tc = 20 * params.dt;
        let rest = 0.5; // super low restitution coeff to dampen out quickly
        let vals = SPHERES.setCollisionTimeAndRestitutionCoefficient(tc, rest, params.particle_mass)

        S.simu_interpret_command("set Kn " + String(vals.stiffness));
        S.simu_interpret_command("set Kt " + String(0.8 * vals.stiffness));
        S.simu_interpret_command("set GammaN " + String(vals.dissipation));
        S.simu_interpret_command("set GammaT " + String(vals.dissipation));
        S.simu_interpret_command("set Mu 0.1");
        S.simu_interpret_command("set Mu_wall 0.5");
        S.simu_interpret_command("set damping 6e-4");
        S.simu_interpret_command("set T 150");
        S.simu_interpret_command("set dt " + String(params.dt));
        S.simu_interpret_command("set tdump 1000000"); // how often to calculate wall forces
        S.simu_finalise_init();
    }
}

function set_ball_positions() {
    let n = 1;
    let offset = params.L1 / 2;

    params.white_ball_initial_loc = [offset, 0, params.table_height - params.L2 + params.radius, 0.001 * (Math.random() - 0.5)];
    S.simu_interpret_command("location " + String(0) + " "
        + String(params.white_ball_initial_loc[0]) + " "
        + String(params.white_ball_initial_loc[1]) + " "
        + String(params.white_ball_initial_loc[2]) + " "
        + String(params.white_ball_initial_loc[3])); // first ball is the white ball

    for (var k = 0; k < params.pyramid_size; k++) {
        let cur_pyramid_length = params.pyramid_size - k;
        let w = k * 1.825 * params.radius;
        for (var i = 0; i < cur_pyramid_length; i++) {
            for (var j = 0; j < cur_pyramid_length - i; j++) {
                let x = i * 1.82 * params.radius - cur_pyramid_length * params.radius + params.radius - offset;
                let y = j * 2.01 * params.radius - (cur_pyramid_length - i) * params.radius + params.radius;// - i%2*radius;
                S.simu_interpret_command("location " + String(n) + " " + String(x) + " " + String(y) + " " + String(params.table_height - params.L2 + params.radius) + " " + String(w));
                n++;
                if (k > 0) { S.simu_interpret_command("location " + String(n) + " " + String(x) + " " + String(y) + " " + String(params.table_height - params.L2 + params.radius) + " " + String(-w)); n++; }
            }
        }
    }

    // add the cue stick
    // S.simu_interpret_command("location " + String(params.N) + " 0 0 0 0");
    
}

function loadSTL() {
    meshes = new THREE.Group;
    const loader = new NDSTLLoader();
    loader.load([STLFilename], function (solids) {
        NDsolids = solids;
        replace_meshes();
    })
}

function replace_meshes() {
    if (NDsolids.length > 0) {
        if (meshes !== undefined) {
            scene.remove(meshes);
            dispose_children(meshes);
            meshes = new THREE.Group();
        }
        meshes = renderSTL(meshes, NDsolids, scene, material, params.d4.cur);
        meshes.position.y = params.table_height;
        scene.add(meshes);
    }
}

function get_num_particles(L) {
    let N = 0;
    let i = 1;
    for (var n = L; n > 0; n--) {
        N += i * n;
        i += 2;
    }
    return N + 2; // adding the white ball and cue stick
}

function dispose_children(target) {
    for (var i = 0; i < target.children.length; i++) {
        target.children[i].geometry.dispose();
        target.children[i].material.dispose();
    }
}
