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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupOnclickEvents\": () => (/* binding */ setupOnclickEvents)\n/* harmony export */ });\n/* harmony import */ var _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectHandler.js */ \"./src/projectHandler.js\");\n\n\nfunction setupOnclickEvents(){\n\n  // Create project button\n  const createProjectBtn = document.querySelector(\".create-project\");\n  createProjectBtn.onclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProject;\n\n  // Delete project buttons\n  const deleteProjectBtns = document.querySelectorAll(\".delete-project\");\n  deleteProjectBtns.forEach((btn) => btn.ondblclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteProject);\n\n  // Show the selected project's list of todos in the dom\n  const projectSelectBtns = document.querySelectorAll(\".project-select-btn\");\n  projectSelectBtns.forEach((btn) => btn.onclick = _projectHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showTodoList);\n\n}\n\n//# sourceURL=webpack://todo/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n(0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupOnclickEvents)();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectHandler)\n/* harmony export */ });\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\nclass ProjectHandler {\n  \n  static projectCount = 0;\n  static projects = [];\n  static projectList = document.querySelector(\".project-list\");\n  static todoContainer = document.querySelector(\".todo\");\n  static projectName = document.querySelector(\".project-name\");\n  static activeProject = \"\";\n\n  static createProject = () => {\n    // Create a new default project\n\n    // Cap the project amount at 11\n    if (this.projects.length >= 11) {return};\n    this.projectList.innerHTML = ``;\n\n    // Create the new project div\n    let projDiv = document.createElement(\"div\");\n    projDiv.classList.add(\"project-item\");\n    this.projectCount += 1;\n    projDiv.setAttribute(\"id\", `${this.projectCount}`)\n    projDiv.innerHTML = `\n        <button class=\"project-select-btn\" id=\"${projDiv.id}\">Project ${projDiv.id}</button>\n        <button class=\"delete-project\" id=\"${projDiv.id}\">x</button>\n    `\n\n    // Create an object with the div and an array for the todo list\n    let projectObj = {\n      name: `Project ${projDiv.id}`,\n      div: projDiv,\n      lists: [\n        { \n          title: `Project ${projDiv.id} default title`,\n          description: `Project ${projDiv.id} default description`,\n          dueDate: \"None\",\n          notes: `Project ${projDiv.id} default notes`\n        }\n      ],\n    }\n\n    // Put object in the project array and update the DOM\n    this.projects.push(projectObj);\n    this.updateProjectList();\n\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupOnclickEvents)();\n  }\n\n  static deleteProject = (event) => {\n    // Delete a project from the projects array\n\n    this.projectList.innerHTML = ``;\n    // Reset the projects list if the final element is being deleted\n    if (this.projects.length == 1) {\n      this.projects = [];\n      this.projectList.innerHTML = `<div class=\"project-empty\">You have no projects.</div>`;\n      return\n    };\n\n    // Filter the projects by the id of the even button and update the DOM\n    this.projects = this.projects.filter((o) => o.div.id !== event.target.id);\n    this.updateProjectList();\n\n    // Reset the todo list container's HTML if its the active project\n    if (event.target.id == this.activeProject){\n      this.projectName.innerHTML = `<h1>Select a project</h1>`;\n      this.todoContainer.innerHTML = ``;\n    }\n\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupOnclickEvents)();\n  }\n\n  static updateProjectList = () => {\n    // Updates the DOM\n    this.projects.forEach((project) => this.projectList.appendChild(project.div));\n  }\n\n  static showTodoList = (event) => {\n\n    // Disable the active project button\n    const projectSelectBtns = document.querySelectorAll(\".project-select-btn\");\n    projectSelectBtns.forEach((btn) => {\n      if (event.target === btn) {btn.disabled = true}\n      else {btn.disabled = false};\n    })\n\n    // Search the projects array for the selected project's object\n    let project = this.projects.find((proj) => proj.div.id === event.target.id);\n    this.activeProject = project.div.id;\n\n    this.projectName.innerHTML = `<h1>${project.name}</h1>`;\n    this.todoContainer.innerHTML = '';\n    // Append all the list items of the project to the DOM\n    for (let listItem of project.lists) {\n      let listItemDiv = document.createElement(\"div\");\n      listItemDiv.classList.add(\"list-item\");\n      listItemDiv.innerHTML = `\n        <h3 class=\"title\">${listItem.title}</h3>\n        <p class=\"desc\">${listItem.description}</p>\n        <p class=\"notes\">Notes:</br>${listItem.notes}</p>\n        <p class=\"due\">Due date:</br>${listItem.dueDate}</p>\n      `\n      this.todoContainer.appendChild(listItemDiv);\n    };\n\n    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__.setupOnclickEvents)();\n  }\n\n};  \n\n\n//# sourceURL=webpack://todo/./src/projectHandler.js?");

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