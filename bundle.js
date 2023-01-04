/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Roboto', sans-serif;\\n  color: var(--font-light);\\n}\\n\\n:root {\\n  --main-darkest: #18181b;\\n  --main-dark: #3f3f46;\\n  --main-medium: #71717a;\\n  --main-light: #e4e4e7;\\n  --font-light: #fafafa;\\n\\n  --green-static: rgb(72, 165, 72);\\n  --green-hover: rgb(32, 97, 32);\\n\\n  --red-hover: rgb(224, 0, 0);\\n  --red-static: rgb(153, 0, 0);\\n}\\n\\nhtml {\\n  position: fixed;\\n  height: 100vh;\\n  width: 100vw;\\n}\\n\\nbody {\\n  background-color: var(--main-dark);\\n  display: grid;\\n  grid-template: 1fr 6fr / 1fr;\\n  height: 100%;\\n  width: 100%;\\n}\\n\\nheader {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  grid-column: 1 / 3;\\n  font-size: 1.5em;\\n  background-color: var(--main-dark);\\n}\\n\\nmain {\\n  display: grid;\\n  grid-template-columns: minmax(500px, 1fr) 4fr minmax(500px, 1fr);\\n  grid-template-rows: 1fr;\\n  grid-row: 2 / 3;\\n}\\n\\nbutton {\\n  background: none;\\n  border: none;\\n}\\n\\n.nav {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 50px;\\n  background-color: var(--main-dark);\\n}\\n\\n.todo {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 16px;\\n  gap: 16px;\\n}\\n\\n.list-item {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 15px;\\n  align-items: center;\\n  height: 60px;\\n  background-color: var(--main-dark);\\n  border-radius: 1em;\\n  border: 2px solid black;\\n}\\n\\n.list-item.high {\\n  border: 2px solid rgb(173, 0, 0);\\n}\\n\\n.list-item.medium {\\n  border: 2px solid rgb(255, 238, 0);\\n}\\n\\n.list-item.low {\\n  border: 2px solid rgb(255, 255, 255);\\n}\\n\\n.todo-container {\\n  grid-column: 2 / 3;\\n  padding: 30px;\\n  border-radius: 5em 5em 0 0;\\n  border-top: 2px solid var(--main-darkest);\\n  border-left: 2px solid var(--main-darkest);\\n  border-right: 2px solid var(--main-darkest);\\n  background-color: var(--main-medium);\\n}\\n\\n.project-name {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 3em 3em 0 0;\\n  border: 2px solid var(--main-darkest);\\n  background-color: var(--main-dark);\\n}\\n\\n.projects,\\n.project-header {\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.projects {\\n  width: 75%;\\n  flex-direction: column;\\n}\\n\\n.create-project {\\n  font-size: 4em;\\n  color: var(--green-static);\\n}\\n\\n.create-project:hover {\\n  color: var(--green-hover);\\n}\\n\\n.delete-project {\\n  font-size: 1.2em;\\n  color: var(--red-static);\\n}\\n\\n.delete-project:hover {\\n  color: var(--red-hover);\\n}\\n\\n.project-list {\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 350px;\\n  margin-top: 20px;\\n  padding: 10px;\\n  border-radius: 1em;\\n  border: 2px solid var(--main-darkest);\\n  background-color: var(--main-medium);\\n}\\n\\n.instructions {\\n  width: 75%;\\n  text-align: center;\\n}\\n\\n.delete {\\n  font-size: 1.2em;\\n  color: var(--red-hover);\\n}\\n\\n.project-item,\\n.project-empty {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  font-size: 1.2em;\\n  border-bottom: 2px dotted rgba(0, 0, 0, 0.233);\\n}\\n\\n.project-empty {\\n  border-bottom: none;\\n}\\n\\n.project-item:hover {\\n  border-bottom: 2px dotted black;\\n}\\n\\n.project-select-btn[disabled]{\\n  color: black;\\n}\\n\\n.project-select-btn {\\n  text-align: left;\\n  font-size: 1.2em;\\n  flex: 1;\\n}\\n\\n.project-select-btn:hover {\\n  color: black;\\n  flex: 1;\\n}\\n\\n.footer {\\n  margin-top: 20px;\\n}\\n\\n.add-todo:hover {\\n  color: black;\\n}\\n\\n.delete-todo {\\n  color: var(--red-hover);\\n}\\n\\n.delete-todo:hover {\\n  color: var(--red-static);\\n}\\n\\n.modal-wrapper {\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  position: absolute;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: #00000079;\\n  box-shadow: 0 0 100px black inset;\\n}\\n\\n.modal {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n  height: 500px;\\n  width: 500px;\\n  background-color: var(--main-dark);\\n  border: 2px solid black;\\n  border-radius: 2em;\\n  box-shadow: 0 0 5px black;\\n}\\n\\n.modal div:first-of-type {\\n  display: flex;\\n  justify-content: space-around;\\n  width: 100%;\\n}\\n\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  gap: 32px;\\n}\\n\\n.submit-todo-edit,\\n.close-modal,\\n.add-todo,\\n.edit-todo,\\n.close-modal,\\n.delete-todo {\\n  font-size: 1.5em;\\n}\\n\\n.submit-todo-edit:hover,\\n.close-modal:hover,\\n.add-todo:hover,\\n.edit-todo:hover,\\n.close-modal:hover,\\n.edit-project:hover,\\ninput {\\n  color: black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupOnclickEvents\": () => (/* binding */ setupOnclickEvents)\n/* harmony export */ });\n/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectHandler.js */ \"./src/projectHandler.js\");\n\n\nfunction setupOnclickEvents(){\n\n  // Create project button\n  const createProjectBtn = document.querySelector(\".create-project\");\n  createProjectBtn.onclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProject;\n  \n  // Delete project buttons\n  const deleteProjectBtns = document.querySelectorAll(\".delete-project\");\n  deleteProjectBtns.forEach((btn) => btn.ondblclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject);\n\n  // Show the selected project's list of todos in the dom\n  const projectSelectBtns = document.querySelectorAll(\".project-select-btn\");\n  projectSelectBtns.forEach((btn) => btn.onclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTodoList);\n\n}\n\n//# sourceURL=webpack://todo/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHandler */ \"./src/projectHandler.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n_projectHandler__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateProjectList();\n(0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupOnclickEvents)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectHandler)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\nclass ProjectHandler {\n  \n  static projectCount = 0;\n  static projects = JSON.parse(localStorage.getItem(\"projects\") || \"[]\");\n  static projectList = document.querySelector(\".project-list\");\n  static todoContainer = document.querySelector(\".todo\");\n  static projectName = document.querySelector(\".project-name\");\n  static activeProject = \"\";\n\n  static createProjectObject = () => {\n    // Increase the project count\n    this.projectCount += 1;\n    // Return a default project object\n    return {\n      name: `Project ${this.projectCount}`,\n      id: `${this.projectCount}`,\n      lists: [\n        { \n          title: `Project ${this.projectCount} task`,\n          dueDate: `2022-01-01`,\n          priority: \"low\",\n        }\n      ],\n    }\n  }\n\n  static createProject = () => {\n    // Create a new default project\n\n    // Prevent creating more than 11 projects\n    if (this.projects.length >= 11) {return};\n    this.projectList.innerHTML = ``;\n\n    // Create project object\n    let projectObj = this.createProjectObject();\n\n    // Push project into projects\n    this.projects.push(projectObj);\n\n    // Create the new project div and append it to the DOM\n    this.updateProjectList();\n  }\n\n  static updateProjectList = () => {\n    // Update the DOM with the correct projects\n    this.projectList.innerHTML = ``;\n    // Update Local Storage\n    localStorage.setItem(\"projects\", JSON.stringify(this.projects));\n    \n    if (this.projects.length <= 0) {\n      return this.projectList.innerHTML = `\n      <div class=\"project-empty\">\n        You have no projects.\n      </div>\n      `;\n    };\n\n    for (let proj of this.projects) {\n      let projDiv = document.createElement(\"div\");\n      projDiv.classList.add(\"project-item\");\n      projDiv.setAttribute(\"id\", `${proj.id}`)\n\n      // Create the project select button\n      let selectButton = document.createElement(\"button\");\n      selectButton.classList.add(\"project-select-btn\");\n      selectButton.setAttribute(\"id\", `${proj.id}`);\n      selectButton.textContent = `${proj.name}`;\n      if (this.activeProject == proj.id) selectButton.disabled = \"true\";\n\n      // Create the delete button to append to the Project div\n      let deleteButton = document.createElement(\"button\");\n      deleteButton.classList.add(\"delete-project\");\n      deleteButton.setAttribute(\"id\", `${proj.id}`);\n      deleteButton.textContent = \"x\";\n      deleteButton.style.marginLeft = \"16px\";\n\n      projDiv.appendChild(selectButton);\n      projDiv.appendChild(deleteButton);\n\n      this.projectList.append(projDiv);\n    }\n    // Setup the click events for the buttons\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupOnclickEvents)();\n  }\n\n  static deleteProject = (event) => {\n    // Delete a project from the projects array\n\n    // If the current active project is being deleted, update the header\n    // and erase the task list\n    if (event.target.id == this.activeProject) {\n      this.projectName.innerHTML = `\n      <h1>\n        Select a project\n      </h1>\n      `\n      this.todoContainer.innerHTML = '';\n    }\n\n    // Reset the projects list if the final element is being deleted\n    if (this.projects.length == 1) {\n      this.projects = [];\n      this.projectList.innerHTML = `\n      <div class=\"project-empty\">\n        You have no projects.\n      </div>\n      `;\n      return;\n    };\n\n    // Filter the projects array of the item\n    this.projects = this.projects.filter(proj => proj.id != event.target.id);\n\n    this.updateProjectList();\n  }\n\n  static updateTodoList = (project) => {\n    // Creates each todo item and appends them to the DOM\n\n    this.todoContainer.innerHTML = '';\n\n    // Loop through the project's list of tasks and append them to the DOM\n    for (let listItem of project.lists) {\n      // Hamburger menu button\n      let menuButton = document.createElement(\"button\");\n      menuButton.classList.add(\"edit-todo\");\n      menuButton.setAttribute(\"id\", project.lists.indexOf(listItem));\n      menuButton.textContent = \"☰\";\n      menuButton.onclick = () => this.openTodoMenu(project, project.lists.indexOf(listItem));\n      // Delete task button\n      let deleteButton = document.createElement(\"button\");\n      deleteButton.classList.add(\"delete-todo\");\n      deleteButton.setAttribute(\"id\", project.lists.indexOf(listItem));\n      deleteButton.textContent = \"X\";\n      deleteButton.ondblclick = () => this.deleteTodo(project, project.lists.indexOf(listItem));\n      deleteButton.style.marginLeft = \"16px\";\n      // Create a container for the buttons\n      let buttonContainer = document.createElement(\"div\");\n      buttonContainer.appendChild(menuButton);\n      buttonContainer.appendChild(deleteButton);\n      // Create a div for each item and append to the dom\n      let listItemDiv = document.createElement(\"div\");\n      listItemDiv.classList.add(\"list-item\");\n      listItemDiv.classList.add(listItem.priority);\n      listItemDiv.innerHTML = `\n        <h3 class=\"title\">${listItem.title.slice(0, 30)}</h3>\n        <p class=\"due\">Due date: ${listItem.dueDate}</p>\n      `\n      listItemDiv.appendChild(buttonContainer);\n      this.todoContainer.appendChild(listItemDiv);\n    };\n\n    // Create the \"Add new\" button under the task list\n    let addButton = this.createTodoAddButton(project);\n    this.todoContainer.appendChild(addButton);\n\n  }\n\n  static createTodoAddButton = (project) => {\n    // Create a button to add more todo items\n    \n    const addTodo = document.createElement(\"button\");\n    addTodo.textContent = \"Add new\";\n    addTodo.classList.add(\"add-todo\");\n    addTodo.onclick = () => this.addNewTodo(project);\n    return addTodo;\n    \n  }\n\n  static addNewTodo = (project) => {\n    // Create a new Todo task\n    let defaultTodo = { \n      title: `Project ${project.id} task`,\n      dueDate: `2022-01-01`,\n      priority: \"low\",\n    };\n\n    // Push the task into the project object and update the DOM\n    project.lists.push(defaultTodo);\n    this.updateTodoList(project);\n  }\n\n  static showTodoList = (event) => {\n    // Populate the todo container with tasks\n    this.activeProject = event.target.id;\n    // Disable the active project button\n    const projectSelectBtns = document.querySelectorAll(\".project-select-btn\");\n    projectSelectBtns.forEach((btn) => {\n      if (btn.id === this.activeProject) {btn.disabled = true}\n      else {btn.disabled = false};\n    })\n\n    // Search the projects array for the selected project's object\n    let project = this.projects.find((proj) => proj.id == event.target.id);\n\n    // Change the Project name header of the todo list\n    this.projectName.innerHTML = `<h1>${project.name}</h1>`;\n\n    // Append all the list items of the project to the DOM\n    this.updateTodoList(project);\n\n  }\n\n  static openTodoMenu = (project, listIndex) => {\n    // Opens the modal for editing a Todo item\n\n    const modalWrapper = document.querySelector(\".modal-wrapper\");\n    const modal = document.querySelector(\".modal\");\n    // Create the close button\n    let closeModal = document.createElement(\"button\");\n    closeModal.textContent = \"Close\";\n    closeModal.classList.add(\"close-modal\");\n    closeModal.onclick = () => modalWrapper.style.display = \"none\";\n    // Create the submit button\n    let submit = document.createElement(\"button\");\n    submit.classList.add(\"submit-todo-edit\");\n    submit.setAttribute(\"form\", `${project.name} ${listIndex}`);\n    submit.textContent = \"Submit\";\n    submit.type = \"button\";\n    // Create the modal markup\n    modal.innerHTML = `\n    <form id=\"${project.name} ${listIndex}\">\n      <div>\n        <input type=\"text\"\n        name=\"project\"\n        id=\"project\"\n        minlength=\"1\"\n        value=\"${project.name}\"\n        required>\n      </div>\n      <div>\n        <label for=\"title\">Task: </label>\n        <input type=\"text\" \n               name=\"title\" \n               id=\"title\"\n               minlength=\"1\"\n               value=\"${project.lists[listIndex].title}\"\n               required>\n      </div>  \n      <div>\n        <label for=\"date\">Due: </label>\n        <input type=\"date\" \n               name=\"dueDate\" \n               id=\"date\" \n               value=\"${project.lists[listIndex].dueDate}\"\n               required>\n      </div>\n      <div>\n        <p>Priority: </p>\n        <br>\n        <label for=\"prio1\">High</label>\n        <input type=\"radio\" name=\"priority\" id=\"prio1\" value=\"high\">\n        <label for=\"prio2\">Medium</label>\n        <input type=\"radio\" name=\"priority\" id=\"prio2\" value=\"medium\">\n        <label for=\"prio3\">Low</label>\n        <input type=\"radio\" name=\"priority\" id=\"prio3\" value=\"low\" checked>\n      </div>\n    </form>\n    `\n    // Create a div to append the buttons\n    let buttonDiv = document.createElement(\"div\");\n    buttonDiv.appendChild(submit);\n    buttonDiv.appendChild(closeModal);\n    modal.appendChild(buttonDiv);\n    modalWrapper.style.display = \"flex\";\n\n    const getFormData = () => {\n      // Grab the data from the form\n      const form = document.getElementById(`${project.name} ${listIndex}`);\n      let formObject = new FormData(form);\n      // Store the form data\n      let data = Object.fromEntries(formObject);\n      // If some of the form data is empty, prevent submission\n      if(Object.values(data).some((a) => a === \"\")) return;\n\n      project.name = data.project;\n      project.lists[listIndex] = data;\n      // Update the DOM with proper project names\n      this.updateProjectNames(project);\n      // Hide the modal\n      modalWrapper.style.display = \"none\";\n      this.updateTodoList(project);\n\n    }\n\n    submit.onclick = getFormData;\n  }\n\n\n  static deleteTodo = (project, listIndex) => {\n    // Delete a todo item\n    project.lists.splice(listIndex, 1);\n    this.updateTodoList(project);\n\n  }\n\n  static updateProjectNames = (project) => {\n\n    // Updates the DOM with correct project names after they've been edited\n    let projectName = document.querySelector(\".project-name\");\n    projectName.innerHTML = `<h1>${project.name}</h1>`;\n    let projectListItem = document.querySelectorAll(\".project-select-btn\");\n\n    projectListItem.forEach((proj) => {\n    if (proj.id === project.id) proj.textContent = project.name.slice(0, 20);\n    });\n    projectListItem.textContent = project.name;\n  }\n};  \n\n\n//# sourceURL=webpack://todo/./src/projectHandler.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;