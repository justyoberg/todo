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

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupEventListeners\": () => (/* binding */ setupEventListeners)\n/* harmony export */ });\n/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectHandler.js */ \"./src/projectHandler.js\");\n\n\nfunction setupEventListeners(){\n  // Create project button\n  const createProjectBtn = document.querySelector(\".create-project\");\n  createProjectBtn.addEventListener(\"click\", _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProject);\n\n  // Delete project buttons\n  const deleteProjectBtns = document.querySelectorAll(\".delete-project\");\n  deleteProjectBtns.forEach((btn) => btn.ondblclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject);\n}\n\n//# sourceURL=webpack://todo/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n;\n\n(0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectHandler)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\nclass ProjectHandler {\n  \n  static projectCount = 0;\n  static projects = [];\n  static projectList = document.querySelector(\".project-list\");\n\n  static createProject = () => {\n\n    // Cap the project amount at 11\n    if (this.projects.length >= 11) {return};\n    this.projectList.innerHTML = ``;\n\n    // Create the new project div\n    let projDiv = document.createElement(\"div\");\n    projDiv.classList.add(\"project-item\");\n    this.projectCount += 1;\n    projDiv.setAttribute(\"id\", `${this.projectCount}`)\n    projDiv.innerHTML = `\n        <button class=\"project-select-btn\" id=\"${projDiv.id}\">Project ${projDiv.id}</button>\n        <button class=\"delete-project\" id=\"${projDiv.id}\">x</button>\n    `\n\n    this.projects.push(projDiv);\n    this.updateProjectList();\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners)();\n  }\n\n  static deleteProject = (event) => {\n\n    this.projectList.innerHTML = ``;\n    // Reset the projects list if the final element is being deleted\n    if (this.projects.length == 1) {\n      this.projects = [];\n      this.projectList.innerHTML = `<div class=\"project-item\">You have no projects.</div>`;\n      return\n    };\n\n    // Filter the projects by the id of the Div to remove the correct element\n    this.projects = this.projects.filter((div) => div.id !== event.target.id);\n    this.updateProjectList();\n\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupEventListeners)();\n  }\n\n  static updateProjectList = () => {\n    // Update the dom\n    this.projects.forEach((project) => this.projectList.appendChild(project));\n  }\n\n};  \n\n\n//# sourceURL=webpack://todo/./src/projectHandler.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;