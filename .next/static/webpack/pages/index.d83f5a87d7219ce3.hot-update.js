"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _13_university_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./13-university-classic */ \"./pages/13-university-classic/index.js\");\n/* harmony import */ var _backToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backToTop */ \"./pages/backToTop.js\");\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { videoDatas } = param;\n    const videoData = videoDatas;\n    console.log(\"data\", videoData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_13_university_classic__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    videoData: data\n                }, void 0, false, {\n                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\index.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_backToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\index.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBQ1g7O0FBRXJCLFNBQVNFLEtBQUssS0FBWTtRQUFaLEVBQUNDLFVBQVUsRUFBQyxHQUFaO0lBQzNCLE1BQU1DLFlBQVlEO0lBQ2xCRSxRQUFRQyxHQUFHLENBQUMsUUFBT0Y7SUFFbkIscUJBQ0U7a0JBQ0UsNEVBQUNHO1lBQUtDLFdBQVU7OzhCQUNkLDhEQUFDUiw4REFBUUE7b0JBQUNJLFdBQVdLOzs7Ozs7OEJBQ3JCLDhEQUFDUixrREFBU0E7Ozs7Ozs7Ozs7OztBQUlsQjtLQVp3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vMTMtdW5pdmVyc2l0eS1jbGFzc2ljXCI7XG5pbXBvcnQgQmFja1RvVG9wIGZyb20gXCIuL2JhY2tUb1RvcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHt2aWRlb0RhdGFzfSkge1xuICBjb25zdCB2aWRlb0RhdGEgPSB2aWRlb0RhdGFzO1xuICBjb25zb2xlLmxvZyhcImRhdGFcIix2aWRlb0RhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8SG9tZVBhZ2UgdmlkZW9EYXRhPXtkYXRhfS8+XG4gICAgICAgIDxCYWNrVG9Ub3AgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwOi8vMTM5LjU5Ljc4LjQ5OjEzMzcvYXBpL2xvbmRvbi1jb2xsZWdlLXZpZGVvcz9wb3B1bGF0ZT0qXCIsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICAgICAgXCJCZWFyZXIgM2U3ODJkZjkwZWViMzM0MzAwNGNmMzJmMmJiMGE2ODcxYjY0MjcxZTY3MDFhNzJlMzhjYzk1NzU2YTUxZmM3MmEzMTc1MDExOTk4ZDhlODEyNDcwNzM4Mjg4Y2JhNTVhNzdhNGViOWU1ZDZjNmJmZTZiZmY4ZGQzN2RkOGRhZWM5MWUxMGExY2Q0MGRkYmY4NzkyMTY4NzU3ZDIxZjEwM2MzOTM1MDk2Yzg1YjFkYWE5ZWNmMzkwZDRlYmZkMDAyODY4Y2Y3YzY5OGQ1MGE4NzVlZDFjNjZlNTlhZmQ2M2QwNWU5YTllNTg5Y2I3NDJjMGEwMjZjZDhjMGY4MmMyY1wiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgdmlkZW9EYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdmlkZW9EYXRhcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZXJyb3I6IFwiRXJyb3IgZmV0Y2hpbmcgdmlkZW8gZGF0YVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiQmFja1RvVG9wIiwiSG9tZSIsInZpZGVvRGF0YXMiLCJ2aWRlb0RhdGEiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});