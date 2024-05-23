/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/Context.js":
/*!****************************!*\
  !*** ./context/Context.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateContext: () => (/* binding */ CreateContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useAppContext: () => (/* binding */ useAppContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CreateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CreateContext);\nconst Context = ({ children })=>{\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { cart } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.CartReducer);\n    // const [college, setCollege] = useState(\"kochi\");\n    const [cartToggle, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [search, setSearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [smallMobileMenu, setsmallMobileMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [pricing, setPricing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [pricingTwo, setPricingTwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [pricingThree, setPricingThree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [pricingFour, setPricingFour] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // State to store fetched data\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: \"COUNT_CART_TOTALS\"\n        });\n    }, [\n        cart\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const res = await fetch(\"http://139.59.78.49:1337/api/london-collegeupdates?populate*=\", {\n                    headers: {\n                        Authorization: \"Bearer 3e782df90eeb3343004cf32f2bb0a6871b64271e6701a72e38cc95756a51fc72a3175011998d8e812470738288cba55a77a4eb9e5d6c6bfe6bff8dd37dd8daec91e10a1cd40ddbf8792168757d21f103c3935096c85b1daa9ecf390d4ebfd002868cf7c698d50a875ed1c66e59afd63d05e9a9e589cb742c0a026cd8c0f82c2c\"\n                    }\n                });\n                const jsonData = await res.json();\n                setData(jsonData);\n                console.log(\"Fetched data:\", jsonData);\n                console.log(\"datacheck\", data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []); // Empty dependency array to run the effect only once on mount\n    console.log(\"datacheck\", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CreateContext.Provider, {\n        value: {\n            toggle,\n            setToggle,\n            mobile,\n            setMobile,\n            smallMobileMenu,\n            setsmallMobileMenu,\n            cartToggle,\n            setCart,\n            search,\n            setSearch,\n            pricing,\n            setPricing,\n            pricingTwo,\n            setPricingTwo,\n            pricingThree,\n            setPricingThree,\n            pricingFour,\n            setPricingFour,\n            data\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\context\\\\Context.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Context);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNoQjtBQUVoRCxNQUFNTSw4QkFBZ0JOLG9EQUFhQSxHQUFHO0FBRXRDLE1BQU1PLGdCQUFnQixJQUFNTixpREFBVUEsQ0FBQ0ssZUFBZTtBQUU3RCxNQUFNRSxVQUFVLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzNCLE1BQU1DLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVPLElBQUksRUFBRSxHQUFHTix3REFBV0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxXQUFXO0lBQ3pELG1EQUFtRDtJQUNuRCxNQUFNLENBQUNDLFlBQVlDLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2tCLFFBQVFDLFVBQVUsR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ29CLGlCQUFpQkMsbUJBQW1CLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUN2RCxNQUFNLENBQUNzQixTQUFTQyxXQUFXLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUN3QixZQUFZQyxjQUFjLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUMwQixjQUFjQyxnQkFBZ0IsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQzRCLGFBQWFDLGVBQWUsR0FBRzdCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQzhCLE1BQU1DLFFBQVEsR0FBRy9CLCtDQUFRQSxDQUFDLE9BQU8sOEJBQThCO0lBRXRFQyxnREFBU0EsQ0FBQztRQUNSTyxTQUFTO1lBQUV3QixNQUFNO1FBQW9CO0lBQ3ZDLEdBQUc7UUFBQ3ZCO0tBQUs7SUFFVFIsZ0RBQVNBLENBQUM7UUFDUixNQUFNZ0MsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxpRUFBaUU7b0JBQ3ZGQyxTQUFTO3dCQUNQQyxlQUFlO29CQUNqQjtnQkFDRjtnQkFDQSxNQUFNQyxXQUFXLE1BQU1KLElBQUlLLElBQUk7Z0JBQy9CUixRQUFRTztnQkFDUkUsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkg7Z0JBQzdCRSxRQUFRQyxHQUFHLENBQUMsYUFBWVg7WUFDMUIsRUFBRSxPQUFPWSxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFUO0lBQ0YsR0FBRyxFQUFFLEdBQUcsOERBQThEO0lBQ3RFTyxRQUFRQyxHQUFHLENBQUMsYUFBWVg7SUFDeEIscUJBQ0UsOERBQUMxQixjQUFjdUMsUUFBUTtRQUNyQkMsT0FBTztZQUNMOUI7WUFDQUM7WUFDQUc7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQVQ7WUFDQUM7WUFDQUc7WUFDQUM7WUFDQUs7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFFRjtrQkFFQ3ZCOzs7Ozs7QUFHUDtBQUVBLGlFQUFlRCxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlzdHVkeS1uZXh0Ly4vY29udGV4dC9Db250ZXh0LmpzP2ZmNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBjb25zdCBDcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHVzZUNvbnRleHQoQ3JlYXRlQ29udGV4dCk7XG5cbmNvbnN0IENvbnRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBjYXJ0IH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLkNhcnRSZWR1Y2VyKTtcbiAgLy8gY29uc3QgW2NvbGxlZ2UsIHNldENvbGxlZ2VdID0gdXNlU3RhdGUoXCJrb2NoaVwiKTtcbiAgY29uc3QgW2NhcnRUb2dnbGUsIHNldENhcnRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbW9iaWxlLCBzZXRNb2JpbGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzbWFsbE1vYmlsZU1lbnUsIHNldHNtYWxsTW9iaWxlTWVudV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3ByaWNpbmcsIHNldFByaWNpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwcmljaW5nVHdvLCBzZXRQcmljaW5nVHdvXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcHJpY2luZ1RocmVlLCBzZXRQcmljaW5nVGhyZWVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtwcmljaW5nRm91ciwgc2V0UHJpY2luZ0ZvdXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBTdGF0ZSB0byBzdG9yZSBmZXRjaGVkIGRhdGFcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJDT1VOVF9DQVJUX1RPVEFMU1wiIH0pO1xuICB9LCBbY2FydF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTM5LjU5Ljc4LjQ5OjEzMzcvYXBpL2xvbmRvbi1jb2xsZWdldXBkYXRlcz9wb3B1bGF0ZSo9XCIsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciAzZTc4MmRmOTBlZWIzMzQzMDA0Y2YzMmYyYmIwYTY4NzFiNjQyNzFlNjcwMWE3MmUzOGNjOTU3NTZhNTFmYzcyYTMxNzUwMTE5OThkOGU4MTI0NzA3MzgyODhjYmE1NWE3N2E0ZWI5ZTVkNmM2YmZlNmJmZjhkZDM3ZGQ4ZGFlYzkxZTEwYTFjZDQwZGRiZjg3OTIxNjg3NTdkMjFmMTAzYzM5MzUwOTZjODViMWRhYTllY2YzOTBkNGViZmQwMDI4NjhjZjdjNjk4ZDUwYTg3NWVkMWM2NmU1OWFmZDYzZDA1ZTlhOWU1ODljYjc0MmMwYTAyNmNkOGMwZjgyYzJjXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIHNldERhdGEoanNvbkRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZldGNoZWQgZGF0YTpcIiwganNvbkRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFjaGVja1wiLGRhdGEpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biB0aGUgZWZmZWN0IG9ubHkgb25jZSBvbiBtb3VudFxuICBjb25zb2xlLmxvZyhcImRhdGFjaGVja1wiLGRhdGEpXG4gIHJldHVybiAoXG4gICAgPENyZWF0ZUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHRvZ2dsZSxcbiAgICAgICAgc2V0VG9nZ2xlLFxuICAgICAgICBtb2JpbGUsXG4gICAgICAgIHNldE1vYmlsZSxcbiAgICAgICAgc21hbGxNb2JpbGVNZW51LFxuICAgICAgICBzZXRzbWFsbE1vYmlsZU1lbnUsXG4gICAgICAgIGNhcnRUb2dnbGUsXG4gICAgICAgIHNldENhcnQsXG4gICAgICAgIHNlYXJjaCxcbiAgICAgICAgc2V0U2VhcmNoLFxuICAgICAgICBwcmljaW5nLFxuICAgICAgICBzZXRQcmljaW5nLFxuICAgICAgICBwcmljaW5nVHdvLFxuICAgICAgICBzZXRQcmljaW5nVHdvLFxuICAgICAgICBwcmljaW5nVGhyZWUsXG4gICAgICAgIHNldFByaWNpbmdUaHJlZSxcbiAgICAgICAgcHJpY2luZ0ZvdXIsXG4gICAgICAgIHNldFByaWNpbmdGb3VyLFxuICAgICAgICBkYXRhICxcbiAgICAgICBcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ3JlYXRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJDcmVhdGVDb250ZXh0IiwidXNlQXBwQ29udGV4dCIsIkNvbnRleHQiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiY2FydCIsInN0YXRlIiwiQ2FydFJlZHVjZXIiLCJjYXJ0VG9nZ2xlIiwic2V0Q2FydCIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInNlYXJjaCIsInNldFNlYXJjaCIsIm1vYmlsZSIsInNldE1vYmlsZSIsInNtYWxsTW9iaWxlTWVudSIsInNldHNtYWxsTW9iaWxlTWVudSIsInByaWNpbmciLCJzZXRQcmljaW5nIiwicHJpY2luZ1R3byIsInNldFByaWNpbmdUd28iLCJwcmljaW5nVGhyZWUiLCJzZXRQcmljaW5nVGhyZWUiLCJwcmljaW5nRm91ciIsInNldFByaWNpbmdGb3VyIiwiZGF0YSIsInNldERhdGEiLCJ0eXBlIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImpzb25EYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/Context.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_scss_default_euclid_circulara_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/scss/default/euclid-circulara.scss */ \"./public/scss/default/euclid-circulara.scss\");\n/* harmony import */ var _public_scss_default_euclid_circulara_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_scss_default_euclid_circulara_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_VideoCarousel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/VideoCarousel.css */ \"./styles/VideoCarousel.css\");\n/* harmony import */ var _styles_VideoCarousel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_VideoCarousel_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_sal_js_dist_sal_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/sal.js/dist/sal.css */ \"./node_modules/sal.js/dist/sal.css\");\n/* harmony import */ var _node_modules_sal_js_dist_sal_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_sal_js_dist_sal_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_css_plugins_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/css/plugins/fontawesome.min.css */ \"./public/css/plugins/fontawesome.min.css\");\n/* harmony import */ var _public_css_plugins_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_public_css_plugins_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _public_css_plugins_feather_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/plugins/feather.css */ \"./public/css/plugins/feather.css\");\n/* harmony import */ var _public_css_plugins_feather_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_plugins_feather_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_plugins_odometer_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/plugins/odometer.css */ \"./public/css/plugins/odometer.css\");\n/* harmony import */ var _public_css_plugins_odometer_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_plugins_odometer_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_plugins_animation_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/plugins/animation.css */ \"./public/css/plugins/animation.css\");\n/* harmony import */ var _public_css_plugins_animation_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_plugins_animation_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_css_plugins_euclid_circulara_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/css/plugins/euclid-circulara.css */ \"./public/css/plugins/euclid-circulara.css\");\n/* harmony import */ var _public_css_plugins_euclid_circulara_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_css_plugins_euclid_circulara_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/css/effect-cards */ \"./node_modules/swiper/modules/effect-cards.css\");\n/* harmony import */ var swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(swiper_css_effect_cards__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/css/thumbs */ \"./node_modules/swiper/modules/thumbs.css\");\n/* harmony import */ var swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(swiper_css_thumbs__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../context/Context */ \"./context/Context.js\");\n/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! sal.js */ \"sal.js\");\n/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _public_scss_styles_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../public/scss/styles.scss */ \"./public/scss/styles.scss\");\n/* harmony import */ var _public_scss_styles_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_scss_styles_scss__WEBPACK_IMPORTED_MODULE_18__);\n\n\n\n\n\n// ========= Plugins CSS START =========\n\n\n\n\n\n\n\n\n\n\n\n// ========= Plugins CSS END =========\n // Import your context\n\n\n\nfunction App({ Component, pageProps }) {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_16__.CreateContext);\n    console.log(\"CreateContext:\", context); // Log the context object\n    // const { college, setCollege } = context;\n    // console.log(\"collegetest4444444444\", college)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ \"bootstrap/dist/js/bootstrap.bundle.min.js\");\n    // sal({\n    //   threshold: 0.01,\n    //   once: true,\n    // });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_Context__WEBPACK_IMPORTED_MODULE_16__.CreateContext.Provider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\_app.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\london college\\\\histudy-next14.0.4-20240322T074359Z-001\\\\histudy-next14.0.4\\\\pages\\\\_app.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n} // value={{ college, setCollege }}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUVGO0FBQ2U7QUFDbEI7QUFDcEMsd0NBQXdDO0FBQ0s7QUFDTTtBQUNSO0FBQ0M7QUFDQztBQUNPO0FBQ2hDO0FBQ1c7QUFDRTtBQUNIO0FBQ0g7QUFDM0Isc0NBQXNDO0FBQ2EsQ0FBQyxzQkFBc0I7QUFDdkM7QUFDVjtBQUNXO0FBRXJCLFNBQVNLLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsTUFBTUMsVUFBVUwsaURBQVVBLENBQUNELDREQUFhQTtJQUN4Q08sUUFBUUMsR0FBRyxDQUFDLGtCQUFrQkYsVUFBVSx5QkFBeUI7SUFDakUsMkNBQTJDO0lBQzNDLGdEQUFnRDtJQUNoRFAsZ0RBQVNBLENBQUM7UUFDUlUsbUJBQU9BLENBQUMsNEZBQTJDO0lBRW5ELFFBQVE7SUFDUixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDUixHQUFHLEVBQUU7SUFDTCxxQkFDRSw4REFBQ1QsNERBQWFBLENBQUNVLFFBQVE7a0JBQ3JCLDRFQUFDTjtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLEVBRUEsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGlzdHVkeS1uZXh0Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9zY3NzL2RlZmF1bHQvZXVjbGlkLWNpcmN1bGFyYS5zY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvVmlkZW9DYXJvdXNlbC5jc3NcIlxuLy8gPT09PT09PT09IFBsdWdpbnMgQ1NTIFNUQVJUID09PT09PT09PVxuaW1wb3J0IFwiLi4vbm9kZV9tb2R1bGVzL3NhbC5qcy9kaXN0L3NhbC5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvcGx1Z2lucy9mb250YXdlc29tZS5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL3BsdWdpbnMvZmVhdGhlci5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvcGx1Z2lucy9vZG9tZXRlci5jc3NcIjtcbmltcG9ydCBcIi4uL3B1YmxpYy9jc3MvcGx1Z2lucy9hbmltYXRpb24uY3NzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvY3NzL3BsdWdpbnMvZXVjbGlkLWNpcmN1bGFyYS5jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9lZmZlY3QtY2FyZHNcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvZnJlZS1tb2RlXCI7XG5pbXBvcnQgXCJzd2lwZXIvY3NzL3RodW1ic1wiO1xuLy8gPT09PT09PT09IFBsdWdpbnMgQ1NTIEVORCA9PT09PT09PT1cbmltcG9ydCB7IENyZWF0ZUNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L0NvbnRleHQnOyAvLyBJbXBvcnQgeW91ciBjb250ZXh0XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNhbCBmcm9tIFwic2FsLmpzXCI7XG5pbXBvcnQgXCIuLi9wdWJsaWMvc2Nzcy9zdHlsZXMuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KENyZWF0ZUNvbnRleHQpO1xuICBjb25zb2xlLmxvZyhcIkNyZWF0ZUNvbnRleHQ6XCIsIGNvbnRleHQpOyAvLyBMb2cgdGhlIGNvbnRleHQgb2JqZWN0XG4gIC8vIGNvbnN0IHsgY29sbGVnZSwgc2V0Q29sbGVnZSB9ID0gY29udGV4dDtcbiAgLy8gY29uc29sZS5sb2coXCJjb2xsZWdldGVzdDQ0NDQ0NDQ0NDRcIiwgY29sbGVnZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIik7XG5cbiAgICAvLyBzYWwoe1xuICAgIC8vICAgdGhyZXNob2xkOiAwLjAxLFxuICAgIC8vICAgb25jZTogdHJ1ZSxcbiAgICAvLyB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4oXG4gICAgPENyZWF0ZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9DcmVhdGVDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG4vLyB2YWx1ZT17eyBjb2xsZWdlLCBzZXRDb2xsZWdlIH19Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQ3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJzYWwiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb250ZXh0IiwiY29uc29sZSIsImxvZyIsInJlcXVpcmUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/plugins/animation.css":
/*!******************************************!*\
  !*** ./public/css/plugins/animation.css ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/plugins/euclid-circulara.css":
/*!*************************************************!*\
  !*** ./public/css/plugins/euclid-circulara.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/plugins/feather.css":
/*!****************************************!*\
  !*** ./public/css/plugins/feather.css ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/plugins/fontawesome.min.css":
/*!************************************************!*\
  !*** ./public/css/plugins/fontawesome.min.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/css/plugins/odometer.css":
/*!*****************************************!*\
  !*** ./public/css/plugins/odometer.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/default/euclid-circulara.scss":
/*!***************************************************!*\
  !*** ./public/scss/default/euclid-circulara.scss ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./public/scss/styles.scss":
/*!*********************************!*\
  !*** ./public/scss/styles.scss ***!
  \*********************************/
/***/ (() => {



/***/ }),

/***/ "./styles/VideoCarousel.css":
/*!**********************************!*\
  !*** ./styles/VideoCarousel.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle.min.js":
/*!************************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle.min.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "sal.js":
/*!*************************!*\
  !*** external "sal.js" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("sal.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/swiper","vendor-chunks/sal.js","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();