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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Box sizing rules */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Remove default margin */\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\np,\\r\\nfigure,\\r\\nblockquote,\\r\\ndl,\\r\\ndd {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\\r\\nul[role='list'],\\r\\nol[role='list'] {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* Set core root defaults */\\r\\nhtml:focus-within {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/* Set core body defaults */\\r\\nbody {\\r\\n  min-height: 100vh;\\r\\n  text-rendering: optimizeSpeed;\\r\\n  line-height: 1.5;\\r\\n}\\r\\n\\r\\n/* A elements that don't have a class get default styles */\\r\\na:not([class]) {\\r\\n  text-decoration-skip-ink: auto;\\r\\n}\\r\\n\\r\\n/* Make images easier to work with */\\r\\nimg,\\r\\npicture {\\r\\n  max-width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n/* Inherit fonts for inputs and buttons */\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n  font: inherit;\\r\\n}\\r\\n\\r\\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n  html:focus-within {\\r\\n    scroll-behavior: auto;\\r\\n  }\\r\\n\\r\\n  *,\\r\\n  *::before,\\r\\n  *::after {\\r\\n    animation-duration: 0.01ms !important;\\r\\n    animation-iteration-count: 1 !important;\\r\\n    transition-duration: 0.01ms !important;\\r\\n    scroll-behavior: auto !important;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* END of resets */\\r\\n\\r\\nnav > div {\\r\\n  display: flex;\\r\\n  margin: 2em 0;\\r\\n}\\r\\n\\r\\n#navigation {\\r\\n  margin: 3em 2em;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n#pageLogo {\\r\\n  margin: 0 2em;\\r\\n}\\r\\n\\r\\n#pages {\\r\\n  padding: 0;\\r\\n  margin: 0 2em;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  align-content: space-around;\\r\\n}\\r\\n\\r\\n.charSpecs > li {\\r\\n  margin: 0.25em 0.5em;\\r\\n}\\r\\n\\r\\n#pages > li {\\r\\n  margin: 0 2em;\\r\\n}\\r\\n\\r\\n.clickable {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* List of characters */\\r\\n#container-list {\\r\\n  margin-bottom: 170px;\\r\\n}\\r\\n\\r\\n#list-of-char {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  grid-gap: 30px;\\r\\n}\\r\\n\\r\\n.char-btn {\\r\\n  box-shadow: 10px 5px 5px rgb(94, 94, 94);\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n#modal {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background: rgba(0, 0, 0, 0.83);\\r\\n\\r\\n  /* background-image: url(./assets/PNG/backgroundModal.png);\\r\\n  background-repeat: no-repeat;\\r\\n  background-position: 45%,0%;\\r\\n  background-size: 60%; */\\r\\n}\\r\\n\\r\\n#modalMain {\\r\\n  width: 30%;\\r\\n  height: 90%;\\r\\n  margin: 60px auto;\\r\\n  padding: 1em;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  color: #19f0de;\\r\\n  background: rgba(78, 182, 4, 0.72);\\r\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2), inset 0 1px 4px rgba(165, 232, 53, 0.73), inset 0 20px 40px rgba(255, 255, 255, 0.25), inset 0 -4px 4px rgba(255, 255, 255, 0.25), inset 0 -40px 20px rgba(0, 0, 0, 0.2), inset 0 4px 12px rgba(255, 255, 255, 0.4);\\r\\n  backdrop-filter: blur(40px);\\r\\n\\r\\n  /* Note: backdrop-filter has minimal browser support */\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\n#modalMain > ul {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.modalImg {\\r\\n  width: 300px;\\r\\n  height: auto;\\r\\n  margin: 1em;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  /* margin: 60px; */\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background-color: transparent;\\r\\n  color: #0db6a2;\\r\\n  font-family: sans-serif;\\r\\n  font-size: 16px;\\r\\n  font-weight: bold;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n  align-self: flex-end;\\r\\n}\\r\\n\\r\\n.charSpecs {\\r\\n  margin: 1em;\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n/* footer */\\r\\nfooter {\\r\\n  background-color: rgb(0, 0, 0);\\r\\n}\\r\\n\\r\\n.like-btn:active {\\r\\n  transform: translateY(4px);\\r\\n}\\r\\n\\r\\n.like-btn:hover {\\r\\n  color: aqua;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-based-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-based-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-based-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _utils_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/nav */ \"./src/utils/nav.js\");\n/* harmony import */ var _utils_list_of_char__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/list-of-char */ \"./src/utils/list-of-char.js\");\n/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/modal */ \"./src/utils/modal.js\");\n/* harmony import */ var _utils_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/counter */ \"./src/utils/counter.js\");\n// eslint-disable-next-line no-console\n\n\n\n\n\n\n(0,_utils_list_of_char__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_utils_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_utils_counter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_utils_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://api-based-capstone/./src/index.js?");

/***/ }),

/***/ "./src/utils/counter.js":
/*!******************************!*\
  !*** ./src/utils/counter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/utils/fetchData.js\");\n\n\nconst number0fChars = document.getElementById('number-of-chars');\n\nconst itemsCounter = async () => {\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAll('https://rickandmortyapi.com/api/character', 'results')\n    .then((data) => {\n      number0fChars.innerHTML = `${data.length}`;\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n//# sourceURL=webpack://api-based-capstone/./src/utils/counter.js?");

/***/ }),

