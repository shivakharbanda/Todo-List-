/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    font-family: 'Alata', sans-serif;\n\n    font-family: 'Montserrat', sans-serif;\n\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1.5fr 6fr;\n    grid-template-rows: 10vh;\n    height: 100vh;\n    margin: -10px;\n}\n\nheader {\n    height: 10vh;\n    color: white;\n    background-color: black;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    padding-left: 1%;\n    padding-right: 1%;\n}\n\n.sidebar {\n    background-color: black;\n    color: white;\n    grid-row-start: 2;\n    grid-row-end: 5;\n    padding-left: 2vw;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    min-width: 1.5fr;\n\n}\n\n.home,\n.project {\n    width: 90%;\n}\n\n.home>.menu-item>h3,\n.project>.project-list>.full-tab>.project-item-part-2>h3,\nbutton {\n    cursor: pointer;\n    font-weight: 300;\n    padding: 0px;\n    margin: 1vh;\n\n}\n\n.project>.project-list>.full-tab>.project-item-part-2>h3,\n.svg-btn-edit {\n    word-break: break-word;\n    cursor: pointer;\n}\n\n\n.menu-item>h1 {\n    margin: 1vh;\n}\n\n.project {\n    margin-top: 1vh;\n}\n\nhr {\n    width: 100%;\n    margin-left: 0px;\n}\n\n.addNewProject,\n.add-task-btn,\n.impBtn,\n.cancel-btn,\n.add-task-2-btn,\n.add-project-2-btn,\n#editBtn {\n    height: 5vh;\n    width: 75%;\n    border-radius: 50px;\n    color: black;\n    background-color: white;\n    font-size: larger;\n}\n\n.add-task-btn,\n.cancel-btn,\n.add-task-2-btn,\n.add-project-2-btn,\n#editBtn {\n    width: 10vw;\n    font-size: 100%;\n}\n\n.cancel-btn,\n.add-task-2-btn,\n.add-project-2-btn,\n#editBtn {\n    background-color: black;\n    color: white;\n    margin: auto;\n}\n\n.content-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    color: white;\n    padding: 1vh 4vw;\n    border-radius: 50px;\n}\n\ninput,\nlabel {\n    display: block;\n\n}\n\nlabel {\n    font-weight: 100;\n    font-size: smaller;\n}\n\n.main-content {\n    padding: 5vh 5vw;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #d3d0d063;\n    height: 80vh;\n}\n\n.outside-box {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10000;\n    background-color: rgba(128, 128, 128, 0.266);\n}\n\n.add-task-box,\n.add-project-box {\n    display: grid;\n    gap: 20px;\n    grid-template-columns: 1fr 1fr;\n    width: 50%;\n    padding: 0px 50px;\n    padding-bottom: 50px;\n    border-radius: 10px;\n    background-color: white;\n    border: 1px solid grey;\n    position: fixed;\n    z-index: 1000000000;\n    top: 31%;\n    /* bottom: 18%; */\n    left: 31%;\n    right: 50%;\n}\n\n.add-project-box>h2 {\n    text-align: center;\n}\n\n.add-project-box>input {\n    align-self: center;\n}\n\n#detail {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    height: 100px;\n    width: 99%;\n    resize: none;\n    margin: 0px;\n    text-align: start;\n}\n\n#title {\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\ninput,\ntextarea {\n    height: 3vh;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.task-box-header>h1 {\n    margin: 0;\n\n}\n\n.impBtn {\n    height: 100%;\n    width: 25%;\n    font-size: 100%;\n    font-weight: bold;\n    color: white;\n    background-color: black;\n\n}\n\n.task-box-header {\n    display: flex;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 10px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2%;\n    border-radius: 17px;\n    background-color: white;\n}\n\n#task-details>* {\n    border: 1px solid black;\n    padding: 10px;\n\n}\n\n#task-details {\n    display: flex;\n    flex-direction: column;\n    margin-top: 2vh;\n    padding-left: 50px;\n    padding-right: 50px;\n    gap: 10px;\n}\n\n.detail {\n    flex: 2;\n    margin-left: 5%;\n    margin-right: 5%;\n    text-align: center;\n}\n\n\n.radio-btn,\n.important-star,\n.star {\n    height: 25px;\n    width: 25px;\n    background-color: white;\n    border-radius: 100%;\n    color: black;\n    display: grid;\n    place-content: center;\n    font-weight: 900;\n    font-size: x-large;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Old versions of Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    cursor: pointer;\n    border: 2px solid black;\n\n}\n\n.star {\n    color: grey;\n    background-color: transparent;\n    height: 50px;\n    width: 50px;\n    font-size: 200%;\n    font-weight: 1000;\n    border: none;\n}\n\n.important-star {\n    color: black;\n}\n\n.star-white {\n    font-size: 290%;\n}\n\n.menu-list-svg {\n    height: 5vh;\n    width: auto;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked+.slider {\n    background-color: #2196F3;\n}\n\ninput:focus+.slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked+.slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.menu-item {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n\n}\n\n.menu-list-svg-small {\n    height: 3vh;\n    width: auto;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    outline: none;\n    border: 2px solid purple\n}\n\n\n.valid {\n    border: 1px solid green;\n}\n\n.error {\n    border: 1px solid red;\n}\n\n.project-list {\n    max-height: 400px;\n    overflow-y: scroll;\n}\n\n.full-tab,\n.project-item-part-2 {\n    display: flex;\n    align-items: center;\n\n}\n\n.full-tab {\n    display: flex;\n    align-items: center;\n    gap: 0px;\n    height: 50px;\n}\n\n.project-icons {\n    gap: 11px;\n    display: flex;\n    /* align-items: flex-start; */\n    padding-right: 19px;\n}\n\n.project-item-part-2 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n}\n\n.project-icon-small {\n    height: 4vh;\n    width: auto;\n    cursor: pointer;\n}\n\n\n.confirmation-box>h2 {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.edit-input {\n    height: 3vh;\n    width: 70%;\n    margin: 0px 0.5vw;\n}\n\n.dropbtn {\n    /* background-color: #3498DB; */\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n}\n\n/* .dropbtn:hover, .dropbtn:focus {\n    background-color: #2980B9;\n} */\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown a:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n\n.show {\n    display: block;\n}\n\n.no-due-date {\n    padding: 1vh 1vw;\n    border: 1px solid;\n    font-weight: 400;\n    border-radius: 50px;\n}\n.task > p {\n    padding: 1vh 1vw;\n}\n\n\n.completed {\n    opacity: 0.7;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    font-family: 'Alata', sans-serif;\n\n    font-family: 'Montserrat', sans-serif;\n\n    font-family: 'Roboto', sans-serif;\n    font-size: large;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1.5fr 6fr;\n    grid-template-rows: 10vh;\n    height: 100vh;\n    margin: -10px;\n}\n\nheader {\n    height: 10vh;\n    color: white;\n    background-color: black;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    padding-left: 1%;\n    padding-right: 1%;\n}\n\n.sidebar {\n    background-color: black;\n    color: white;\n    grid-row-start: 2;\n    grid-row-end: 5;\n    padding-left: 2vw;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    min-width: 1.5fr;\n\n}\n\n.home,\n.project {\n    width: 90%;\n}\n\n.home>.menu-item>h3,\n.project>.project-list>.full-tab>.project-item-part-2>h3,\nbutton {\n    cursor: pointer;\n    font-weight: 300;\n    padding: 0px;\n    margin: 1vh;\n\n}\n\n.project>.project-list>.full-tab>.project-item-part-2>h3,\n.svg-btn-edit {\n    word-break: break-word;\n    cursor: pointer;\n}\n\n\n.menu-item>h1 {\n    margin: 1vh;\n}\n\n.project {\n    margin-top: 1vh;\n}\n\nhr {\n    width: 100%;\n    margin-left: 0px;\n}\n\n.addNewProject,\n.add-task-btn,\n.impBtn,\n.cancel-btn,\n.add-task-2-btn,\n.add-project-2-btn,\n#editBtn {\n    height: 5vh;\n    width: 75%;\n    border-radius: 50px;\n    color: black;\n    background-color: white;\n    font-size: larger;\n}\n\n.add-task-btn,\n.cancel-btn,\n.add-task-2-btn,\n.add-project-2-btn,\n#editBtn {\n    width: 10vw;\n    font-size: 100%;\n}\n\n.cancel-btn,\n.add-task-2-btn,\n.add-project-2-btn,\n#editBtn {\n    background-color: black;\n    color: white;\n    margin: auto;\n}\n\n.content-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: black;\n    color: white;\n    padding: 1vh 4vw;\n    border-radius: 50px;\n}\n\ninput,\nlabel {\n    display: block;\n\n}\n\nlabel {\n    font-weight: 100;\n    font-size: smaller;\n}\n\n.main-content {\n    padding: 5vh 5vw;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    background-color: #d3d0d063;\n    height: 80vh;\n}\n\n.outside-box {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 10000;\n    background-color: rgba(128, 128, 128, 0.266);\n}\n\n.add-task-box,\n.add-project-box {\n    display: grid;\n    gap: 20px;\n    grid-template-columns: 1fr 1fr;\n    width: 50%;\n    padding: 0px 50px;\n    padding-bottom: 50px;\n    border-radius: 10px;\n    background-color: white;\n    border: 1px solid grey;\n    position: fixed;\n    z-index: 1000000000;\n    top: 31%;\n    /* bottom: 18%; */\n    left: 31%;\n    right: 50%;\n}\n\n.add-project-box>h2 {\n    text-align: center;\n}\n\n.add-project-box>input {\n    align-self: center;\n}\n\n#detail {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    height: 100px;\n    width: 99%;\n    resize: none;\n    margin: 0px;\n    text-align: start;\n}\n\n#title {\n    grid-column-start: 1;\n    grid-column-end: 2;\n}\n\ninput,\ntextarea {\n    height: 3vh;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.task-box-header>h1 {\n    margin: 0;\n\n}\n\n.impBtn {\n    height: 100%;\n    width: 25%;\n    font-size: 100%;\n    font-weight: bold;\n    color: white;\n    background-color: black;\n\n}\n\n.task-box-header {\n    display: flex;\n    grid-column-start: 1;\n    grid-column-end: 3;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 10px;\n}\n\n.task {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2%;\n    border-radius: 17px;\n    background-color: white;\n}\n\n#task-details>* {\n    border: 1px solid black;\n    padding: 10px;\n\n}\n\n#task-details {\n    display: flex;\n    flex-direction: column;\n    margin-top: 2vh;\n    padding-left: 50px;\n    padding-right: 50px;\n    gap: 10px;\n}\n\n.detail {\n    flex: 2;\n    margin-left: 5%;\n    margin-right: 5%;\n    text-align: center;\n}\n\n\n.radio-btn,\n.important-star,\n.star {\n    height: 25px;\n    width: 25px;\n    background-color: white;\n    border-radius: 100%;\n    color: black;\n    display: grid;\n    place-content: center;\n    font-weight: 900;\n    font-size: x-large;\n    -webkit-touch-callout: none;\n    /* iOS Safari */\n    -webkit-user-select: none;\n    /* Safari */\n    -khtml-user-select: none;\n    /* Konqueror HTML */\n    -moz-user-select: none;\n    /* Old versions of Firefox */\n    -ms-user-select: none;\n    /* Internet Explorer/Edge */\n    user-select: none;\n    cursor: pointer;\n    border: 2px solid black;\n\n}\n\n.star {\n    color: grey;\n    background-color: transparent;\n    height: 50px;\n    width: 50px;\n    font-size: 200%;\n    font-weight: 1000;\n    border: none;\n}\n\n.important-star {\n    color: black;\n}\n\n.star-white {\n    font-size: 290%;\n}\n\n.menu-list-svg {\n    height: 5vh;\n    width: auto;\n}\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n}\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n}\n\ninput:checked+.slider {\n    background-color: #2196F3;\n}\n\ninput:focus+.slider {\n    box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked+.slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n    border-radius: 34px;\n}\n\n.slider.round:before {\n    border-radius: 50%;\n}\n\n.menu-item {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n\n}\n\n.menu-list-svg-small {\n    height: 3vh;\n    width: auto;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n    outline: none;\n    border: 2px solid purple\n}\n\n\n.valid {\n    border: 1px solid green;\n}\n\n.error {\n    border: 1px solid red;\n}\n\n.project-list {\n    max-height: 400px;\n    overflow-y: scroll;\n}\n\n.full-tab,\n.project-item-part-2 {\n    display: flex;\n    align-items: center;\n\n}\n\n.full-tab {\n    display: flex;\n    align-items: center;\n    gap: 0px;\n    height: 50px;\n}\n\n.project-icons {\n    gap: 11px;\n    display: flex;\n    /* align-items: flex-start; */\n    padding-right: 19px;\n}\n\n.project-item-part-2 {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex: 1;\n}\n\n.project-icon-small {\n    height: 4vh;\n    width: auto;\n    cursor: pointer;\n}\n\n\n.confirmation-box>h2 {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.edit-input {\n    height: 3vh;\n    width: 70%;\n    margin: 0px 0.5vw;\n}\n\n.dropbtn {\n    /* background-color: #3498DB; */\n    color: white;\n    padding: 16px;\n    font-size: 16px;\n    border: none;\n    cursor: pointer;\n}\n\n/* .dropbtn:hover, .dropbtn:focus {\n    background-color: #2980B9;\n} */\n\n.dropdown {\n    position: relative;\n    display: inline-block;\n}\n\n.dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f1f1f1;\n    min-width: 160px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1;\n}\n\n.dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n}\n\n.dropdown a:hover {\n    background-color: #ddd;\n    cursor: pointer;\n}\n\n\n.show {\n    display: block;\n}\n\n.no-due-date {\n    padding: 1vh 1vw;\n    border: 1px solid;\n    font-weight: 400;\n    border-radius: 50px;\n}\n.task > p {\n    padding: 1vh 1vw;\n}\n\n\n.completed {\n    opacity: 0.7;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addNewProjectBox.js":
/*!*********************************!*\
  !*** ./src/addNewProjectBox.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewProjectBox)
/* harmony export */ });
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./src/additional.js");


function addNewProjectBox() {

    let outsideBox = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    outsideBox.classList.add("outside-box");

    let taskBox = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    taskBox.classList.add("add-project-box");

    let heading = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h2");
    heading.textContent = "Project Name:"

    let input1 = document.createElement("input");
    input1.id = "projectName";
    input1.placeholder = "Project Name";
    input1.classList.add(input1.id)
    input1.minLength = 3;
    input1.maxLength = 20;
    input1.required = true;


    taskBox.appendChild(heading);
    taskBox.appendChild(input1);

    let cancelBtn = document.createElement("button");
    let addtaskBtn = document.createElement("button");

    cancelBtn.classList.add("cancel-btn");
    addtaskBtn.classList.add("add-project-2-btn");

    cancelBtn.textContent = "Cancel";
    addtaskBtn.textContent = "Add Project";

    taskBox.appendChild(addtaskBtn);
    taskBox.appendChild(cancelBtn);

    outsideBox.appendChild(taskBox);


    return outsideBox;
    
}


/***/ }),

/***/ "./src/addTaskBox.js":
/*!***************************!*\
  !*** ./src/addTaskBox.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTaskBox),
/* harmony export */   "editTaskBox": () => (/* binding */ editTaskBox)
/* harmony export */ });
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./src/additional.js");
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");





function addTaskBox(projectNameValue) {

    let outsideBox = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    outsideBox.classList.add("outside-box");

    let taskBox = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    taskBox.classList.add("add-task-box");
    taskBox.dataset.projectName = projectNameValue;

    let fields = [
        {
            name: "title",
            type: "text",
            id: "title",
            placeholder: "Title",
            minLength: 3,
            maxLength: 30,
            required: true
        },
        {
            name: "detail",
            type: "text",
            id: "detail",
            placeholder: "Detail...",
            minLength: 3,
            maxLength: 350,
            required: false
        },  
    ];

    let div1 = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    let div2 = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    let div3 = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();

    let label = document.createElement("label");
    label.textContent = `${fields[0].name}`;
    label.for = fields[0].name;
    let input0 = document.createElement("input");
    input0.id = fields[0].id;
    input0.classList.add(fields[0].id);
    input0.placeholder = fields[0].placeholder;
    input0.minLength = fields[0].minLength;
    input0.maxLength = fields[0].maxLength;
    input0.setAttribute('required', '')

    let label1 = document.createElement("label");
    label1.textContent = `${fields[1].name}`;
    label1.for = fields[1].name;
    let input1 = document.createElement("textarea");
    input1.id = fields[1].id;
    input1.placeholder = fields[1].placeholder;
    input1.classList.add(fields[1].id)
    input1.minLength = fields[1].minLength;
    input1.maxLength = fields[1].maxLength;
    input1.setAttribute('required', '')


    let label2 = document.createElement("label");
    label2.textContent = `Date`;
    label2.for = "date";
    let input2 = document.createElement("input");
    input2.classList.add(label2.for);
    input2.id = "date";
    input2.type = "date";

    //div1.appendChild(label);
    div1.appendChild(input0);
    //div2.appendChild(label1);
    div2.appendChild(input1);
    //div3.appendChild(label2);
    div3.appendChild(input2);

    let head = new _additional__WEBPACK_IMPORTED_MODULE_0__.heading1();
    head.textContent = "Task";

    let impBtn = document.createElement("div");
    impBtn.textContent = "☆"
    impBtn.classList.add("star-white");
    impBtn.classList.add("star")
    impBtn.setAttribute("id", "impBtn");
    impBtn.dataset.value = "false";

    let taskBoxHeader = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();

    impBtn.classList.add("form-field-validate");
    input0.classList.add("form-field-validate");
    input2.classList.add("form-field-validate");
    input1.classList.add("form-field-validate");

    impBtn.addEventListener("blur", () => {
        (0,_additional__WEBPACK_IMPORTED_MODULE_0__.validateForm)(`.${impBtn.classList[0]}`);
    });
    input0.addEventListener("blur", () => {
        (0,_additional__WEBPACK_IMPORTED_MODULE_0__.validateForm)(`.${input0.classList[0]}`);
    });
    input2.addEventListener("blur", () => {
        (0,_additional__WEBPACK_IMPORTED_MODULE_0__.validateForm)(`.${input2.classList[0]}`);
    });
    input1.addEventListener("blur", () => {
        (0,_additional__WEBPACK_IMPORTED_MODULE_0__.validateForm)(`.${input1.classList[0]}`);
    });

    taskBoxHeader.appendChild(head);
    taskBoxHeader.appendChild(impBtn);
    taskBoxHeader.classList.add("task-box-header");

    

    taskBox.appendChild(taskBoxHeader);
    taskBox.appendChild(input0);
    taskBox.appendChild(input2);
    taskBox.appendChild(input1);

    
   
    let cancelBtn = document.createElement("button");
    let addtaskBtn = document.createElement("button");

    cancelBtn.classList.add("cancel-btn");
    addtaskBtn.classList.add("add-task-2-btn");

    cancelBtn.textContent = "Cancel";
    addtaskBtn.textContent = "Add Task";

    taskBox.appendChild(addtaskBtn);
    taskBox.appendChild(cancelBtn);

    outsideBox.appendChild(taskBox);
    
    return outsideBox;
    
}

