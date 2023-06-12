"use strict";
exports.id = 463;
exports.ids = [463];
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

/***/ 9420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ instance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _api_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3156);
/* harmony import */ var _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5455);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:4000",
    headers: (0,_api_helper__WEBPACK_IMPORTED_MODULE_3__/* .getContentType */ .w)()
});
instance.interceptors.request.use(async (config)=>{
    const accessToken = (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__/* .getAccessToken */ .hP)();
    if (config.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});
instance.interceptors.response.use((config)=>config, async (error)=>{
    const originalRequest = error.config;
    if ((error.response.status === 401 || (0,_api_helper__WEBPACK_IMPORTED_MODULE_3__/* .errorCatch */ .l)(error) === "jwt expired" || (0,_api_helper__WEBPACK_IMPORTED_MODULE_3__/* .errorCatch */ .l)(error) === "jwy must be provided") && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__/* .AuthService.getNewTokens */ .e.getNewTokens();
            return instance.request(originalRequest);
        } catch (error) {
            if ((0,_api_helper__WEBPACK_IMPORTED_MODULE_3__/* .errorCatch */ .l)(error) === "jwt expired") {
                (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_1__/* .removeFromStorage */ .KR)();
            }
        }
    }
    throw error;
});

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
/* harmony import */ var _api_api_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3156);
/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5455);
/* harmony import */ var _api_api_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9420);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__, _auth_helper__WEBPACK_IMPORTED_MODULE_2__, _api_api_interceptor__WEBPACK_IMPORTED_MODULE_3__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__, _auth_helper__WEBPACK_IMPORTED_MODULE_2__, _api_api_interceptor__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthService = {
    async main (type, data) {
        const response = await (0,_api_api_interceptor__WEBPACK_IMPORTED_MODULE_3__/* .instance */ .e)({
            url: `/auth/${type}`,
            method: "POST",
            data
        });
        if (response.data.accessToken) (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        return response.data;
    },
    async getNewTokens () {
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("refreshToken");
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("http://localhost:4000" + "auth/login/access-token", {
            refreshToken
        }, {
            headers: (0,_api_api_helper__WEBPACK_IMPORTED_MODULE_4__/* .getContentType */ .w)()
        });
        if (response.data.accessToken) (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        return response;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;