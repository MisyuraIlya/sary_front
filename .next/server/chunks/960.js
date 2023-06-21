"use strict";
exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 1359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3140);
/* harmony import */ var _sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7205);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_header_Header__WEBPACK_IMPORTED_MODULE_2__]);
_header_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const AdminLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-12",
                style: {
                    backgroundColor: "#F0FBFF",
                    paddingTop: "70px"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-1",
                        style: {
                            height: "100%"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-span-11",
                        style: {
                            minHeight: "calc(100vh - 70px)"
                        },
                        children: children
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SideBars_SideBars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5390);
/* harmony import */ var _utils_sweetAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4100);
/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4236);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useActions__WEBPACK_IMPORTED_MODULE_6__]);
_hooks_useActions__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Header = ()=>{
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { logout  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_6__/* .useActions */ .o)();
    const handleSidebarToggle = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleSidebarClose = ()=>{
        setIsSidebarOpen(false);
    };
    const handleExitSystem = async ()=>{
        const res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_5__/* .onAsk */ .pl)("האם את רוצה לצאת מהמערכת?", "");
        if (res) {
            logout();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                className: "bg-primary w-full py-2 px-6 grid grid-cols-2 fixed",
                style: {
                    height: "70px",
                    zIndex: 1000000
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-start items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                priority: true,
                                width: 48,
                                height: 48,
                                src: "/images/header/avatars/avatar.svg",
                                alt: "Sary",
                                className: "cursor-pointer",
                                onClick: ()=>handleSidebarToggle()
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-center text-white px-4",
                                children: "אורלי"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-end",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/admin/tableOfContents",
                                        className: "flex justify-center items-center px-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            priority: true,
                                            width: 28,
                                            height: 20,
                                            src: "/images/header/paper.svg",
                                            alt: "Sary"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/admin/tableOfContents",
                                        className: "flex justify-center items-center px-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            priority: true,
                                            width: 28,
                                            height: 20,
                                            src: "/images/header/forum.svg",
                                            alt: "Sary"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/admin/tableOfContents",
                                        className: "flex justify-center items-center pr-4 relative",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                priority: true,
                                                width: 28,
                                                height: 20,
                                                src: "/images/header/bell.svg",
                                                alt: "Sary"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "items-center rounded-full bg-red text-white absolute left-4 px-1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: "12"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between px-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-1/2 border-r",
                                        style: {
                                            borderColor: "#F3F6F9"
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-1/2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/admin/tableOfContents",
                                    className: "flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            priority: true,
                                            width: 50,
                                            height: 37,
                                            src: "/images/header/logo.svg",
                                            alt: "Sary"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SideBars_SideBars__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                anchor: "right",
                isOpen: isSidebarOpen,
                onClose: handleSidebarClose,
                isPrimaryBg: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        width: "394px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-black w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mr-10 ml-10 py-12",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    style: {
                                        fontSize: "25px",
                                        fontWeight: "700",
                                        color: "#C6CEE6"
                                    },
                                    children: "הפרופיל שלי"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mr-10 ml-10 mt-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "grid grid-cols-12",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-5 items-center flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            priority: true,
                                            width: 78,
                                            height: 78,
                                            src: "/images/header/avatars/avatar.svg",
                                            alt: "Sary",
                                            className: "cursor-pointer",
                                            onClick: ()=>handleSidebarToggle()
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col-span-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                style: {
                                                    fontSize: "35px",
                                                    fontWeight: "700",
                                                    color: "#C6CEE6"
                                                },
                                                children: "אורלי"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-4",
                                                style: {
                                                    color: "#C6CEE6"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        priority: true,
                                                        width: 22,
                                                        height: 22,
                                                        src: "/images/phone.svg",
                                                        alt: "Sary",
                                                        className: "cursor-pointer",
                                                        onClick: ()=>handleSidebarToggle()
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "0501234567"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-4",
                                                style: {
                                                    color: "#C6CEE6"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        priority: true,
                                                        width: 22,
                                                        height: 22,
                                                        src: "/images/email.svg",
                                                        alt: "Sary",
                                                        className: "cursor-pointer",
                                                        onClick: ()=>handleSidebarToggle()
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: "admin@gmail.com"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "absolute mr-12 flex items-center text-center gap-4 cursor-pointer",
                            style: {
                                bottom: "120px",
                                color: "#C6CEE6"
                            },
                            onClick: ()=>handleExitSystem(),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    priority: true,
                                    width: 25,
                                    height: 25,
                                    src: "/images/arrowLeft.svg",
                                    alt: "Sary",
                                    className: "items-center "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "יציאה מהמערכת"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ sidebar_Sidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
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
        icon: "/images/sidebar/summary.svg",
        href: "/admin/tableOfContents"
    }
];

;// CONCATENATED MODULE: ./src/components/AdminScreens/layout/sidebar/Sidebar.tsx





const Sidebar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: "bg-primary flex flex-col justify-between fixed",
        style: {
            height: "100%"
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


/***/ }),

/***/ 5390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7898);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);




const StyledDrawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.styled)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_2___default()))(({ isPrimaryBg  })=>({
        "& .MuiDrawer-paper": {
            marginTop: "70px",
            backgroundColor: isPrimaryBg ? "#002536" : "white"
        },
        "& .MuiBackdrop-root": {
            marginTop: "70px"
        }
    }));
const SideBars = ({ anchor , isOpen , onClose , children , isPrimaryBg  })=>{
    const toggleDrawer = (open)=>(event)=>{
            if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            if (isOpen !== open) {
                if (!open) {
                    onClose();
                }
            }
        };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDrawer, {
            anchor: anchor,
            open: isOpen,
            onClose: toggleDrawer(false),
            style: {
                marginTop: "70px"
            },
            isPrimaryBg: isPrimaryBg,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: children
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBars);


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
/* harmony export */   "QS": () => (/* binding */ onInfoAlert),
/* harmony export */   "pl": () => (/* binding */ onAsk)
/* harmony export */ });
/* unused harmony export apiResponseHandler */
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
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
        confirmButtonText: "כן",
        cancelButtonText: "לא",
        customClass: {
            confirmButton: "bg-primary",
            cancelButton: ""
        }
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