function editTaskBox(projectID, taskID) {
    let taskBox = addTaskBox();
    let task = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_1__.getTaskById)(projectID, taskID);

    if (taskBox.querySelector("#impBtn").dataset.value == true) {
        taskBox.querySelector("#impBtn").textContent = "⭐";
        taskBox.querySelector("#impBtn").removeAttribute("class");
        taskBox.querySelector("#impBtn").classList.add("star");
        taskBox.querySelector("#impBtn").classList.add("form-field-validate");
        
    } else {
        taskBox.querySelector("#impBtn").textContent = "☆";
        taskBox.querySelector("#impBtn").removeAttribute("class");
        taskBox.querySelector("#impBtn").classList.add("star"); 
        taskBox.querySelector("#impBtn").classList.add("star-white");
        taskBox.querySelector("#impBtn").classList.add("form-field-validate");
    }
    taskBox.querySelector("#title").value = task.title;
    taskBox.querySelector("#date").value = task.date;
    taskBox.querySelector("#detail").value = task.detail;

    taskBox.id = "edit-box";
    taskBox.dataset.projectId = projectID;
    taskBox.dataset.taskId = taskID

    let editBtn = taskBox.querySelector(".add-task-2-btn")
    editBtn.id = "editBtn";
    editBtn.removeAttribute("class");
    editBtn.textContent = "Edit Task";


    return taskBox;
}

/***/ }),

/***/ "./src/additional.js":
/*!***************************!*\
  !*** ./src/additional.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarBtnDiv": () => (/* binding */ StarBtnDiv),
/* harmony export */   "divComponent": () => (/* binding */ divComponent),
/* harmony export */   "dropDownMenuDiv": () => (/* binding */ dropDownMenuDiv),
/* harmony export */   "getCurrentProjectId": () => (/* binding */ getCurrentProjectId),
/* harmony export */   "headComponent": () => (/* binding */ headComponent),
/* harmony export */   "heading1": () => (/* binding */ heading1),
/* harmony export */   "radioBtnDiv": () => (/* binding */ radioBtnDiv),
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "switchElement": () => (/* binding */ switchElement),
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



class divComponent {
    constructor  () {
        return document.createElement("div");
    }
}

class headComponent {
    constructor (head) {
        return document.createElement(head);
    }
}


class heading1 extends headComponent {
    constructor () {
        return document.createElement("h1");
    }
}


function radioBtnDiv() {
    let radioBtn = new divComponent();
    radioBtn.classList.add("radio-btn");
    return radioBtn
    
}
function StarBtnDiv(important) {
    let starBtn = new divComponent();
    console.log(important);
    important == "true"?"":starBtn.classList.add("star-white");
    starBtn.classList.add("star");
     
    return starBtn 
}

class svg {
    constructor (src, id= null) {
        this.svg =  document.createElement("object");

        this.svg.setAttribute("type", "image/svg+xml");
        this.svg.setAttribute("data", src);
        if (id != null) {
            this.svg.setAttribute("id", id);
        }

        return this.svg;
        
    }
}

function switchElement() {
    let switchEle = document.createElement("label");
    let switchEleInput = document.createElement("input");
    let switcheleSpan = document.createElement("span");

    switchEle.classList.add("switch");
    switchEleInput.setAttribute("type", "checkbox");

    switchEleInput.checked = true;

    switcheleSpan.classList.add("slider");
    switcheleSpan.classList.add("round")

    switchEle.appendChild(switchEleInput);
    switchEle.appendChild(switcheleSpan);

    return switchEle;

}

function validateForm(formId){
    let fieldList = [... document.querySelectorAll(formId)];

    let valueObjects = {};

    fieldList.every(field => {
        if (field.tagName != "DIV") {
            if (field.required) {
                if ((field.value).length == 0){
                    field.setCustomValidity(`this field can't be empty`);
                    field.classList.add("error");
                    return;
                } else {
                    if (field.minLength != "-1") {
                        if ((field.value).length < field.minLength) {
                            field.setCustomValidity(`Too short! length should be greater than ${field.minLength}`)
                            field.classList.add("error");
                            return;
                        } else {
                            field.classList.remove("error");
                            field.classList.add("valid");
                            return;
                        }
                    } 
                    if (field.maxLength != "-1") {
                        if ((field.value).length > field.maxLength) {
                            field.setCustomValidity(`Too Long! length should be greater than ${field.maxLength}`)
                            field.classList.add("error");
                            field.classList.remove("valid");
                            return;
                        }else {
                            field.classList.remove("error");
                            field.classList.add("valid");
                            return;
                        }
                    }
                }
                

            } 
        } else { return }
    });

    return valueObjects;
}

function dropDownMenuDiv(dropbtnElement) {
    let dropDownDiv = new divComponent();
    dropDownDiv.classList.add("dropdown");

    dropbtnElement.classList.add("dropbtn");

    let dropDownOptionsDiv = new divComponent();
    dropDownOptionsDiv.id = "myDropdown";
    dropDownOptionsDiv.classList.add("dropdown-content");

    let dropDownOption1 = document.createElement("a");
    dropDownOption1.textContent = "Edit";
    dropDownOption1.classList.add("drop-down-ele");
    dropDownOption1.id = "edit";

    let dropDownOption2 = document.createElement("a");
    dropDownOption2.textContent = "Delete";
    dropDownOption2.classList.add("drop-down-ele");
    dropDownOption2.id = "delete";

    dropDownOptionsDiv.appendChild(dropDownOption1);
    dropDownOptionsDiv.appendChild(dropDownOption2);

    dropDownDiv.appendChild(dropbtnElement);
    dropDownDiv.appendChild(dropDownOptionsDiv);


    dropDownDiv.addEventListener("click", (event)=> {
        event.target.parentNode.lastChild.classList.toggle("show");
        let dropDownOptions = event.target.parentElement.lastChild.childNodes;
        dropDownOptions.forEach(element => {
            element.addEventListener("click", (event)=> {
                let selectedTaskId = event.target.parentElement.parentElement.parentElement.dataset.taskId ;
                let action = event.target.id;
                (0,_displayController__WEBPACK_IMPORTED_MODULE_0__.performAction)(selectedTaskId, action);
                let currentProjectId = getCurrentProjectId(event.target)
                ;(0,_task__WEBPACK_IMPORTED_MODULE_1__.populateTasksOfProject)(currentProjectId)
                

            })
        })
        
    })
    
    

    return dropDownDiv
}

function getCurrentProjectId(selectedDiv) {
    return selectedDiv.parentElement.dataset.ProjectId ;
    
}

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventListeners": () => (/* binding */ eventListeners),
/* harmony export */   "generateUi": () => (/* binding */ generateUi),
/* harmony export */   "performAction": () => (/* binding */ performAction),
/* harmony export */   "populateAllTasksOfProject": () => (/* binding */ populateAllTasksOfProject),
/* harmony export */   "populateProjectsTab": () => (/* binding */ populateProjectsTab),
/* harmony export */   "replaceDomElements": () => (/* binding */ replaceDomElements)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _genericMainComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genericMainComponent */ "./src/genericMainComponent.js");
/* harmony import */ var _addTaskBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTaskBox */ "./src/addTaskBox.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./additional */ "./src/additional.js");
/* harmony import */ var _addNewProjectBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addNewProjectBox */ "./src/addNewProjectBox.js");
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");
/* harmony import */ var _static_svg_project_icon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./static/svg/project-icon.svg */ "./src/static/svg/project-icon.svg");
/* harmony import */ var _static_svg_trash_fill_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./static/svg/trash-fill.svg */ "./src/static/svg/trash-fill.svg");
/* harmony import */ var _static_svg_pencil_square_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./static/svg/pencil-square.svg */ "./src/static/svg/pencil-square.svg");
/* harmony import */ var _static_svg_enter_svg_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static/svg/enter_svg.svg */ "./src/static/svg/enter_svg.svg");
/* harmony import */ var _static_svg_cancel_svg_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./static/svg/cancel_svg.svg */ "./src/static/svg/cancel_svg.svg");











 
 


function populateAllTasksOfProject() {
    let projectObj = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.stringToObject)((0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.fetchProjects)());

    // let taskComponent = document.getElementById("task-details")

    let taskComponent = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();

    taskComponent.id = "task-details";
    taskComponent.classList.add("tasks-div");
    try {
        Object.keys(projectObj).forEach(projectId => {
            Object.keys(projectObj[projectId]["tasks"]).forEach(taskId => {
                let task = projectObj[projectId]["tasks"][taskId];
    
                let taskBox = (0,_task__WEBPACK_IMPORTED_MODULE_4__.createTaskComponent)(task, taskId, projectId);
                taskComponent.appendChild(taskBox)
    
            })
        })
    } catch (TypeError) {
        return taskComponent;
    }
    

    return taskComponent;
}

function generateUi(parent, tab_name) {

    parent.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
    parent.appendChild((0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])());
    parent.appendChild((0,_genericMainComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(tab_name));


    eventListeners();

    return parent;
}

function updateContentBar(tab_name, projectIdNum) {
    let content = document.querySelector(".content");

    let main_content = document.querySelector(".main-content")

    content.removeChild(main_content);
    content.appendChild((0,_genericMainComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(tab_name));

    document.getElementById("content-heading").dataset.projectId = projectIdNum;
}

function eventListeners() {

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        } 
        if (event.target.classList.contains("radio-btn")) {
            let selectedBtn = event.target;
            let taskID = selectedBtn.parentElement.dataset.taskId 
            let projectID = getActiveProjectId();

            if (projectID == undefined) {
                projectID = event.target.parentNode.dataset.ProjectId;
                (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.toggleCompleted)(projectID, taskID)
                let tabName = document.getElementById("content-heading") 
                if (tabName.textContent == "All Tasks") {

                    let taskComponent = populateAllTasksOfProject();
                    replaceDomElements(document.getElementsByClassName("main-content"), taskComponent, document.getElementsByClassName("tasks-div"))
                }
                
            } else if ((0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.toggleCompleted)(projectID, taskID)) {
                (0,_task__WEBPACK_IMPORTED_MODULE_4__.populateTasksOfProject)(projectID);
            };
            
        }
        if (event.target.classList.contains("star")) {
            let selectedBtn = event.target;
            let taskID = selectedBtn.parentElement.dataset.taskId 
            let projectID = getActiveProjectId();

            if (projectID == undefined) {
                projectID = event.target.parentNode.dataset.ProjectId;
                (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.toggleImportant)(projectID, taskID);
                let tabName = document.getElementById("content-heading") 
                if (tabName.textContent == "All Tasks") {
                    let taskComponent = populateAllTasksOfProject();
                    replaceDomElements(document.getElementsByClassName("main-content"), taskComponent, document.getElementsByClassName("tasks-div"))
                }
                
            } else if ((0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.toggleImportant)(projectID, taskID)) {
                (0,_task__WEBPACK_IMPORTED_MODULE_4__.populateTasksOfProject)(projectID);
            };
            
        }
        if (event.target.classList.contains("slider")) {
            event.stopPropagation();
            alert("someone clicked me and i didnt like it");
        }
        if (event.target.classList.contains("sidebar-home-tab")) {
            updateContentBar(event.target.dataset.value, event.target.dataset.projectId);
            if (event.target.dataset.type == "project"){
                
                (0,_task__WEBPACK_IMPORTED_MODULE_4__.populateTasksOfProject)(event.target.dataset.projectId)
                
                

                document.querySelector(".add-task-btn").addEventListener("click", (event)=>{
                        let projectName = event.target.parentNode.firstChild.textContent;
                        
                        let taskBox = (0,_addTaskBox__WEBPACK_IMPORTED_MODULE_3__["default"])(projectName);
                        document.body.appendChild(taskBox);
                        document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
                            document.querySelector(".outside-box").remove() 
                        }); 
                        let impBtn = document.querySelector("#impBtn");
                        document.querySelector("#impBtn").addEventListener("click", (event)=>{
                           
                            if (impBtn.dataset.value == "true") {
                                impBtn.dataset.value = "false";
                                impBtn.textContent = "☆";
                                
                            } else {
                                impBtn.dataset.value = "true";
                                impBtn.textContent = "⭐";
                            }
                
                            impBtn.classList.toggle("star-white");
                        }); 
                        document.querySelector(".add-task-2-btn").addEventListener("click", (event)=>{
                            let projectName = event.target.parentNode.dataset.projectName;
                            let title = document.querySelector("#title").value;
                            let date = document.querySelector("#date").value;

                            date = date.replace(/-/g, "/");
                            let detail = document.querySelector("#detail").value;
                            let important = document.querySelector("#impBtn").dataset.value;
                            let project="default";
                
                            (0,_additional__WEBPACK_IMPORTED_MODULE_5__.validateForm)(".form-field-validate");
                            document.querySelector("#title").reportValidity();
                            document.querySelector("#detail").reportValidity();
                            if ([... document.querySelectorAll(".error")].length > 0) {
                                document.querySelectorAll(".error")[0].focus();
                                return;
                            }
                                                
                            let task = (0,_task__WEBPACK_IMPORTED_MODULE_4__.createTask)( project, title, detail, important, date, "false");

                            let currentProjectId = (0,_additional__WEBPACK_IMPORTED_MODULE_5__.getCurrentProjectId)();
                            let taskId = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.addTaskToProject)(currentProjectId, task)
                            
                            ;(0,_task__WEBPACK_IMPORTED_MODULE_4__.appendTask)(task, taskId)
                            document.querySelector(".outside-box").remove()
                  
                    }); 
            
                }); 
            }
            if (event.target.classList.contains("all-task") && !event.target.classList.contains("sidebar-project-tab") ) {
                populateAllTasksOfProject()
            }
            
        } 
        if (event.target.classList.contains("addNewProject")) {
            let addNewProject = (0,_addNewProjectBox__WEBPACK_IMPORTED_MODULE_6__["default"])();
            document.body.appendChild(addNewProject);
            document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
                document.querySelector(".outside-box").remove() 
            }); 

            document.querySelector(".add-project-2-btn").addEventListener("click", (event)=>{
                let projectNameField = document.querySelector("#projectName");
                console.log(event.target)

                ;(0,_additional__WEBPACK_IMPORTED_MODULE_5__.validateForm)("#projectName");
                document.querySelector("#projectName").addEventListener("blur", () => {(0,_additional__WEBPACK_IMPORTED_MODULE_5__.validateForm)("#projectName");}) 
                if ([... projectNameField.classList].includes("error")){
                    // do nothing
                } else {
                    (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.createProject)(projectNameField.value);
                    document.querySelector(".outside-box").remove()
                    console.log(populateProjectsTab());
                    populateProjectsTab();
                }
            })
        }
    }
}



function populateProjectsTab(){
    let projectListDiv = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();
    projectListDiv.classList.add("project-list");

    let projectList = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.getProjectListObj)();

    for (let i = 0; i < projectList.length; i ++) {
        let projectItemDiv = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent()
        projectItemDiv.classList.add("full-tab");
        
        // let projectItemDivPart1 = new divComponent();

        let menuIcon = new _additional__WEBPACK_IMPORTED_MODULE_5__.svg(_static_svg_project_icon_svg__WEBPACK_IMPORTED_MODULE_8__);
        menuIcon.classList.add("project-icon-small");

        // projectItemDivPart1.appendChild(menuIcon);

        let projectItemDivPart2 = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();


        const projectItem = new _additional__WEBPACK_IMPORTED_MODULE_5__.headComponent("h3");
        projectItem.textContent = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.getProjectNameById)(projectList[i]);
        projectItem.classList.add("all-task");
        projectItem.classList.add("sidebar-home-tab");
        projectItem.classList.add("sidebar-project-tab");
        projectItem.dataset.projectId = projectList[i];
        projectItem.dataset.value = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.getProjectNameById)(projectList[i]);
        projectItem.dataset.type = "project";
        projectItemDivPart2.appendChild(projectItem);

        let editSvg = new Image;

        editSvg.src = _static_svg_pencil_square_svg__WEBPACK_IMPORTED_MODULE_10__;
        
        editSvg.dataset.keyID = projectList[i];
        editSvg.classList.add("project-icon-small");
        editSvg.classList.add("svg-btn-edit");
        editSvg.style = "cursor: pointer;";


        editSvg.addEventListener("click", (event)=> {
            
            let divToBeReplaced = event.target.parentNode.parentNode;

            let oldKey = event.target.dataset.keyID;

            let editInput = editBox(oldKey);
            console.log(editInput);

            divToBeReplaced.parentNode.replaceChild(editInput, divToBeReplaced);
            
        })


        let deleteSvg = new Image;
        
        deleteSvg.dataset.keyID = projectList[i];
        deleteSvg.classList.add("project-icon-small");
        deleteSvg.classList.add("svg-btn-delete");

        deleteSvg.src = _static_svg_trash_fill_svg__WEBPACK_IMPORTED_MODULE_9__;

        deleteSvg.addEventListener("click", (event)=> {
            let confirmationBox = areYouSureBox(event.target.dataset.keyID)

            console.log(confirmationBox);

            document.body.appendChild(confirmationBox)
        })

        let projectItemDivPart2_2 = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();
        projectItemDivPart2_2.classList.add("project-icons");

        projectItemDivPart2_2.appendChild(editSvg);
        projectItemDivPart2_2.appendChild(deleteSvg);

        projectItemDivPart2.appendChild(projectItem);
        projectItemDivPart2.appendChild(projectItemDivPart2_2);
        projectItemDivPart2.classList.add("project-item-part-2")

        projectItemDiv.appendChild(menuIcon);
        projectItemDiv.appendChild(projectItemDivPart2);


        projectListDiv.appendChild(projectItemDiv);
    }
    let projectSideBarDiv = document.querySelector(".project");
    projectSideBarDiv.removeChild(projectSideBarDiv.lastChild)

    if (document.querySelector(".project-list")!= null) {
        projectSideBarDiv.removeChild(document.querySelector(".project-list"));
    }
    
    projectSideBarDiv.appendChild(projectListDiv);
    projectSideBarDiv.appendChild((0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.addProjectBtn)());
    eventListeners();
}


function areYouSureBox(projectName) {
    let outsideBox = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();
    outsideBox.classList.add("outside-box");

    let taskBox = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();
    taskBox.classList.add("add-task-box");
    taskBox.classList.add("confirmation-box");

    let sureBoxHeading = new _additional__WEBPACK_IMPORTED_MODULE_5__.headComponent("h2");

    sureBoxHeading.textContent = `Are you sure you want to delete "${(0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.getProjectNameById)(projectName)}"? This action can't be reversed.`

    taskBox.appendChild(sureBoxHeading);
    
    let cancelBtn = document.createElement("button");
    let yesBtn = document.createElement("button");

    yesBtn.addEventListener("click", ()=> {
        (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.deleteProjectItem)(projectName);
        document.querySelector(".outside-box").remove()
        populateProjectsTab();

    })
    cancelBtn.addEventListener("click", ()=> {
        document.querySelector(".outside-box").remove();
    })
    

    cancelBtn.classList.add("cancel-btn");
    yesBtn.classList.add("add-task-2-btn");

    cancelBtn.textContent = "Cancel";
    yesBtn.textContent = "Yes";

    taskBox.appendChild(yesBtn);
    taskBox.appendChild(cancelBtn);

    outsideBox.appendChild(taskBox);


    return outsideBox;
}

