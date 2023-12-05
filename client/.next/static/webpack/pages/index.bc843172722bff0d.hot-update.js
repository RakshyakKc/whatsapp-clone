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

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/util */ \"./node_modules/@firebase/util/dist/index.esm2017.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! autoprefixer */ \"./node_modules/autoprefixer/lib/autoprefixer.js\");\n/* harmony import */ var autoprefixer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(autoprefixer__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider)();\n    const [redirectLogin, setRedirectLogin] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const [socketEvent, setSocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if (redirectLogin) router.push(\"/login\");\n    }, [\n        redirectLogin\n    ]);\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_7__.onAuthStateChanged)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firebaseAuth, async (currentUser)=>{\n        if (!currentUser) setRedirectLogin(true);\n        if (!userInfo && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.email)) {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.CHECK_USER_ROUTE, {\n                email: currentUser.email\n            });\n            if (!data.status) {\n                router.push(\"/login\");\n            }\n            if (data === null || data === void 0 ? void 0 : data.data) {\n                const { id , name , email , profilePicture: profileImage , status  } = data.data;\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_1__.reducerCases.SET_USER_INFO,\n                    userInfo: {\n                        id,\n                        name,\n                        email,\n                        profileImage,\n                        status\n                    }\n                });\n            }\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_10__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.HOST);\n            console.log(\"add user eseEffect\", userInfo, _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            console.log(\"socket info\", socket);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_1__.reducerCases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-recieve\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_1__.reducerCases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setSocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_14__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.GET_MESSAGES_ROUTE, \"/\").concat(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id, \"/\").concat(currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id));\n            console.log(\"inside getMessages\", messages);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_1__.reducerCases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            console.log(\"currentChatuser id is true\");\n            getMessages();\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 99,\n                columnNumber: 26\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                lineNumber: 99,\n                columnNumber: 37\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\babu\\\\Desktop\\\\projects\\\\nextjs-whatsapp-clone-starter-main\\\\client\\\\src\\\\components\\\\Main.jsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, this);\n}\n_s(Main, \"ev19Q3QcjRrDCKBEPmVSGsUJC5Q=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_2__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFBQSxJQUFBQSxTQUFVYSxFQUFFLEVBQUMsS0FBdUIsT0FBcEJaLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCWSxFQUFFO1lBRTlETyxRQUFRQyxHQUFHLENBQUMsc0JBQXNCUTtZQUNsQzNCLFNBQVM7Z0JBQUVlLE1BQU10Qyx5RUFBeUI7Z0JBQUVrRDtZQUFTO1FBQ3ZEO1FBQ0EsSUFBSTVCLDRCQUFBQSw2QkFBQUEsS0FBQUEsSUFBQUEsZ0JBQWlCWSxFQUFFLEVBQUU7WUFDdkJPLFFBQVFDLEdBQUcsQ0FBQztZQUNaTztRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUMzQjtLQUFnQjtJQUNwQixxQkFDRSw4REFBQytCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDckMsMkRBQVFBOzs7OztZQUNSSyxnQ0FBa0IsOERBQUNOLG1EQUFJQTs7OztxQ0FBTSw4REFBQ0UsK0NBQUtBOzs7O29CQUFHOzs7Ozs7O0FBRzdDO0dBdEZTQzs7UUFDUVQsa0RBQVNBO1FBQzBCVCxtRUFBZ0JBOzs7S0FGM0RrQjtBQXdGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeD8yYTgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcbmltcG9ydCB7IENIRUNLX1VTRVJfUk9VVEUsIEdFVF9NRVNTQUdFU19ST1VURSwgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuaW1wb3J0IHsgZmlyZWJhc2VBdXRoIH0gZnJvbSBcIkAvdXRpbHMvRmlyZWJhc2VDb25maWdcIjtcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSBcIkBmaXJlYmFzZS91dGlsXCI7XG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcImF1dG9wcmVmaXhlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgb25BdXRoU3RhdGVDaGFuZ2VkIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XG5pbXBvcnQgQ2hhdExpc3QgZnJvbSBcIi4vQ2hhdGxpc3QvQ2hhdExpc3RcIjtcbmltcG9ydCBFbXB0eSBmcm9tIFwiLi9FbXB0eVwiO1xuXG5mdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3sgdXNlckluZm8sIGN1cnJlbnRDaGF0VXNlciB9LCBkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XG4gIGNvbnN0IFtyZWRpcmVjdExvZ2luLCBzZXRSZWRpcmVjdExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NvY2tldEV2ZW50LCBzZXRTb2NrZXRFdmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc29ja2V0ID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocmVkaXJlY3RMb2dpbikgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH0sIFtyZWRpcmVjdExvZ2luXSk7XG5cbiAgb25BdXRoU3RhdGVDaGFuZ2VkKGZpcmViYXNlQXV0aCwgYXN5bmMgKGN1cnJlbnRVc2VyKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50VXNlcikgc2V0UmVkaXJlY3RMb2dpbih0cnVlKTtcbiAgICBpZiAoIXVzZXJJbmZvICYmIGN1cnJlbnRVc2VyPy5lbWFpbCkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KENIRUNLX1VTRVJfUk9VVEUsIHtcbiAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxuICAgICAgfSk7XG4gICAgICBpZiAoIWRhdGEuc3RhdHVzKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGE/LmRhdGEpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgcHJvZmlsZVBpY3R1cmU6IHByb2ZpbGVJbWFnZSxcbiAgICAgICAgICBzdGF0dXMsXG4gICAgICAgIH0gPSBkYXRhLmRhdGE7XG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiByZWR1Y2VyQ2FzZXMuU0VUX1VTRVJfSU5GTyxcbiAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwcm9maWxlSW1hZ2UsXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VySW5mbykge1xuICAgICAgc29ja2V0LmN1cnJlbnQgPSBpbyhIT1NUKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYWRkIHVzZXIgZXNlRWZmZWN0XCIsIHVzZXJJbmZvLCBIT1NUKTtcbiAgICAgIHNvY2tldC5jdXJyZW50LmVtaXQoXCJhZGQtdXNlclwiLCB1c2VySW5mby5pZCk7XG4gICAgICBjb25zb2xlLmxvZyhcInNvY2tldCBpbmZvXCIsIHNvY2tldCk7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IHJlZHVjZXJDYXNlcy5TRVRfU09DS0VULCBzb2NrZXQgfSk7XG4gICAgfVxuICB9LCBbdXNlckluZm9dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzb2NrZXQuY3VycmVudCAmJiAhc29ja2V0RXZlbnQpIHtcbiAgICAgIHNvY2tldC5jdXJyZW50Lm9uKFwibXNnLXJlY2lldmVcIiwgKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6IHJlZHVjZXJDYXNlcy5BRERfTUVTU0FHRSxcbiAgICAgICAgICBuZXdNZXNzYWdlOiB7IC4uLmRhdGEubWVzc2FnZSB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2V0U29ja2V0RXZlbnQodHJ1ZSk7XG4gICAgfVxuICB9LCBbc29ja2V0LmN1cnJlbnRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhOiB7IG1lc3NhZ2VzIH0sXG4gICAgICB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICBgJHtHRVRfTUVTU0FHRVNfUk9VVEV9LyR7dXNlckluZm8/LmlkfS8ke2N1cnJlbnRDaGF0VXNlcj8uaWR9YFxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGdldE1lc3NhZ2VzXCIsIG1lc3NhZ2VzKTtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogcmVkdWNlckNhc2VzLlNFVF9NRVNTQUdFUywgbWVzc2FnZXMgfSk7XG4gICAgfTtcbiAgICBpZiAoY3VycmVudENoYXRVc2VyPy5pZCkge1xuICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50Q2hhdHVzZXIgaWQgaXMgdHJ1ZVwiKTtcbiAgICAgIGdldE1lc3NhZ2VzKCk7XG4gICAgfVxuICB9LCBbY3VycmVudENoYXRVc2VyXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1tYWluIGgtc2NyZWVuIHctc2NyZWVuIG1heC1oLXNjcmVlbiBtYXgtdy1mdWxsIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPENoYXRMaXN0IC8+XG4gICAgICB7Y3VycmVudENoYXRVc2VyID8gPENoYXQgLz4gOiA8RW1wdHkgLz59XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwibmFtZXMiOlsicmVkdWNlckNhc2VzIiwidXNlU3RhdGVQcm92aWRlciIsIkNIRUNLX1VTRVJfUk9VVEUiLCJHRVRfTUVTU0FHRVNfUk9VVEUiLCJIT1NUIiwiZmlyZWJhc2VBdXRoIiwiYXN5bmMiLCJkYXRhIiwiYXhpb3MiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW8iLCJDaGF0IiwiQ2hhdExpc3QiLCJFbXB0eSIsIk1haW4iLCJyb3V0ZXIiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwicmVkaXJlY3RMb2dpbiIsInNldFJlZGlyZWN0TG9naW4iLCJzb2NrZXRFdmVudCIsInNldFNvY2tldEV2ZW50Iiwic29ja2V0IiwicHVzaCIsImN1cnJlbnRVc2VyIiwiZW1haWwiLCJwb3N0Iiwic3RhdHVzIiwiaWQiLCJuYW1lIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSW1hZ2UiLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiZW1pdCIsIlNFVF9TT0NLRVQiLCJvbiIsIkFERF9NRVNTQUdFIiwibmV3TWVzc2FnZSIsIm1lc3NhZ2UiLCJnZXRNZXNzYWdlcyIsIm1lc3NhZ2VzIiwiZ2V0IiwiU0VUX01FU1NBR0VTIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});