webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/Forms.js":
/*!*****************************!*\
  !*** ./Components/Forms.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js?967e");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js?3b8d");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages */ "./pages/index.js");


var _jsxFileName = "C:\\Users\\HP PAVILION PC\\Documents\\NetBeansProjects\\website\\mycountry\\Components\\Forms.js";





var Forms = function Forms(props) {
  return _pages__WEBPACK_IMPORTED_MODULE_5__["default"].getInitialProps =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var api, data, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://restcountries.eu/rest/v2/all');

            case 2:
              api = _context.sent;
              _context.next = 5;
              return api.json();

            case 5:
              data = _context.sent;
              console.log(data);

              for (i = 0; i < data.length; i++) {
                react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
                  className: "jsx-1161512681",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
                  id: "country",
                  className: "jsx-1161512681",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  },
                  __self: this
                }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
                  value: "${data[i].alpha3code}",
                  className: "jsx-1161512681",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  },
                  __self: this
                }, "$", data[i].name, " ")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
                  id: "myButton",
                  className: "jsx-1161512681",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                }, "CountryInfo"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  id: "1161512681",
                  __self: this
                }, "form.jsx-1161512681{text-align:center;}#country.jsx-1161512681{width:300px;height:25px;border:2px solid whitesmoke;}#country.jsx-1161512681::-webkit-input-placeholder{font-style:italic;color:#08e;}#country.jsx-1161512681::-moz-placeholder{font-style:italic;color:#08e;}#country.jsx-1161512681:-ms-input-placeholder{font-style:italic;color:#08e;}#country.jsx-1161512681::placeholder{font-style:italic;color:#08e;}#country.jsx-1161512681:hover{-webkit-transform:scale(0.95);-moz-transform:scale(0.95);-ms-transform:scale(0.95);-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);border-radius:5px;}#myButton.jsx-1161512681{background:#08e;height:40px;border:1px solid lightgray;border-radius:5px;font-size:15px;width:120px;}#myButton.jsx-1161512681:hover{background:#333;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFAgUEFWSUxJT04gUENcXERvY3VtZW50c1xcTmV0QmVhbnNQcm9qZWN0c1xcd2Vic2l0ZVxcbXljb3VudHJ5XFxDb21wb25lbnRzXFxGb3Jtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmdCLEFBRzJCLEFBR04sQUFNTSxBQUlZLEFBS2QsQUFRQSxZQXRCSixJQWVBLEFBUUEsRUExQmhCLEFBU2UsTUFMaUIsSUFlRCxBQVEvQixDQWpCQSxDQUU2RCxzQkFON0QsR0Fjc0IsRUFSaUUsZ0JBU3BFLFVBVDBGLEtBVTdGLFlBQ2hCLDZEQVZzQixrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxIUCBQQVZJTElPTiBQQ1xcRG9jdW1lbnRzXFxOZXRCZWFuc1Byb2plY3RzXFx3ZWJzaXRlXFxteWNvdW50cnlcXENvbXBvbmVudHNcXEZvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBpbmRleCBmcm9tICcuLi9wYWdlcyc7XHJcblxyXG5jb25zdCBGb3JtcyA9IChwcm9wcykgPT4gKFxyXG4gICAgXHJcbiAgICBpbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGNvbnN0IGFwaSA9IGF3YWl0IGZldGNoKCdodHRwczovL3Jlc3Rjb3VudHJpZXMuZXUvcmVzdC92Mi9hbGwnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmpzb24oKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBmb3IobGV0IGk9MDsgaTxkYXRhLmxlbmd0aDsgaSsrKVxyXG4gICAgPGZvcm0+XHJcbiAgICA8c2VsZWN0IGlkPVwiY291bnRyeVwiPlxyXG4gICAgPG9wdGlvbiB2YWx1ZT1cIiR7ZGF0YVtpXS5hbHBoYTNjb2RlfVwiPiR7ZGF0YVtpXS5uYW1lfSA8L29wdGlvbj5cclxuICAgIFxyXG4gICAgPC9zZWxlY3Q+XHJcbiAgICA8YnV0dG9uIGlkPVwibXlCdXR0b25cIj5Db3VudHJ5SW5mbzwvYnV0dG9uPlxyXG4gICAgXHJcblxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIGZvcm17XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgI2NvdW50cnl7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZXNtb2tlO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAjY291bnRyeTo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGNvbG9yOiAjMDhlOyBcclxuICAgIH1cclxuICAgICNjb3VudHJ5OmhvdmVye1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTstbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7LW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7dHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI215QnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwOGU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgIH1cclxuICAgICNteUJ1dHRvbjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIH1cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7Il19 */\n/*@ sourceURL=C:\\Users\\HP PAVILION PC\\Documents\\NetBeansProjects\\website\\mycountry\\Components\\Forms.js */"));
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Layout */ "./Components/Layout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_Forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Forms */ "./Components/Forms.js");
var _jsxFileName = "C:\\Users\\HP PAVILION PC\\Documents\\NetBeansProjects\\website\\mycountry\\pages\\index.js";






var index = function index(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3310251337",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3310251337",
    __self: this
  }, "body{background:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcSFAgUEFWSUxJT04gUENcXERvY3VtZW50c1xcTmV0QmVhbnNQcm9qZWN0c1xcd2Vic2l0ZVxcbXljb3VudHJ5XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXVCLEFBR3VCLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXEhQIFBBVklMSU9OIFBDXFxEb2N1bWVudHNcXE5ldEJlYW5zUHJvamVjdHNcXHdlYnNpdGVcXG15Y291bnRyeVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9Db21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRm9ybXMgZnJvbSAnLi4vQ29tcG9uZW50cy9Gb3Jtcyc7XHJcblxyXG5jb25zdCBpbmRleCA9IChwcm9wcyk9PiAoXHJcbjxMYXlvdXQ+XHJcbiAgIDxkaXY+XHJcblxyXG5cclxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgYm9keXtcclxuICAgICAgYmFja2dyb3VuZDogIzMzMztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICBcclxuICAgICk7XHJcblxyXG4gICAgICAgIDxGb3JtcyAvPlxyXG4gICAgICAgXHJcbiAgICBcclxuICAgXHJcbiAgICBleHBvcnQgZGVmYXVsdCBpbmRleDsiXX0= */\n/*@ sourceURL=C:\\Users\\HP PAVILION PC\\Documents\\NetBeansProjects\\website\\mycountry\\pages\\index.js */")));
};

react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Components_Forms__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
});
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.c86114496310dfc0e4a5.hot-update.js.map