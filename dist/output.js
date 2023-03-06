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

eval("/*!\n * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)\n * Copyright 2013-2022 Start Bootstrap\n * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)\n */\n//\n// Scripts\n//\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n  // Activate Bootstrap scrollspy on the main nav element\n  const sideNav = document.body.querySelector(\"#sideNav\");\n  if (sideNav) {\n    new bootstrap.ScrollSpy(document.body, {\n      target: \"#sideNav\",\n      offset: 74,\n    });\n  }\n\n  // Collapse responsive navbar when toggler is visible\n  const navbarToggler = document.body.querySelector(\".navbar-toggler\");\n  const responsiveNavItems = [].slice.call(\n    document.querySelectorAll(\"#navbarResponsive .nav-link\")\n  );\n  responsiveNavItems.map(function (responsiveNavItem) {\n    responsiveNavItem.addEventListener(\"click\", () => {\n      if (window.getComputedStyle(navbarToggler).display !== \"none\") {\n        navbarToggler.click();\n      }\n    });\n  });\n\n  // Get the modal\n  var measuringModal = document.getElementById(\"measuringModal\");\n  var mitigatingModal = document.getElementById(\"mitigatingModal\");\n  var designingModal = document.getElementById(\"designingModal\");\n  var jan22BlogModal = document.getElementById(\"jan22BlogModal\");\n  var feb6BlogModal = document.getElementById(\"feb6BlogModal\");\n  var feb12BlogModal = document.getElementById(\"feb12BlogModal\");\n  var mar5BlogModal = document.getElementById(\"mar5BlogModal\");\n\n  // Get the button that opens the modal\n  var measuringbtn = document.getElementById(\"measuringBtn\");\n  var mitigatingbtn = document.getElementById(\"mitigatingBtn\");\n  var designingbtn = document.getElementById(\"designingBtn\");\n  var jan22BlogBtn = document.getElementById(\"jan22BlogBtn\");\n  var feb6BlogBtn = document.getElementById(\"feb6BlogBtn\");\n  var nextWeekFeb6Btn = document.getElementById(\"nextWeekFeb6Btn\");\n  var feb12BlogBtn = document.getElementById(\"feb12BlogBtn\");\n  var nextWeekFeb12Btn = document.getElementById(\"nextWeekFeb12Btn\");\n  var mar5BlogBtn = document.getElementById(\"mar5BlogBtn\");\n  var nextWeekMar5Btn = document.getElementById(\"nextWeekMar5Btn\");\n\n  // Get the <span> element that closes the modal\n  var span = document.getElementsByClassName(\"close\");\n\n  // When the user clicks on the button, open the modal\n  measuringbtn.onclick = function () {\n    measuringModal.style.display = \"block\";\n  };\n\n  mitigatingbtn.onclick = function () {\n    mitigatingModal.style.display = \"block\";\n  };\n\n  designingbtn.onclick = function () {\n    designingModal.style.display = \"block\";\n  };\n\n  jan22BlogBtn.onclick = function () {\n    jan22BlogModal.style.display = \"block\";\n  };\n\n  feb6BlogBtn.onclick = function () {\n    feb6BlogModal.style.display = \"block\";\n  };\n\n  nextWeekFeb6Btn.onclick = function () {\n    feb6BlogModal.style.display = \"block\";\n    jan22BlogModal.style.display = \"none\";\n  };\n\n  feb12BlogBtn.onclick = function () {\n    feb12BlogModal.style.display = \"block\";\n  };\n\n  nextWeekFeb12Btn.onclick = function () {\n    feb12BlogModal.style.display = \"block\";\n    feb6BlogModal.style.display = \"none\";\n  };\n\n  nextWeekMar5Btn.onclick = function () {\n    mar5BlogModal.style.display = \"block\";\n    feb12BlogModal.style.display = \"none\";\n  };\n\n  // When the user clicks on <span> (x), close the modal\n  span[0].onclick = function () {\n    measuringModal.style.display = \"none\";\n  };\n\n  span[1].onclick = function () {\n    mitigatingModal.style.display = \"none\";\n  };\n\n  span[2].onclick = function () {\n    designingModal.style.display = \"none\";\n  };\n\n  span[3].onclick = function () {\n    jan22BlogModal.style.display = \"none\";\n  };\n\n  span[4].onclick = function () {\n    feb6BlogModal.style.display = \"none\";\n  };\n\n  span[5].onclick = function () {\n    feb12BlogModal.style.display = \"none\";\n  };\n\n  span[6].onclick = function () {\n    feb12BlogModal.style.display = \"none\";\n  };\n\n  // When the user clicks anywhere outside of the modal, close it\n  window.onclick = function (event) {\n    if (\n      event.target == measuringModal ||\n      event.target == mitigatingModal ||\n      event.target == designingModal ||\n      event.target == jan22BlogModal ||\n      event.target == feb6BlogModal ||\n      event.target == feb12BlogModal ||\n      event.target == mar5BlogModal\n    ) {\n      measuringModal.style.display = \"none\";\n      mitigatingModal.style.display = \"none\";\n      designingModal.style.display = \"none\";\n      jan22BlogModal.style.display = \"none\";\n      feb6BlogModal.style.display = \"none\";\n      feb12BlogModal.style.display = \"none\";\n      mar5BlogModal.style.display = \"none\";\n    }\n  };\n});\n\n\n//# sourceURL=webpack://grounded_site/./src/index.js?");

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