function editBox(oldKey) {
    let editDiv = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();
    editDiv.classList.add("project-item-part-2");

    let editInput = document.createElement("input");

    editInput.placeholder = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.getProjectNameById)(oldKey);
    editInput.classList.add("sidebar-home-tab");
    editInput.classList.add("edit-input");
    editInput.maxLength = 20;
    editInput.minLength = 3;

    let enterSvg = new Image();
    enterSvg.src = _static_svg_enter_svg_svg__WEBPACK_IMPORTED_MODULE_11__;
    enterSvg.classList.add("project-icon-small");
    enterSvg.classList.add("svg-btn-enter");

    let cancelSvg = new Image();
    cancelSvg.src = _static_svg_cancel_svg_svg__WEBPACK_IMPORTED_MODULE_12__;
    cancelSvg.classList.add("project-icon-small");
    cancelSvg.classList.add("svg-btn-cancel");

    enterSvg.addEventListener("click", (event)=>{
        let newProjectName = event.target.parentNode.parentNode.firstChild.value;
        if (newProjectName.length >=3 && newProjectName.length <= 20) {
            (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.editKey)(oldKey, newProjectName);
            populateProjectsTab();
            if (document.getElementById("content-heading").dataset.projectId == oldKey) {
                updateContentBar(newProjectName, oldKey);
            }
        }
    })

    cancelSvg.addEventListener("click", ()=>{
        populateProjectsTab();
    })
    let svgDiv = new _additional__WEBPACK_IMPORTED_MODULE_5__.divComponent();
    svgDiv.classList.add("project-icons");

    svgDiv.appendChild(enterSvg);
    svgDiv.appendChild(cancelSvg);

    editDiv.appendChild(editInput);
    editDiv.appendChild(svgDiv);

    return editDiv;

}



function replaceDomElements(parent, newItem, oldItem) {
    if (oldItem instanceof HTMLCollection) {
      oldItem = oldItem[0];
    }

    if (parent instanceof HTMLCollection) {
        parent = parent[0];
      }
    
    parent.replaceChild(newItem, oldItem);
  }
  

function getActiveProjectId() {
    return document.getElementById("content-heading").dataset.projectId
}

function performAction(taskId, action) {
    if (action == "delete") {
        let projectId = getActiveProjectId();
        (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.deleteTask)(taskId, projectId);
    } else if (action == "edit") {
        let projectId = getActiveProjectId();
    
        let editTaskBoxModal = (0,_addTaskBox__WEBPACK_IMPORTED_MODULE_3__.editTaskBox)(projectId, taskId);

        document.body.appendChild(editTaskBoxModal);
        document.querySelector(".cancel-btn").addEventListener("click", (event)=>{
            document.querySelector(".outside-box").remove() 
        }); 
        let impBtn = document.querySelector("#impBtn");
        document.querySelector("#impBtn").addEventListener("click", (event)=>{
            
            if (impBtn.dataset.value == "true") {
                impBtn.dataset.value = "false";
                impBtn.textContent = "☆";
                
            } else {
                impBtn.dataset.value = "true";
                impBtn.textContent = "⭐";
            }

            impBtn.classList.toggle("star-white");
        });

        document.getElementById("editBtn").addEventListener("click", (event)=> {
            let projectName = event.target.parentNode.dataset.projectName;
            let title = document.querySelector("#title").value;
            let date = document.querySelector("#date").value;
            let detail = document.querySelector("#detail").value;
            let important = document.querySelector("#impBtn").dataset.value;
            let project="default";

            (0,_additional__WEBPACK_IMPORTED_MODULE_5__.validateForm)(".form-field-validate");
            document.querySelector("#title").reportValidity();
            document.querySelector("#detail").reportValidity();
            if ([... document.querySelectorAll(".error")].length > 0) {
                document.querySelectorAll(".error")[0].focus();
                return;
            }
                                
            let task = (0,_task__WEBPACK_IMPORTED_MODULE_4__.createTask)(project, title, detail, important, date, "false");

           
            (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_7__.updateTaskById)(projectId, taskId, task);
            
            (0,_task__WEBPACK_IMPORTED_MODULE_4__.populateTasksOfProject)(projectId);
            document.querySelector(".outside-box").remove()
        })
}
}

/***/ }),

/***/ "./src/genericMainComponent.js":
/*!*************************************!*\
  !*** ./src/genericMainComponent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genericMain)
/* harmony export */ });
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./src/additional.js");
/* harmony import */ var _addTaskBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskBox */ "./src/addTaskBox.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");






function genericMain (project_name) {
    let content = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent;
    content.classList.add("main-content");

    let contentHeader = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    let headDiv = new _additional__WEBPACK_IMPORTED_MODULE_0__.heading1();

    headDiv.textContent = project_name;

    headDiv.id = "content-heading";

    contentHeader.appendChild(headDiv);
    contentHeader.classList.add("content-header");

    if (project_name == "All Tasks" || project_name == "Today" || project_name == "Next 7 Days" || project_name == "Important") {
        //do nothing
    } else {
        let addTaskBtn = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("button");

        addTaskBtn.classList.add("add-task-btn");
        addTaskBtn.textContent = "+ Add Task"

        contentHeader.appendChild(addTaskBtn);
    }
    content.appendChild(contentHeader);
    let taskBox = genericTasksDetailComponent(project_name);
    taskBox.id = "task-details";


    content.appendChild(taskBox);
    return content;

}

function genericTasksDetailComponent(project_name) {
    if (project_name == "All Tasks") {
        return (0,_displayController__WEBPACK_IMPORTED_MODULE_2__.populateAllTasksOfProject)()
    }

    let taskComponent = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();

    taskComponent.id = "task-details";
    taskComponent.classList.add("tasks-div");

    return taskComponent

}


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ headerTemplate)
/* harmony export */ });
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./src/additional.js");
/* harmony import */ var _static_svg_menu_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/svg/menu_list.svg */ "./src/static/svg/menu_list.svg");



function headerTemplate() {
    let header = document.createElement("header");

    let headerHeading = document.createElement("h1");
    headerHeading.textContent = "To-Do List1"
    headerHeading.classList.add("left-heading");


    let menuIcon = new _additional__WEBPACK_IMPORTED_MODULE_0__.svg(_static_svg_menu_list_svg__WEBPACK_IMPORTED_MODULE_1__);
    menuIcon.classList.add("menu-list-svg");

    let modeSwitch = (0,_additional__WEBPACK_IMPORTED_MODULE_0__.switchElement)();
    modeSwitch.classList.add("color-mode");
    modeSwitch.setAttribute("id", "mode-switch");

    header.appendChild(menuIcon);
    header.appendChild(headerHeading);
    header.appendChild(modeSwitch);

    return header;

};


/***/ }),

/***/ "./src/manageLocalStorage.js":
/*!***********************************!*\
  !*** ./src/manageLocalStorage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "deleteProjectItem": () => (/* binding */ deleteProjectItem),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "editKey": () => (/* binding */ editKey),
/* harmony export */   "fetchProjects": () => (/* binding */ fetchProjects),
/* harmony export */   "getAllTasks": () => (/* binding */ getAllTasks),
/* harmony export */   "getProjectIdByName": () => (/* binding */ getProjectIdByName),
/* harmony export */   "getProjectListObj": () => (/* binding */ getProjectListObj),
/* harmony export */   "getProjectNameById": () => (/* binding */ getProjectNameById),
/* harmony export */   "getTaskById": () => (/* binding */ getTaskById),
/* harmony export */   "setupProjectDict": () => (/* binding */ setupProjectDict),
/* harmony export */   "stringToObject": () => (/* binding */ stringToObject),
/* harmony export */   "toggleCompleted": () => (/* binding */ toggleCompleted),
/* harmony export */   "toggleImportant": () => (/* binding */ toggleImportant),
/* harmony export */   "updateTaskById": () => (/* binding */ updateTaskById)
/* harmony export */ });
// this code is to create and edit projects in local stroage



function setupProjectDict() {
    if (fetchProjects() == null) {
        localStorage.setItem("projects", "{}");
        localStorage.setItem("projectId", "0");
    }
}

function createProject(projectName) {
    if (checkIfProjectExist()) {
        let projectsObj = appendToProjectsDict(projectName)
        updateLocalStroageProjectDict(projectsObj)
        updateProjectId()

    } else {
        return 
    }

}

function getProjectNameById(projectId) {
    let projectObj = stringToObject(fetchProjects());

    return projectObj[projectId]["projectName"];
}

function getProjectId() {
   
    let projectId = Number(localStorage.getItem("projectId"));
    return projectId

}

function updateProjectId() {
   let projectIdNum =  Number(localStorage.getItem("projectId")) + 1;
   localStorage.setItem("projectId", `${projectIdNum}`);
}

function updateLocalStroageProjectDict(project_obj) {
    localStorage.setItem("projects", objToString(project_obj));

}

function checkIfProjectExist() {
    let projectsObj = stringToObject(fetchProjects());
    
    if (projectsObj[projectName] == undefined) {
        return true;
    } else {
        return false;
    }


}

function appendToProjectsDict(projectName) {
    let projectsObj = stringToObject(fetchProjects());
    let projectIdNum = getProjectId() + 1;

    projectsObj[projectIdNum] = {
        projectName : projectName, 
        taskId : 0,
        tasks : {}
    };

    return projectsObj;
}

function fetchProjects() {
    return localStorage.getItem("projects");
}

function getProjectIdByName(projectName) {
    let projectObj = stringToObject(fetchProjects());
    
    return projectObj[projectName]["projectId"];

}

function getProjectListObj() {
    return Object.keys(stringToObject(fetchProjects()));
}

function deleteProjectItem(itemName) {
    let projectsObj = stringToObject(fetchProjects());

    if (projectsObj[itemName] != undefined) {
        delete projectsObj[itemName];
        updateLocalStroageProjectDict(projectsObj);
    }
}

function editKey(projectId, newProjectName) {
    let projectObj = stringToObject(fetchProjects());

    (projectObj[projectId])["projectName"] = `${newProjectName}`;

    updateLocalStroageProjectDict(projectObj);
}

// code to append todos inside their respective projects

function getCurrentTaskId(projectId) {
    let projectsObj = stringToObject(fetchProjects());
    return (projectsObj[projectId])["taskId"];

}

function addTaskToProject(projectId, task) {
    let projectObj = stringToObject(fetchProjects());

    let taskId = getCurrentTaskId(projectId)

    let taskList = (projectObj[projectId])["tasks"]
    
    taskList[taskId] = task;

    updateLocalStroageProjectDict(projectObj);

    projectObj = updatetaskId(projectId);

    updateLocalStroageProjectDict(projectObj);

    return taskId
}

function updatetaskId(projectId) {
    let currentTaskId = getCurrentTaskId(projectId);
    let projectObj = stringToObject(fetchProjects());

    (projectObj[projectId])["taskId"] = currentTaskId + 1;

    return projectObj
}

function deleteTask(taskId, projectId) {
    let projectObj = stringToObject(fetchProjects());

    delete projectObj[projectId]["tasks"][taskId]

    updateLocalStroageProjectDict(projectObj)
}

function getTaskById(projectID, taskID) {
    let projectObj = stringToObject(fetchProjects());

    let project = projectObj[projectID];
    let task = project["tasks"][taskID];

    return task
}

function updateTaskById(projectID, taskID, task){
    let projectObj = stringToObject(fetchProjects());

    projectObj[projectID]["tasks"][taskID] = task;
    updateLocalStroageProjectDict(projectObj);
}

function toggleCompleted(projectID, taskID) {
    let projectObj = stringToObject(fetchProjects());
    if (projectObj[projectID]["tasks"][taskID]["completed"] == "false") {
        projectObj[projectID]["tasks"][taskID]["completed"] = "true";
    } else if (projectObj[projectID]["tasks"][taskID]["completed"] == "true") {
        projectObj[projectID]["tasks"][taskID]["completed"] = "false"
    }
    updateLocalStroageProjectDict(projectObj);
    return true
}
function toggleImportant(projectID, taskID) {
    let projectObj = stringToObject(fetchProjects());
    if (projectObj[projectID]["tasks"][taskID]["important"] == "false") {
        projectObj[projectID]["tasks"][taskID]["important"] = "true";
    } else if (projectObj[projectID]["tasks"][taskID]["important"] == "true") {
        projectObj[projectID]["tasks"][taskID]["important"] = "false"
    }
    updateLocalStroageProjectDict(projectObj);
    return true
}

function getAllTasks() {
    let taskList = [];
    let projectObj = stringToObject(fetchProjects());

    Object.keys(projectObj).forEach(project => {
        console.log(project)
        Object.keys(projectObj[project]["tasks"]).forEach(task => {
            taskList.push();
        })
    })

    return taskList;
}
// this code is to convert string to obj and obj to string

function objToString(value) {
    return JSON.stringify(value);
}

function stringToObject(value) {
    return JSON.parse(value);
}


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "default": () => (/* binding */ sidebarTemplate)
/* harmony export */ });
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./src/additional.js");
/* harmony import */ var _static_svg_house_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static/svg/house.svg */ "./src/static/svg/house.svg");
/* harmony import */ var _static_svg_all_task_svg_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/svg/all_task_svg.svg */ "./src/static/svg/all_task_svg.svg");
/* harmony import */ var _static_svg_today_svg_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/svg/today_svg.svg */ "./src/static/svg/today_svg.svg");
/* harmony import */ var _static_svg_next_7_days_svg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static/svg/next_7_days_svg.png */ "./src/static/svg/next_7_days_svg.png");
/* harmony import */ var _static_svg_important_svg_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./static/svg/important_svg.svg */ "./src/static/svg/important_svg.svg");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");










function sidebarTemplate () {
    let sidebar = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    let homeDiv = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    let projectDiv = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();

    let homeh1 = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h1");
    homeh1.textContent = "Home";
    homeDiv.classList.add("home");

    let homeHeadDiv = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    homeHeadDiv.classList.add("menu-item");

    let homeIcon = new _additional__WEBPACK_IMPORTED_MODULE_0__.svg(_static_svg_house_svg__WEBPACK_IMPORTED_MODULE_1__);
    homeIcon.classList.add("menu-list-svg-small");

    homeHeadDiv.appendChild(homeIcon);
    homeHeadDiv.appendChild(homeh1);


    let hr = document.createElement("hr");

    homeDiv.appendChild(homeHeadDiv);
    homeDiv.appendChild(hr);


    let homeAllTasks = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h3");
    let homeToday = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h3");
    let homeNext7 = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h3");
    let homeImp = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h3");

    let homeChildLabels = [
        homeAllTasks,
        homeToday,
        homeNext7,
        homeImp
    ];

    homeAllTasks.classList.add("all-task");
    homeToday.classList.add("today");
    homeNext7.classList.add("next-7");
    homeImp.classList.add("imp");

    homeAllTasks.classList.add("sidebar-home-tab");
    homeToday.classList.add("sidebar-home-tab");
    homeNext7.classList.add("sidebar-home-tab");
    homeImp.classList.add("sidebar-home-tab");

    homeAllTasks.textContent = "All Tasks";
    homeToday.textContent = "Today";
    homeNext7.textContent = "Next 7 Days";
    homeImp.textContent = "Important";
    
    homeAllTasks.dataset.value = "All Tasks";
    homeToday.dataset.value= "Today";
    homeNext7.dataset.value= "Next 7 Days";
    homeImp.dataset.value= "Important";

    let svgIcons = [
        _static_svg_all_task_svg_svg__WEBPACK_IMPORTED_MODULE_2__,
        _static_svg_today_svg_svg__WEBPACK_IMPORTED_MODULE_3__,
        _static_svg_next_7_days_svg_png__WEBPACK_IMPORTED_MODULE_4__,
        _static_svg_important_svg_svg__WEBPACK_IMPORTED_MODULE_5__,
    ];

    homeDiv = createListItemDiv(homeDiv, svgIcons, homeChildLabels);

    

    // homeDiv.appendChild(homeAllTasks)
    // homeDiv.appendChild(homeToday)
    // homeDiv.appendChild(homeNext7)
    // homeDiv.appendChild(homeImp)

    
    sidebar.appendChild(homeDiv);
    sidebar.classList.add("sidebar");


    let projectH1 = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h1");
    projectH1.textContent = "Projects";

    projectDiv.appendChild(projectH1);
    
    let hr1 = document.createElement("hr");

    projectDiv.appendChild(hr1);

    projectDiv.classList.add("project");

    let addNewBtn = addProjectBtn();
    projectDiv.appendChild(addNewBtn);



    sidebar.appendChild(projectDiv);
    

    return sidebar
};

function addProjectBtn() {
    let addNewBtn = document.createElement("button");
    addNewBtn.classList.add("addNewProject");
    addNewBtn.textContent = "+ Add Project"
    return addNewBtn;
}

function createListItemDiv(parent, svgList, listItem) {
    for(let i = 0; i < svgList.length; i ++) {
        const divItem = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
        divItem.classList.add("menu-item");

        let menuIcon = new _additional__WEBPACK_IMPORTED_MODULE_0__.svg(svgList[i]);
        menuIcon.classList.add("menu-list-svg-small");
        
        divItem.appendChild(menuIcon);
        divItem.appendChild(listItem[i]);
        
        parent.appendChild(divItem);

    };

    return parent;
};

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAndReplaceTaskComponent": () => (/* binding */ CreateAndReplaceTaskComponent),
/* harmony export */   "appendTask": () => (/* binding */ appendTask),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "createTaskComponent": () => (/* binding */ createTaskComponent),
/* harmony export */   "populateTasksOfProject": () => (/* binding */ populateTasksOfProject)
/* harmony export */ });
/* harmony import */ var _additional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./additional */ "./src/additional.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");
/* harmony import */ var _static_svg_3_dots_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./static/svg/3_dots.svg */ "./src/static/svg/3_dots.svg");








let task = ( project, title, detail, important, date, completed) => {

    return {
        
        project,
        title,
        detail,
        completed:completed,
        important: important,
        date:(date == "")?"":createDate(date)

    }

}

function createTask ( project = "default", title, detail, important, date, completed) {
    return task(project, title, detail, important, date, completed);
}

function appendTask(task, taskId, projectId) {
    
    let tasksDiv = document.getElementById("task-details");

    if (taskId) {
        let taskComponent = createTaskComponent(task, taskId, projectId)
        tasksDiv.appendChild(taskComponent);
    }
    
    (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.eventListeners)()
    
    
}
function populateTasksOfProject(projectId) {
    let projectObj = (0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_2__.stringToObject)((0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_2__.fetchProjects)());
    let projectTaskObj = projectObj[projectId]["tasks"]

    CreateAndReplaceTaskComponent(projectTaskObj, projectId)
}


function CreateAndReplaceTaskComponent(projectTaskObj, projectId)  {
    let taskListDiv = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();
    let projectTaskListOfKeys
    if (Array.isArray(projectTaskObj)) {
        projectTaskListOfKeys = projectTaskObj;
    } else  {
        projectTaskListOfKeys = Object.keys(projectTaskObj);
    }
    
    projectTaskListOfKeys.forEach(element => {
        let task = projectTaskObj[element];
        const taskComponent = createTaskComponent(task, element, projectId);
        taskListDiv.appendChild(taskComponent);
    });

    taskListDiv.id = "task-details";

    let parentNode = document.querySelector("#task-details").parentNode;
    let newItem = taskListDiv;
    let oldItem = document.querySelector("#task-details")

    ;(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.replaceDomElements)(parentNode, newItem, oldItem);
}



