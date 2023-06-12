"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_AdminLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/AdminScreens/layout/header/Header.tsx




const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "bg-primary w-full py-6 px-6 grid grid-cols-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-start items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        priority: true,
                        width: 48,
                        height: 48,
                        src: "/images/header/avatars/avatar.svg",
                        alt: "Sary"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-center text-white px-4",
                        children: "אורלי"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-end",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/tableOfContents",
                                className: "flex justify-center items-center px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    priority: true,
                                    width: 28,
                                    height: 20,
                                    src: "/images/header/paper.svg",
                                    alt: "Sary"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/tableOfContents",
                                className: "flex justify-center items-center px-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    priority: true,
                                    width: 28,
                                    height: 20,
                                    src: "/images/header/forum.svg",
                                    alt: "Sary"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/admin/tableOfContents",
                                className: "flex justify-center items-center pr-4 relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        priority: true,
                                        width: 28,
                                        height: 20,
                                        src: "/images/header/bell.svg",
                                        alt: "Sary"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "items-center rounded-full bg-red text-white absolute left-4 px-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "12"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex justify-between px-8",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2 border-r",
                                style: {
                                    borderColor: "#F3F6F9"
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/admin/tableOfContents",
                            className: "flex",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    priority: true,
                                    width: 50,
                                    height: 37,
                                    src: "/images/header/logo.svg",
                                    alt: "Sary"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    priority: true,
                                    width: 180,
                                    height: 37,
                                    src: "/images/header/logoTitle.svg",
                                    alt: "Sary",
                                    className: "items-center justify-center pt-5 px-4"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/AdminScreens/layout/sidebar/sidebarList.ts
const sideBarList = [
    // {
    //     id:1,
    //     title:'Dashboard',
    //     icon:'../images/sidebar/dashboard.svg',
    //     href:'/'
    // },
    {
        id: 2,
        title: "תוכן העניינים",
        icon: "../images/sidebar/summary.svg",
        href: "/admin/tableOfContents"
    }
];

;// CONCATENATED MODULE: ./src/components/AdminScreens/layout/sidebar/Sidebar.tsx





const Sidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: "bg-primary flex flex-col justify-between",
        style: {
            height: "89vh"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pt-12",
            children: sideBarList?.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hover:bg-white/10 py-2 m-4 rounded-lg",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: item.href,
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                priority: true,
                                width: 30,
                                height: 37,
                                src: item.icon,
                                alt: "Sary",
                                className: "m-auto pt-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "pt-2 text-white text-center",
                                children: item.title
                            })
                        ]
                    })
                }, index))
        })
    });
};
/* harmony default export */ const sidebar_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/components/AdminScreens/layout/AdminLayout.tsx




const AdminLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-span-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar_Sidebar, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-span-11",
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const layout_AdminLayout = (AdminLayout);


/***/ }),

/***/ 6693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SubHeading = ({ children , className =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        className: `SubHeading ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubHeading);


/***/ }),

/***/ 4100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cf": () => (/* binding */ onErrorAlert),
/* harmony export */   "KO": () => (/* binding */ onSuccessAlert),
/* harmony export */   "pl": () => (/* binding */ onAsk)
/* harmony export */ });
/* unused harmony exports onInfoAlert, apiResponseHandler */
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const onSuccessAlert = (title, message)=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: title,
        icon: "success",
        text: message,
        timer: 3000,
        showConfirmButton: false
    });
};
const onErrorAlert = (title, message)=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: title,
        text: message,
        icon: "error",
        timer: 3000,
        showConfirmButton: false
    });
};
const onInfoAlert = (title, message)=>{
    Swal.fire({
        title: title,
        text: message,
        icon: "info",
        timer: 3000,
        showConfirmButton: false
    });
};
const onAsk = (title, message)=>{
    return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: title,
        text: message,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "מחיקה",
        cancelButtonText: "ביטול"
    }).then((result)=>{
        return result.isConfirmed;
    });
};
const apiResponseHandler = (data)=>{
    if (data.status === "success") {
        onSuccessAlert(data.message, "");
    } else if (data.status === "info") {
        onErrorAlert(data.message, "");
    } else {
        onErrorAlert(data.message, "");
    }
};


/***/ })

};
;