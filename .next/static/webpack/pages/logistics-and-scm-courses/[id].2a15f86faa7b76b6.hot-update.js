"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/logistics-and-scm-courses/[id]",{

/***/ "./pages/logistics-and-scm-courses/[id].js":
/*!*************************************************!*\
  !*** ./pages/logistics-and-scm-courses/[id].js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sal.js */ \"./node_modules/sal.js/dist/sal.js\");\n/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/course-details/courseData.json */ \"./data/course-details/courseData.json\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/store */ \"./redux/store.js\");\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/Context */ \"./context/Context.js\");\n/* harmony import */ var _components_Header_MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Header/MobileMenu */ \"./components/Header/MobileMenu.js\");\n/* harmony import */ var _components_Header_HeaderStyle_Four__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Header/HeaderStyle-Four */ \"./components/Header/HeaderStyle-Four.js\");\n/* harmony import */ var _components_Header_Offcanvas_Cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Header/Offcanvas/Cart */ \"./components/Header/Offcanvas/Cart.js\");\n/* harmony import */ var _pages_backToTop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/pages/backToTop */ \"./pages/backToTop.js\");\n/* harmony import */ var _components_Common_Separator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Common/Separator */ \"./components/Common/Separator.js\");\n/* harmony import */ var _components_Footer_Footer_One__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Footer/Footer-One */ \"./components/Footer/Footer-One.js\");\n/* harmony import */ var _components_Course_Details_Course_Sections_course_head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Course-Details/Course-Sections/course-head */ \"./components/Course-Details/Course-Sections/course-head.js\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Head */ \"./pages/Head.js\");\n/* harmony import */ var _components_Course_Details_Course_Sections_Course_Action_Bottom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/Course-Details/Course-Sections/Course-Action-Bottom */ \"./components/Course-Details/Course-Sections/Course-Action-Bottom.js\");\n/* harmony import */ var _components_Course_Details_Course_Sections_SimilarCourses__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Course-Details/Course-Sections/SimilarCourses */ \"./components/Course-Details/Course-Sections/SimilarCourses.js\");\n/* harmony import */ var _components_Course_Details_CourseDetails_Two__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/Course-Details/CourseDetails-Two */ \"./components/Course-Details/CourseDetails-Two.js\");\n/* harmony import */ var _components_Cards_Card_Five__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/Cards/Card-Five */ \"./components/Cards/Card-Five.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(\"CourseDatajsonnnnnnnnnnnnnnnn:\", _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__);\nconst SingleCourseTwo = (param)=>{\n    let { courseData, updateData } = param;\n    var _CourseData_courseTab_, _courseData_attributes, _courseData_data;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const postId = router.query.id;\n    const slug = router.query.id;\n    console.log(\"slug------------------\", slug);\n    let getCourse;\n    getCourse = JSON.parse(JSON.stringify(_data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__.courseTab));\n    console.log(\"getCourse\", getCourse);\n    const checkMatch = getCourse.find((course)=>course.slug === postId);\n    console.log(\"matchedcourse\", checkMatch);\n    // const detailname = courseData?.attributes?.Coursename;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (postId && checkMatch === undefined) {\n            router.push(\"/courses\");\n        }\n        sal_js__WEBPACK_IMPORTED_MODULE_3___default()({\n            threshold: 0.01,\n            once: true\n        });\n    }, [\n        checkMatch,\n        router\n    ]);\n    const delivery = _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__ === null || _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__ === void 0 ? void 0 : (_CourseData_courseTab_ = _data_course_details_courseData_json__WEBPACK_IMPORTED_MODULE_4__.courseTab[0]) === null || _CourseData_courseTab_ === void 0 ? void 0 : _CourseData_courseTab_.DeliveryAndBenefit;\n    console.log(\"delivery\", delivery);\n    console.log(\"courseData:\", courseData);\n    const update = updateData;\n    const coursejson = courseData === null || courseData === void 0 ? void 0 : (_courseData_attributes = courseData.attributes) === null || _courseData_attributes === void 0 ? void 0 : _courseData_attributes.tabDatas;\n    console.log(\"coursejson\", coursejson);\n    const matchingItem = courseData === null || courseData === void 0 ? void 0 : (_courseData_data = courseData.data) === null || _courseData_data === void 0 ? void 0 : _courseData_data.find((item)=>{\n        var _item_attributes;\n        return (item === null || item === void 0 ? void 0 : (_item_attributes = item.attributes) === null || _item_attributes === void 0 ? void 0 : _item_attributes.slug) === slug;\n    });\n    console.log(\"matchingItem**************\", matchingItem);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Head__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n                title: \"Course Filter Toggle - Online Courses & Education NEXTJS14 Template\"\n            }, void 0, false, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n                store: _redux_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Context__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_MobileMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_HeaderStyle_Four__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                            headerSticky: \"\",\n                            headerType: true\n                        }, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rbt-page-banner-wrapper\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rbt-banner-image\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"rbt-banner-content\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rbt-banner-content-top rbt-breadcrumb-style-3\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Course_Details_Course_Sections_course_head__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            checkMatch: checkMatch !== undefined ? checkMatch : \"\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rbt-section-overlayping-top rbt-section-gapBottom\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"inner\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"container\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Course_Details_CourseDetails_Two__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                        checkMatchCourses: checkMatch !== undefined ? checkMatch : \"\",\n                                        courseData: courseData\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Course_Details_Course_Sections_SimilarCourses__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {\n                                checkMatchCourses: getCourse !== undefined ? getCourse : \"\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row row--15\",\n                            children: update && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cards_Card_Five__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                                update: update\n                            }, void 0, false, {\n                                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                                lineNumber: 99,\n                                columnNumber: 27\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_pages_backToTop__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer_One__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\logistics-and-scm-courses\\\\[id].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SingleCourseTwo, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SingleCourseTwo;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SingleCourseTwo);\nvar _c;\n$RefreshReg$(_c, \"SingleCourseTwo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpc3RpY3MtYW5kLXNjbS1jb3Vyc2VzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDZjtBQUMwQztBQUM1QjtBQUNMO0FBQ007QUFFZ0I7QUFDVTtBQUNaO0FBQ1o7QUFDWTtBQUNDO0FBRThCO0FBQ3REO0FBQ21FO0FBQ1Y7QUFDUDtBQUNKO0FBQ3pCO0FBQ3BEcUIsUUFBUUMsR0FBRyxDQUFDLGtDQUFrQ2xCLGlFQUFVQTtBQUN4RCxNQUFNbUIsa0JBQWtCO1FBQUMsRUFBQ0MsVUFBVSxFQUFFQyxVQUFVLEVBQUM7UUF1QmhDckIsd0JBSUVvQix3QkFHRUE7O0lBN0JuQixNQUFNRSxTQUFTeEIsc0RBQVNBO0lBQ3hCLE1BQU15QixTQUFTRCxPQUFPRSxLQUFLLENBQUNDLEVBQUU7SUFDOUIsTUFBTUMsT0FBT0osT0FBT0UsS0FBSyxDQUFDQyxFQUFFO0lBQzVCUixRQUFRQyxHQUFHLENBQUMsMEJBQXlCUTtJQUNyQyxJQUFJQztJQUVKQSxZQUFZQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQzlCLDJFQUFvQjtJQUM1RGlCLFFBQVFDLEdBQUcsQ0FBQyxhQUFZUztJQUV0QixNQUFNSyxhQUFhTCxVQUFVTSxJQUFJLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT1IsSUFBSSxLQUFLSDtJQUNoRU4sUUFBUUMsR0FBRyxDQUFDLGlCQUFnQmM7SUFDNUIseURBQXlEO0lBQ3ZEbkMsZ0RBQVNBLENBQUM7UUFDUixJQUFJMEIsVUFBVVMsZUFBZUcsV0FBVztZQUN0Q2IsT0FBT2MsSUFBSSxDQUFDO1FBQ2Q7UUFFQXJDLDZDQUFHQSxDQUFDO1lBQ0ZzQyxXQUFXO1lBQ1hDLE1BQU07UUFDUjtJQUNGLEdBQUc7UUFBQ047UUFBWVY7S0FBTztJQUN6QixNQUFNaUIsV0FBV3ZDLGlFQUFVQSxhQUFWQSxpRUFBVUEsd0JBQVZBLHlCQUFBQSwyRUFBcUIsQ0FBQyxFQUFFLGNBQXhCQSw2Q0FBQUEsdUJBQTBCd0Msa0JBQWtCO0lBQzdEdkIsUUFBUUMsR0FBRyxDQUFDLFlBQVdxQjtJQUN2QnRCLFFBQVFDLEdBQUcsQ0FBQyxlQUFlRTtJQUMzQixNQUFNcUIsU0FBU3BCO0lBQ2YsTUFBTXFCLGFBQWF0Qix1QkFBQUEsa0NBQUFBLHlCQUFBQSxXQUFZdUIsVUFBVSxjQUF0QnZCLDZDQUFBQSx1QkFBd0J3QixRQUFRO0lBQ25EM0IsUUFBUUMsR0FBRyxDQUFDLGNBQWN3QjtJQUUxQixNQUFNRyxlQUFlekIsdUJBQUFBLGtDQUFBQSxtQkFBQUEsV0FBWTBCLElBQUksY0FBaEIxQix1Q0FBQUEsaUJBQWtCYSxJQUFJLENBQUMsQ0FBQ2M7WUFBU0E7ZUFBQUEsQ0FBQUEsaUJBQUFBLDRCQUFBQSxtQkFBQUEsS0FBTUosVUFBVSxjQUFoQkksdUNBQUFBLGlCQUFrQnJCLElBQUksTUFBS0E7O0lBQ2pGVCxRQUFRQyxHQUFHLENBQUMsOEJBQThCMkI7SUFDeEMscUJBQ0U7OzBCQUNFLDhEQUFDbEMsOENBQVFBO2dCQUFDcUMsT0FBTTs7Ozs7OzBCQUNoQiw4REFBQy9DLGlEQUFRQTtnQkFBQ2dELE9BQU8vQyxvREFBS0E7MEJBQ3BCLDRFQUFDQyx3REFBT0E7O3NDQUNOLDhEQUFDQyxxRUFBVUE7Ozs7O3NDQUNYLDhEQUFDQywyRUFBY0E7NEJBQUM2QyxjQUFhOzRCQUFHQyxZQUFZOzs7Ozs7c0NBRzVDLDhEQUFDQzs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzs7Ozs7OENBQ2YsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQzNDLCtGQUFVQTs0Q0FDVHNCLFlBQVlBLGVBQWVHLFlBQVlILGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTTVELDhEQUFDb0I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ3ZDLHFGQUFnQkE7d0NBQ2Z3QyxtQkFBbUJ0QixlQUFlRyxZQUFZSCxhQUFhO3dDQUMzRFosWUFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FVcEIsOERBQUNnQzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ3hDLGtHQUFjQTtnQ0FDYnlDLG1CQUNFM0IsY0FBY1EsWUFBWVIsWUFBWTs7Ozs7Ozs7Ozs7c0NBSTVDLDhEQUFDeUI7NEJBQUlDLFdBQVU7c0NBQ1RaLHdCQUFVLDhEQUFDekIsb0VBQVFBO2dDQUFDeUIsUUFBUUE7Ozs7Ozs7Ozs7O3NDQUdsQyw4REFBQ2xDLHlEQUFTQTs7Ozs7c0NBRVYsOERBQUNFLHNFQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBckZNVTs7UUFDV3JCLGtEQUFTQTs7O0tBRHBCcUI7O0FBdUZOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2lzdGljcy1hbmQtc2NtLWNvdXJzZXMvW2lkXS5qcz82MmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzYWwgZnJvbSBcInNhbC5qc1wiO1xyXG5pbXBvcnQgQ291cnNlRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9jb3Vyc2UtZGV0YWlscy9jb3Vyc2VEYXRhLmpzb25cIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFN0b3JlIGZyb20gXCJAL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCBDb250ZXh0IGZyb20gXCJAL2NvbnRleHQvQ29udGV4dFwiOyBcclxuXHJcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyL01vYmlsZU1lbnVcIjtcclxuaW1wb3J0IEhlYWRlclN0eWxlVGVuIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclN0eWxlLUZvdXJcIjtcclxuaW1wb3J0IENhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXIvT2ZmY2FudmFzL0NhcnRcIjtcclxuaW1wb3J0IEJhY2tUb1RvcCBmcm9tIFwiQC9wYWdlcy9iYWNrVG9Ub3BcIjtcclxuaW1wb3J0IFNlcGFyYXRvciBmcm9tIFwiQC9jb21wb25lbnRzL0NvbW1vbi9TZXBhcmF0b3JcIjtcclxuaW1wb3J0IEZvb3Rlck9uZSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXItT25lXCI7XHJcblxyXG5pbXBvcnQgQ291cnNlSGVhZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db3Vyc2UtRGV0YWlscy9Db3Vyc2UtU2VjdGlvbnMvY291cnNlLWhlYWRcIjtcclxuaW1wb3J0IFBhZ2VIZWFkIGZyb20gXCIuLi9IZWFkXCI7XHJcbmltcG9ydCBDb3Vyc2VBY3Rpb25Cb3R0b20gZnJvbSBcIkAvY29tcG9uZW50cy9Db3Vyc2UtRGV0YWlscy9Db3Vyc2UtU2VjdGlvbnMvQ291cnNlLUFjdGlvbi1Cb3R0b21cIjtcclxuaW1wb3J0IFNpbWlsYXJDb3Vyc2VzIGZyb20gXCJAL2NvbXBvbmVudHMvQ291cnNlLURldGFpbHMvQ291cnNlLVNlY3Rpb25zL1NpbWlsYXJDb3Vyc2VzXCI7XHJcbmltcG9ydCBDb3Vyc2VEZXRhaWxzVHdvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvdXJzZS1EZXRhaWxzL0NvdXJzZURldGFpbHMtVHdvXCI7XHJcbmltcG9ydCBDb3Vyc2VEZXRhaWxzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvdXJzZS1EZXRhaWxzL0NvdXJzZURldGFpbHMtVHdvXCJcclxuaW1wb3J0IENhcmRGaXZlIGZyb20gXCJAL2NvbXBvbmVudHMvQ2FyZHMvQ2FyZC1GaXZlXCI7XHJcbmNvbnNvbGUubG9nKFwiQ291cnNlRGF0YWpzb25ubm5ubm5ubm5ubm5ubm46XCIsIENvdXJzZURhdGEpO1xyXG5jb25zdCBTaW5nbGVDb3Vyc2VUd28gPSAoe2NvdXJzZURhdGEsIHVwZGF0ZURhdGF9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcG9zdElkID0gcm91dGVyLnF1ZXJ5LmlkO1xyXG4gIGNvbnN0IHNsdWcgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbiAgY29uc29sZS5sb2coXCJzbHVnLS0tLS0tLS0tLS0tLS0tLS0tXCIsc2x1ZylcclxuICBsZXQgZ2V0Q291cnNlO1xyXG5cclxuICBnZXRDb3Vyc2UgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KENvdXJzZURhdGEuY291cnNlVGFiKSk7XHJcbmNvbnNvbGUubG9nKFwiZ2V0Q291cnNlXCIsZ2V0Q291cnNlKVxyXG5cclxuICBjb25zdCBjaGVja01hdGNoID0gZ2V0Q291cnNlLmZpbmQoKGNvdXJzZSkgPT4gY291cnNlLnNsdWcgPT09IHBvc3RJZCk7XHJcbmNvbnNvbGUubG9nKFwibWF0Y2hlZGNvdXJzZVwiLGNoZWNrTWF0Y2gpO1xyXG4vLyBjb25zdCBkZXRhaWxuYW1lID0gY291cnNlRGF0YT8uYXR0cmlidXRlcz8uQ291cnNlbmFtZTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBvc3RJZCAmJiBjaGVja01hdGNoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvY291cnNlc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzYWwoe1xyXG4gICAgICB0aHJlc2hvbGQ6IDAuMDEsXHJcbiAgICAgIG9uY2U6IHRydWUsXHJcbiAgICB9KTtcclxuICB9LCBbY2hlY2tNYXRjaCwgcm91dGVyXSk7XHJcbmNvbnN0IGRlbGl2ZXJ5ID0gQ291cnNlRGF0YT8uY291cnNlVGFiWzBdPy5EZWxpdmVyeUFuZEJlbmVmaXQ7XHJcbmNvbnNvbGUubG9nKFwiZGVsaXZlcnlcIixkZWxpdmVyeSk7XHJcbmNvbnNvbGUubG9nKFwiY291cnNlRGF0YTpcIiwgY291cnNlRGF0YSk7IFxyXG5jb25zdCB1cGRhdGUgPSB1cGRhdGVEYXRhO1xyXG5jb25zdCBjb3Vyc2Vqc29uID0gY291cnNlRGF0YT8uYXR0cmlidXRlcz8udGFiRGF0YXM7XHJcbmNvbnNvbGUubG9nKFwiY291cnNlanNvblwiLCBjb3Vyc2Vqc29uKVxyXG5cclxuY29uc3QgbWF0Y2hpbmdJdGVtID0gY291cnNlRGF0YT8uZGF0YT8uZmluZCgoaXRlbSkgPT4gaXRlbT8uYXR0cmlidXRlcz8uc2x1ZyA9PT0gc2x1Zyk7XHJcbmNvbnNvbGUubG9nKFwibWF0Y2hpbmdJdGVtKioqKioqKioqKioqKipcIiwgbWF0Y2hpbmdJdGVtKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZUhlYWQgdGl0bGU9XCJDb3Vyc2UgRmlsdGVyIFRvZ2dsZSAtIE9ubGluZSBDb3Vyc2VzICYgRWR1Y2F0aW9uIE5FWFRKUzE0IFRlbXBsYXRlXCIgLz5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtTdG9yZX0+XHJcbiAgICAgICAgPENvbnRleHQ+XHJcbiAgICAgICAgICA8TW9iaWxlTWVudSAvPlxyXG4gICAgICAgICAgPEhlYWRlclN0eWxlVGVuIGhlYWRlclN0aWNreT1cIlwiIGhlYWRlclR5cGU9e3RydWV9IC8+XHJcbiAgICAgICAgICB7LyogPENhcnQgLz4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYnQtcGFnZS1iYW5uZXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJidC1iYW5uZXItaW1hZ2VcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYnQtYmFubmVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJidC1iYW5uZXItY29udGVudC10b3AgcmJ0LWJyZWFkY3J1bWItc3R5bGUtM1wiPlxyXG4gICAgICAgICAgICAgICAgPENvdXJzZUhlYWRcclxuICAgICAgICAgICAgICAgICAgY2hlY2tNYXRjaD17Y2hlY2tNYXRjaCAhPT0gdW5kZWZpbmVkID8gY2hlY2tNYXRjaCA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmJ0LXNlY3Rpb24tb3ZlcmxheXBpbmctdG9wIHJidC1zZWN0aW9uLWdhcEJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDb3Vyc2VEZXRhaWxzVHdvXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrTWF0Y2hDb3Vyc2VzPXtjaGVja01hdGNoICE9PSB1bmRlZmluZWQgPyBjaGVja01hdGNoIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgY291cnNlRGF0YT17Y291cnNlRGF0YX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIDxDb3Vyc2VBY3Rpb25Cb3R0b21cclxuICAgICAgICAgICAgY2hlY2tNYXRjaENvdXJzZXM9e2NoZWNrTWF0Y2ggIT09IHVuZGVmaW5lZCA/IGNoZWNrTWF0Y2ggOiBcIlwifVxyXG4gICAgICAgICAgLz4gKi99XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYnQtcmVsYXRlZC1jb3Vyc2UtYXJlYSBiZy1jb2xvci13aGl0ZSBwdC0tNjAgcmJ0LXNlY3Rpb24tZ2FwQm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxTaW1pbGFyQ291cnNlc1xyXG4gICAgICAgICAgICAgIGNoZWNrTWF0Y2hDb3Vyc2VzPXtcclxuICAgICAgICAgICAgICAgIGdldENvdXJzZSAhPT0gdW5kZWZpbmVkID8gZ2V0Q291cnNlIDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tMTVcIj5cclxuICAgICAgICAgICAgICAge3VwZGF0ZSAmJiA8Q2FyZEZpdmUgdXBkYXRlPXt1cGRhdGV9IC8+fSBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8QmFja1RvVG9wIC8+XHJcbiAgICAgICAgICB7LyogPFNlcGFyYXRvciAvPiAqL31cclxuICAgICAgICAgIDxGb290ZXJPbmUgLz5cclxuICAgICAgICA8L0NvbnRleHQ+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQ291cnNlVHdvO1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IHRva2VuID0gXCIzZTc4MmRmOTBlZWIzMzQzMDA0Y2YzMmYyYmIwYTY4NzFiNjQyNzFlNjcwMWE3MmUzOGNjOTU3NTZhNTFmYzcyYTMxNzUwMTE5OThkOGU4MTI0NzA3MzgyODhjYmE1NWE3N2E0ZWI5ZTVkNmM2YmZlNmJmZjhkZDM3ZGQ4ZGFlYzkxZTEwYTFjZDQwZGRiZjg3OTIxNjg3NTdkMjFmMTAzYzM5MzUwOTZjODViMWRhYTllY2YzOTBkNGViZmQwMDI4NjhjZjdjNjk4ZDUwYTg3NWVkMWM2NmU1OWFmZDYzZDA1ZTlhOWU1ODljYjc0MmMwYTAyNmNkOGMwZjgyYzJjXCI7XHJcbiAgXHJcbiAgLy8gRmV0Y2hpbmcgdGhlIGZpcnN0IFVSTFxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovLzEzOS41OS43OC40OToxMzM3L2FwaS9jb3Vyc2VkZXRhaWxzP3BvcHVsYXRlPSpcIiwge1xyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgY29uc3QgY291cnNlRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgXHJcbiAgLy8gRmV0Y2hpbmcgdGhlIHNlY29uZCBVUkxcclxuICBjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTM5LjU5Ljc4LjQ5OjEzMzcvYXBpL2xvbmRvbi1jb2xsZWdldXBkYXRlcz9wb3B1bGF0ZT0qXCIsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSBhd2FpdCByZXMyLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGNvdXJzZURhdGEsIHVwZGF0ZURhdGEgfSxcclxuICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInNhbCIsIkNvdXJzZURhdGEiLCJQcm92aWRlciIsIlN0b3JlIiwiQ29udGV4dCIsIk1vYmlsZU1lbnUiLCJIZWFkZXJTdHlsZVRlbiIsIkNhcnQiLCJCYWNrVG9Ub3AiLCJTZXBhcmF0b3IiLCJGb290ZXJPbmUiLCJDb3Vyc2VIZWFkIiwiUGFnZUhlYWQiLCJDb3Vyc2VBY3Rpb25Cb3R0b20iLCJTaW1pbGFyQ291cnNlcyIsIkNvdXJzZURldGFpbHNUd28iLCJDb3Vyc2VEZXRhaWxzIiwiQ2FyZEZpdmUiLCJjb25zb2xlIiwibG9nIiwiU2luZ2xlQ291cnNlVHdvIiwiY291cnNlRGF0YSIsInVwZGF0ZURhdGEiLCJyb3V0ZXIiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwic2x1ZyIsImdldENvdXJzZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImNvdXJzZVRhYiIsImNoZWNrTWF0Y2giLCJmaW5kIiwiY291cnNlIiwidW5kZWZpbmVkIiwicHVzaCIsInRocmVzaG9sZCIsIm9uY2UiLCJkZWxpdmVyeSIsIkRlbGl2ZXJ5QW5kQmVuZWZpdCIsInVwZGF0ZSIsImNvdXJzZWpzb24iLCJhdHRyaWJ1dGVzIiwidGFiRGF0YXMiLCJtYXRjaGluZ0l0ZW0iLCJkYXRhIiwiaXRlbSIsInRpdGxlIiwic3RvcmUiLCJoZWFkZXJTdGlja3kiLCJoZWFkZXJUeXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2hlY2tNYXRjaENvdXJzZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/logistics-and-scm-courses/[id].js\n"));

/***/ })

});