/***/ "./src/utils/fetchData.js":
/*!********************************!*\
  !*** ./src/utils/fetchData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ myRequestGet)\n/* harmony export */ });\n/* eslint-disable consistent-return */\r\nclass myRequestGet {\r\n  constructor() {\r\n    this.IdUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/KUcXNh15Xp4XOwHZwJel';\r\n  }\r\n\r\n   static getAll = async (url, member = null) => {\r\n     try {\r\n       const charsData = await fetch(url)\r\n         .then((res) => res.json())\r\n         .then((data) => data);\r\n       const charArr = charsData[member];\r\n\r\n       return charArr;\r\n     } catch (err) {\r\n       console.error(err);\r\n     }\r\n   }\r\n\r\n  static getOne = async (url) => {\r\n    try {\r\n      const charsData = await fetch(url)\r\n        .then((res) => res.json())\r\n        .then((data) => data);\r\n\r\n      return charsData;\r\n    } catch (err) {\r\n      console.error(err);\r\n    }\r\n  }\r\n\r\n  static getLikes = async (url) => {\r\n    try {\r\n      const charsData = await fetch(url)\r\n        .then((res) => res.json())\r\n        .then((data) => data);\r\n\r\n      return charsData;\r\n    } catch (err) {\r\n      console.error(err);\r\n    }\r\n  }\r\n\r\n  static postLike = async (url, charId) => {\r\n    try {\r\n      return await fetch(url, {\r\n        method: 'POST',\r\n        body: JSON.stringify({\r\n          item_id: charId,\r\n        }),\r\n        headers: {\r\n          'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n      });\r\n    } catch (err) {\r\n      console.error(err);\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://api-based-capstone/./src/utils/fetchData.js?");

/***/ }),

/***/ "./src/utils/list-of-char.js":
/*!***********************************!*\
  !*** ./src/utils/list-of-char.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/utils/fetchData.js\");\n\n\nconst listOfChar = document.getElementById('list-of-char');\n\nconst renderCharacters = async () => {\n  fetch('https://rickandmortyapi.com/api/character', {\n    method: 'GET',\n  }).then((resp) => resp.json())\n    .then((json) => json.results)\n    .then((result) => {\n      result.forEach((element) => {\n        const li = document.createElement('li');\n        listOfChar.appendChild(li);\n        li.id = element.id;\n        li.innerHTML = `\n          <img src=${element.image} alt=\"${element.name} image\" class=\"mx-auto px-4 pt-4 pb-2 w-75\">\n          <p class=\"text-center mb-1 bold\">${element.name}</p>\n          <div class=\"d-flex flex-column align-items-center gap-2\">\n            <div class=\"d-flex align-items-center justify-content-center w-100\">\n              <i id=\"like-btn-${element.id}\" class=\"far fa-heart me-1 clickable like-btn\"></i>\n              <span>Likes</span>\n              <span id=\"likes-char-${element.id}\">: 0</span>\n            </div>\n            <span class=\"elementDisplay char-btn w-50 px-4 py-2 border text-center bg-dark text-info clickable\">Comments</span>\n            <span class=\"char-btn w-50 px-4 py-2 border text-center bg-dark text-info clickable\">Reservations</span>\n          </div>\n        `;\n      });\n\n      _fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/likes')\n        .then((likesArray) => {\n          likesArray.forEach((item) => {\n            const likesChar = document.getElementById(`likes-char-${item.item_id}`);\n            likesChar.innerHTML = `: ${item.likes}`;\n          });\n        });\n      return result;\n    })\n    .then((result) => {\n      result.forEach((element) => {\n        const likeBtn = document.getElementById(`like-btn-${element.id}`);\n        likeBtn.addEventListener('click', () => {\n          _fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postLike('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/likes', element.id).then(() => _fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KUcXNh15Xp4XOwHZwJel/likes').then((likesArray) => {\n            likesArray.forEach((item) => {\n              const likesChar = document.getElementById(`likes-char-${item.item_id}`);\n              likesChar.innerHTML = `: ${item.likes}`;\n            });\n          }));\n        });\n      });\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCharacters);\n\n\n//# sourceURL=webpack://api-based-capstone/./src/utils/list-of-char.js?");

/***/ }),

