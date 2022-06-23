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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_additon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/additon */ \"./src/module/additon.js\");\n/* harmony import */ var _module_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/card */ \"./src/module/card.js\");\n\n\n\n\n\n\nlet body = document.querySelector('body');\n\n\nlet addbtn = document.getElementById('add');\n\n\n\n\naddbtn.addEventListener('click', () => {\n    \n    let a = document.getElementById('task').value;\n    let b = document.getElementById('date').value;\n    let c = document.getElementsByName('priority')[0].value;\n    let d = document.getElementsByName('project')[0].value;\n    \n    body.appendChild((0,_module_card__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) (a , c))\n\n\n})\n\n      \n\nbody.appendChild((0,_module_additon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n\n\n\n\n\n//# sourceURL=webpack://todos/./src/index.js?");

/***/ }),

/***/ "./src/module/additon.js":
/*!*******************************!*\
  !*** ./src/module/additon.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addcard);\n\n\nfunction addcard(){\n    let addcard= document.createElement(\"div\");\n    let form = document.createElement(\"form\");\n    form.setAttribute(\"action\", \"\");\n    form.setAttribute(\"method\", \"post\");\n    form.setAttribute(\"id\", \"form\");\n\n\n    let div1 = document.createElement(\"div\");\n    let div2 = document.createElement(\"div\");\n    let div3 = document.createElement(\"div\");\n\n    let taskName = document.createElement(\"INPUT\");\n    taskName.setAttribute(\"type\", \"text\");\n    taskName.setAttribute(\"placeholder\", \"task info\");\n    taskName.setAttribute(\"name\", \"task\");\n    taskName.setAttribute(\"id\", \"task\");\n    \n    let date = document.createElement(\"INPUT\");\n    date.setAttribute(\"type\", \"date\");\n    date.setAttribute(\"name\", \"date\");\n    date.setAttribute(\"id\", \"date\");\n\n    div1.appendChild(taskName);\n    div1.appendChild(date);\n\n    let text = document.createElement('span');\n\n    let prriority= document.createElement(\"select\");\n    prriority.setAttribute(\"name\", \"priority\");\n    prriority.setAttribute(\"id\", \"priority\");\n    prriority.innerHTML = `<option value=\"high\" selected>high</option>\n    <option value=\"meduim\">meduim</option>\n    <option value=\"low\">low</option>`\n\n    let project= document.createElement(\"select\");\n    project.setAttribute(\"name\", \"project\");\n    project.innerHTML = `<option value=\"index\" selected>index</option>`\n\n    text.textContent = \"Select priority: \";\n    div2.appendChild(text);\n    div2.appendChild(prriority);\n    div2.appendChild(project);\n    \n    let addBtn = document.createElement(\"button\");\n    let cancelBtn = document.createElement(\"button\")\n    addBtn.textContent = \"add\";\n    cancelBtn.textContent = \"cancel\";\n    div3.appendChild(addBtn);\n    div3.appendChild(cancelBtn);\n\n    addcard.classList.add('cardCreator');\n    \n    form.appendChild(div1)\n    form.appendChild(div2)\n    form.appendChild(div3)\n\n    addcard.appendChild(form)\n\n    return addcard;\n}\n\n\n\n\n\n//# sourceURL=webpack://todos/./src/module/additon.js?");

/***/ }),

/***/ "./src/module/card.js":
/*!****************************!*\
  !*** ./src/module/card.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardCreated);\n\n\n\n\nfunction cardCreated (taskName , priority) {\n    let card = document.createElement('div');\n    let taskTitle = document.createElement('span');\n    let taskPrriority= document.createElement(\"select\");\n    let btnDone = document.createElement (\"button\")\n    let btnCancel = document.createElement(\"button\");\n    let div1 = document.createElement(\"div\");\n    let div2 = document.createElement(\"div\");\n    let div3 = document.createElement(\"div\");\n\n    card.setAttribute(\"class\", \"card\");\n\n\n    btnDone.setAttribute(\"id\", \"btn\");\n    btnDone.textContent= \"DONE\"; \n    btnCancel.setAttribute(\"id\", \"btnX\");\n    btnCancel.textContent= \"X\";\n    \n    div3.appendChild(btnDone);\n    div3.appendChild(btnCancel);\n\n    \n\n\n\n    \n\n    taskTitle.textContent = taskName\n    div1.appendChild(taskTitle)\n\n    switch (priority){\n        case 'high':\n            card.setAttribute(\"id\", \"priorityHigh\");\n            break;\n        case 'meduim':\n            card.setAttribute(\"id\", \"priorityMeduim\");\n            break;\n        case 'low':\n            card.setAttribute(\"id\", \"priorityLow\");\n            break;\n    }\n    card.appendChild(div1)\n    card.appendChild(div3)\n    return card;\n} \n\n\n\n\n\n\n\n//# sourceURL=webpack://todos/./src/module/card.js?");

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