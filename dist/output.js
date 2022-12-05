/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/*!\n* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)\n* Copyright 2013-2022 Start Bootstrap\n* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)\n*/\n//\n// Scripts\n// \n\nwindow.addEventListener('DOMContentLoaded', event => {\n\n    // Activate Bootstrap scrollspy on the main nav element\n    const sideNav = document.body.querySelector('#sideNav');\n    if (sideNav) {\n        new bootstrap.ScrollSpy(document.body, {\n            target: '#sideNav',\n            offset: 74,\n        });\n    };\n\n    // Collapse responsive navbar when toggler is visible\n    const navbarToggler = document.body.querySelector('.navbar-toggler');\n    const responsiveNavItems = [].slice.call(\n        document.querySelectorAll('#navbarResponsive .nav-link')\n    );\n    responsiveNavItems.map(function (responsiveNavItem) {\n        responsiveNavItem.addEventListener('click', () => {\n            if (window.getComputedStyle(navbarToggler).display !== 'none') {\n                navbarToggler.click();\n            }\n        });\n    });\n\n});\n\n\n//# sourceURL=webpack://grounded_site/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;