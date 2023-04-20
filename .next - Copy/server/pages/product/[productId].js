"use strict";
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
exports.id = "pages/product/[productId]";
exports.ids = ["pages/product/[productId]"];
exports.modules = {

/***/ "./src/pages/product/[productId]/index.js":
/*!************************************************!*\
  !*** ./src/pages/product/[productId]/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductDetails = ({ products  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const productId = router.query.productId;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl\",\n                children: [\n                    \" Total Products: \",\n                    products.length,\n                    \" Product Details page productId is :\",\n                    productId,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Next\\\\next-routing\\\\src\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, undefined),\n            products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \" Title \",\n                        product.title,\n                        \" Body: \",\n                        product.description,\n                        \", Price \",\n                        product.price,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Next\\\\next-routing\\\\src\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n                    lineNumber: 9,\n                    columnNumber: 42\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Next\\\\next-routing\\\\src\\\\pages\\\\product\\\\[productId]\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, undefined);\n};\nconst getStaticProps = async ()=>{\n    const res = await \"http://localhost:4000/products\";\n    const data = await res.json();\n    return {\n        props: {\n            products: data\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9bcHJvZHVjdElkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXdDO0FBQ3hDLE1BQU1DLGlCQUFpQixDQUFDLEVBQUNDLFNBQVEsRUFBQyxHQUFLO0lBQ25DLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNSSxZQUFZRCxPQUFPRSxLQUFLLENBQUNELFNBQVM7SUFDeEMscUJBQ0ksOERBQUNFOzswQkFDRyw4REFBQ0M7Z0JBQUdDLFdBQVU7O29CQUFXO29CQUFrQk4sU0FBU08sTUFBTTtvQkFBQztvQkFBcUNMO29CQUFVOzs7Ozs7O1lBRXRHRixTQUFTUSxHQUFHLENBQUVDLENBQUFBLHdCQUFXLDhEQUFDSjs7d0JBQUc7d0JBQVFJLFFBQVFDLEtBQUs7d0JBQUM7d0JBQVFELFFBQVFFLFdBQVc7d0JBQUM7d0JBQVNGLFFBQVFHLEtBQUs7d0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFJdEg7QUFFTyxNQUFNQyxpQkFBaUIsVUFBVztJQUNyQyxNQUFNQyxNQUFNLE1BQU07SUFDbEIsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBQzNCLE9BQU07UUFDRkMsT0FBTTtZQUNGakIsVUFBU2U7UUFDYjtJQUNKO0FBQ0osRUFBQztBQUVELGlFQUFlaEIsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcm91dGluZy8uL3NyYy9wYWdlcy9wcm9kdWN0L1twcm9kdWN0SWRdL2luZGV4LmpzPzI5NjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHtwcm9kdWN0c30pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gcm91dGVyLnF1ZXJ5LnByb2R1Y3RJZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+IFRvdGFsIFByb2R1Y3RzOiB7cHJvZHVjdHMubGVuZ3RofSBQcm9kdWN0IERldGFpbHMgcGFnZSBwcm9kdWN0SWQgaXMgOntwcm9kdWN0SWR9IDwvaDI+IFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5tYXAoIHByb2R1Y3QgPT4gPGgyPiBUaXRsZSB7cHJvZHVjdC50aXRsZX0gQm9keToge3Byb2R1Y3QuZGVzY3JpcHRpb259LCBQcmljZSB7cHJvZHVjdC5wcmljZX0gPC9oMj4gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT57XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdChcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9wcm9kdWN0c1wiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgcHJvZHVjdHM6ZGF0YSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0cyIsInJvdXRlciIsInByb2R1Y3RJZCIsInF1ZXJ5IiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXMiLCJkYXRhIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/product/[productId]/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/product/[productId]/index.js"));
module.exports = __webpack_exports__;

})();