/***/ "./src/utils/modal.js":
/*!****************************!*\
  !*** ./src/utils/modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/utils/fetchData.js\");\n/* eslint-disable no-use-before-define */\n\n\nconst APIurl = 'https://rickandmortyapi.com/api/character/';\n// const modalHTML =`\n// <div id=\"modal\" class=\"hide\">\n//   <div id=\"modalMain\">\n//     <button id=\"closeBtn\">x</button>\n//     <img src=\"${value.image}\" alt=\"${value.name} thumbnail\" class=\"modalImg\">\n//     <h4>${value.name}</h4>\n//     <ul class=\"charSpecs\">\n//       <li>Status: ${value.status}</li>\n//       <li>Type: ${value.type}</li>\n//       <li>Gender: ${value.gender}</li>\n//       <li>Origin: ${value[0].name}</li>\n//     </ul>\n//    </div>\n//  </div>\n// `\n\nconst renderModal = (id) => {\n  _fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getOne(`${APIurl}${id}`).then((value) => {\n    document.body.insertAdjacentHTML('afterbegin', `\n    <div id=\"modal\">\n      <div id=\"modalMain\">\n        <button class=\"closeBtn\">x</button>\n        <img src=\"${value.image}\" alt=\"${value.name} thumbnail\" class=\"modalImg\">\n        <h4>${value.name}</h4>\n        <ul class=\"charSpecs\">\n          <li>Status: ${value.status}</li>\n          <li>Type: ${value.type}</li>\n          <li>Gender: ${value.gender}</li>\n          <li>Origin: ${value.origin.name}</li>\n          <li>Location: ${value.location.name}</li>\n        </ul>\n       </div>\n     </div>   \n    `);\n    closeBtn();\n  });\n};\n\nconst closeBtn = () => {\n  const btn = document.getElementById('modal');\n  btn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('closeBtn')) {\n      const modal = document.querySelector('#modal');\n      modal.classList.toggle('hide');\n    }\n  });\n};\n\nconst commentEvent = () => {\n  const commentsBtns = document.getElementById('list-of-char');\n  commentsBtns.addEventListener('click', (e) => {\n    if (e.target.classList.contains('elementDisplay')) {\n      const { id } = e.target.parentElement.parentElement;\n      renderModal(id);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentEvent);\n\n//# sourceURL=webpack://api-based-capstone/./src/utils/modal.js?");

/***/ }),

/***/ "./src/utils/nav.js":
/*!**************************!*\
  !*** ./src/utils/nav.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLogo = __webpack_require__(/*! ../assets/PNG/Rick-Logo.png */ \"./src/assets/PNG/Rick-Logo.png\");\n\nconst renderLogo = () => {\n  const container = document.getElementById('pageLogo');\n  const logo = new Image();\n  logo.src = pageLogo;\n  logo.classList.add('d-inline');\n\n  container.insertAdjacentElement('afterbegin', logo);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderLogo);\n\n//# sourceURL=webpack://api-based-capstone/./src/utils/nav.js?");

/***/ }),

/***/ "./src/assets/PNG/Rick-Logo.png":
/*!**************************************!*\
  !*** ./src/assets/PNG/Rick-Logo.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f07bb83ddb61cc1454a9.png\";\n\n//# sourceURL=webpack://api-based-capstone/./src/assets/PNG/Rick-Logo.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;