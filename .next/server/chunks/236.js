"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 3156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ errorCatch),
/* harmony export */   "w": () => (/* binding */ getContentType)
/* harmony export */ });
const getContentType = ()=>({
        "Content-Type": "application/json"
    });
const errorCatch = (error)=>{
    const message = error?.response?.data?.message;
    return message ? typeof error.response.data.message === "object" ? message[0] : message : error.message;
};


/***/ }),

/***/ 4236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useActions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_root_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3437);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_root_actions__WEBPACK_IMPORTED_MODULE_3__]);
_store_root_actions__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useActions = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.bindActionCreators)(_store_root_actions__WEBPACK_IMPORTED_MODULE_3__/* .rootActions */ .N, dispatch), [
        dispatch
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5455:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KR": () => (/* binding */ removeFromStorage),
/* harmony export */   "RY": () => (/* binding */ saveToStorage),
/* harmony export */   "hP": () => (/* binding */ getAccessToken)
/* harmony export */ });
/* unused harmony exports saveTokensStorage, getUserFromStorage */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getAccessToken = ()=>{
    const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get("accessTolen");
    return accessToken || null;
};
const saveTokensStorage = (data)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("accessToken", data.accessToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("refreshToken", data.refreshToken);
};
const getUserFromStorage = ()=>{
    return JSON.parse(localStorage.getItem("user") || "{}");
};
const removeFromStorage = ()=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("accessToken");
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("refreshToken");
    localStorage.removeItem("user");
};
const saveToStorage = (data)=>{
    saveTokensStorage(data);
    localStorage.setItem("user", JSON.stringify(data.user));
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6415:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _api_api_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3156);
/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5455);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__, _auth_helper__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__, _auth_helper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AuthService = {
    async main (type, data) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/auth/${type}`,
            method: "POST",
            data
        });
        if (response.data.accessToken) (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        return response.data;
    },
    async getNewTokens () {
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("refreshToken");
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("localhost:4000" + "auth/login/access-token", {
            refreshToken
        }, {
            headers: (0,_api_api_helper__WEBPACK_IMPORTED_MODULE_3__/* .getContentType */ .w)()
        });
        if (response.data.accessToken) (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        return response;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3437:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ rootActions)
/* harmony export */ });
/* harmony import */ var _user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3100);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_user_actions__WEBPACK_IMPORTED_MODULE_0__]);
_user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const rootActions = {
    ..._user_user_actions__WEBPACK_IMPORTED_MODULE_0__
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3100:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAuth": () => (/* binding */ checkAuth),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3156);
/* harmony import */ var _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5455);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__]);
([_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/register", async (data, thunkApi)=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.main */ .e.main("register", data);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});
const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/login", async (data, thunkAPI)=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.main */ .e.main("login", data);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/logout", async ()=>{
    (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__/* .removeFromStorage */ .KR)();
});
const checkAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("auth/check-auth", async (_, thunkAPI)=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.getNewTokens */ .e.getNewTokens();
        return response.data;
    } catch (error) {
        if ((0,_api_api_helper__WEBPACK_IMPORTED_MODULE_3__/* .errorCatch */ .l)(error) === "jwt expired") {
            thunkAPI.dispatch(logout());
        }
        return thunkAPI.rejectWithValue(error);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;