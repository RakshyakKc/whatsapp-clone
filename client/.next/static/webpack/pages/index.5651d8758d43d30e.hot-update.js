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

/***/ "./src/components/Chat/ChatContainer.jsx":
/*!***********************************************!*\
  !*** ./src/components/Chat/ChatContainer.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ChatContainer() {\n    _s();\n    const [{ messages , currentChatUser , userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-[80vh] w-full relative flex-grow overflow-auto custom-scrollbar \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" bg-chat-background bg-fixed h-full w-full opacity-10 fixed left-0 top-0 z-0\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-10 y-6 relative bottom-0 z-40 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-end w-full gap-1 overflow-auto\",\n                        children: messages.map((message, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex \".concat(message.senderId === currentChatUser.id ? \"justify-start\" : \"justify-end\"),\n                                children: message.type === \"text\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-white px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%] \".concat(message.senderId === currentChatUser.id ? \"bg-incoming-background\" : \"bg-outgoing-background\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"break-all\",\n                                            children: message.message\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex gap-1 items-end \",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \" text-bubble-meta text-[11px] pt-1 min-w-fit  \",\n                                                    children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_2__.calculateTime)(message.createdAt)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: message.senderId === userInfo.id && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                        messageStatus: message.messageStatus\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                                        lineNumber: 39,\n                                                        columnNumber: 29\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 21\n                                }, this)\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Chat\\\\ChatContainer.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatContainer, \"JAsx8bjv8DbCUMbD6nN3Itay9sA=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = ChatContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatContainer);\nvar _c;\n$RefreshReg$(_c, \"ChatContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0NoYXRDb250YWluZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEQ7QUFDSjtBQUM1QjtBQUMwQjtBQUVwRCxTQUFTSSxnQkFBZ0I7O0lBQ3ZCLE1BQU0sQ0FBQyxFQUFFQyxTQUFRLEVBQUVDLGdCQUFlLEVBQUVDLFNBQVEsRUFBRSxDQUFDLEdBQUdQLHVFQUFnQkE7SUFDbEUscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNaSixTQUFTSyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0MsUUFBVTs0QkFDaEMscUJBQ0UsOERBQUNKO2dDQUVDQyxXQUFXLFFBSVYsT0FIQ0UsUUFBUUUsUUFBUSxLQUFLUCxnQkFBZ0JRLEVBQUUsR0FDbkMsa0JBQ0EsYUFBYTswQ0FHbEJILFFBQVFJLElBQUksS0FBSyx3QkFDaEIsOERBQUNQO29DQUNDQyxXQUFXLGdGQUlWLE9BSENFLFFBQVFFLFFBQVEsS0FBS1AsZ0JBQWdCUSxFQUFFLEdBQ25DLDJCQUNBLHdCQUF3Qjs7c0RBRzlCLDhEQUFDRTs0Q0FBS1AsV0FBVTtzREFBYUUsUUFBUUEsT0FBTzs7Ozs7O3NEQUM1Qyw4REFBQ0g7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDTztvREFBS1AsV0FBVTs4REFDYlIsbUVBQWFBLENBQUNVLFFBQVFNLFNBQVM7Ozs7Ozs4REFFbEMsOERBQUNEOzhEQUNFTCxRQUFRRSxRQUFRLEtBQUtOLFNBQVNPLEVBQUUsa0JBQy9CLDhEQUFDWCw2REFBYUE7d0RBQ1plLGVBQWVQLFFBQVFPLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQXZCM0NOOzs7Ozt3QkFnQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQWpEU1I7O1FBQzJDSixtRUFBZ0JBOzs7S0FEM0RJO0FBbURULCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXQvQ2hhdENvbnRhaW5lci5qc3g/YTY2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVRpbWUgfSBmcm9tIFwiQC91dGlscy9DYWxjdWxhdGVUaW1lXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTWVzc2FnZVN0YXR1cyBmcm9tIFwiLi4vY29tbW9uL01lc3NhZ2VTdGF0dXNcIjtcblxuZnVuY3Rpb24gQ2hhdENvbnRhaW5lcigpIHtcbiAgY29uc3QgW3sgbWVzc2FnZXMsIGN1cnJlbnRDaGF0VXNlciwgdXNlckluZm8gfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bODB2aF0gdy1mdWxsIHJlbGF0aXZlIGZsZXgtZ3JvdyBvdmVyZmxvdy1hdXRvIGN1c3RvbS1zY3JvbGxiYXIgXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1jaGF0LWJhY2tncm91bmQgYmctZml4ZWQgaC1mdWxsIHctZnVsbCBvcGFjaXR5LTEwIGZpeGVkIGxlZnQtMCB0b3AtMCB6LTBcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMTAgeS02IHJlbGF0aXZlIGJvdHRvbS0wIHotNDAgbGVmdC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgdy1mdWxsIGdhcC0xIG92ZXJmbG93LWF1dG9cIj5cbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggJHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zZW5kZXJJZCA9PT0gY3VycmVudENoYXRVc2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImp1c3RpZnktc3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJqdXN0aWZ5LWVuZFwiXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7bWVzc2FnZS50eXBlID09PSBcInRleHRcIiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB4LTIgcHktWzVweF0gdGV4dC1zbSByb3VuZGVkLW1kIGZsZXggZ2FwLTIgaXRlbXMtZW5kIG1heC13LVs0NSVdICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLnNlbmRlcklkID09PSBjdXJyZW50Q2hhdFVzZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJnLWluY29taW5nLWJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctb3V0Z29pbmctYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVhay1hbGxcIj57bWVzc2FnZS5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgaXRlbXMtZW5kIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIHRleHQtYnViYmxlLW1ldGEgdGV4dC1bMTFweF0gcHQtMSBtaW4tdy1maXQgIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FsY3VsYXRlVGltZShtZXNzYWdlLmNyZWF0ZWRBdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVySWQgPT09IHVzZXJJbmZvLmlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVN0YXR1cz17bWVzc2FnZS5tZXNzYWdlU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0Q29udGFpbmVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJjYWxjdWxhdGVUaW1lIiwiUmVhY3QiLCJNZXNzYWdlU3RhdHVzIiwiQ2hhdENvbnRhaW5lciIsIm1lc3NhZ2VzIiwiY3VycmVudENoYXRVc2VyIiwidXNlckluZm8iLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJzZW5kZXJJZCIsImlkIiwidHlwZSIsInNwYW4iLCJjcmVhdGVkQXQiLCJtZXNzYWdlU3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatContainer.jsx\n"));

/***/ })

});