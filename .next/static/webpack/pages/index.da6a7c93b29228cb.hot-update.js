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

/***/ "./components/vidcomponent/index.js":
/*!******************************************!*\
  !*** ./components/vidcomponent/index.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-video */ \"./node_modules/next-video/dist/components/video.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst VideoCarousel = (param)=>{\n    let { videoData } = param;\n    var _videoData_data;\n    _s();\n    const [currentSlide, setCurrentSlide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [showPlayer, setShowPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openPlayer = (url)=>{\n        setVideoUrl(url);\n        setShowPlayer(true);\n    };\n    const closePlayer = ()=>{\n        setShowPlayer(false);\n        setVideoUrl(\"\");\n    };\n    const nextSlide = ()=>{\n        setCurrentSlide((prevSlide)=>prevSlide === videoData.length - 1 ? 0 : prevSlide + 1);\n    };\n    const prevSlide = ()=>{\n        setCurrentSlide((prevSlide)=>prevSlide === 0 ? videoData.length - 1 : prevSlide - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"800px\",\n            margin: \"auto\",\n            marginBottom: \"50px\",\n            borderRadius: \"20px\",\n            padding: \"20px\",\n            background: \"rgba(156, 155, 152, 0.25)\",\n            backdropFilter: \"blur(10px)\",\n            boxShadow: \"0 8px 32px 0 rgba(31, 38, 135, 0.37)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    textAlign: \"center\",\n                    marginBottom: \"30px\"\n                },\n                children: \"Our stories\"\n            }, void 0, false, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"relative\",\n                    overflow: \"hidden\"\n                },\n                children: [\n                    videoData === null || videoData === void 0 ? void 0 : (_videoData_data = videoData.data) === null || _videoData_data === void 0 ? void 0 : _videoData_data.map((videoObj, index)=>{\n                        var _videoObj_attributes_videoimage_data_attributes_formats_small, _videoObj_attributes_videoimage_data_attributes_formats, _videoObj_attributes_videoimage_data_attributes, _videoObj_attributes_videoimage_data, _videoObj_attributes_videoimage, _videoObj_attributes, _videoObj_attributes1, _videoObj_attributes2, _videoObj_attributes3;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"carousel-slide \".concat(index === currentSlide ? \"active\" : \"\"),\n                            style: {\n                                display: index === currentSlide ? \"flex\" : \"none\",\n                                alignItems: \"center\",\n                                flexDirection: \"column\",\n                                textAlign: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: \"100%\",\n                                        height: \"50vh\",\n                                        borderRadius: \"20px\",\n                                        position: \"relative\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: videoObj === null || videoObj === void 0 ? void 0 : (_videoObj_attributes = videoObj.attributes) === null || _videoObj_attributes === void 0 ? void 0 : (_videoObj_attributes_videoimage = _videoObj_attributes.videoimage) === null || _videoObj_attributes_videoimage === void 0 ? void 0 : (_videoObj_attributes_videoimage_data = _videoObj_attributes_videoimage.data) === null || _videoObj_attributes_videoimage_data === void 0 ? void 0 : (_videoObj_attributes_videoimage_data_attributes = _videoObj_attributes_videoimage_data.attributes) === null || _videoObj_attributes_videoimage_data_attributes === void 0 ? void 0 : (_videoObj_attributes_videoimage_data_attributes_formats = _videoObj_attributes_videoimage_data_attributes.formats) === null || _videoObj_attributes_videoimage_data_attributes_formats === void 0 ? void 0 : (_videoObj_attributes_videoimage_data_attributes_formats_small = _videoObj_attributes_videoimage_data_attributes_formats.small) === null || _videoObj_attributes_videoimage_data_attributes_formats_small === void 0 ? void 0 : _videoObj_attributes_videoimage_data_attributes_formats_small.url,\n                                            alt: (_videoObj_attributes1 = videoObj.attributes) === null || _videoObj_attributes1 === void 0 ? void 0 : _videoObj_attributes1.title,\n                                            className: \"carousel-image\",\n                                            style: {\n                                                width: \"100%\",\n                                                height: \"100%\",\n                                                objectFit: \"cover\",\n                                                borderRadius: \"20px\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"play-button\",\n                                            onClick: ()=>{\n                                                var _videoObj_attributes_Video_data_attributes, _videoObj_attributes_Video_data, _videoObj_attributes_Video, _videoObj_attributes;\n                                                return openPlayer(videoObj === null || videoObj === void 0 ? void 0 : (_videoObj_attributes = videoObj.attributes) === null || _videoObj_attributes === void 0 ? void 0 : (_videoObj_attributes_Video = _videoObj_attributes.Video) === null || _videoObj_attributes_Video === void 0 ? void 0 : (_videoObj_attributes_Video_data = _videoObj_attributes_Video.data) === null || _videoObj_attributes_Video_data === void 0 ? void 0 : (_videoObj_attributes_Video_data_attributes = _videoObj_attributes_Video_data.attributes) === null || _videoObj_attributes_Video_data_attributes === void 0 ? void 0 : _videoObj_attributes_Video_data_attributes.url);\n                                            },\n                                            style: {\n                                                position: \"absolute\",\n                                                top: \"50%\",\n                                                left: \"50%\",\n                                                transform: \"translate(-50%, -50%)\",\n                                                background: \"transparent\",\n                                                border: \"none\",\n                                                fontSize: \"40px\",\n                                                color: \"#fff\",\n                                                cursor: \"pointer\",\n                                                zIndex: \"2\"\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                                className: \"fas fa-play\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        marginTop: \"20px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: videoObj === null || videoObj === void 0 ? void 0 : (_videoObj_attributes2 = videoObj.attributes) === null || _videoObj_attributes2 === void 0 ? void 0 : _videoObj_attributes2.title\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: videoObj === null || videoObj === void 0 ? void 0 : (_videoObj_attributes3 = videoObj.attributes) === null || _videoObj_attributes3 === void 0 ? void 0 : _videoObj_attributes3.Description\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, videoObj.id, true, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"prev-button\",\n                        onClick: prevSlide,\n                        style: {\n                            position: \"absolute\",\n                            top: \"50%\",\n                            left: \"0\",\n                            transform: \"translateY(-50%)\",\n                            background: \"rgba(0, 0, 0, 0.5)\",\n                            color: \"white\",\n                            border: \"none\",\n                            cursor: \"pointer\",\n                            padding: \"10px\",\n                            zIndex: \"999\"\n                        },\n                        children: \"❮\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"next-button\",\n                        onClick: nextSlide,\n                        style: {\n                            position: \"absolute\",\n                            top: \"50%\",\n                            right: \"0\",\n                            transform: \"translateY(-50%)\",\n                            background: \"rgba(0, 0, 0, 0.5)\",\n                            color: \"white\",\n                            border: \"none\",\n                            cursor: \"pointer\",\n                            padding: \"10px\",\n                            zIndex: \"999\"\n                        },\n                        children: \"❯\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            showPlayer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"video-player\",\n                style: {\n                    position: \"fixed\",\n                    top: \"50%\",\n                    left: \"50%\",\n                    transform: \"translate(-50%, -50%)\",\n                    zIndex: \"9999\",\n                    background: \"#fff\",\n                    padding: \"20px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"close-button\",\n                        onClick: closePlayer,\n                        style: {\n                            float: \"right\"\n                        },\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                        lineNumber: 166,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                        src: videoUrl,\n                        width: \"560\",\n                        height: \"315\",\n                        frameBorder: \"0\",\n                        allow: \"autoplay; encrypted-media\",\n                        allowFullScreen: true,\n                        title: \"Embedded Video Player\"\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                        lineNumber: 173,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_video__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: videoUrl,\n                        style: {\n                            maxWidth: \"500px\",\n                            height: \"500px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                        lineNumber: 182,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n                lineNumber: 154,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\components\\\\vidcomponent\\\\index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideoCarousel, \"4DBTdyEZ8AfMkLDHhJDGJmTh8pM=\");\n_c = VideoCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoCarousel);\nvar _c;\n$RefreshReg$(_c, \"VideoCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTtnQkFDVmpCLE9BQU87b0JBQ0xXLFVBQVU7b0JBQ1Z1QixLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxXQUFXO29CQUNYSyxRQUFRO29CQUNSbkMsWUFBWTtvQkFDWkQsU0FBUztnQkFDWDs7a0NBRUEsOERBQUMyQjt3QkFDQ2YsV0FBVTt3QkFDVmdCLFNBQVN0Qzt3QkFDVEssT0FBTzs0QkFBRWlELE9BQU87d0JBQVE7a0NBQ3pCOzs7Ozs7a0NBR0QsOERBQUNDO3dCQUNDMUIsS0FBS2pDO3dCQUNMOEIsT0FBTTt3QkFDTkMsUUFBTzt3QkFDUDZCLGFBQVk7d0JBQ1pDLE9BQU07d0JBQ05DLGVBQWU7d0JBQ2Z2QixPQUFNOzs7Ozs7a0NBRVIsOERBQUM5QyxrREFBS0E7d0JBQUN3QyxLQUFLakM7d0JBQVVTLE9BQU87NEJBQUNDLFVBQVM7NEJBQVFxQixRQUFPO3dCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkU7R0ExTE1yQztLQUFBQTtBQTRMTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZpZGNvbXBvbmVudC9pbmRleC5qcz8yODI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSAnbmV4dC12aWRlbyc7XHJcbmNvbnN0IFZpZGVvQ2Fyb3VzZWwgPSAoeyB2aWRlb0RhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U2xpZGUsIHNldEN1cnJlbnRTbGlkZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hvd1BsYXllciwgc2V0U2hvd1BsYXllcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3Qgb3BlblBsYXllciA9ICh1cmwpID0+IHtcclxuICAgIHNldFZpZGVvVXJsKHVybCk7XHJcbiAgICBzZXRTaG93UGxheWVyKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsb3NlUGxheWVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1BsYXllcihmYWxzZSk7XHJcbiAgICBzZXRWaWRlb1VybChcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50U2xpZGUoKHByZXZTbGlkZSkgPT5cclxuICAgICAgcHJldlNsaWRlID09PSB2aWRlb0RhdGEubGVuZ3RoIC0gMSA/IDAgOiBwcmV2U2xpZGUgKyAxXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHByZXZTbGlkZSA9ICgpID0+IHtcclxuICAgIHNldEN1cnJlbnRTbGlkZSgocHJldlNsaWRlKSA9PlxyXG4gICAgICBwcmV2U2xpZGUgPT09IDAgPyB2aWRlb0RhdGEubGVuZ3RoIC0gMSA6IHByZXZTbGlkZSAtIDFcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBtYXhXaWR0aDogXCI4MDBweFwiLFxyXG4gICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjUwcHhcIixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjBweFwiLFxyXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTYsIDE1NSwgMTUyLCAwLjI1KVwiLFxyXG4gICAgICAgIGJhY2tkcm9wRmlsdGVyOiBcImJsdXIoMTBweClcIixcclxuICAgICAgICBib3hTaGFkb3c6IFwiMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpXCIsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoMVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMzBweFwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBPdXIgc3Rvcmllc1xyXG4gICAgICA8L2gxPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxyXG4gICAgICAgIHt2aWRlb0RhdGE/LmRhdGE/Lm1hcCgodmlkZW9PYmosIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17dmlkZW9PYmouaWR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhcm91c2VsLXNsaWRlICR7XHJcbiAgICAgICAgICAgICAgaW5kZXggPT09IGN1cnJlbnRTbGlkZSA/IFwiYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGluZGV4ID09PSBjdXJyZW50U2xpZGUgPyBcImZsZXhcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgLy8gU3RhY2sgaXRlbXMgdmVydGljYWxseSBvbiBzbWFsbCBzY3JlZW5zXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLCAvLyBDZW50ZXIgdGV4dCBvbiBzbWFsbCBzY3JlZW5zXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwdmhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICB2aWRlb09iaj8uYXR0cmlidXRlcz8udmlkZW9pbWFnZT8uZGF0YT8uYXR0cmlidXRlcz8uZm9ybWF0c1xyXG4gICAgICAgICAgICAgICAgICAgID8uc21hbGw/LnVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWx0PXt2aWRlb09iai5hdHRyaWJ1dGVzPy50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWltYWdlXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGxheS1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgb3BlblBsYXllcihcclxuICAgICAgICAgICAgICAgICAgICB2aWRlb09iaj8uYXR0cmlidXRlcz8uVmlkZW8/LmRhdGE/LmF0dHJpYnV0ZXM/LnVybFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCI0MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgekluZGV4OiBcIjJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsYXlcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGgzPnt2aWRlb09iaj8uYXR0cmlidXRlcz8udGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57dmlkZW9PYmo/LmF0dHJpYnV0ZXM/LkRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJwcmV2LWJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcmV2U2xpZGV9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IFwiMFwiLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIjk5OVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAmIzEwMDk0O1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5leHQtYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e25leHRTbGlkZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIjk5OVwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAmIzEwMDk1O1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dQbGF5ZXIgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvLXBsYXllclwiXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIGxlZnQ6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgICAgICAgICAgekluZGV4OiBcIjk5OTlcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2Nsb3NlUGxheWVyfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgc3JjPXt2aWRlb1VybH1cclxuICAgICAgICAgICAgd2lkdGg9XCI1NjBcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIzMTVcIlxyXG4gICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIlxyXG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cclxuICAgICAgICAgICAgdGl0bGU9XCJFbWJlZGRlZCBWaWRlbyBQbGF5ZXJcIlxyXG4gICAgICAgICAgPjwvaWZyYW1lPlxyXG4gICAgICAgICAgPFZpZGVvIHNyYz17dmlkZW9Vcmx9IHN0eWxlPXt7bWF4V2lkdGg6XCI1MDBweFwiLGhlaWdodDpcIjUwMHB4XCJ9fS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgKX1cclxuICAgICAgIHsvKiA8VmlkZW8gc3JjPXt7fX0vPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBWaWRlb0Nhcm91c2VsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlZpZGVvIiwiVmlkZW9DYXJvdXNlbCIsInZpZGVvRGF0YSIsImN1cnJlbnRTbGlkZSIsInNldEN1cnJlbnRTbGlkZSIsInNob3dQbGF5ZXIiLCJzZXRTaG93UGxheWVyIiwidmlkZW9VcmwiLCJzZXRWaWRlb1VybCIsIm9wZW5QbGF5ZXIiLCJ1cmwiLCJjbG9zZVBsYXllciIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImxlbmd0aCIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsImJhY2tkcm9wRmlsdGVyIiwiYm94U2hhZG93IiwiaDEiLCJ0ZXh0QWxpZ24iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiZGF0YSIsIm1hcCIsInZpZGVvT2JqIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImhlaWdodCIsImltZyIsInNyYyIsImF0dHJpYnV0ZXMiLCJ2aWRlb2ltYWdlIiwiZm9ybWF0cyIsInNtYWxsIiwiYWx0IiwidGl0bGUiLCJvYmplY3RGaXQiLCJidXR0b24iLCJvbkNsaWNrIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsImJvcmRlciIsImZvbnRTaXplIiwiY29sb3IiLCJjdXJzb3IiLCJ6SW5kZXgiLCJpIiwibWFyZ2luVG9wIiwiaDMiLCJwIiwiRGVzY3JpcHRpb24iLCJpZCIsInJpZ2h0IiwiZmxvYXQiLCJpZnJhbWUiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/vidcomponent/index.js\n"));

/***/ })

});