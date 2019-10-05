webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/PageTitle.tsx":
/*!**************************************!*\
  !*** ./src/components/PageTitle.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/pedenys/LePetitNietzsche/src/components/PageTitle.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: ", ";\n    border: ", ";\n    min-width: ", ";\n    max-width: 100%;\n    width:", " ;\n    p {\n        font-family:'Eczar';\n        text-align: center;\n        font-size:", ";\n        margin:", ";\n        padding:0.1rem 0;\n        color:", ";\n        font-weight:", ";\n    }\n    @media screen and (max-width: ", "){\n        min-width:100%;\n        width:100%;\n        p {\n            font-size:2rem;\n            line-height:1;\n            padding:1rem 0;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display:flex;\n    flex-direction:row;\n    justify-content: center;\n    align-content: center;\n    align-content:center;\n\n    margin-bottom: 4rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PageTitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var PageTitleInner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), function (props) {
  return props.subTitle ? props.theme.colors.gray : props.title ? props.theme.colors.white : props.theme.colors.white;
}, function (props) {
  return props.theme.borderWide;
}, function (props) {
  return props.subTitle ? '40%' : '100%';
}, function (props) {
  return props.title ? '100%' : '80%';
}, function (props) {
  return props.subTitle ? '1.6rem' : props.title ? '2.6rem' : '1.6rem';
}, function (props) {
  return props.subTitle ? '0.3rem' : props.title ? '0' : '0';
}, function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.title ? '500' : '200';
}, function (props) {
  return props.theme.mobileBreakpoint;
});

var PageTitle = function PageTitle(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle;
  return __jsx(PageTitleContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(PageTitleInner, {
    title: title,
    subTitle: subTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("p", {
    dangerouslySetInnerHTML: {
      __html: title ? title : subTitle ? subTitle : ' '
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ })

})
//# sourceMappingURL=index.js.5cc6df23fc8b36534aae.hot-update.js.map