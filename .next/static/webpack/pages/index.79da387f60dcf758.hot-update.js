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

/***/ "./components/bannervideo/index.js":
/*!*****************************************!*\
  !*** ./components/bannervideo/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_banner_one_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/banner/one.jpg */ \"./public/images/banner/one.jpg\");\n/* harmony import */ var _public_images_banner_logo1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/images/banner/logo1.jpg */ \"./public/images/banner/logo1.jpg\");\n/* harmony import */ var _public_images_banner_logo2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/banner/logo2.png */ \"./public/images/banner/logo2.png\");\n\nvar _s = $RefreshSig$();\n\n // Import your background image\n // Import left logo image\n // Import right logo image\nconst Main = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Function to play the video\n        const playVideo = ()=>{\n            const video = document.getElementById(\"myVideo\");\n            if (video) {\n                video.play().catch((error)=>{\n                    // Autoplay was prevented\n                    console.error(\"Autoplay was prevented:\", error);\n                });\n            }\n        };\n        // Attempt to play the video when the component mounts\n        playVideo();\n        // Clean up\n        return ()=>{\n            // Optionally, you can pause the video when the component unmounts\n            const video = document.getElementById(\"myVideo\");\n            if (video) {\n                video.pause();\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background-container\",\n        style: {\n            width: \"100%\",\n            height: \"100vh\",\n            backgroundImage: \"url(/images/banner/banner1.jpg)\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundPosition: \"center\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/banner/logo1.jpg\",\n                alt: \"Left Logo\",\n                style: {\n                    position: \"absolute\",\n                    left: \"10%\",\n                    top: \"50%\",\n                    transform: \"translateY(-50%)\",\n                    zIndex: \"2\",\n                    width: \"20%\"\n                }\n            }, void 0, false, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/images/banner/logo2.png\",\n                alt: \"Right Logo\",\n                style: {\n                    position: \"absolute\",\n                    right: \"10%\",\n                    top: \"50%\",\n                    transform: \"translateY(-50%)\",\n                    zIndex: \"2\",\n                    width: \"25%\"\n                }\n            }, void 0, false, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"main\",\n                style: {\n                    width: \"100%\",\n                    height: \"100vh\",\n                    position: \"relative\",\n                    borderRadius: \"20px\",\n                    zIndex: 1\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overlay\",\n                        style: {\n                            position: \"absolute\",\n                            top: 0,\n                            left: 0,\n                            width: \"100%\",\n                            height: \"100%\",\n                            backgroundColor: \"rgba(0,0,0,.4)\",\n                            zIndex: 1,\n                            borderRadius: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        id: \"myVideo\",\n                        src: \"/video.mp4\",\n                        // autoPlay\n                        loop: true,\n                        // Add muted attribute for autoplay to work in some browsers\n                        style: {\n                            width: \"100%\",\n                            height: \"100%\",\n                            objectFit: \"contain\",\n                            position: \"relative\",\n                            zIndex: 0\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"content\",\n                        style: {\n                            position: \"absolute\",\n                            width: \"100%\",\n                            height: \"100%\",\n                            top: 0,\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            color: \"white\",\n                            zIndex: 2\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\bannervideo\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jhbm5lcnZpZGVvL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDd0IsQ0FBQywrQkFBK0I7QUFDckMsQ0FBQyx5QkFBeUI7QUFDekIsQ0FBQywwQkFBMEI7QUFFeEYsTUFBTUssT0FBTzs7SUFDWEosZ0RBQVNBLENBQUM7UUFDUiw2QkFBNkI7UUFDN0IsTUFBTUssWUFBWTtZQUNoQixNQUFNQyxRQUFRQyxTQUFTQyxjQUFjLENBQUM7WUFDdEMsSUFBSUYsT0FBTztnQkFDVEEsTUFBTUcsSUFBSSxHQUFHQyxLQUFLLENBQUNDLENBQUFBO29CQUNqQix5QkFBeUI7b0JBQ3pCQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtnQkFDM0M7WUFDRjtRQUNGO1FBRUEsc0RBQXNEO1FBQ3RETjtRQUVBLFdBQVc7UUFDWCxPQUFPO1lBQ0wsa0VBQWtFO1lBQ2xFLE1BQU1DLFFBQVFDLFNBQVNDLGNBQWMsQ0FBQztZQUN0QyxJQUFJRixPQUFPO2dCQUNUQSxNQUFNTyxLQUFLO1lBQ2I7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZDLE9BQU87WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JqQixpQkFBa0I7WUFDbEJrQixnQkFBZ0I7WUFDaEJDLGtCQUFrQjtZQUNsQkMsb0JBQW9CO1lBQ3BCQyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxVQUFVO1FBQ1o7OzBCQUdBLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSlosT0FBTztvQkFDTFMsVUFBVTtvQkFDVkksTUFBTTtvQkFDTkMsS0FBSztvQkFDTEMsV0FBVztvQkFDWEMsUUFBUTtvQkFBSWYsT0FBTTtnQkFDcEI7Ozs7OzswQkFJRiw4REFBQ1M7Z0JBQ0NDLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0paLE9BQU87b0JBQ0xTLFVBQVU7b0JBQ1ZRLE9BQU87b0JBQ1BILEtBQUs7b0JBQ0xDLFdBQVc7b0JBQ1hDLFFBQVE7b0JBQ1JmLE9BQU07Z0JBQ1I7Ozs7OzswQkFHRiw4REFBQ0g7Z0JBQ0NDLFdBQVU7Z0JBQ1ZDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JPLFVBQVU7b0JBQ1ZTLGNBQWM7b0JBQ2RGLFFBQVE7Z0JBQ1Y7O2tDQUVBLDhEQUFDbEI7d0JBQ0NDLFdBQVU7d0JBQ1ZDLE9BQU87NEJBQ0xTLFVBQVU7NEJBQ1ZLLEtBQUs7NEJBQ0xELE1BQU07NEJBQ05aLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JpQixpQkFBaUI7NEJBQ2pCSCxRQUFROzRCQUNSRSxjQUFjO3dCQUNoQjs7Ozs7O2tDQUVGLDhEQUFDNUI7d0JBQ0M4QixJQUFHO3dCQUNIVCxLQUFJO3dCQUNKLFdBQVc7d0JBQ1hVLElBQUk7d0JBQ0gsNERBQTREO3dCQUM3RHJCLE9BQU87NEJBQ0xDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JvQixXQUFXOzRCQUNYYixVQUFVOzRCQUNWTyxRQUFRO3dCQUNWOzs7Ozs7a0NBRUYsOERBQUNsQjt3QkFDQ0MsV0FBVTt3QkFDVkMsT0FBTzs0QkFDTFMsVUFBVTs0QkFDVlIsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUlksS0FBSzs0QkFDTFIsU0FBUzs0QkFDVGlCLGVBQWU7NEJBQ2ZoQixnQkFBZ0I7NEJBQ2hCQyxZQUFZOzRCQUNaZ0IsT0FBTzs0QkFDUFIsUUFBUTt3QkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1Y7R0E5SE01QjtLQUFBQTtBQWdJTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jhbm5lcnZpZGVvL2luZGV4LmpzPzhhNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2VzL2Jhbm5lci9vbmUuanBnJzsgLy8gSW1wb3J0IHlvdXIgYmFja2dyb3VuZCBpbWFnZVxyXG5pbXBvcnQgbGVmdExvZ28gZnJvbSAnLi4vLi4vcHVibGljL2ltYWdlcy9iYW5uZXIvbG9nbzEuanBnJzsgLy8gSW1wb3J0IGxlZnQgbG9nbyBpbWFnZVxyXG5pbXBvcnQgcmlnaHRMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9pbWFnZXMvYmFubmVyL2xvZ28yLnBuZyc7IC8vIEltcG9ydCByaWdodCBsb2dvIGltYWdlXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGdW5jdGlvbiB0byBwbGF5IHRoZSB2aWRlb1xyXG4gICAgY29uc3QgcGxheVZpZGVvID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteVZpZGVvJyk7XHJcbiAgICAgIGlmICh2aWRlbykge1xyXG4gICAgICAgIHZpZGVvLnBsYXkoKS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAvLyBBdXRvcGxheSB3YXMgcHJldmVudGVkXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdBdXRvcGxheSB3YXMgcHJldmVudGVkOicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBdHRlbXB0IHRvIHBsYXkgdGhlIHZpZGVvIHdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHNcclxuICAgIHBsYXlWaWRlbygpO1xyXG5cclxuICAgIC8vIENsZWFuIHVwXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBPcHRpb25hbGx5LCB5b3UgY2FuIHBhdXNlIHRoZSB2aWRlbyB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcclxuICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlWaWRlbycpO1xyXG4gICAgICBpZiAodmlkZW8pIHtcclxuICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwiYmFja2dyb3VuZC1jb250YWluZXJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgvaW1hZ2VzL2Jhbm5lci9iYW5uZXIxLmpwZylgLCAvLyBTZXQgdGhlIGJhY2tncm91bmQgaW1hZ2VcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsvKiBMZWZ0IGxvZ28gKi99XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9XCIvaW1hZ2VzL2Jhbm5lci9sb2dvMS5qcGdcIlxyXG4gICAgICAgIGFsdD1cIkxlZnQgTG9nb1wiXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgbGVmdDogJzEwJScsXHJcbiAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICAgICAgICB6SW5kZXg6ICcyJyx3aWR0aDpcIjIwJVwiXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgICAgXHJcbiAgICAgIHsvKiBSaWdodCBsb2dvICovfVxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgc3JjPVwiL2ltYWdlcy9iYW5uZXIvbG9nbzIucG5nXCJcclxuICAgICAgICBhbHQ9XCJSaWdodCBMb2dvXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICByaWdodDogJzEwJScsXHJcbiAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICAgICAgICB6SW5kZXg6ICcyJyxcclxuICAgICAgICAgIHdpZHRoOlwiMjUlXCJcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcclxuICAgICAgICAgIHpJbmRleDogMSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheVwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwuNCknLFxyXG4gICAgICAgICAgICB6SW5kZXg6IDEsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgPHZpZGVvXHJcbiAgICAgICAgICBpZD1cIm15VmlkZW9cIlxyXG4gICAgICAgICAgc3JjPVwiL3ZpZGVvLm1wNFwiIFxyXG4gICAgICAgICAgLy8gYXV0b1BsYXlcclxuICAgICAgICAgIGxvb3BcclxuICAgICAgICAgICAvLyBBZGQgbXV0ZWQgYXR0cmlidXRlIGZvciBhdXRvcGxheSB0byB3b3JrIGluIHNvbWUgYnJvd3NlcnNcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIHpJbmRleDogMCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50XCJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgekluZGV4OiAyLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogWW91ciBjb250ZW50IGhlcmUgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImJhY2tncm91bmRJbWFnZSIsImxlZnRMb2dvIiwicmlnaHRMb2dvIiwiTWFpbiIsInBsYXlWaWRlbyIsInZpZGVvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXkiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInBhdXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsImltZyIsInNyYyIsImFsdCIsImxlZnQiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ6SW5kZXgiLCJyaWdodCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImlkIiwibG9vcCIsIm9iamVjdEZpdCIsImZsZXhEaXJlY3Rpb24iLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/bannervideo/index.js\n"));

/***/ })

});