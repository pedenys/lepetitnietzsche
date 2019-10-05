webpackHotUpdate("static/development/pages/licence.js",{

/***/ "./src/components/Layout.tsx":
/*!***********************************!*\
  !*** ./src/components/Layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Meta */ "./src/components/Meta.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_GlobalStyleTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/GlobalStyleTheme */ "./src/styles/GlobalStyleTheme.ts");
/* harmony import */ var _styles_myTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/myTheme */ "./src/styles/myTheme.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header */ "./src/components/Header.tsx");

var _jsxFileName = "/Users/pedenys/LePetitNietzsche/src/components/Layout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: 0 4rem;\n    @media screen and (max-width: ", "){\n        margin: 0 2rem;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width:", ";\n    width: 100%;\n    margin: 2rem auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var LayoutContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject(), function (props) {
  return props.theme.maxWidth;
});
var LayoutInner = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div(_templateObject2(), function (props) {
  return props.theme.mobileBreakpoint;
});

var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  var year = new Date().getFullYear().toString();
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _styles_myTheme__WEBPACK_IMPORTED_MODULE_6__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(LayoutContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_Meta__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(LayoutInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    year: year,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(_styles_GlobalStyleTheme__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=licence.js.8941f92a322dbf2d1ddd.hot-update.js.map