function createTaskComponent(task, taskIdNum, projectIdNum) {
    let taskComponent = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();

    taskComponent.dataset.taskId = taskIdNum
    taskComponent.classList.add("task");

    let radioBtn = (0,_additional__WEBPACK_IMPORTED_MODULE_0__.radioBtnDiv)();
    let taskTitle = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("h5");
    let taskDetail = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("p");
    let dueDate = new _additional__WEBPACK_IMPORTED_MODULE_0__.headComponent("p");
    let important = (0,_additional__WEBPACK_IMPORTED_MODULE_0__.StarBtnDiv)(task.important);

    let optionsBtn = new Image();
    optionsBtn.src = _static_svg_3_dots_svg__WEBPACK_IMPORTED_MODULE_3__;

    optionsBtn.classList.add("project-icon-small");
    optionsBtn.classList.add("svg-btn-cancel");

    let dropDownDivElement = (0,_additional__WEBPACK_IMPORTED_MODULE_0__.dropDownMenuDiv)(optionsBtn);

    radioBtn.textContent = task.completed == "true"?"✓":""
    taskTitle.textContent = task.title;
    taskDetail.textContent = task.detail;

    if (task.completed == "true") {
        taskComponent.classList.add("completed");
    }
    
    important.textContent = task.important == "true"?"⭐":"☆" 

    taskDetail.classList.add("detail");

    taskComponent.appendChild(radioBtn);
    taskComponent.appendChild(taskTitle);
    taskComponent.appendChild(taskDetail);

    if (task.date == "") {
        let noDueDateComponent = noDueDateDiv();
        taskComponent.appendChild(noDueDateComponent);
    } else {

        dueDate.textContent = createDate(task.date);
        taskComponent.appendChild(dueDate);
    }

    taskComponent.appendChild(important);
    taskComponent.appendChild(dropDownDivElement);
    taskComponent.dataset.ProjectId = projectIdNum;

    return taskComponent;
}

function noDueDateDiv() {
    let noDueDateComponent = new _additional__WEBPACK_IMPORTED_MODULE_0__.divComponent();

    noDueDateComponent.classList.add("no-due-date");

    noDueDateComponent.textContent = "No Due Date";

    return noDueDateComponent;
}

function createDate(dateDue) {
    
    return dateDue;
}

/***/ }),

/***/ "./src/static/svg/3_dots.svg":
/*!***********************************!*\
  !*** ./src/static/svg/3_dots.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c795f4c16c886a041cbb.svg";

/***/ }),

/***/ "./src/static/svg/all_task_svg.svg":
/*!*****************************************!*\
  !*** ./src/static/svg/all_task_svg.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1f51ff82d5905be2664b.svg";

/***/ }),

/***/ "./src/static/svg/cancel_svg.svg":
/*!***************************************!*\
  !*** ./src/static/svg/cancel_svg.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02ed2fbb588aefe980c5.svg";

/***/ }),

/***/ "./src/static/svg/enter_svg.svg":
/*!**************************************!*\
  !*** ./src/static/svg/enter_svg.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "444a55f78c6c9f4d624a.svg";

/***/ }),

/***/ "./src/static/svg/house.svg":
/*!**********************************!*\
  !*** ./src/static/svg/house.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca758397b5f275190d72.svg";

/***/ }),

/***/ "./src/static/svg/important_svg.svg":
/*!******************************************!*\
  !*** ./src/static/svg/important_svg.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7075933871271758cd45.svg";

/***/ }),

/***/ "./src/static/svg/menu_list.svg":
/*!**************************************!*\
  !*** ./src/static/svg/menu_list.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d725921bc7e06c1d5ccb.svg";

/***/ }),

/***/ "./src/static/svg/next_7_days_svg.png":
/*!********************************************!*\
  !*** ./src/static/svg/next_7_days_svg.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d4fec1e8a6c2bad538a.png";

/***/ }),

/***/ "./src/static/svg/pencil-square.svg":
/*!******************************************!*\
  !*** ./src/static/svg/pencil-square.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77a42955f6b73875be29.svg";

/***/ }),

/***/ "./src/static/svg/project-icon.svg":
/*!*****************************************!*\
  !*** ./src/static/svg/project-icon.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6704e8eeb8915c4a4ce4.svg";

/***/ }),

/***/ "./src/static/svg/today_svg.svg":
/*!**************************************!*\
  !*** ./src/static/svg/today_svg.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd7d54c1bf21b105ba23.svg";

/***/ }),

/***/ "./src/static/svg/trash-fill.svg":
/*!***************************************!*\
  !*** ./src/static/svg/trash-fill.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37f6c25c5a087231088c.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/displayController.js");
/* harmony import */ var _manageLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageLocalStorage */ "./src/manageLocalStorage.js");

console.log("working!!!!!!11")
;





let content = document.querySelector(".content");
content.dataset.count = 0

content = (0,_displayController__WEBPACK_IMPORTED_MODULE_1__.generateUi)(content, "All Tasks");

