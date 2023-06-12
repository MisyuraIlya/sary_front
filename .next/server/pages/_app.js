(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4178:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495);
/* harmony import */ var _assets_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1127);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7646);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_6__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_5__, _store_store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
            store: _store_store__WEBPACK_IMPORTED_MODULE_6__/* .store */ .h,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__.PersistGate, {
                loading: null,
                persistor: _store_store__WEBPACK_IMPORTED_MODULE_6__/* .persistor */ .D,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_providers_auth_provider_AuthProvider__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    Component: {
                        isOnlyUser: Component.isOnlyUser,
                        isOnlyAdmin: Component.isOnlyAdmin
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9461);
/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4236);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5455);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__, _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__, _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__, js_cookie__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const DynamicCheckRole = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "../src/providers/auth-provider/AuthProvider.tsx -> " + "./CheckRole"
        ]
    },
    ssr: false
});
const AuthProvider = ({ Component: { isOnlyUser , isOnlyAdmin  } , children  })=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const { checkAuth , logout  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_4__/* .useActions */ .o)();
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const accessToken = (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_6__/* .getAccessToken */ .hP)();
        if (accessToken) {
            checkAuth();
        }
    }, [
        checkAuth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_7__["default"].get("refreshToken");
        if (!refreshToken && user) {
            logout();
        }
    }, [
        logout,
        user
    ]);
    console.log("isOnlyUser,isOnlyAdmin", isOnlyUser, isOnlyAdmin);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isOnlyUser || isOnlyAdmin ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicCheckRole, {
            Component: {
                isOnlyUser,
                isOnlyAdmin
            },
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8227:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ persistor),
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4161);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8936);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_user_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_user_slice__WEBPACK_IMPORTED_MODULE_3__]);
_user_user_slice__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { cartSlice } from "./cart/cart.slice";

const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    //   cart: cartSlice.reducer,
    user: _user_user_slice__WEBPACK_IMPORTED_MODULE_3__/* .userSlice.reducer */ .s.reducer
});
const persistConfig = {
    key: "b2b",
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default()),
    whitelist: [
        "cart"
    ]
};
const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(persistConfig, rootReducer);
const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                ignoredActionPaths: [
                    redux_persist__WEBPACK_IMPORTED_MODULE_1__.FLUSH,
                    redux_persist__WEBPACK_IMPORTED_MODULE_1__.REHYDRATE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_1__.PAUSE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_1__.PERSIST,
                    redux_persist__WEBPACK_IMPORTED_MODULE_1__.PURGE,
                    redux_persist__WEBPACK_IMPORTED_MODULE_1__.REGISTER
                ]
            }
        })
});
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7695:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ userSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3100);
/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5349);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_actions__WEBPACK_IMPORTED_MODULE_1__]);
_user_actions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    user: (0,_utils_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .getStoreLocal */ .m)("user"),
    isLoading: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.register.pending, (state)=>{
            state.isLoading = true;
        }), builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.register.fulfilled, (state, { payload  })=>{
            state.isLoading = false;
            state.user = {
                ...payload.user,
                isAdmin: true,
                userType: {
                    id: 1,
                    title: "admin"
                }
            };
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.register.rejected, (state)=>{
            state.isLoading = false;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.login.pending, (state)=>{
            state.isLoading = true;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.login.fulfilled, (state, { payload  })=>{
            state.isLoading = false;
            state.user = {
                ...payload.user,
                isAdmin: true,
                userType: {
                    id: 1,
                    title: "admin"
                }
            };
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.login.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.logout.fulfilled, (state)=>{
            state.isLoading = false;
            state.user = null;
        });
        builder.addCase(_user_actions__WEBPACK_IMPORTED_MODULE_1__.checkAuth.fulfilled, (state, { payload  })=>{
            state.user = {
                ...payload.user,
                isAdmin: true,
                userType: {
                    id: 1,
                    title: "admin"
                }
            };
        });
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ getStoreLocal)
/* harmony export */ });
const getStoreLocal = (name)=>{
    if (typeof localStorage !== "undefined") {
        const ls = localStorage.getItem(name);
        return ls ? JSON.parse(ls) : null;
    }
    return null;
};


/***/ }),

/***/ 5495:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 1127:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ 8936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,463,118], () => (__webpack_exec__(4178)));
module.exports = __webpack_exports__;

})();