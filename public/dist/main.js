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

/***/ "./public/assets/scripts/description.js":
/*!**********************************************!*\
  !*** ./public/assets/scripts/description.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ description)\n/* harmony export */ });\n// This function gets the description of a book from the API using a code from the URL and displays it. If there's an error, it displays an error message.\nfunction description() {\n  if (window.location.href.includes('details.html')) {\n    const loading = document.getElementById('loading');\n    const p = document.getElementById('description');\n    const code = new URLSearchParams(window.location.search).get('code');\n\n    loading.style.display = 'block';\n    \n    axios.get(`https://openlibrary.org${code}.json`)\n      .then((response) => {\n        if (response.status !== 200) {\n          p.innerHTML = 'Si è verificato un errore durante il recupero della descrizione. Riprovare più tardi.';\n          return;\n        }\n\n        const details = response.data;\n        const description = details.description?.value ?? details.description ?? 'Nessuna descrizione disponibile';\n        p.innerHTML = description;\n      })\n      .catch((error) => {\n        console.error(error);\n        p.innerHTML = 'Si è verificato un errore durante il recupero della descrizione. Riprovare più tardi.';\n      })\n      .finally(() => {\n        loading.style.display = 'none';\n      });\n  }\n}\n\n\n\n//# sourceURL=webpack://books/./public/assets/scripts/description.js?");

/***/ }),

/***/ "./public/assets/scripts/search.js":
/*!*****************************************!*\
  !*** ./public/assets/scripts/search.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ search)\n/* harmony export */ });\n//This function searches for books based on user input and displays the results with author information.If an error occurs, an error message is shown.\nfunction search() {\n  const showData = document.getElementById('show-data');\n  const loading = document.getElementById('loading');\n  const input = document.getElementById('search_data').value;\n\n  if (!input) {\n    showData.style.display = 'block';\n    loading.style.display = 'none';\n    showData.innerHTML = 'Inserisci una parola chiave valida per la ricerca.';\n    return;\n  }\n\n  showData.style.display = 'none';\n  loading.style.display = 'block';\n\n  axios.get(`https://openlibrary.org/subjects/${input}.json`)\n    .then((response) => {\n      const category = response.data.works;\n      const workCount = response.data.work_count;\n\n      if (workCount === 0) {\n        showData.innerHTML = 'La categoria di ricerca non ha prodotto alcun risultato.';\n      } else {\n        showData.innerHTML = '';\n        for (const works of category) {\n          const mainDiv = document.createElement('div');\n          mainDiv.className = 'container text-center border border-1 rounded mt-3 p-2';\n\n          const title = document.createElement('h3');\n          title.innerHTML = works.title ?? 'Titolo non disponibile';\n          mainDiv.appendChild(title);\n\n          const authorsName = document.createElement('p');\n          authorsName.innerHTML = works.authors?.[0]?.name ?? 'Autore non disponibile';\n          mainDiv.appendChild(authorsName);\n\n          const theUrl = document.createElement('a');\n          theUrl.innerHTML = 'Details';\n          theUrl.className = 'navbar-brand details p-2';\n          theUrl.href = `details.html?code=${works.key}`;\n          mainDiv.appendChild(theUrl);\n\n          showData.appendChild(mainDiv);\n        }\n      }\n    })\n    .catch((error) => {\n      console.error(error);\n      showData.innerHTML = 'Si è verificato un errore nella ricerca. Riprovare più tardi';\n    })\n    .finally(() => {\n      showData.style.display = 'block';\n      loading.style.display = 'none';\n    });\n}\n\n\n//# sourceURL=webpack://books/./public/assets/scripts/search.js?");

/***/ }),

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scripts_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/scripts/search */ \"./public/assets/scripts/search.js\");\n/* harmony import */ var _assets_scripts_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/scripts/description */ \"./public/assets/scripts/description.js\");\n//This code imports two functions, triggers a search when a button is clicked, and immediately runs the second function.\n\n\n\nconst input = document.getElementById('search_data');\ninput.addEventListener('keypress', (event) => {\n  if (event.key === 'Enter') {\n    event.preventDefault();\n    (0,_assets_scripts_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  }\n});\n\nconst button = document.getElementById('get-button');\nbutton.addEventListener('click', _assets_scripts_search__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n(0,_assets_scripts_description__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://books/./public/src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/index.js");
/******/ 	
/******/ })()
;