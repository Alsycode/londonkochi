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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _13_university_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./13-university-classic */ \"./pages/13-university-classic/index.js\");\n/* harmony import */ var _backToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./backToTop */ \"./pages/backToTop.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { videoDatas, testimonialDatas, updateDatas } = param;\n    const videoData = videoDatas;\n    const testimonialData = testimonialDatas;\n    console.log(\"dataset\", testimonialData);\n    const update = updateDatas;\n    console.log(\"update22222222222222222\", updateDatas);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_13_university_classic__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    videoData: videoData,\n                    testimonialData: testimonialData,\n                    update: update && update.length > 0 ? update : null\n                }, void 0, false, {\n                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_backToTop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\index.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\index.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBK0M7QUFDWDtBQUNGOztBQUNsQixTQUFTRyxLQUFLLEtBQTRDO1FBQTVDLEVBQUVDLFVBQVUsRUFBRUMsZ0JBQWdCLEVBQUVDLFdBQVcsRUFBQyxHQUE1QztJQUM1QixNQUFNQyxZQUFZSDtJQUNsQixNQUFNSSxrQkFBa0JIO0lBQ3hCSSxRQUFRQyxHQUFHLENBQUMsV0FBV0Y7SUFDdkIsTUFBTUcsU0FBU0w7SUFDZkcsUUFBUUMsR0FBRyxDQUFDLDJCQUEwQko7SUFFdEMscUJBQ0U7a0JBQ0UsNEVBQUNNO1lBQUtDLFdBQVU7OzhCQUNoQiw4REFBQ2IsOERBQVFBO29CQUFDTyxXQUFXQTtvQkFBV0MsaUJBQWlCQTtvQkFBaUJHLFFBQVFBLFVBQVVBLE9BQU9HLE1BQU0sR0FBRyxJQUFJSCxTQUFTOzs7Ozs7OEJBRy9HLDhEQUFDVixrREFBU0E7Ozs7Ozs7Ozs7OztBQUlsQjtLQWpCeUJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuLzEzLXVuaXZlcnNpdHktY2xhc3NpY1wiO1xuaW1wb3J0IEJhY2tUb1RvcCBmcm9tIFwiLi9iYWNrVG9Ub3BcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB2aWRlb0RhdGFzLCB0ZXN0aW1vbmlhbERhdGFzLCB1cGRhdGVEYXRhc30pIHtcbiAgY29uc3QgdmlkZW9EYXRhID0gdmlkZW9EYXRhcztcbiAgY29uc3QgdGVzdGltb25pYWxEYXRhID0gdGVzdGltb25pYWxEYXRhcztcbiAgY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIHRlc3RpbW9uaWFsRGF0YSk7XG4gIGNvbnN0IHVwZGF0ZSA9IHVwZGF0ZURhdGFzO1xuICBjb25zb2xlLmxvZyhcInVwZGF0ZTIyMjIyMjIyMjIyMjIyMjIyXCIsdXBkYXRlRGF0YXMpXG4gIFxuICByZXR1cm4gKCBcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8SG9tZVBhZ2UgdmlkZW9EYXRhPXt2aWRlb0RhdGF9IHRlc3RpbW9uaWFsRGF0YT17dGVzdGltb25pYWxEYXRhfSB1cGRhdGU9e3VwZGF0ZSAmJiB1cGRhdGUubGVuZ3RoID4gMCA/IHVwZGF0ZSA6IG51bGx9IC8+XG5cbiAgIFxuICAgICAgICA8QmFja1RvVG9wIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICB0cnkge1xuICAgIC8vIEZldGNoIHZpZGVvIGRhdGFcbiAgICBjb25zdCB2aWRlb1JlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwOi8vMTM5LjU5Ljc4LjQ5OjEzMzcvYXBpL2xvbmRvbi1jb2xsZWdlLXZpZGVvcz9wb3B1bGF0ZT0qXCIsXG4gICAgICB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICAgICAgXCJCZWFyZXIgM2U3ODJkZjkwZWViMzM0MzAwNGNmMzJmMmJiMGE2ODcxYjY0MjcxZTY3MDFhNzJlMzhjYzk1NzU2YTUxZmM3MmEzMTc1MDExOTk4ZDhlODEyNDcwNzM4Mjg4Y2JhNTVhNzdhNGViOWU1ZDZjNmJmZTZiZmY4ZGQzN2RkOGRhZWM5MWUxMGExY2Q0MGRkYmY4NzkyMTY4NzU3ZDIxZjEwM2MzOTM1MDk2Yzg1YjFkYWE5ZWNmMzkwZDRlYmZkMDAyODY4Y2Y3YzY5OGQ1MGE4NzVlZDFjNjZlNTlhZmQ2M2QwNWU5YTllNTg5Y2I3NDJjMGEwMjZjZDhjMGY4MmMyY1wiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgdmlkZW9EYXRhcyA9IGF3YWl0IHZpZGVvUmVzLmpzb24oKTtcblxuICAgIC8vIEZldGNoIHRlc3RpbW9uaWFscyBkYXRhXG4gICAgY29uc3QgdGVzdGltb25pYWxSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cDovLzEzOS41OS43OC40OToxMzM3L2FwaS9sb25kb24tY29sbGVnZS10ZXN0aW1vbmlhbHM/cG9wdWxhdGU9KlwiLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAgIFwiQmVhcmVyIDNlNzgyZGY5MGVlYjMzNDMwMDRjZjMyZjJiYjBhNjg3MWI2NDI3MWU2NzAxYTcyZTM4Y2M5NTc1NmE1MWZjNzJhMzE3NTAxMTk5OGQ4ZTgxMjQ3MDczODI4OGNiYTU1YTc3YTRlYjllNWQ2YzZiZmU2YmZmOGRkMzdkZDhkYWVjOTFlMTBhMWNkNDBkZGJmODc5MjE2ODc1N2QyMWYxMDNjMzkzNTA5NmM4NWIxZGFhOWVjZjM5MGQ0ZWJmZDAwMjg2OGNmN2M2OThkNTBhODc1ZWQxYzY2ZTU5YWZkNjNkMDVlOWE5ZTU4OWNiNzQyYzBhMDI2Y2Q4YzBmODJjMmNcIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHRlc3RpbW9uaWFsRGF0YXMgPSBhd2FpdCB0ZXN0aW1vbmlhbFJlcy5qc29uKCk7XG5cbiAgICAvLyBGZXRjaCB1cGRhdGVzIGRhdGFcbiAgICBjb25zdCB1cGRhdGVSZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cDovLzEzOS41OS43OC40OToxMzM3L2FwaS9sb25kb24tY29sbGVnZXVwZGF0ZXM/cG9wdWxhdGU9KlwiLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAgIFwiQmVhcmVyIDNlNzgyZGY5MGVlYjMzNDMwMDRjZjMyZjJiYjBhNjg3MWI2NDI3MWU2NzAxYTcyZTM4Y2M5NTc1NmE1MWZjNzJhMzE3NTAxMTk5OGQ4ZTgxMjQ3MDczODI4OGNiYTU1YTc3YTRlYjllNWQ2YzZiZmU2YmZmOGRkMzdkZDhkYWVjOTFlMTBhMWNkNDBkZGJmODc5MjE2ODc1N2QyMWYxMDNjMzkzNTA5NmM4NWIxZGFhOWVjZjM5MGQ0ZWJmZDAwMjg2OGNmN2M2OThkNTBhODc1ZWQxYzY2ZTU5YWZkNjNkMDVlOWE5ZTU4OWNiNzQyYzBhMDI2Y2Q4YzBmODJjMmNcIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IHVwZGF0ZURhdGFzID0gYXdhaXQgdXBkYXRlUmVzLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICB2aWRlb0RhdGFzLFxuICAgICAgICB0ZXN0aW1vbmlhbERhdGFzLFxuICAgICAgICB1cGRhdGVEYXRhcyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgZXJyb3I6IFwiRXJyb3IgZmV0Y2hpbmcgZGF0YVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJCYWNrVG9Ub3AiLCJ1c2VFZmZlY3QiLCJIb21lIiwidmlkZW9EYXRhcyIsInRlc3RpbW9uaWFsRGF0YXMiLCJ1cGRhdGVEYXRhcyIsInZpZGVvRGF0YSIsInRlc3RpbW9uaWFsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJtYWluIiwiY2xhc3NOYW1lIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});