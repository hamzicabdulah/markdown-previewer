/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Markdown = React.createClass({\n  displayName: 'Markdown',\n\n  getInitialState: function getInitialState() {\n    var initialResult = 'Heading\\n=======\\n\\nSub-heading\\n-----------\\n \\n### Another deeper heading\\n \\nParagraphs are separated\\nby a blank line.\\n\\nLeave 2 spaces at the end of a line to do a  \\nline break\\n\\nText attributes *italic*, **bold**, \\n`monospace`, ~~strikethrough~~ .\\n\\nShopping list:\\n\\n  * apples\\n  * oranges\\n  * pears\\n\\nNumbered list:\\n\\n  1. apples\\n  2. oranges\\n  3. pears\\n\\nThe rain---not the reign---in\\nSpain.\\n\\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';\n    return { result: initialResult };\n  },\n  updateResult: function updateResult(e) {\n    this.setState({\n      result: e.target.value\n    });\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      null,\n      React.createElement('textarea', { onChange: this.updateResult, value: this.state.result }),\n      React.createElement('div', { className: 'result', dangerouslySetInnerHTML: { __html: marked(this.state.result, { sanitize: true }) } })\n    );\n  }\n});\n\nReactDOM.render(React.createElement(Markdown, null), document.getElementById('app'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY3JpcHRzL2FwcC5qcz83N2VhIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBNYXJrZG93biA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGluaXRpYWxSZXN1bHQgPSAnSGVhZGluZ1xcbj09PT09PT1cXG5cXG5TdWItaGVhZGluZ1xcbi0tLS0tLS0tLS0tXFxuIFxcbiMjIyBBbm90aGVyIGRlZXBlciBoZWFkaW5nXFxuIFxcblBhcmFncmFwaHMgYXJlIHNlcGFyYXRlZFxcbmJ5IGEgYmxhbmsgbGluZS5cXG5cXG5MZWF2ZSAyIHNwYWNlcyBhdCB0aGUgZW5kIG9mIGEgbGluZSB0byBkbyBhICBcXG5saW5lIGJyZWFrXFxuXFxuVGV4dCBhdHRyaWJ1dGVzICppdGFsaWMqLCAqKmJvbGQqKiwgXFxuYG1vbm9zcGFjZWAsIH5+c3RyaWtldGhyb3VnaH5+IC5cXG5cXG5TaG9wcGluZyBsaXN0OlxcblxcbiAgKiBhcHBsZXNcXG4gICogb3Jhbmdlc1xcbiAgKiBwZWFyc1xcblxcbk51bWJlcmVkIGxpc3Q6XFxuXFxuICAxLiBhcHBsZXNcXG4gIDIuIG9yYW5nZXNcXG4gIDMuIHBlYXJzXFxuXFxuVGhlIHJhaW4tLS1ub3QgdGhlIHJlaWduLS0taW5cXG5TcGFpbi5cXG5cXG4gKltIZXJtYW4gRmFzc2V0dF0oaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tL2hlcm1hbmZhc3NldHQpKic7XHJcbiAgICByZXR1cm4ge3Jlc3VsdDogaW5pdGlhbFJlc3VsdH07XHJcbiAgfSxcclxuICB1cGRhdGVSZXN1bHQ6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgcmVzdWx0OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHRleHRhcmVhIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVJlc3VsdH0gdmFsdWU9e3RoaXMuc3RhdGUucmVzdWx0fT48L3RleHRhcmVhPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IG1hcmtlZCh0aGlzLnN0YXRlLnJlc3VsdCwge3Nhbml0aXplOiB0cnVlfSl9fT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPE1hcmtkb3duIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc2NyaXB0cy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQWpCQTtBQUNBO0FBbUJBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);