"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgranular_vr"] = self["webpackChunkgranular_vr"] || []).push([["src_rotation-3d_js"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./css/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html * {\\n  font-family: 'Montserrat', sans-serif;\\n}\\n\\nbody { margin: 0; }\\n\\n.button {\\n    align-items: center;\\n    border: 1px solid transparent;\\n    border-radius: 4px;\\n    box-shadow: none;\\n    display: inline-flex;\\n    font-size: 1rem;\\n    height: 2.5em;\\n    justify-content: flex-start;\\n    line-height: 1.5;\\n    padding-bottom: calc(0.5em - 1px);\\n    padding-left: calc(0.75em - 1px);\\n    padding-right: calc(0.75em - 1px);\\n    padding-top: calc(0.5em - 1px);\\n    position: relative;\\n    vertical-align: top;\\n  }\\n   .button:focus, .button:active {\\n    outline: none;\\n  }\\n  \\n   .button {\\n    -webkit-touch-callout: none;\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n  }\\n\\n\\n#buttonsContainer {\\n    position: absolute;\\n    bottom: 5px;\\n    right: 5px;\\n    z-index: 3;\\n  }\\n\\n.lil-gui {\\n  --number-color: #fc2eff;\\n  --string-color: #fc2eff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://granular-vr/./css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://granular-vr/./css/main.css?");

/***/ }),

/***/ "./src/rotation-3d.js":
/*!****************************!*\
  !*** ./src/rotation-3d.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./css/main.css\");\n/* harmony import */ var _text_to_speech_rotation_3d_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../text-to-speech/rotation-3d.mp3 */ \"./text-to-speech/rotation-3d.mp3\");\n/* harmony import */ var three_examples_jsm_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/libs/lil-gui.module.min.js */ \"./node_modules/three/examples/jsm/libs/lil-gui.module.min.js\");\n/* harmony import */ var _libs_SphereHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/SphereHandler.js */ \"./libs/SphereHandler.js\");\n/* harmony import */ var _libs_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/buttons */ \"./libs/buttons.js\");\n/* harmony import */ var _libs_audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/audio */ \"./libs/audio.js\");\n/* harmony import */ var _libs_lights__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/lights */ \"./libs/lights.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* provided dependency */ var THREE = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n// import track2 from \"../text-to-speech/rotation-4d.mp3\";\n\n// import ImmersiveControls from '@depasquale/three-immersive-controls';\n\n\n// import * as CONTROLLERS from '../libs/controllers.js';\n\n\n\n\n\n// var urlParams = new URLSearchParams(window.location.search);\n// var clock = new THREE.Clock();\n\n// let camera, scene, renderer, controls, S;\n\nlet S;\n\nvar params = {\n    dimension: 3,\n    radius: 0.5,\n    L: 500, //system size\n    // d4: {cur:0, min:-1, max:1},\n    lut: 'None',\n    quality: 7,\n}\n\nparams.N = params.dimension * (params.dimension - 1) / 2;\n\n// if ( urlParams.has('dimension') ) {\n//     params.dimension = parseInt(urlParams.get('dimension'));\n// }\n\n// if ( params.dimension === 3 ) {\n//     params.N = 3;\n// }\n\nfunction init() {\n    _libs_SphereHandler_js__WEBPACK_IMPORTED_MODULE_3__.createNDParticleShader(params).then(() => {\n        // if ( BUTTONS.font === undefined ) {\n        // setTimeout(main, 200);\n        // } else {\n        main();\n        // }\n    });\n}\n\nasync function main() {\n\n    await NDDEMCGPhysics();\n\n    // // camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000 );\n    // var aspect = window.innerWidth / window.innerHeight;\n    // camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );\n\n    // scene = new THREE.Scene();\n    // scene.background = new THREE.Color( 0x111 );\n\n    _libs_lights__WEBPACK_IMPORTED_MODULE_6__.add_default_lights(_index__WEBPACK_IMPORTED_MODULE_7__.scene);\n    // const hemiLight = new THREE.AmbientLight();\n    // hemiLight.intensity = 0.35;\n    // scene.add( hemiLight );\n    // //\n    // const dirLight = new THREE.DirectionalLight();\n    // dirLight.position.set( 5, -5, -5 );\n    // dirLight.castShadow = true;\n    // scene.add( dirLight );\n\n    const base_geometry = new THREE.PlaneGeometry(10, 10);\n    const base_material = new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide });\n    const plane = new THREE.Mesh(base_geometry, base_material);\n    plane.rotateX(Math.PI / 2.);\n    _index__WEBPACK_IMPORTED_MODULE_7__.scene.add(plane);\n\n    _libs_SphereHandler_js__WEBPACK_IMPORTED_MODULE_3__.add_spheres(S, params, _index__WEBPACK_IMPORTED_MODULE_7__.scene);\n\n    // renderer = new THREE.WebGLRenderer( { antialias: true } );\n    // renderer.setPixelRatio( window.devicePixelRatio );\n    // renderer.setSize( window.innerWidth, window.innerHeight );\n\n    // var container = document.getElementById( 'canvas' );\n    // container.appendChild( renderer.domElement );\n\n    if (params.dimension == 4) {\n        let gui = new three_examples_jsm_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_2__.GUI();\n        gui.width = 320;\n        gui.add(params.d4, 'cur', -params.radius, params.radius, 0.001).name('D4 location').listen()\n    }\n\n    let circle;\n    if (params.dimension === 3) {\n        var circle_geometry = new THREE.CircleGeometry(0.5, 256);\n        const loader = new THREE.TextureLoader();\n\n        const circle_material = new THREE.MeshBasicMaterial({\n            color: 0xFFFFFF,\n            map: loader.load('resources/usyd.png'),\n        });\n        circle = new THREE.Mesh(circle_geometry, circle_material);\n        circle.position.y = 2.2;\n        _index__WEBPACK_IMPORTED_MODULE_7__.scene.add(circle);\n    }\n\n    // window.addEventListener( 'resize', onWindowResize, false );\n\n    // controls = new ImmersiveControls(camera, renderer, scene, {\n    //     initialPosition: new THREE.Vector3(0, 1.6, 2),\n    //     // moveSpeed: { keyboard: 0.025, vr: 0.025 }\n    // });\n\n    _libs_buttons__WEBPACK_IMPORTED_MODULE_4__.add_scene_change_button('menu', 'Main menu', _index__WEBPACK_IMPORTED_MODULE_7__.controls, _index__WEBPACK_IMPORTED_MODULE_7__.scene, [-1, 1, 1], 0.25, [0, Math.PI / 4, 0]);\n    if (params.dimension === 3) {\n        _libs_buttons__WEBPACK_IMPORTED_MODULE_4__.add_scene_change_button('rotation-4d', 'Seeing 4D surfaces', _index__WEBPACK_IMPORTED_MODULE_7__.controls, _index__WEBPACK_IMPORTED_MODULE_7__.scene, [1, 1, 1], 0.25, [0, -Math.PI / 4, 0]);\n        _libs_audio__WEBPACK_IMPORTED_MODULE_5__.play_track('rotation-3d.mp3', _index__WEBPACK_IMPORTED_MODULE_7__.camera, 5000);\n    } else if (params.dimension === 4) {\n        _libs_buttons__WEBPACK_IMPORTED_MODULE_4__.add_scene_change_button('pyramid', 'Pyramid', _index__WEBPACK_IMPORTED_MODULE_7__.controls, _index__WEBPACK_IMPORTED_MODULE_7__.scene, [1, 1, 1], 0.25, [0, -Math.PI / 4, 0]);\n        _libs_audio__WEBPACK_IMPORTED_MODULE_5__.play_track('rotation-4d.mp3', _index__WEBPACK_IMPORTED_MODULE_7__.camera, 5000);\n    }\n\n    _index__WEBPACK_IMPORTED_MODULE_7__.renderer.setAnimationLoop(function () {\n        if (_index__WEBPACK_IMPORTED_MODULE_7__.controls !== undefined) { _index__WEBPACK_IMPORTED_MODULE_7__.controls.update(); }\n        S.simu_step_forward(5);\n        _libs_SphereHandler_js__WEBPACK_IMPORTED_MODULE_3__.move_spheres(S, params);\n        _index__WEBPACK_IMPORTED_MODULE_7__.renderer.render(_index__WEBPACK_IMPORTED_MODULE_7__.scene, _index__WEBPACK_IMPORTED_MODULE_7__.camera);\n        if (circle !== undefined) { circle.rotateZ(_index__WEBPACK_IMPORTED_MODULE_7__.clock.getDelta() * Math.PI / 2.) }\n    });\n}\n\n\n\n// function onWindowResize(){\n\n//     var aspect = window.innerWidth / window.innerHeight;\n//     renderer.setSize( window.innerWidth, window.innerHeight );\n// }\n\nasync function NDDEMCGPhysics() {\n\n    if ('DEMCGND' in window === false) {\n\n        console.error('NDDEMPhysics: Couldn\\'t find DEMCGND.js');\n        return;\n\n    }\n\n    await DEMCGND().then((NDDEMCGLib) => {\n        if (params.dimension == 3) {\n            S = new NDDEMCGLib.DEMCG3D(params.N);\n        }\n        else if (params.dimension == 4) {\n            S = new NDDEMCGLib.DEMCG4D(params.N);\n        }\n        else if (params.dimension == 5) {\n            S = new NDDEMCGLib.DEMCG5D(params.N);\n        }\n        finish_setup();\n    });\n\n\n    function finish_setup() {\n        S.simu_interpret_command(\"dimensions \" + String(params.dimension) + \" \" + String(params.N));\n        S.simu_interpret_command(\"radius -1 0.45\");\n        S.simu_interpret_command(\"mass -1 1\");\n        S.simu_interpret_command(\"auto rho\");\n        S.simu_interpret_command(\"auto inertia\");\n\n        S.simu_interpret_command(\"boundary 0 PBC -\" + String(params.L) + \" \" + String(params.L));\n        S.simu_interpret_command(\"boundary 1 PBC -\" + String(params.L) + \" \" + String(params.L));\n        S.simu_interpret_command(\"boundary 2 PBC -\" + String(params.L) + \" \" + String(params.L));\n        S.simu_interpret_command(\"gravity 0 0 \" + \"0 \".repeat(params.dimension - 3))\n\n        if (params.dimension == 4) {\n            S.simu_interpret_command(\"boundary 3 PBC -\" + String(params.L) + \" \" + String(params.L));\n\n            S.simu_interpret_command(\"location 0 -1 0 1 0\");\n            S.simu_interpret_command(\"location 1 0 0 1 0\");\n            S.simu_interpret_command(\"location 2 1 0 1 0\");\n            S.simu_interpret_command(\"location 3 -1 0 2 0\");\n            S.simu_interpret_command(\"location 4 0 0 2 0\");\n            S.simu_interpret_command(\"location 5 1 0 2 0\");\n            S.simu_interpret_command(\"omega 4 0.1 0 0 0 0 0\");\n            S.simu_interpret_command(\"omega 5 0 0.1 0 0 0 0\");\n            S.simu_interpret_command(\"omega 0 0 0 0.1 0 0 0\");\n            S.simu_interpret_command(\"omega 3 0 0 0 0.1 0 0\");\n            S.simu_interpret_command(\"omega 1 0 0 0 0 0.1 0\");\n            S.simu_interpret_command(\"omega 2 0 0 0 0 0 0.1\");\n        }\n        else if (params.dimension === 3) {\n            S.simu_interpret_command(\"location 0 -1 0 1 0\");\n            S.simu_interpret_command(\"location 1 0 0 1 0\");\n            S.simu_interpret_command(\"location 2 1 0 1 0\");\n            S.simu_interpret_command(\"omega 0 0 0.1 0\");\n            S.simu_interpret_command(\"omega 1 0.1 0 0\");\n            S.simu_interpret_command(\"omega 2 0 0 0.1\");\n        }\n\n        let tc = 0.5;\n        let rest = 0.5; // super low restitution coeff to dampen out quickly\n        let vals = _libs_SphereHandler_js__WEBPACK_IMPORTED_MODULE_3__.setCollisionTimeAndRestitutionCoefficient(tc, rest, params.particle_mass)\n\n        S.simu_interpret_command(\"set Kn 0\");// + String(vals.stiffness));\n        S.simu_interpret_command(\"set Kt 0\");// + String(0.8*vals.stiffness));\n        S.simu_interpret_command(\"set GammaN \" + String(vals.dissipation));\n        S.simu_interpret_command(\"set GammaT \" + String(vals.dissipation));\n        S.simu_interpret_command(\"set Mu 0\");\n        // S.simu_interpret_command(\"set damping 10\");\n        S.simu_interpret_command(\"set T 150\");\n        S.simu_interpret_command(\"set dt \" + String(tc / 10));\n        S.simu_interpret_command(\"set tdump 1000000\"); // how often to calculate wall forces\n        S.simu_interpret_command(\"auto skin\");\n        S.simu_finalise_init();\n\n    }\n}\n\n\n//# sourceURL=webpack://granular-vr/./src/rotation-3d.js?");

/***/ }),

/***/ "./text-to-speech/rotation-3d.mp3":
/*!****************************************!*\
  !*** ./text-to-speech/rotation-3d.mp3 ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dcec416ed098727d1648.mp3\";\n\n//# sourceURL=webpack://granular-vr/./text-to-speech/rotation-3d.mp3?");

/***/ })

}]);