(0,_manageLocalStorage__WEBPACK_IMPORTED_MODULE_2__.setupProjectDict)()
;(0,_displayController__WEBPACK_IMPORTED_MODULE_1__.populateProjectsTab)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE9BQU8sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsUUFBUSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxTQUFTLFVBQVUsVUFBVSxPQUFPLFFBQVEsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsS0FBSyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFB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O1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYjtBQUNBLENBQXFCOztBQUVpRTtBQUM5Qjs7O0FBR3hEO0FBQ0E7O0FBRUEsVUFBVSw4REFBVTs7QUFFcEIscUVBQWdCO0FBQ2hCLHdFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC0vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS8uL3NyYy9hZGROZXdQcm9qZWN0Qm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9zcmMvYWRkVGFza0JveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtLy4vc3JjL2FkZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS8uL3NyYy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtLy4vc3JjL2dlbmVyaWNNYWluQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9zcmMvbWFuYWdlTG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0vLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC0vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XFxuXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDZmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IC0xMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcXG4gICAgcGFkZGluZy1yaWdodDogMSU7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93LWVuZDogNTtcXG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBtaW4td2lkdGg6IDEuNWZyO1xcblxcbn1cXG5cXG4uaG9tZSxcXG4ucHJvamVjdCB7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi5ob21lPi5tZW51LWl0ZW0+aDMsXFxuLnByb2plY3Q+LnByb2plY3QtbGlzdD4uZnVsbC10YWI+LnByb2plY3QtaXRlbS1wYXJ0LTI+aDMsXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMXZoO1xcblxcbn1cXG5cXG4ucHJvamVjdD4ucHJvamVjdC1saXN0Pi5mdWxsLXRhYj4ucHJvamVjdC1pdGVtLXBhcnQtMj5oMyxcXG4uc3ZnLWJ0bi1lZGl0IHtcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4ubWVudS1pdGVtPmgxIHtcXG4gICAgbWFyZ2luOiAxdmg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gICAgbWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG5ociB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xcbn1cXG5cXG4uYWRkTmV3UHJvamVjdCxcXG4uYWRkLXRhc2stYnRuLFxcbi5pbXBCdG4sXFxuLmNhbmNlbC1idG4sXFxuLmFkZC10YXNrLTItYnRuLFxcbi5hZGQtcHJvamVjdC0yLWJ0bixcXG4jZWRpdEJ0biB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXG59XFxuXFxuLmFkZC10YXNrLWJ0bixcXG4uY2FuY2VsLWJ0bixcXG4uYWRkLXRhc2stMi1idG4sXFxuLmFkZC1wcm9qZWN0LTItYnRuLFxcbiNlZGl0QnRuIHtcXG4gICAgd2lkdGg6IDEwdnc7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmNhbmNlbC1idG4sXFxuLmFkZC10YXNrLTItYnRuLFxcbi5hZGQtcHJvamVjdC0yLWJ0bixcXG4jZWRpdEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxdmggNHZ3O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG5cXG5pbnB1dCxcXG5sYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDV2aCA1dnc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDBkMDYzO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5vdXRzaWRlLWJveCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI2Nik7XFxufVxcblxcbi5hZGQtdGFzay1ib3gsXFxuLmFkZC1wcm9qZWN0LWJveCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDEwMDAwMDAwMDA7XFxuICAgIHRvcDogMzElO1xcbiAgICAvKiBib3R0b206IDE4JTsgKi9cXG4gICAgbGVmdDogMzElO1xcbiAgICByaWdodDogNTAlO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYm94PmgyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYm94PmlucHV0IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jZGV0YWlsIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDk5JTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbiN0aXRsZSB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrLWJveC1oZWFkZXI+aDEge1xcbiAgICBtYXJnaW46IDA7XFxuXFxufVxcblxcbi5pbXBCdG4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFxufVxcblxcbi50YXNrLWJveC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscz4qIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuXFxufVxcblxcbiN0YXNrLWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW4tdG9wOiAydmg7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlsIHtcXG4gICAgZmxleDogMjtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbi5yYWRpby1idG4sXFxuLmltcG9ydGFudC1zdGFyLFxcbi5zdGFyIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcXG4gICAgLyogaU9TIFNhZmFyaSAqL1xcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBTYWZhcmkgKi9cXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBLb25xdWVyb3IgSFRNTCAqL1xcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuXFxufVxcblxcbi5zdGFyIHtcXG4gICAgY29sb3I6IGdyZXk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDIwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5pbXBvcnRhbnQtc3RhciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLnN0YXItd2hpdGUge1xcbiAgICBmb250LXNpemU6IDI5MCU7XFxufVxcblxcbi5tZW51LWxpc3Qtc3ZnIHtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDM0cHg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBsZWZ0OiA0cHg7XFxuICAgIGJvdHRvbTogNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XFxuICAgIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG59XFxuXFxuaW5wdXQ6Zm9jdXMrLnNsaWRlciB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyOmJlZm9yZSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XFxufVxcblxcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xcbi5zbGlkZXIucm91bmQge1xcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm1lbnUtbGlzdC1zdmctc21hbGwge1xcbiAgICBoZWlnaHQ6IDN2aDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblxcbmlucHV0OmZvY3VzLFxcbnNlbGVjdDpmb2N1cyxcXG50ZXh0YXJlYTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZVxcbn1cXG5cXG5cXG4udmFsaWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4ucHJvamVjdC1saXN0IHtcXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmZ1bGwtdGFiLFxcbi5wcm9qZWN0LWl0ZW0tcGFydC0yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmZ1bGwtdGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnByb2plY3QtaWNvbnMge1xcbiAgICBnYXA6IDExcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxOXB4O1xcbn1cXG5cXG4ucHJvamVjdC1pdGVtLXBhcnQtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaWNvbi1zbWFsbCB7XFxuICAgIGhlaWdodDogNHZoO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uY29uZmlybWF0aW9uLWJveD5oMiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbi5lZGl0LWlucHV0IHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIG1hcmdpbjogMHB4IDAuNXZ3O1xcbn1cXG5cXG4uZHJvcGJ0biB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7ICovXFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcXG59ICovXFxuXFxuLmRyb3Bkb3duIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmRyb3Bkb3duIGE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5uby1kdWUtZGF0ZSB7XFxuICAgIHBhZGRpbmc6IDF2aCAxdnc7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4udGFzayA+IHAge1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbn1cXG5cXG5cXG4uY29tcGxldGVkIHtcXG4gICAgb3BhY2l0eTogMC43O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0NBQWdDOztJQUVoQyxxQ0FBcUM7O0lBRXJDLGlDQUFpQztJQUNqQyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZ0JBQWdCOztBQUVwQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7Ozs7Ozs7SUFPSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFF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Q2IsZUFBZTtJQUNmLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBOztHQUVHOztBQUVIO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQWxhdGEnLCBzYW5zLXNlcmlmO1xcblxcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xcblxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjVmciA2ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAtMTBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdy1lbmQ6IDU7XFxuICAgIHBhZGRpbmctbGVmdDogMnZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgbWluLXdpZHRoOiAxLjVmcjtcXG5cXG59XFxuXFxuLmhvbWUsXFxuLnByb2plY3Qge1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4uaG9tZT4ubWVudS1pdGVtPmgzLFxcbi5wcm9qZWN0Pi5wcm9qZWN0LWxpc3Q+LmZ1bGwtdGFiPi5wcm9qZWN0LWl0ZW0tcGFydC0yPmgzLFxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDF2aDtcXG5cXG59XFxuXFxuLnByb2plY3Q+LnByb2plY3QtbGlzdD4uZnVsbC10YWI+LnByb2plY3QtaXRlbS1wYXJ0LTI+aDMsXFxuLnN2Zy1idG4tZWRpdCB7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLm1lbnUtaXRlbT5oMSB7XFxuICAgIG1hcmdpbjogMXZoO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXG59XFxuXFxuaHIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuXFxuLmFkZE5ld1Byb2plY3QsXFxuLmFkZC10YXNrLWJ0bixcXG4uaW1wQnRuLFxcbi5jYW5jZWwtYnRuLFxcbi5hZGQtdGFzay0yLWJ0bixcXG4uYWRkLXByb2plY3QtMi1idG4sXFxuI2VkaXRCdG4ge1xcbiAgICBoZWlnaHQ6IDV2aDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxufVxcblxcbi5hZGQtdGFzay1idG4sXFxuLmNhbmNlbC1idG4sXFxuLmFkZC10YXNrLTItYnRuLFxcbi5hZGQtcHJvamVjdC0yLWJ0bixcXG4jZWRpdEJ0biB7XFxuICAgIHdpZHRoOiAxMHZ3O1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxufVxcblxcbi5jYW5jZWwtYnRuLFxcbi5hZGQtdGFzay0yLWJ0bixcXG4uYWRkLXByb2plY3QtMi1idG4sXFxuI2VkaXRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMXZoIDR2dztcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuXFxuaW5wdXQsXFxubGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG5cXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1dmggNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2QwZDA2MztcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4ub3V0c2lkZS1ib3gge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNjYpO1xcbn1cXG5cXG4uYWRkLXRhc2stYm94LFxcbi5hZGQtcHJvamVjdC1ib3gge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxMDAwMDAwMDAwO1xcbiAgICB0b3A6IDMxJTtcXG4gICAgLyogYm90dG9tOiAxOCU7ICovXFxuICAgIGxlZnQ6IDMxJTtcXG4gICAgcmlnaHQ6IDUwJTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJveD5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJveD5pbnB1dCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2RldGFpbCB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA5OSU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4jdGl0bGUge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4udGFzay1ib3gtaGVhZGVyPmgxIHtcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4uaW1wQnRuIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMjUlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcbn1cXG5cXG4udGFzay1ib3gtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiN0YXNrLWRldGFpbHM+KiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbn1cXG5cXG4jdGFzay1kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMnZoO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmRldGFpbCB7XFxuICAgIGZsZXg6IDI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4ucmFkaW8tYnRuLFxcbi5pbXBvcnRhbnQtc3RhcixcXG4uc3RhciB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XFxuICAgIC8qIGlPUyBTYWZhcmkgKi9cXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogS29ucXVlcm9yIEhUTUwgKi9cXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcblxcbn1cXG5cXG4uc3RhciB7XFxuICAgIGNvbG9yOiBncmV5O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgZm9udC1zaXplOiAyMDAlO1xcbiAgICBmb250LXdlaWdodDogMTAwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uaW1wb3J0YW50LXN0YXIge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5zdGFyLXdoaXRlIHtcXG4gICAgZm9udC1zaXplOiAyOTAlO1xcbn1cXG5cXG4ubWVudS1saXN0LXN2ZyB7XFxuICAgIGhlaWdodDogNXZoO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnN3aXRjaCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG59XFxuXFxuLnNsaWRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbi5zbGlkZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgbGVmdDogNHB4O1xcbiAgICBib3R0b206IDRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrLnNsaWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmZvY3VzKy5zbGlkZXIge1xcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrLnNsaWRlcjpiZWZvcmUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcbn1cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5tZW51LWxpc3Qtc3ZnLXNtYWxsIHtcXG4gICAgaGVpZ2h0OiAzdmg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyxcXG5zZWxlY3Q6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGVcXG59XFxuXFxuXFxuLnZhbGlkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnByb2plY3QtbGlzdCB7XFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5mdWxsLXRhYixcXG4ucHJvamVjdC1pdGVtLXBhcnQtMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbi5mdWxsLXRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5wcm9qZWN0LWljb25zIHtcXG4gICAgZ2FwOiAxMXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgKi9cXG4gICAgcGFkZGluZy1yaWdodDogMTlweDtcXG59XFxuXFxuLnByb2plY3QtaXRlbS1wYXJ0LTIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0LWljb24tc21hbGwge1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmNvbmZpcm1hdGlvbi1ib3g+aDIge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcbn1cXG5cXG4uZWRpdC1pbnB1dCB7XFxuICAgIGhlaWdodDogM3ZoO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBtYXJnaW46IDBweCAwLjV2dztcXG59XFxuXFxuLmRyb3BidG4ge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCOyAqL1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC5kcm9wYnRuOmhvdmVyLCAuZHJvcGJ0bjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XFxufSAqL1xcblxcbi5kcm9wZG93biB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5kcm9wZG93biBhOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubm8tZHVlLWRhdGUge1xcbiAgICBwYWRkaW5nOiAxdmggMXZ3O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLnRhc2sgPiBwIHtcXG4gICAgcGFkZGluZzogMXZoIDF2dztcXG59XFxuXFxuXFxuLmNvbXBsZXRlZCB7XFxuICAgIG9wYWNpdHk6IDAuNztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZGl2Q29tcG9uZW50LCBoZWFkQ29tcG9uZW50LCBoZWFkaW5nMSwgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIi4vYWRkaXRpb25hbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0Qm94KCkge1xuXG4gICAgbGV0IG91dHNpZGVCb3ggPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgb3V0c2lkZUJveC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ib3hcIik7XG5cbiAgICBsZXQgdGFza0JveCA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1ib3hcIik7XG5cbiAgICBsZXQgaGVhZGluZyA9IG5ldyBoZWFkQ29tcG9uZW50KFwiaDJcIik7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBOYW1lOlwiXG5cbiAgICBsZXQgaW5wdXQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0MS5pZCA9IFwicHJvamVjdE5hbWVcIjtcbiAgICBpbnB1dDEucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGlucHV0MS5jbGFzc0xpc3QuYWRkKGlucHV0MS5pZClcbiAgICBpbnB1dDEubWluTGVuZ3RoID0gMztcbiAgICBpbnB1dDEubWF4TGVuZ3RoID0gMjA7XG4gICAgaW5wdXQxLnJlcXVpcmVkID0gdHJ1ZTtcblxuXG4gICAgdGFza0JveC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGlucHV0MSk7XG5cbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBsZXQgYWRkdGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG4gICAgYWRkdGFza0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtMi1idG5cIik7XG5cbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGFkZHRhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGFkZHRhc2tCdG4pO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIG91dHNpZGVCb3guYXBwZW5kQ2hpbGQodGFza0JveCk7XG5cblxuICAgIHJldHVybiBvdXRzaWRlQm94O1xuICAgIFxufVxuIiwiaW1wb3J0IHsgZGl2Q29tcG9uZW50LCBoZWFkQ29tcG9uZW50LCBoZWFkaW5nMSwgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIi4vYWRkaXRpb25hbFwiO1xuaW1wb3J0IHsgZ2V0VGFza0J5SWQgfSBmcm9tIFwiLi9tYW5hZ2VMb2NhbFN0b3JhZ2VcIjtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFRhc2tCb3gocHJvamVjdE5hbWVWYWx1ZSkge1xuXG4gICAgbGV0IG91dHNpZGVCb3ggPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgb3V0c2lkZUJveC5jbGFzc0xpc3QuYWRkKFwib3V0c2lkZS1ib3hcIik7XG5cbiAgICBsZXQgdGFza0JveCA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICB0YXNrQm94LmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1ib3hcIik7XG4gICAgdGFza0JveC5kYXRhc2V0LnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVWYWx1ZTtcblxuICAgIGxldCBmaWVsZHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgaWQ6IFwidGl0bGVcIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG4gICAgICAgICAgICBtaW5MZW5ndGg6IDMsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IDMwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJkZXRhaWxcIixcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgaWQ6IFwiZGV0YWlsXCIsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJEZXRhaWwuLi5cIixcbiAgICAgICAgICAgIG1pbkxlbmd0aDogMyxcbiAgICAgICAgICAgIG1heExlbmd0aDogMzUwLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlXG4gICAgICAgIH0sICBcbiAgICBdO1xuXG4gICAgbGV0IGRpdjEgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgbGV0IGRpdjIgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgbGV0IGRpdjMgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG5cbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBgJHtmaWVsZHNbMF0ubmFtZX1gO1xuICAgIGxhYmVsLmZvciA9IGZpZWxkc1swXS5uYW1lO1xuICAgIGxldCBpbnB1dDAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQwLmlkID0gZmllbGRzWzBdLmlkO1xuICAgIGlucHV0MC5jbGFzc0xpc3QuYWRkKGZpZWxkc1swXS5pZCk7XG4gICAgaW5wdXQwLnBsYWNlaG9sZGVyID0gZmllbGRzWzBdLnBsYWNlaG9sZGVyO1xuICAgIGlucHV0MC5taW5MZW5ndGggPSBmaWVsZHNbMF0ubWluTGVuZ3RoO1xuICAgIGlucHV0MC5tYXhMZW5ndGggPSBmaWVsZHNbMF0ubWF4TGVuZ3RoO1xuICAgIGlucHV0MC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpXG5cbiAgICBsZXQgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsMS50ZXh0Q29udGVudCA9IGAke2ZpZWxkc1sxXS5uYW1lfWA7XG4gICAgbGFiZWwxLmZvciA9IGZpZWxkc1sxXS5uYW1lO1xuICAgIGxldCBpbnB1dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgaW5wdXQxLmlkID0gZmllbGRzWzFdLmlkO1xuICAgIGlucHV0MS5wbGFjZWhvbGRlciA9IGZpZWxkc1sxXS5wbGFjZWhvbGRlcjtcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZChmaWVsZHNbMV0uaWQpXG4gICAgaW5wdXQxLm1pbkxlbmd0aCA9IGZpZWxkc1sxXS5taW5MZW5ndGg7XG4gICAgaW5wdXQxLm1heExlbmd0aCA9IGZpZWxkc1sxXS5tYXhMZW5ndGg7XG4gICAgaW5wdXQxLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcblxuXG4gICAgbGV0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBsYWJlbDIudGV4dENvbnRlbnQgPSBgRGF0ZWA7XG4gICAgbGFiZWwyLmZvciA9IFwiZGF0ZVwiO1xuICAgIGxldCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXQyLmNsYXNzTGlzdC5hZGQobGFiZWwyLmZvcik7XG4gICAgaW5wdXQyLmlkID0gXCJkYXRlXCI7XG4gICAgaW5wdXQyLnR5cGUgPSBcImRhdGVcIjtcblxuICAgIC8vZGl2MS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGl2MS5hcHBlbmRDaGlsZChpbnB1dDApO1xuICAgIC8vZGl2Mi5hcHBlbmRDaGlsZChsYWJlbDEpO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQoaW5wdXQxKTtcbiAgICAvL2RpdjMuYXBwZW5kQ2hpbGQobGFiZWwyKTtcbiAgICBkaXYzLmFwcGVuZENoaWxkKGlucHV0Mik7XG5cbiAgICBsZXQgaGVhZCA9IG5ldyBoZWFkaW5nMSgpO1xuICAgIGhlYWQudGV4dENvbnRlbnQgPSBcIlRhc2tcIjtcblxuICAgIGxldCBpbXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGltcEJ0bi50ZXh0Q29udGVudCA9IFwi4piGXCJcbiAgICBpbXBCdG4uY2xhc3NMaXN0LmFkZChcInN0YXItd2hpdGVcIik7XG4gICAgaW1wQnRuLmNsYXNzTGlzdC5hZGQoXCJzdGFyXCIpXG4gICAgaW1wQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1wQnRuXCIpO1xuICAgIGltcEJ0bi5kYXRhc2V0LnZhbHVlID0gXCJmYWxzZVwiO1xuXG4gICAgbGV0IHRhc2tCb3hIZWFkZXIgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG5cbiAgICBpbXBCdG4uY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGQtdmFsaWRhdGVcIik7XG4gICAgaW5wdXQwLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWZpZWxkLXZhbGlkYXRlXCIpO1xuICAgIGlucHV0Mi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZC12YWxpZGF0ZVwiKTtcbiAgICBpbnB1dDEuY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGQtdmFsaWRhdGVcIik7XG5cbiAgICBpbXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICB2YWxpZGF0ZUZvcm0oYC4ke2ltcEJ0bi5jbGFzc0xpc3RbMF19YCk7XG4gICAgfSk7XG4gICAgaW5wdXQwLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgICAgdmFsaWRhdGVGb3JtKGAuJHtpbnB1dDAuY2xhc3NMaXN0WzBdfWApO1xuICAgIH0pO1xuICAgIGlucHV0Mi5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgIHZhbGlkYXRlRm9ybShgLiR7aW5wdXQyLmNsYXNzTGlzdFswXX1gKTtcbiAgICB9KTtcbiAgICBpbnB1dDEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgICB2YWxpZGF0ZUZvcm0oYC4ke2lucHV0MS5jbGFzc0xpc3RbMF19YCk7XG4gICAgfSk7XG5cbiAgICB0YXNrQm94SGVhZGVyLmFwcGVuZENoaWxkKGhlYWQpO1xuICAgIHRhc2tCb3hIZWFkZXIuYXBwZW5kQ2hpbGQoaW1wQnRuKTtcbiAgICB0YXNrQm94SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJveC1oZWFkZXJcIik7XG5cbiAgICBcblxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQodGFza0JveEhlYWRlcik7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZChpbnB1dDApO1xuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoaW5wdXQyKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGlucHV0MSk7XG5cbiAgICBcbiAgIFxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGxldCBhZGR0YXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWJ0blwiKTtcbiAgICBhZGR0YXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay0yLWJ0blwiKTtcblxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgYWRkdGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoYWRkdGFza0J0bik7XG4gICAgdGFza0JveC5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgb3V0c2lkZUJveC5hcHBlbmRDaGlsZCh0YXNrQm94KTtcbiAgICBcbiAgICByZXR1cm4gb3V0c2lkZUJveDtcbiAgICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrQm94KHByb2plY3RJRCwgdGFza0lEKSB7XG4gICAgbGV0IHRhc2tCb3ggPSBhZGRUYXNrQm94KCk7XG4gICAgbGV0IHRhc2sgPSBnZXRUYXNrQnlJZChwcm9qZWN0SUQsIHRhc2tJRCk7XG5cbiAgICBpZiAodGFza0JveC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5kYXRhc2V0LnZhbHVlID09IHRydWUpIHtcbiAgICAgICAgdGFza0JveC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS50ZXh0Q29udGVudCA9IFwi4q2QXCI7XG4gICAgICAgIHRhc2tCb3gucXVlcnlTZWxlY3RvcihcIiNpbXBCdG5cIikucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gICAgICAgIHRhc2tCb3gucXVlcnlTZWxlY3RvcihcIiNpbXBCdG5cIikuY2xhc3NMaXN0LmFkZChcInN0YXJcIik7XG4gICAgICAgIHRhc2tCb3gucXVlcnlTZWxlY3RvcihcIiNpbXBCdG5cIikuY2xhc3NMaXN0LmFkZChcImZvcm0tZmllbGQtdmFsaWRhdGVcIik7XG4gICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tCb3gucXVlcnlTZWxlY3RvcihcIiNpbXBCdG5cIikudGV4dENvbnRlbnQgPSBcIuKYhlwiO1xuICAgICAgICB0YXNrQm94LnF1ZXJ5U2VsZWN0b3IoXCIjaW1wQnRuXCIpLnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpO1xuICAgICAgICB0YXNrQm94LnF1ZXJ5U2VsZWN0b3IoXCIjaW1wQnRuXCIpLmNsYXNzTGlzdC5hZGQoXCJzdGFyXCIpOyBcbiAgICAgICAgdGFza0JveC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5jbGFzc0xpc3QuYWRkKFwic3Rhci13aGl0ZVwiKTtcbiAgICAgICAgdGFza0JveC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5jbGFzc0xpc3QuYWRkKFwiZm9ybS1maWVsZC12YWxpZGF0ZVwiKTtcbiAgICB9XG4gICAgdGFza0JveC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICB0YXNrQm94LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZSA9IHRhc2suZGF0ZTtcbiAgICB0YXNrQm94LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsXCIpLnZhbHVlID0gdGFzay5kZXRhaWw7XG5cbiAgICB0YXNrQm94LmlkID0gXCJlZGl0LWJveFwiO1xuICAgIHRhc2tCb3guZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0SUQ7XG4gICAgdGFza0JveC5kYXRhc2V0LnRhc2tJZCA9IHRhc2tJRFxuXG4gICAgbGV0IGVkaXRCdG4gPSB0YXNrQm94LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stMi1idG5cIilcbiAgICBlZGl0QnRuLmlkID0gXCJlZGl0QnRuXCI7XG4gICAgZWRpdEJ0bi5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcblxuXG4gICAgcmV0dXJuIHRhc2tCb3g7XG59IiwiaW1wb3J0IHsgcGVyZm9ybUFjdGlvbiB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZVRhc2tzT2ZQcm9qZWN0IH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY2xhc3MgZGl2Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAgKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBoZWFkQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoaGVhZCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChoZWFkKTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIGhlYWRpbmcxIGV4dGVuZHMgaGVhZENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmFkaW9CdG5EaXYoKSB7XG4gICAgbGV0IHJhZGlvQnRuID0gbmV3IGRpdkNvbXBvbmVudCgpO1xuICAgIHJhZGlvQnRuLmNsYXNzTGlzdC5hZGQoXCJyYWRpby1idG5cIik7XG4gICAgcmV0dXJuIHJhZGlvQnRuXG4gICAgXG59XG5leHBvcnQgZnVuY3Rpb24gU3RhckJ0bkRpdihpbXBvcnRhbnQpIHtcbiAgICBsZXQgc3RhckJ0biA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBjb25zb2xlLmxvZyhpbXBvcnRhbnQpO1xuICAgIGltcG9ydGFudCA9PSBcInRydWVcIj9cIlwiOnN0YXJCdG4uY2xhc3NMaXN0LmFkZChcInN0YXItd2hpdGVcIik7XG4gICAgc3RhckJ0bi5jbGFzc0xpc3QuYWRkKFwic3RhclwiKTtcbiAgICAgXG4gICAgcmV0dXJuIHN0YXJCdG4gXG59XG5cbmV4cG9ydCBjbGFzcyBzdmcge1xuICAgIGNvbnN0cnVjdG9yIChzcmMsIGlkPSBudWxsKSB7XG4gICAgICAgIHRoaXMuc3ZnID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvYmplY3RcIik7XG5cbiAgICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlL3N2Zyt4bWxcIik7XG4gICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgc3JjKTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN2ZztcbiAgICAgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3dpdGNoRWxlbWVudCgpIHtcbiAgICBsZXQgc3dpdGNoRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxldCBzd2l0Y2hFbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBsZXQgc3dpdGNoZWxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgc3dpdGNoRWxlLmNsYXNzTGlzdC5hZGQoXCJzd2l0Y2hcIik7XG4gICAgc3dpdGNoRWxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gICAgc3dpdGNoRWxlSW5wdXQuY2hlY2tlZCA9IHRydWU7XG5cbiAgICBzd2l0Y2hlbGVTcGFuLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG4gICAgc3dpdGNoZWxlU3Bhbi5jbGFzc0xpc3QuYWRkKFwicm91bmRcIilcblxuICAgIHN3aXRjaEVsZS5hcHBlbmRDaGlsZChzd2l0Y2hFbGVJbnB1dCk7XG4gICAgc3dpdGNoRWxlLmFwcGVuZENoaWxkKHN3aXRjaGVsZVNwYW4pO1xuXG4gICAgcmV0dXJuIHN3aXRjaEVsZTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm1JZCl7XG4gICAgbGV0IGZpZWxkTGlzdCA9IFsuLi4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChmb3JtSWQpXTtcblxuICAgIGxldCB2YWx1ZU9iamVjdHMgPSB7fTtcblxuICAgIGZpZWxkTGlzdC5ldmVyeShmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZC50YWdOYW1lICE9IFwiRElWXCIpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGlmICgoZmllbGQudmFsdWUpLmxlbmd0aCA9PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoYHRoaXMgZmllbGQgY2FuJ3QgYmUgZW1wdHlgKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLm1pbkxlbmd0aCAhPSBcIi0xXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZmllbGQudmFsdWUpLmxlbmd0aCA8IGZpZWxkLm1pbkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KGBUb28gc2hvcnQhIGxlbmd0aCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuICR7ZmllbGQubWluTGVuZ3RofWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5tYXhMZW5ndGggIT0gXCItMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGZpZWxkLnZhbHVlKS5sZW5ndGggPiBmaWVsZC5tYXhMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5zZXRDdXN0b21WYWxpZGl0eShgVG9vIExvbmchIGxlbmd0aCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuICR7ZmllbGQubWF4TGVuZ3RofWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gZWxzZSB7IHJldHVybiB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsdWVPYmplY3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJvcERvd25NZW51RGl2KGRyb3BidG5FbGVtZW50KSB7XG4gICAgbGV0IGRyb3BEb3duRGl2ID0gbmV3IGRpdkNvbXBvbmVudCgpO1xuICAgIGRyb3BEb3duRGl2LmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93blwiKTtcblxuICAgIGRyb3BidG5FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkcm9wYnRuXCIpO1xuXG4gICAgbGV0IGRyb3BEb3duT3B0aW9uc0RpdiA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBkcm9wRG93bk9wdGlvbnNEaXYuaWQgPSBcIm15RHJvcGRvd25cIjtcbiAgICBkcm9wRG93bk9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcImRyb3Bkb3duLWNvbnRlbnRcIik7XG5cbiAgICBsZXQgZHJvcERvd25PcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZHJvcERvd25PcHRpb24xLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZHJvcERvd25PcHRpb24xLmNsYXNzTGlzdC5hZGQoXCJkcm9wLWRvd24tZWxlXCIpO1xuICAgIGRyb3BEb3duT3B0aW9uMS5pZCA9IFwiZWRpdFwiO1xuXG4gICAgbGV0IGRyb3BEb3duT3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRyb3BEb3duT3B0aW9uMi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZHJvcERvd25PcHRpb24yLmNsYXNzTGlzdC5hZGQoXCJkcm9wLWRvd24tZWxlXCIpO1xuICAgIGRyb3BEb3duT3B0aW9uMi5pZCA9IFwiZGVsZXRlXCI7XG5cbiAgICBkcm9wRG93bk9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd25PcHRpb24xKTtcbiAgICBkcm9wRG93bk9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd25PcHRpb24yKTtcblxuICAgIGRyb3BEb3duRGl2LmFwcGVuZENoaWxkKGRyb3BidG5FbGVtZW50KTtcbiAgICBkcm9wRG93bkRpdi5hcHBlbmRDaGlsZChkcm9wRG93bk9wdGlvbnNEaXYpO1xuXG5cbiAgICBkcm9wRG93bkRpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+IHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubGFzdENoaWxkLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICAgICAgICBsZXQgZHJvcERvd25PcHRpb25zID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQubGFzdENoaWxkLmNoaWxkTm9kZXM7XG4gICAgICAgIGRyb3BEb3duT3B0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRUYXNrSWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNrSWQgO1xuICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBldmVudC50YXJnZXQuaWQ7XG4gICAgICAgICAgICAgICAgcGVyZm9ybUFjdGlvbihzZWxlY3RlZFRhc2tJZCwgYWN0aW9uKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3RJZCA9IGdldEN1cnJlbnRQcm9qZWN0SWQoZXZlbnQudGFyZ2V0KVxuICAgICAgICAgICAgICAgIHBvcHVsYXRlVGFza3NPZlByb2plY3QoY3VycmVudFByb2plY3RJZClcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfSlcbiAgICBcbiAgICBcblxuICAgIHJldHVybiBkcm9wRG93bkRpdlxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3RJZChzZWxlY3RlZERpdikge1xuICAgIHJldHVybiBzZWxlY3RlZERpdi5wYXJlbnRFbGVtZW50LmRhdGFzZXQuUHJvamVjdElkIDtcbiAgICBcbn0iLCJpbXBvcnQgaGVhZGVyVGVtcGxhdGUgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgc2lkZWJhclRlbXBsYXRlLCB7IGFkZFByb2plY3RCdG4gfSBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgZ2VuZXJpY01haW4gZnJvbSBcIi4vZ2VuZXJpY01haW5Db21wb25lbnRcIjtcblxuaW1wb3J0IGFkZFRhc2tCb3gsIHsgZWRpdFRhc2tCb3ggfSBmcm9tIFwiLi9hZGRUYXNrQm94XCI7XG5pbXBvcnQgeyBhcHBlbmRUYXNrLCBDcmVhdGVBbmRSZXBsYWNlVGFza0NvbXBvbmVudCwgY3JlYXRlVGFzaywgY3JlYXRlVGFza0NvbXBvbmVudCwgcG9wdWxhdGVUYXNrc09mUHJvamVjdCB9IGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7IGRpdkNvbXBvbmVudCwgZ2V0Q3VycmVudFByb2plY3RJZCwgaGVhZENvbXBvbmVudCwgaGVhZGluZzEsIHN2ZywgdmFsaWRhdGVGb3JtIH0gZnJvbSBcIi4vYWRkaXRpb25hbFwiO1xuaW1wb3J0IGFkZE5ld1Byb2plY3RCb3ggZnJvbSBcIi4vYWRkTmV3UHJvamVjdEJveFwiO1xuaW1wb3J0IHsgYWRkVGFza1RvUHJvamVjdCwgYXBwZW5kVG9Qcm9qZWN0c0RpY3QsIGNyZWF0ZVByb2plY3QsIGRlbGV0ZVByb2plY3RJdGVtLCBkZWxldGVUYXNrLCBlZGl0S2V5LCBmZXRjaFByb2plY3RzLCBnZXRBbGxUYXNrcywgZ2V0UHJvamVjdElkQnlOYW1lLCBnZXRQcm9qZWN0TGlzdE9iaiwgZ2V0UHJvamVjdE5hbWVCeUlkLCBzdHJpbmdUb09iamVjdCwgdG9nZ2xlQ29tcGxldGVkLCB0b2dnbGVJbXBvcnRhbnQsIHVwZGF0ZVRhc2tCeUlkIH0gZnJvbSBcIi4vbWFuYWdlTG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgcHJvamVjdF9pY29uICBmcm9tICcuL3N0YXRpYy9zdmcvcHJvamVjdC1pY29uLnN2Zyc7XG5pbXBvcnQgZGVsZXRlX3N2ZyBmcm9tICcuL3N0YXRpYy9zdmcvdHJhc2gtZmlsbC5zdmcnO1xuaW1wb3J0IGVkaXRfc3ZnIGZyb20gJy4vc3RhdGljL3N2Zy9wZW5jaWwtc3F1YXJlLnN2Zyc7IFxuaW1wb3J0IGVudGVyX3N2ZyBmcm9tICcuL3N0YXRpYy9zdmcvZW50ZXJfc3ZnLnN2Zyc7IFxuaW1wb3J0IGNhbmNlbF9zdmcgZnJvbSAnLi9zdGF0aWMvc3ZnL2NhbmNlbF9zdmcuc3ZnJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQWxsVGFza3NPZlByb2plY3QoKSB7XG4gICAgbGV0IHByb2plY3RPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuXG4gICAgLy8gbGV0IHRhc2tDb21wb25lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKVxuXG4gICAgbGV0IHRhc2tDb21wb25lbnQgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG5cbiAgICB0YXNrQ29tcG9uZW50LmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcbiAgICB0YXNrQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1kaXZcIik7XG4gICAgdHJ5IHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvamVjdE9iaikuZm9yRWFjaChwcm9qZWN0SWQgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvamVjdE9ialtwcm9qZWN0SWRdW1widGFza3NcIl0pLmZvckVhY2godGFza0lkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHByb2plY3RPYmpbcHJvamVjdElkXVtcInRhc2tzXCJdW3Rhc2tJZF07XG4gICAgXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tCb3ggPSBjcmVhdGVUYXNrQ29tcG9uZW50KHRhc2ssIHRhc2tJZCwgcHJvamVjdElkKTtcbiAgICAgICAgICAgICAgICB0YXNrQ29tcG9uZW50LmFwcGVuZENoaWxkKHRhc2tCb3gpXG4gICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgICByZXR1cm4gdGFza0NvbXBvbmVudDtcbiAgICB9XG4gICAgXG5cbiAgICByZXR1cm4gdGFza0NvbXBvbmVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVWkocGFyZW50LCB0YWJfbmFtZSkge1xuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRlclRlbXBsYXRlKCkpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChzaWRlYmFyVGVtcGxhdGUoKSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGdlbmVyaWNNYWluKHRhYl9uYW1lKSk7XG5cblxuICAgIGV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICByZXR1cm4gcGFyZW50O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb250ZW50QmFyKHRhYl9uYW1lLCBwcm9qZWN0SWROdW0pIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGxldCBtYWluX2NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKVxuXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluX2NvbnRlbnQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJpY01haW4odGFiX25hbWUpKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1oZWFkaW5nXCIpLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdElkTnVtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy5kcm9wYnRuJykpIHtcbiAgICAgICAgICAgIHZhciBkcm9wZG93bnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZHJvcGRvd24tY29udGVudFwiKTtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRyb3Bkb3ducy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBvcGVuRHJvcGRvd24gPSBkcm9wZG93bnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgICAgICAgICAgICBvcGVuRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyYWRpby1idG5cIikpIHtcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZEJ0biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGxldCB0YXNrSUQgPSBzZWxlY3RlZEJ0bi5wYXJlbnRFbGVtZW50LmRhdGFzZXQudGFza0lkIFxuICAgICAgICAgICAgbGV0IHByb2plY3RJRCA9IGdldEFjdGl2ZVByb2plY3RJZCgpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdElEID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RJRCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuUHJvamVjdElkO1xuICAgICAgICAgICAgICAgIHRvZ2dsZUNvbXBsZXRlZChwcm9qZWN0SUQsIHRhc2tJRClcbiAgICAgICAgICAgICAgICBsZXQgdGFiTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1oZWFkaW5nXCIpIFxuICAgICAgICAgICAgICAgIGlmICh0YWJOYW1lLnRleHRDb250ZW50ID09IFwiQWxsIFRhc2tzXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0NvbXBvbmVudCA9IHBvcHVsYXRlQWxsVGFza3NPZlByb2plY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZURvbUVsZW1lbnRzKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluLWNvbnRlbnRcIiksIHRhc2tDb21wb25lbnQsIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrcy1kaXZcIikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2dnbGVDb21wbGV0ZWQocHJvamVjdElELCB0YXNrSUQpKSB7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVUYXNrc09mUHJvamVjdChwcm9qZWN0SUQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RhclwiKSkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQnRuID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgbGV0IHRhc2tJRCA9IHNlbGVjdGVkQnRuLnBhcmVudEVsZW1lbnQuZGF0YXNldC50YXNrSWQgXG4gICAgICAgICAgICBsZXQgcHJvamVjdElEID0gZ2V0QWN0aXZlUHJvamVjdElkKCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9qZWN0SUQgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdElEID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5Qcm9qZWN0SWQ7XG4gICAgICAgICAgICAgICAgdG9nZ2xlSW1wb3J0YW50KHByb2plY3RJRCwgdGFza0lEKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFiTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1oZWFkaW5nXCIpIFxuICAgICAgICAgICAgICAgIGlmICh0YWJOYW1lLnRleHRDb250ZW50ID09IFwiQWxsIFRhc2tzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tDb21wb25lbnQgPSBwb3B1bGF0ZUFsbFRhc2tzT2ZQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2VEb21FbGVtZW50cyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbi1jb250ZW50XCIpLCB0YXNrQ29tcG9uZW50LCBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFza3MtZGl2XCIpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodG9nZ2xlSW1wb3J0YW50KHByb2plY3RJRCwgdGFza0lEKSkge1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVGFza3NPZlByb2plY3QocHJvamVjdElEKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNsaWRlclwiKSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBhbGVydChcInNvbWVvbmUgY2xpY2tlZCBtZSBhbmQgaSBkaWRudCBsaWtlIGl0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1ob21lLXRhYlwiKSkge1xuICAgICAgICAgICAgdXBkYXRlQ29udGVudEJhcihldmVudC50YXJnZXQuZGF0YXNldC52YWx1ZSwgZXZlbnQudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuZGF0YXNldC50eXBlID09IFwicHJvamVjdFwiKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVRhc2tzT2ZQcm9qZWN0KGV2ZW50LnRhcmdldC5kYXRhc2V0LnByb2plY3RJZClcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0JveCA9IGFkZFRhc2tCb3gocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXNrQm94KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0c2lkZS1ib3hcIikucmVtb3ZlKCkgXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbXBCdG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltcEJ0bi5kYXRhc2V0LnZhbHVlID09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcEJ0bi5kYXRhc2V0LnZhbHVlID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBCdG4udGV4dENvbnRlbnQgPSBcIuKYhlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBCdG4uZGF0YXNldC52YWx1ZSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBCdG4udGV4dENvbnRlbnQgPSBcIuKtkFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInN0YXItd2hpdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLTItYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IGRhdGUucmVwbGFjZSgvLS9nLCBcIi9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRldGFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsXCIpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5kYXRhc2V0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0PVwiZGVmYXVsdFwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlRm9ybShcIi5mb3JtLWZpZWxkLXZhbGlkYXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbFwiKS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXJyb3JcIildLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lcnJvclwiKVswXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKCBwcm9qZWN0LCB0aXRsZSwgZGV0YWlsLCBpbXBvcnRhbnQsIGRhdGUsIFwiZmFsc2VcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3RJZCA9IGdldEN1cnJlbnRQcm9qZWN0SWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFza0lkID0gYWRkVGFza1RvUHJvamVjdChjdXJyZW50UHJvamVjdElkLCB0YXNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRhc2sodGFzaywgdGFza0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0c2lkZS1ib3hcIikucmVtb3ZlKClcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFsbC10YXNrXCIpICYmICFldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2lkZWJhci1wcm9qZWN0LXRhYlwiKSApIHtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZUFsbFRhc2tzT2ZQcm9qZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IFxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZE5ld1Byb2plY3RcIikpIHtcbiAgICAgICAgICAgIGxldCBhZGROZXdQcm9qZWN0ID0gYWRkTmV3UHJvamVjdEJveCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZGROZXdQcm9qZWN0KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0c2lkZS1ib3hcIikucmVtb3ZlKCkgXG4gICAgICAgICAgICB9KTsgXG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtMi1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdE5hbWVGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KVxuXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3JtKFwiI3Byb2plY3ROYW1lXCIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdE5hbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge3ZhbGlkYXRlRm9ybShcIiNwcm9qZWN0TmFtZVwiKTt9KSBcbiAgICAgICAgICAgICAgICBpZiAoWy4uLiBwcm9qZWN0TmFtZUZpZWxkLmNsYXNzTGlzdF0uaW5jbHVkZXMoXCJlcnJvclwiKSl7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lRmllbGQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHNpZGUtYm94XCIpLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBvcHVsYXRlUHJvamVjdHNUYWIoKSk7XG4gICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlUHJvamVjdHNUYWIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlUHJvamVjdHNUYWIoKXtcbiAgICBsZXQgcHJvamVjdExpc3REaXYgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgcHJvamVjdExpc3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbGlzdFwiKTtcblxuICAgIGxldCBwcm9qZWN0TGlzdCA9IGdldFByb2plY3RMaXN0T2JqKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSArKykge1xuICAgICAgICBsZXQgcHJvamVjdEl0ZW1EaXYgPSBuZXcgZGl2Q29tcG9uZW50KClcbiAgICAgICAgcHJvamVjdEl0ZW1EaXYuY2xhc3NMaXN0LmFkZChcImZ1bGwtdGFiXCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHByb2plY3RJdGVtRGl2UGFydDEgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG5cbiAgICAgICAgbGV0IG1lbnVJY29uID0gbmV3IHN2Zyhwcm9qZWN0X2ljb24pO1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uLXNtYWxsXCIpO1xuXG4gICAgICAgIC8vIHByb2plY3RJdGVtRGl2UGFydDEuYXBwZW5kQ2hpbGQobWVudUljb24pO1xuXG4gICAgICAgIGxldCBwcm9qZWN0SXRlbURpdlBhcnQyID0gbmV3IGRpdkNvbXBvbmVudCgpO1xuXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBuZXcgaGVhZENvbXBvbmVudChcImgzXCIpO1xuICAgICAgICBwcm9qZWN0SXRlbS50ZXh0Q29udGVudCA9IGdldFByb2plY3ROYW1lQnlJZChwcm9qZWN0TGlzdFtpXSk7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJhbGwtdGFza1wiKTtcbiAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaG9tZS10YWJcIik7XG4gICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXByb2plY3QtdGFiXCIpO1xuICAgICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RMaXN0W2ldO1xuICAgICAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LnZhbHVlID0gZ2V0UHJvamVjdE5hbWVCeUlkKHByb2plY3RMaXN0W2ldKTtcbiAgICAgICAgcHJvamVjdEl0ZW0uZGF0YXNldC50eXBlID0gXCJwcm9qZWN0XCI7XG4gICAgICAgIHByb2plY3RJdGVtRGl2UGFydDIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuXG4gICAgICAgIGxldCBlZGl0U3ZnID0gbmV3IEltYWdlO1xuXG4gICAgICAgIGVkaXRTdmcuc3JjID0gZWRpdF9zdmc7XG4gICAgICAgIFxuICAgICAgICBlZGl0U3ZnLmRhdGFzZXQua2V5SUQgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgZWRpdFN2Zy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uLXNtYWxsXCIpO1xuICAgICAgICBlZGl0U3ZnLmNsYXNzTGlzdC5hZGQoXCJzdmctYnRuLWVkaXRcIik7XG4gICAgICAgIGVkaXRTdmcuc3R5bGUgPSBcImN1cnNvcjogcG9pbnRlcjtcIjtcblxuXG4gICAgICAgIGVkaXRTdmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBkaXZUb0JlUmVwbGFjZWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICBsZXQgb2xkS2V5ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5SUQ7XG5cbiAgICAgICAgICAgIGxldCBlZGl0SW5wdXQgPSBlZGl0Qm94KG9sZEtleSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0SW5wdXQpO1xuXG4gICAgICAgICAgICBkaXZUb0JlUmVwbGFjZWQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZWRpdElucHV0LCBkaXZUb0JlUmVwbGFjZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cblxuICAgICAgICBsZXQgZGVsZXRlU3ZnID0gbmV3IEltYWdlO1xuICAgICAgICBcbiAgICAgICAgZGVsZXRlU3ZnLmRhdGFzZXQua2V5SUQgPSBwcm9qZWN0TGlzdFtpXTtcbiAgICAgICAgZGVsZXRlU3ZnLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb24tc21hbGxcIik7XG4gICAgICAgIGRlbGV0ZVN2Zy5jbGFzc0xpc3QuYWRkKFwic3ZnLWJ0bi1kZWxldGVcIik7XG5cbiAgICAgICAgZGVsZXRlU3ZnLnNyYyA9IGRlbGV0ZV9zdmc7XG5cbiAgICAgICAgZGVsZXRlU3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgbGV0IGNvbmZpcm1hdGlvbkJveCA9IGFyZVlvdVN1cmVCb3goZXZlbnQudGFyZ2V0LmRhdGFzZXQua2V5SUQpXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbmZpcm1hdGlvbkJveCk7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29uZmlybWF0aW9uQm94KVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBwcm9qZWN0SXRlbURpdlBhcnQyXzIgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgICAgIHByb2plY3RJdGVtRGl2UGFydDJfMi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uc1wiKTtcblxuICAgICAgICBwcm9qZWN0SXRlbURpdlBhcnQyXzIuYXBwZW5kQ2hpbGQoZWRpdFN2Zyk7XG4gICAgICAgIHByb2plY3RJdGVtRGl2UGFydDJfMi5hcHBlbmRDaGlsZChkZWxldGVTdmcpO1xuXG4gICAgICAgIHByb2plY3RJdGVtRGl2UGFydDIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgICAgICBwcm9qZWN0SXRlbURpdlBhcnQyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGl2UGFydDJfMik7XG4gICAgICAgIHByb2plY3RJdGVtRGl2UGFydDIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbS1wYXJ0LTJcIilcblxuICAgICAgICBwcm9qZWN0SXRlbURpdi5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgICAgIHByb2plY3RJdGVtRGl2LmFwcGVuZENoaWxkKHByb2plY3RJdGVtRGl2UGFydDIpO1xuXG5cbiAgICAgICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW1EaXYpO1xuICAgIH1cbiAgICBsZXQgcHJvamVjdFNpZGVCYXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RcIik7XG4gICAgcHJvamVjdFNpZGVCYXJEaXYucmVtb3ZlQ2hpbGQocHJvamVjdFNpZGVCYXJEaXYubGFzdENoaWxkKVxuXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0XCIpIT0gbnVsbCkge1xuICAgICAgICBwcm9qZWN0U2lkZUJhckRpdi5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdFwiKSk7XG4gICAgfVxuICAgIFxuICAgIHByb2plY3RTaWRlQmFyRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RGl2KTtcbiAgICBwcm9qZWN0U2lkZUJhckRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKCkpO1xuICAgIGV2ZW50TGlzdGVuZXJzKCk7XG59XG5cblxuZnVuY3Rpb24gYXJlWW91U3VyZUJveChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBvdXRzaWRlQm94ID0gbmV3IGRpdkNvbXBvbmVudCgpO1xuICAgIG91dHNpZGVCb3guY2xhc3NMaXN0LmFkZChcIm91dHNpZGUtYm94XCIpO1xuXG4gICAgbGV0IHRhc2tCb3ggPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgdGFza0JveC5jbGFzc0xpc3QuYWRkKFwiYWRkLXRhc2stYm94XCIpO1xuICAgIHRhc2tCb3guY2xhc3NMaXN0LmFkZChcImNvbmZpcm1hdGlvbi1ib3hcIik7XG5cbiAgICBsZXQgc3VyZUJveEhlYWRpbmcgPSBuZXcgaGVhZENvbXBvbmVudChcImgyXCIpO1xuXG4gICAgc3VyZUJveEhlYWRpbmcudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiR7Z2V0UHJvamVjdE5hbWVCeUlkKHByb2plY3ROYW1lKX1cIj8gVGhpcyBhY3Rpb24gY2FuJ3QgYmUgcmV2ZXJzZWQuYFxuXG4gICAgdGFza0JveC5hcHBlbmRDaGlsZChzdXJlQm94SGVhZGluZyk7XG4gICAgXG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbGV0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICB5ZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICBkZWxldGVQcm9qZWN0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0c2lkZS1ib3hcIikucmVtb3ZlKClcbiAgICAgICAgcG9wdWxhdGVQcm9qZWN0c1RhYigpO1xuXG4gICAgfSlcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHNpZGUtYm94XCIpLnJlbW92ZSgpO1xuICAgIH0pXG4gICAgXG5cbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImNhbmNlbC1idG5cIik7XG4gICAgeWVzQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay0yLWJ0blwiKTtcblxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZZXNcIjtcblxuICAgIHRhc2tCb3guYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgICB0YXNrQm94LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBvdXRzaWRlQm94LmFwcGVuZENoaWxkKHRhc2tCb3gpO1xuXG5cbiAgICByZXR1cm4gb3V0c2lkZUJveDtcbn1cblxuZnVuY3Rpb24gZWRpdEJveChvbGRLZXkpIHtcbiAgICBsZXQgZWRpdERpdiA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBlZGl0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW0tcGFydC0yXCIpO1xuXG4gICAgbGV0IGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGVkaXRJbnB1dC5wbGFjZWhvbGRlciA9IGdldFByb2plY3ROYW1lQnlJZChvbGRLZXkpO1xuICAgIGVkaXRJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1ob21lLXRhYlwiKTtcbiAgICBlZGl0SW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXQtaW5wdXRcIik7XG4gICAgZWRpdElucHV0Lm1heExlbmd0aCA9IDIwO1xuICAgIGVkaXRJbnB1dC5taW5MZW5ndGggPSAzO1xuXG4gICAgbGV0IGVudGVyU3ZnID0gbmV3IEltYWdlKCk7XG4gICAgZW50ZXJTdmcuc3JjID0gZW50ZXJfc3ZnO1xuICAgIGVudGVyU3ZnLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb24tc21hbGxcIik7XG4gICAgZW50ZXJTdmcuY2xhc3NMaXN0LmFkZChcInN2Zy1idG4tZW50ZXJcIik7XG5cbiAgICBsZXQgY2FuY2VsU3ZnID0gbmV3IEltYWdlKCk7XG4gICAgY2FuY2VsU3ZnLnNyYyA9IGNhbmNlbF9zdmc7XG4gICAgY2FuY2VsU3ZnLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWljb24tc21hbGxcIik7XG4gICAgY2FuY2VsU3ZnLmNsYXNzTGlzdC5hZGQoXCJzdmctYnRuLWNhbmNlbFwiKTtcblxuICAgIGVudGVyU3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT57XG4gICAgICAgIGxldCBuZXdQcm9qZWN0TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC52YWx1ZTtcbiAgICAgICAgaWYgKG5ld1Byb2plY3ROYW1lLmxlbmd0aCA+PTMgJiYgbmV3UHJvamVjdE5hbWUubGVuZ3RoIDw9IDIwKSB7XG4gICAgICAgICAgICBlZGl0S2V5KG9sZEtleSwgbmV3UHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgcG9wdWxhdGVQcm9qZWN0c1RhYigpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1oZWFkaW5nXCIpLmRhdGFzZXQucHJvamVjdElkID09IG9sZEtleSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNvbnRlbnRCYXIobmV3UHJvamVjdE5hbWUsIG9sZEtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY2FuY2VsU3ZnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICBwb3B1bGF0ZVByb2plY3RzVGFiKCk7XG4gICAgfSlcbiAgICBsZXQgc3ZnRGl2ID0gbmV3IGRpdkNvbXBvbmVudCgpO1xuICAgIHN2Z0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uc1wiKTtcblxuICAgIHN2Z0Rpdi5hcHBlbmRDaGlsZChlbnRlclN2Zyk7XG4gICAgc3ZnRGl2LmFwcGVuZENoaWxkKGNhbmNlbFN2Zyk7XG5cbiAgICBlZGl0RGl2LmFwcGVuZENoaWxkKGVkaXRJbnB1dCk7XG4gICAgZWRpdERpdi5hcHBlbmRDaGlsZChzdmdEaXYpO1xuXG4gICAgcmV0dXJuIGVkaXREaXY7XG5cbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRG9tRWxlbWVudHMocGFyZW50LCBuZXdJdGVtLCBvbGRJdGVtKSB7XG4gICAgaWYgKG9sZEl0ZW0gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikge1xuICAgICAgb2xkSXRlbSA9IG9sZEl0ZW1bMF07XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudFswXTtcbiAgICAgIH1cbiAgICBcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKG5ld0l0ZW0sIG9sZEl0ZW0pO1xuICB9XG4gIFxuXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0SWQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudC1oZWFkaW5nXCIpLmRhdGFzZXQucHJvamVjdElkXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJmb3JtQWN0aW9uKHRhc2tJZCwgYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PSBcImRlbGV0ZVwiKSB7XG4gICAgICAgIGxldCBwcm9qZWN0SWQgPSBnZXRBY3RpdmVQcm9qZWN0SWQoKTtcbiAgICAgICAgZGVsZXRlVGFzayh0YXNrSWQsIHByb2plY3RJZCk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT0gXCJlZGl0XCIpIHtcbiAgICAgICAgbGV0IHByb2plY3RJZCA9IGdldEFjdGl2ZVByb2plY3RJZCgpO1xuICAgIFxuICAgICAgICBsZXQgZWRpdFRhc2tCb3hNb2RhbCA9IGVkaXRUYXNrQm94KHByb2plY3RJZCwgdGFza0lkKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRUYXNrQm94TW9kYWwpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0c2lkZS1ib3hcIikucmVtb3ZlKCkgXG4gICAgICAgIH0pOyBcbiAgICAgICAgbGV0IGltcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1wQnRuXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaW1wQnRuLmRhdGFzZXQudmFsdWUgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICBpbXBCdG4uZGF0YXNldC52YWx1ZSA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgICAgICBpbXBCdG4udGV4dENvbnRlbnQgPSBcIuKYhlwiO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBCdG4uZGF0YXNldC52YWx1ZSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgIGltcEJ0bi50ZXh0Q29udGVudCA9IFwi4q2QXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltcEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwic3Rhci13aGl0ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5wcm9qZWN0TmFtZTtcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBkZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbFwiKS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpbXBvcnRhbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltcEJ0blwiKS5kYXRhc2V0LnZhbHVlO1xuICAgICAgICAgICAgbGV0IHByb2plY3Q9XCJkZWZhdWx0XCI7XG5cbiAgICAgICAgICAgIHZhbGlkYXRlRm9ybShcIi5mb3JtLWZpZWxkLXZhbGlkYXRlXCIpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWxcIikucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgIGlmIChbLi4uIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXJyb3JcIildLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVycm9yXCIpWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCB0YXNrID0gY3JlYXRlVGFzayhwcm9qZWN0LCB0aXRsZSwgZGV0YWlsLCBpbXBvcnRhbnQsIGRhdGUsIFwiZmFsc2VcIik7XG5cbiAgICAgICAgICAgXG4gICAgICAgICAgICB1cGRhdGVUYXNrQnlJZChwcm9qZWN0SWQsIHRhc2tJZCwgdGFzayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBvcHVsYXRlVGFza3NPZlByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0c2lkZS1ib3hcIikucmVtb3ZlKClcbiAgICAgICAgfSlcbn1cbn0iLCJpbXBvcnQge2RpdkNvbXBvbmVudCwgaGVhZENvbXBvbmVudCwgcmFkaW9CdG5EaXYsIFN0YXJCdG5EaXYsIGhlYWRpbmcxfSBmcm9tIFwiLi9hZGRpdGlvbmFsXCI7XG5pbXBvcnQgYWRkVGFza0JveCBmcm9tIFwiLi9hZGRUYXNrQm94XCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUFsbFRhc2tzT2ZQcm9qZWN0IH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGFwcGVuZFRhc2ssIGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJpY01haW4gKHByb2plY3RfbmFtZSkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IGRpdkNvbXBvbmVudDtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgICBsZXQgY29udGVudEhlYWRlciA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBsZXQgaGVhZERpdiA9IG5ldyBoZWFkaW5nMSgpO1xuXG4gICAgaGVhZERpdi50ZXh0Q29udGVudCA9IHByb2plY3RfbmFtZTtcblxuICAgIGhlYWREaXYuaWQgPSBcImNvbnRlbnQtaGVhZGluZ1wiO1xuXG4gICAgY29udGVudEhlYWRlci5hcHBlbmRDaGlsZChoZWFkRGl2KTtcbiAgICBjb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcblxuICAgIGlmIChwcm9qZWN0X25hbWUgPT0gXCJBbGwgVGFza3NcIiB8fCBwcm9qZWN0X25hbWUgPT0gXCJUb2RheVwiIHx8IHByb2plY3RfbmFtZSA9PSBcIk5leHQgNyBEYXlzXCIgfHwgcHJvamVjdF9uYW1lID09IFwiSW1wb3J0YW50XCIpIHtcbiAgICAgICAgLy9kbyBub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFkZFRhc2tCdG4gPSBuZXcgaGVhZENvbXBvbmVudChcImJ1dHRvblwiKTtcblxuICAgICAgICBhZGRUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtdGFzay1idG5cIik7XG4gICAgICAgIGFkZFRhc2tCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFRhc2tcIlxuXG4gICAgICAgIGNvbnRlbnRIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudEhlYWRlcik7XG4gICAgbGV0IHRhc2tCb3ggPSBnZW5lcmljVGFza3NEZXRhaWxDb21wb25lbnQocHJvamVjdF9uYW1lKTtcbiAgICB0YXNrQm94LmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcblxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQm94KTtcbiAgICByZXR1cm4gY29udGVudDtcblxufVxuXG5mdW5jdGlvbiBnZW5lcmljVGFza3NEZXRhaWxDb21wb25lbnQocHJvamVjdF9uYW1lKSB7XG4gICAgaWYgKHByb2plY3RfbmFtZSA9PSBcIkFsbCBUYXNrc1wiKSB7XG4gICAgICAgIHJldHVybiBwb3B1bGF0ZUFsbFRhc2tzT2ZQcm9qZWN0KClcbiAgICB9XG5cbiAgICBsZXQgdGFza0NvbXBvbmVudCA9IG5ldyBkaXZDb21wb25lbnQoKTtcblxuICAgIHRhc2tDb21wb25lbnQuaWQgPSBcInRhc2stZGV0YWlsc1wiO1xuICAgIHRhc2tDb21wb25lbnQuY2xhc3NMaXN0LmFkZChcInRhc2tzLWRpdlwiKTtcblxuICAgIHJldHVybiB0YXNrQ29tcG9uZW50XG5cbn1cbiIsImltcG9ydCB7IHN2Zywgc3dpdGNoRWxlbWVudCB9IGZyb20gXCIuL2FkZGl0aW9uYWxcIjtcbmltcG9ydCBtZW51X2xpc3QgIGZyb20gJy4vc3RhdGljL3N2Zy9tZW51X2xpc3Quc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyVGVtcGxhdGUoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgaGVhZGVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0MVwiXG4gICAgaGVhZGVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwibGVmdC1oZWFkaW5nXCIpO1xuXG5cbiAgICBsZXQgbWVudUljb24gPSBuZXcgc3ZnKG1lbnVfbGlzdCk7XG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdC1zdmdcIik7XG5cbiAgICBsZXQgbW9kZVN3aXRjaCA9IHN3aXRjaEVsZW1lbnQoKTtcbiAgICBtb2RlU3dpdGNoLmNsYXNzTGlzdC5hZGQoXCJjb2xvci1tb2RlXCIpO1xuICAgIG1vZGVTd2l0Y2guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RlLXN3aXRjaFwiKTtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51SWNvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckhlYWRpbmcpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtb2RlU3dpdGNoKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG5cbn07XG4iLCIvLyB0aGlzIGNvZGUgaXMgdG8gY3JlYXRlIGFuZCBlZGl0IHByb2plY3RzIGluIGxvY2FsIHN0cm9hZ2VcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFByb2plY3REaWN0KCkge1xuICAgIGlmIChmZXRjaFByb2plY3RzKCkgPT0gbnVsbCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIFwie31cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdElkXCIsIFwiMFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKGNoZWNrSWZQcm9qZWN0RXhpc3QoKSkge1xuICAgICAgICBsZXQgcHJvamVjdHNPYmogPSBhcHBlbmRUb1Byb2plY3RzRGljdChwcm9qZWN0TmFtZSlcbiAgICAgICAgdXBkYXRlTG9jYWxTdHJvYWdlUHJvamVjdERpY3QocHJvamVjdHNPYmopXG4gICAgICAgIHVwZGF0ZVByb2plY3RJZCgpXG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0TmFtZUJ5SWQocHJvamVjdElkKSB7XG4gICAgbGV0IHByb2plY3RPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuXG4gICAgcmV0dXJuIHByb2plY3RPYmpbcHJvamVjdElkXVtcInByb2plY3ROYW1lXCJdO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0SWQoKSB7XG4gICBcbiAgICBsZXQgcHJvamVjdElkID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdElkXCIpKTtcbiAgICByZXR1cm4gcHJvamVjdElkXG5cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdElkKCkge1xuICAgbGV0IHByb2plY3RJZE51bSA9ICBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0SWRcIikpICsgMTtcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdElkXCIsIGAke3Byb2plY3RJZE51bX1gKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlTG9jYWxTdHJvYWdlUHJvamVjdERpY3QocHJvamVjdF9vYmopIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIG9ialRvU3RyaW5nKHByb2plY3Rfb2JqKSk7XG5cbn1cblxuZnVuY3Rpb24gY2hlY2tJZlByb2plY3RFeGlzdCgpIHtcbiAgICBsZXQgcHJvamVjdHNPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuICAgIFxuICAgIGlmIChwcm9qZWN0c09ialtwcm9qZWN0TmFtZV0gPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxufVxuXG5mdW5jdGlvbiBhcHBlbmRUb1Byb2plY3RzRGljdChwcm9qZWN0TmFtZSkge1xuICAgIGxldCBwcm9qZWN0c09iaiA9IHN0cmluZ1RvT2JqZWN0KGZldGNoUHJvamVjdHMoKSk7XG4gICAgbGV0IHByb2plY3RJZE51bSA9IGdldFByb2plY3RJZCgpICsgMTtcblxuICAgIHByb2plY3RzT2JqW3Byb2plY3RJZE51bV0gPSB7XG4gICAgICAgIHByb2plY3ROYW1lIDogcHJvamVjdE5hbWUsIFxuICAgICAgICB0YXNrSWQgOiAwLFxuICAgICAgICB0YXNrcyA6IHt9XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9qZWN0c09iajtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoUHJvamVjdHMoKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0SWRCeU5hbWUocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgcHJvamVjdE9iaiA9IHN0cmluZ1RvT2JqZWN0KGZldGNoUHJvamVjdHMoKSk7XG4gICAgXG4gICAgcmV0dXJuIHByb2plY3RPYmpbcHJvamVjdE5hbWVdW1wicHJvamVjdElkXCJdO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0TGlzdE9iaigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RyaW5nVG9PYmplY3QoZmV0Y2hQcm9qZWN0cygpKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0SXRlbShpdGVtTmFtZSkge1xuICAgIGxldCBwcm9qZWN0c09iaiA9IHN0cmluZ1RvT2JqZWN0KGZldGNoUHJvamVjdHMoKSk7XG5cbiAgICBpZiAocHJvamVjdHNPYmpbaXRlbU5hbWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWxldGUgcHJvamVjdHNPYmpbaXRlbU5hbWVdO1xuICAgICAgICB1cGRhdGVMb2NhbFN0cm9hZ2VQcm9qZWN0RGljdChwcm9qZWN0c09iaik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdEtleShwcm9qZWN0SWQsIG5ld1Byb2plY3ROYW1lKSB7XG4gICAgbGV0IHByb2plY3RPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuXG4gICAgKHByb2plY3RPYmpbcHJvamVjdElkXSlbXCJwcm9qZWN0TmFtZVwiXSA9IGAke25ld1Byb2plY3ROYW1lfWA7XG5cbiAgICB1cGRhdGVMb2NhbFN0cm9hZ2VQcm9qZWN0RGljdChwcm9qZWN0T2JqKTtcbn1cblxuLy8gY29kZSB0byBhcHBlbmQgdG9kb3MgaW5zaWRlIHRoZWlyIHJlc3BlY3RpdmUgcHJvamVjdHNcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2tJZChwcm9qZWN0SWQpIHtcbiAgICBsZXQgcHJvamVjdHNPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuICAgIHJldHVybiAocHJvamVjdHNPYmpbcHJvamVjdElkXSlbXCJ0YXNrSWRcIl07XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrKSB7XG4gICAgbGV0IHByb2plY3RPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuXG4gICAgbGV0IHRhc2tJZCA9IGdldEN1cnJlbnRUYXNrSWQocHJvamVjdElkKVxuXG4gICAgbGV0IHRhc2tMaXN0ID0gKHByb2plY3RPYmpbcHJvamVjdElkXSlbXCJ0YXNrc1wiXVxuICAgIFxuICAgIHRhc2tMaXN0W3Rhc2tJZF0gPSB0YXNrO1xuXG4gICAgdXBkYXRlTG9jYWxTdHJvYWdlUHJvamVjdERpY3QocHJvamVjdE9iaik7XG5cbiAgICBwcm9qZWN0T2JqID0gdXBkYXRldGFza0lkKHByb2plY3RJZCk7XG5cbiAgICB1cGRhdGVMb2NhbFN0cm9hZ2VQcm9qZWN0RGljdChwcm9qZWN0T2JqKTtcblxuICAgIHJldHVybiB0YXNrSWRcbn1cblxuZnVuY3Rpb24gdXBkYXRldGFza0lkKHByb2plY3RJZCkge1xuICAgIGxldCBjdXJyZW50VGFza0lkID0gZ2V0Q3VycmVudFRhc2tJZChwcm9qZWN0SWQpO1xuICAgIGxldCBwcm9qZWN0T2JqID0gc3RyaW5nVG9PYmplY3QoZmV0Y2hQcm9qZWN0cygpKTtcblxuICAgIChwcm9qZWN0T2JqW3Byb2plY3RJZF0pW1widGFza0lkXCJdID0gY3VycmVudFRhc2tJZCArIDE7XG5cbiAgICByZXR1cm4gcHJvamVjdE9ialxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrSWQsIHByb2plY3RJZCkge1xuICAgIGxldCBwcm9qZWN0T2JqID0gc3RyaW5nVG9PYmplY3QoZmV0Y2hQcm9qZWN0cygpKTtcblxuICAgIGRlbGV0ZSBwcm9qZWN0T2JqW3Byb2plY3RJZF1bXCJ0YXNrc1wiXVt0YXNrSWRdXG5cbiAgICB1cGRhdGVMb2NhbFN0cm9hZ2VQcm9qZWN0RGljdChwcm9qZWN0T2JqKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0J5SWQocHJvamVjdElELCB0YXNrSUQpIHtcbiAgICBsZXQgcHJvamVjdE9iaiA9IHN0cmluZ1RvT2JqZWN0KGZldGNoUHJvamVjdHMoKSk7XG5cbiAgICBsZXQgcHJvamVjdCA9IHByb2plY3RPYmpbcHJvamVjdElEXTtcbiAgICBsZXQgdGFzayA9IHByb2plY3RbXCJ0YXNrc1wiXVt0YXNrSURdO1xuXG4gICAgcmV0dXJuIHRhc2tcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tCeUlkKHByb2plY3RJRCwgdGFza0lELCB0YXNrKXtcbiAgICBsZXQgcHJvamVjdE9iaiA9IHN0cmluZ1RvT2JqZWN0KGZldGNoUHJvamVjdHMoKSk7XG5cbiAgICBwcm9qZWN0T2JqW3Byb2plY3RJRF1bXCJ0YXNrc1wiXVt0YXNrSURdID0gdGFzaztcbiAgICB1cGRhdGVMb2NhbFN0cm9hZ2VQcm9qZWN0RGljdChwcm9qZWN0T2JqKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbXBsZXRlZChwcm9qZWN0SUQsIHRhc2tJRCkge1xuICAgIGxldCBwcm9qZWN0T2JqID0gc3RyaW5nVG9PYmplY3QoZmV0Y2hQcm9qZWN0cygpKTtcbiAgICBpZiAocHJvamVjdE9ialtwcm9qZWN0SURdW1widGFza3NcIl1bdGFza0lEXVtcImNvbXBsZXRlZFwiXSA9PSBcImZhbHNlXCIpIHtcbiAgICAgICAgcHJvamVjdE9ialtwcm9qZWN0SURdW1widGFza3NcIl1bdGFza0lEXVtcImNvbXBsZXRlZFwiXSA9IFwidHJ1ZVwiO1xuICAgIH0gZWxzZSBpZiAocHJvamVjdE9ialtwcm9qZWN0SURdW1widGFza3NcIl1bdGFza0lEXVtcImNvbXBsZXRlZFwiXSA9PSBcInRydWVcIikge1xuICAgICAgICBwcm9qZWN0T2JqW3Byb2plY3RJRF1bXCJ0YXNrc1wiXVt0YXNrSURdW1wiY29tcGxldGVkXCJdID0gXCJmYWxzZVwiXG4gICAgfVxuICAgIHVwZGF0ZUxvY2FsU3Ryb2FnZVByb2plY3REaWN0KHByb2plY3RPYmopO1xuICAgIHJldHVybiB0cnVlXG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlSW1wb3J0YW50KHByb2plY3RJRCwgdGFza0lEKSB7XG4gICAgbGV0IHByb2plY3RPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuICAgIGlmIChwcm9qZWN0T2JqW3Byb2plY3RJRF1bXCJ0YXNrc1wiXVt0YXNrSURdW1wiaW1wb3J0YW50XCJdID09IFwiZmFsc2VcIikge1xuICAgICAgICBwcm9qZWN0T2JqW3Byb2plY3RJRF1bXCJ0YXNrc1wiXVt0YXNrSURdW1wiaW1wb3J0YW50XCJdID0gXCJ0cnVlXCI7XG4gICAgfSBlbHNlIGlmIChwcm9qZWN0T2JqW3Byb2plY3RJRF1bXCJ0YXNrc1wiXVt0YXNrSURdW1wiaW1wb3J0YW50XCJdID09IFwidHJ1ZVwiKSB7XG4gICAgICAgIHByb2plY3RPYmpbcHJvamVjdElEXVtcInRhc2tzXCJdW3Rhc2tJRF1bXCJpbXBvcnRhbnRcIl0gPSBcImZhbHNlXCJcbiAgICB9XG4gICAgdXBkYXRlTG9jYWxTdHJvYWdlUHJvamVjdERpY3QocHJvamVjdE9iaik7XG4gICAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICAgIGxldCB0YXNrTGlzdCA9IFtdO1xuICAgIGxldCBwcm9qZWN0T2JqID0gc3RyaW5nVG9PYmplY3QoZmV0Y2hQcm9qZWN0cygpKTtcblxuICAgIE9iamVjdC5rZXlzKHByb2plY3RPYmopLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QpXG4gICAgICAgIE9iamVjdC5rZXlzKHByb2plY3RPYmpbcHJvamVjdF1bXCJ0YXNrc1wiXSkuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIHRhc2tMaXN0LnB1c2goKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRhc2tMaXN0O1xufVxuLy8gdGhpcyBjb2RlIGlzIHRvIGNvbnZlcnQgc3RyaW5nIHRvIG9iaiBhbmQgb2JqIHRvIHN0cmluZ1xuXG5mdW5jdGlvbiBvYmpUb1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHZhbHVlKTtcbn1cbiIsImltcG9ydCB7ZGl2Q29tcG9uZW50LCBoZWFkQ29tcG9uZW50LCBzdmd9IGZyb20gXCIuL2FkZGl0aW9uYWxcIjtcbmltcG9ydCBob3VzZSAgZnJvbSAnLi9zdGF0aWMvc3ZnL2hvdXNlLnN2Zyc7XG5cbmltcG9ydCBhbGxfdGFza19zdmcgIGZyb20gJy4vc3RhdGljL3N2Zy9hbGxfdGFza19zdmcuc3ZnJztcbmltcG9ydCB0b2RheV9zdmcgIGZyb20gJy4vc3RhdGljL3N2Zy90b2RheV9zdmcuc3ZnJztcbmltcG9ydCBuZXh0XzdfZGF5c19zdmcgIGZyb20gJy4vc3RhdGljL3N2Zy9uZXh0XzdfZGF5c19zdmcucG5nJztcbmltcG9ydCBpbXBvcnRhbnRfc3ZnICBmcm9tICcuL3N0YXRpYy9zdmcvaW1wb3J0YW50X3N2Zy5zdmcnO1xuaW1wb3J0IHsgcG9wdWxhdGVQcm9qZWN0c1RhYiB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lkZWJhclRlbXBsYXRlICgpIHtcbiAgICBsZXQgc2lkZWJhciA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBsZXQgaG9tZURpdiA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBsZXQgcHJvamVjdERpdiA9IG5ldyBkaXZDb21wb25lbnQoKTtcblxuICAgIGxldCBob21laDEgPSBuZXcgaGVhZENvbXBvbmVudChcImgxXCIpO1xuICAgIGhvbWVoMS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgICBsZXQgaG9tZUhlYWREaXYgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgaG9tZUhlYWREaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgIGxldCBob21lSWNvbiA9IG5ldyBzdmcoaG91c2UpO1xuICAgIGhvbWVJY29uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWxpc3Qtc3ZnLXNtYWxsXCIpO1xuXG4gICAgaG9tZUhlYWREaXYuYXBwZW5kQ2hpbGQoaG9tZUljb24pO1xuICAgIGhvbWVIZWFkRGl2LmFwcGVuZENoaWxkKGhvbWVoMSk7XG5cblxuICAgIGxldCBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoclwiKTtcblxuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZUhlYWREaXYpO1xuICAgIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaHIpO1xuXG5cbiAgICBsZXQgaG9tZUFsbFRhc2tzID0gbmV3IGhlYWRDb21wb25lbnQoXCJoM1wiKTtcbiAgICBsZXQgaG9tZVRvZGF5ID0gbmV3IGhlYWRDb21wb25lbnQoXCJoM1wiKTtcbiAgICBsZXQgaG9tZU5leHQ3ID0gbmV3IGhlYWRDb21wb25lbnQoXCJoM1wiKTtcbiAgICBsZXQgaG9tZUltcCA9IG5ldyBoZWFkQ29tcG9uZW50KFwiaDNcIik7XG5cbiAgICBsZXQgaG9tZUNoaWxkTGFiZWxzID0gW1xuICAgICAgICBob21lQWxsVGFza3MsXG4gICAgICAgIGhvbWVUb2RheSxcbiAgICAgICAgaG9tZU5leHQ3LFxuICAgICAgICBob21lSW1wXG4gICAgXTtcblxuICAgIGhvbWVBbGxUYXNrcy5jbGFzc0xpc3QuYWRkKFwiYWxsLXRhc2tcIik7XG4gICAgaG9tZVRvZGF5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheVwiKTtcbiAgICBob21lTmV4dDcuY2xhc3NMaXN0LmFkZChcIm5leHQtN1wiKTtcbiAgICBob21lSW1wLmNsYXNzTGlzdC5hZGQoXCJpbXBcIik7XG5cbiAgICBob21lQWxsVGFza3MuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaG9tZS10YWJcIik7XG4gICAgaG9tZVRvZGF5LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWhvbWUtdGFiXCIpO1xuICAgIGhvbWVOZXh0Ny5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1ob21lLXRhYlwiKTtcbiAgICBob21lSW1wLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWhvbWUtdGFiXCIpO1xuXG4gICAgaG9tZUFsbFRhc2tzLnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcbiAgICBob21lVG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgaG9tZU5leHQ3LnRleHRDb250ZW50ID0gXCJOZXh0IDcgRGF5c1wiO1xuICAgIGhvbWVJbXAudGV4dENvbnRlbnQgPSBcIkltcG9ydGFudFwiO1xuICAgIFxuICAgIGhvbWVBbGxUYXNrcy5kYXRhc2V0LnZhbHVlID0gXCJBbGwgVGFza3NcIjtcbiAgICBob21lVG9kYXkuZGF0YXNldC52YWx1ZT0gXCJUb2RheVwiO1xuICAgIGhvbWVOZXh0Ny5kYXRhc2V0LnZhbHVlPSBcIk5leHQgNyBEYXlzXCI7XG4gICAgaG9tZUltcC5kYXRhc2V0LnZhbHVlPSBcIkltcG9ydGFudFwiO1xuXG4gICAgbGV0IHN2Z0ljb25zID0gW1xuICAgICAgICBhbGxfdGFza19zdmcsXG4gICAgICAgIHRvZGF5X3N2ZyxcbiAgICAgICAgbmV4dF83X2RheXNfc3ZnLFxuICAgICAgICBpbXBvcnRhbnRfc3ZnLFxuICAgIF07XG5cbiAgICBob21lRGl2ID0gY3JlYXRlTGlzdEl0ZW1EaXYoaG9tZURpdiwgc3ZnSWNvbnMsIGhvbWVDaGlsZExhYmVscyk7XG5cbiAgICBcblxuICAgIC8vIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZUFsbFRhc2tzKVxuICAgIC8vIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZVRvZGF5KVxuICAgIC8vIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZU5leHQ3KVxuICAgIC8vIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZUltcClcblxuICAgIFxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhclwiKTtcblxuXG4gICAgbGV0IHByb2plY3RIMSA9IG5ldyBoZWFkQ29tcG9uZW50KFwiaDFcIik7XG4gICAgcHJvamVjdEgxLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0SDEpO1xuICAgIFxuICAgIGxldCBocjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaHJcIik7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGhyMSk7XG5cbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgbGV0IGFkZE5ld0J0biA9IGFkZFByb2plY3RCdG4oKTtcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZE5ld0J0bik7XG5cblxuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICBcblxuICAgIHJldHVybiBzaWRlYmFyXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEJ0bigpIHtcbiAgICBsZXQgYWRkTmV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGROZXdCdG4uY2xhc3NMaXN0LmFkZChcImFkZE5ld1Byb2plY3RcIik7XG4gICAgYWRkTmV3QnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBQcm9qZWN0XCJcbiAgICByZXR1cm4gYWRkTmV3QnRuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0SXRlbURpdihwYXJlbnQsIHN2Z0xpc3QsIGxpc3RJdGVtKSB7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN2Z0xpc3QubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIGNvbnN0IGRpdkl0ZW0gPSBuZXcgZGl2Q29tcG9uZW50KCk7XG4gICAgICAgIGRpdkl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgICAgICBsZXQgbWVudUljb24gPSBuZXcgc3ZnKHN2Z0xpc3RbaV0pO1xuICAgICAgICBtZW51SWNvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1saXN0LXN2Zy1zbWFsbFwiKTtcbiAgICAgICAgXG4gICAgICAgIGRpdkl0ZW0uYXBwZW5kQ2hpbGQobWVudUljb24pO1xuICAgICAgICBkaXZJdGVtLmFwcGVuZENoaWxkKGxpc3RJdGVtW2ldKTtcbiAgICAgICAgXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkaXZJdGVtKTtcblxuICAgIH07XG5cbiAgICByZXR1cm4gcGFyZW50O1xufTsiLCJpbXBvcnQgeyBkaXZDb21wb25lbnQsIGRyb3BEb3duTWVudURpdiwgZ2V0Q3VycmVudFByb2plY3RJZCwgaGVhZENvbXBvbmVudCwgcmFkaW9CdG5EaXYsIFN0YXJCdG5EaXYgfSBmcm9tIFwiLi9hZGRpdGlvbmFsXCI7XG5pbXBvcnQgeyBldmVudExpc3RlbmVycywgcmVwbGFjZURvbUVsZW1lbnRzIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IGZldGNoUHJvamVjdHMsIGdldEFsbFRhc2tzLCBnZXRUYXNrQnlJZCwgc3RyaW5nVG9PYmplY3QgfSBmcm9tIFwiLi9tYW5hZ2VMb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCBvcHRpb25fZG90cyBmcm9tICcuL3N0YXRpYy9zdmcvM19kb3RzLnN2Zyc7XG5cbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5cbmxldCB0YXNrID0gKCBwcm9qZWN0LCB0aXRsZSwgZGV0YWlsLCBpbXBvcnRhbnQsIGRhdGUsIGNvbXBsZXRlZCkgPT4ge1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXRhaWwsXG4gICAgICAgIGNvbXBsZXRlZDpjb21wbGV0ZWQsXG4gICAgICAgIGltcG9ydGFudDogaW1wb3J0YW50LFxuICAgICAgICBkYXRlOihkYXRlID09IFwiXCIpP1wiXCI6Y3JlYXRlRGF0ZShkYXRlKVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrICggcHJvamVjdCA9IFwiZGVmYXVsdFwiLCB0aXRsZSwgZGV0YWlsLCBpbXBvcnRhbnQsIGRhdGUsIGNvbXBsZXRlZCkge1xuICAgIHJldHVybiB0YXNrKHByb2plY3QsIHRpdGxlLCBkZXRhaWwsIGltcG9ydGFudCwgZGF0ZSwgY29tcGxldGVkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRhc2sodGFzaywgdGFza0lkLCBwcm9qZWN0SWQpIHtcbiAgICBcbiAgICBsZXQgdGFza3NEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGV0YWlsc1wiKTtcblxuICAgIGlmICh0YXNrSWQpIHtcbiAgICAgICAgbGV0IHRhc2tDb21wb25lbnQgPSBjcmVhdGVUYXNrQ29tcG9uZW50KHRhc2ssIHRhc2tJZCwgcHJvamVjdElkKVxuICAgICAgICB0YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50KTtcbiAgICB9XG4gICAgXG4gICAgZXZlbnRMaXN0ZW5lcnMoKVxuICAgIFxuICAgIFxufVxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlVGFza3NPZlByb2plY3QocHJvamVjdElkKSB7XG4gICAgbGV0IHByb2plY3RPYmogPSBzdHJpbmdUb09iamVjdChmZXRjaFByb2plY3RzKCkpO1xuICAgIGxldCBwcm9qZWN0VGFza09iaiA9IHByb2plY3RPYmpbcHJvamVjdElkXVtcInRhc2tzXCJdXG5cbiAgICBDcmVhdGVBbmRSZXBsYWNlVGFza0NvbXBvbmVudChwcm9qZWN0VGFza09iaiwgcHJvamVjdElkKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBDcmVhdGVBbmRSZXBsYWNlVGFza0NvbXBvbmVudChwcm9qZWN0VGFza09iaiwgcHJvamVjdElkKSAge1xuICAgIGxldCB0YXNrTGlzdERpdiA9IG5ldyBkaXZDb21wb25lbnQoKTtcbiAgICBsZXQgcHJvamVjdFRhc2tMaXN0T2ZLZXlzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvamVjdFRhc2tPYmopKSB7XG4gICAgICAgIHByb2plY3RUYXNrTGlzdE9mS2V5cyA9IHByb2plY3RUYXNrT2JqO1xuICAgIH0gZWxzZSAge1xuICAgICAgICBwcm9qZWN0VGFza0xpc3RPZktleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0VGFza09iaik7XG4gICAgfVxuICAgIFxuICAgIHByb2plY3RUYXNrTGlzdE9mS2V5cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBsZXQgdGFzayA9IHByb2plY3RUYXNrT2JqW2VsZW1lbnRdO1xuICAgICAgICBjb25zdCB0YXNrQ29tcG9uZW50ID0gY3JlYXRlVGFza0NvbXBvbmVudCh0YXNrLCBlbGVtZW50LCBwcm9qZWN0SWQpO1xuICAgICAgICB0YXNrTGlzdERpdi5hcHBlbmRDaGlsZCh0YXNrQ29tcG9uZW50KTtcbiAgICB9KTtcblxuICAgIHRhc2tMaXN0RGl2LmlkID0gXCJ0YXNrLWRldGFpbHNcIjtcblxuICAgIGxldCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRldGFpbHNcIikucGFyZW50Tm9kZTtcbiAgICBsZXQgbmV3SXRlbSA9IHRhc2tMaXN0RGl2O1xuICAgIGxldCBvbGRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRldGFpbHNcIilcblxuICAgIHJlcGxhY2VEb21FbGVtZW50cyhwYXJlbnROb2RlLCBuZXdJdGVtLCBvbGRJdGVtKTtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQ29tcG9uZW50KHRhc2ssIHRhc2tJZE51bSwgcHJvamVjdElkTnVtKSB7XG4gICAgbGV0IHRhc2tDb21wb25lbnQgPSBuZXcgZGl2Q29tcG9uZW50KCk7XG5cbiAgICB0YXNrQ29tcG9uZW50LmRhdGFzZXQudGFza0lkID0gdGFza0lkTnVtXG4gICAgdGFza0NvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcblxuICAgIGxldCByYWRpb0J0biA9IHJhZGlvQnRuRGl2KCk7XG4gICAgbGV0IHRhc2tUaXRsZSA9IG5ldyBoZWFkQ29tcG9uZW50KFwiaDVcIik7XG4gICAgbGV0IHRhc2tEZXRhaWwgPSBuZXcgaGVhZENvbXBvbmVudChcInBcIik7XG4gICAgbGV0IGR1ZURhdGUgPSBuZXcgaGVhZENvbXBvbmVudChcInBcIik7XG4gICAgbGV0IGltcG9ydGFudCA9IFN0YXJCdG5EaXYodGFzay5pbXBvcnRhbnQpO1xuXG4gICAgbGV0IG9wdGlvbnNCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgICBvcHRpb25zQnRuLnNyYyA9IG9wdGlvbl9kb3RzO1xuXG4gICAgb3B0aW9uc0J0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pY29uLXNtYWxsXCIpO1xuICAgIG9wdGlvbnNCdG4uY2xhc3NMaXN0LmFkZChcInN2Zy1idG4tY2FuY2VsXCIpO1xuXG4gICAgbGV0IGRyb3BEb3duRGl2RWxlbWVudCA9IGRyb3BEb3duTWVudURpdihvcHRpb25zQnRuKTtcblxuICAgIHJhZGlvQnRuLnRleHRDb250ZW50ID0gdGFzay5jb21wbGV0ZWQgPT0gXCJ0cnVlXCI/XCLinJNcIjpcIlwiXG4gICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgICB0YXNrRGV0YWlsLnRleHRDb250ZW50ID0gdGFzay5kZXRhaWw7XG5cbiAgICBpZiAodGFzay5jb21wbGV0ZWQgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgdGFza0NvbXBvbmVudC5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICAgIH1cbiAgICBcbiAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSB0YXNrLmltcG9ydGFudCA9PSBcInRydWVcIj9cIuKtkFwiOlwi4piGXCIgXG5cbiAgICB0YXNrRGV0YWlsLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxcIik7XG5cbiAgICB0YXNrQ29tcG9uZW50LmFwcGVuZENoaWxkKHJhZGlvQnRuKTtcbiAgICB0YXNrQ29tcG9uZW50LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gICAgdGFza0NvbXBvbmVudC5hcHBlbmRDaGlsZCh0YXNrRGV0YWlsKTtcblxuICAgIGlmICh0YXNrLmRhdGUgPT0gXCJcIikge1xuICAgICAgICBsZXQgbm9EdWVEYXRlQ29tcG9uZW50ID0gbm9EdWVEYXRlRGl2KCk7XG4gICAgICAgIHRhc2tDb21wb25lbnQuYXBwZW5kQ2hpbGQobm9EdWVEYXRlQ29tcG9uZW50KTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBjcmVhdGVEYXRlKHRhc2suZGF0ZSk7XG4gICAgICAgIHRhc2tDb21wb25lbnQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgdGFza0NvbXBvbmVudC5hcHBlbmRDaGlsZChpbXBvcnRhbnQpO1xuICAgIHRhc2tDb21wb25lbnQuYXBwZW5kQ2hpbGQoZHJvcERvd25EaXZFbGVtZW50KTtcbiAgICB0YXNrQ29tcG9uZW50LmRhdGFzZXQuUHJvamVjdElkID0gcHJvamVjdElkTnVtO1xuXG4gICAgcmV0dXJuIHRhc2tDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIG5vRHVlRGF0ZURpdigpIHtcbiAgICBsZXQgbm9EdWVEYXRlQ29tcG9uZW50ID0gbmV3IGRpdkNvbXBvbmVudCgpO1xuXG4gICAgbm9EdWVEYXRlQ29tcG9uZW50LmNsYXNzTGlzdC5hZGQoXCJuby1kdWUtZGF0ZVwiKTtcblxuICAgIG5vRHVlRGF0ZUNvbXBvbmVudC50ZXh0Q29udGVudCA9IFwiTm8gRHVlIERhdGVcIjtcblxuICAgIHJldHVybiBub0R1ZURhdGVDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGUoZGF0ZUR1ZSkge1xuICAgIFxuICAgIHJldHVybiBkYXRlRHVlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIndXNlIHN0cmljdCc7XG5jb25zb2xlLmxvZyhcIndvcmtpbmchISEhISExMVwiKVxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IGdlbmVyYXRlVWksIGV2ZW50TGlzdGVuZXJzLCBwb3B1bGF0ZVByb2plY3RzVGFiIH0gZnJvbSAnLi9kaXNwbGF5Q29udHJvbGxlcic7XG5pbXBvcnQgeyBzZXR1cFByb2plY3REaWN0IH0gZnJvbSAnLi9tYW5hZ2VMb2NhbFN0b3JhZ2UnO1xuXG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuY29udGVudC5kYXRhc2V0LmNvdW50ID0gMFxuXG5jb250ZW50ID0gZ2VuZXJhdGVVaShjb250ZW50LCBcIkFsbCBUYXNrc1wiKTtcblxuc2V0dXBQcm9qZWN0RGljdCgpXG5wb3B1bGF0ZVByb2plY3RzVGFiKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=