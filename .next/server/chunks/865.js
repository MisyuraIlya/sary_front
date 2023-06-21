"use strict";
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 7865:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_CourseCard_CourseCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6623);
/* harmony import */ var _ui_heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _course_rellations_CourseRellationsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2551);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var _ui_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1559);
/* harmony import */ var _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4446);
/* harmony import */ var _layout_AdminLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1359);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_CourseCard_CourseCard__WEBPACK_IMPORTED_MODULE_1__, _course_rellations_CourseRellationsContainer__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_7__, _layout_AdminLayout__WEBPACK_IMPORTED_MODULE_8__]);
([_ui_CourseCard_CourseCard__WEBPACK_IMPORTED_MODULE_1__, _course_rellations_CourseRellationsContainer__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_7__, _layout_AdminLayout__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const TableOfContents = ()=>{
    const [addCourse, setAddCourse] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)();
    const { courses , CourseMethods , choosedLvl1 , choosedCourse , lvl1 , lvl2 , lvl3 , lvl4  } = (0,_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_7__/* .useCourse */ .T)();
    const onSubmit = ()=>CourseMethods.createFunction("", 1, null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const handleChooseCourse = (item)=>{
    // CourseMethods.setChoosedCourse(item.name)
    // CourseMethods.setChoosedLvl1(item.id)
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Meta__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        title: "קורסים",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full",
                style: {
                    backgroundColor: "#F0FBFF"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mr-12 mb-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                className: "pt-12 pb-4",
                                children: "תוכן העניינים"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "gap-8 flex overflow-x-auto w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_CourseCard_CourseCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                            item: {
                                                id: 0,
                                                color: "",
                                                level: 1,
                                                published: true,
                                                name: "",
                                                grade: "",
                                                orden: 0,
                                                image: ""
                                            },
                                            isNew: true,
                                            handleCourse: onSubmit
                                        })
                                    }),
                                    courses?.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>handleChooseCourse(item),
                                            className: "flex-shrink-0 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_CourseCard_CourseCard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                item: item,
                                                isNew: false,
                                                handleCourse: onSubmit
                                            }, index)
                                        }, index))
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white",
                        style: {
                            minHeight: "45%"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-12 py-6",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "עריכת קורס: ",
                                        lvl1?.name,
                                        " ",
                                        lvl2?.name && "/",
                                        " ",
                                        lvl2?.name,
                                        " ",
                                        lvl3?.name && "/",
                                        " ",
                                        lvl3?.name,
                                        " ",
                                        lvl4?.name && "/",
                                        " ",
                                        lvl4?.name,
                                        "  "
                                    ]
                                })
                            }),
                            choosedLvl1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_course_rellations_CourseRellationsContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableOfContents);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9799:
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
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4446);
/* harmony import */ var _utils_sweetAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4100);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const RellationCard = ({ item , isExercise , level , clearArray  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { CourseMethods , choosedLvl1 , choosedLvl2 , choosedLvl3 , choosedLvl4  } = (0,_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_4__/* .useCourse */ .T)();
    const { register , handleSubmit , watch , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const onSubmit = (data)=>{
        CourseMethods.updateFunction(item.id, data.name, item.grade, item.level, item.published, item.orden);
        setEditMode(false);
        clearArray();
    };
    const handleRemove = async ()=>{
        const res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_5__/* .onAsk */ .pl)("את בטוחה שאת רוצה למחוק?", "אם תלחצי כן לא תוכלי לשחזר את הקובץ והוא ימחק באופן סופי");
        if (res) {
            CourseMethods.removeFunction(item.id, item.level);
        }
        clearArray();
    };
    const { query  } = router;
    const handleChoose = (id)=>{
        // choosedLVl(item.id)
        if (query.first && level === 2) {
            router.push(`/admin/tableOfContents/${query.first}/${id}`);
        } else if (query.first && query.second && level === 3) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${id}`);
        } else if (query.first && query.second && query.third && level === 4) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${query.third}/${id}`);
        } else if (query.first && !query.second && query.third && query.fourth && level === 5) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${query.third}/${query.fourth}/${id}`);
        } else if (query.first && !query.second && query.third && query.fourth && query.fifth) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${query.third}/${query.fourth}/${query.fifth}`);
        }
    };
    const checkOnActive = ()=>{
        if (level === 2) {
            if (choosedLvl2 == item.id) {
                return true;
            }
        } else if (level === 3) {
            if (choosedLvl3 == item.id) {
                return true;
            }
        } else if (level === 4) {
            if (choosedLvl4 == item.id) {
                return true;
            }
        } else if (level == 5) {} else {
            return false;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `border-t border-gray cardHover ${checkOnActive() ? "clickedCard" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex py-2 m-auto px-4 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex items-center cursor-pointer",
                        onClick: ()=>handleChoose(item.id),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: item.name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-2 ",
                        children: [
                            isExercise && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " border border-black rounded-full flex justify-center w-12 h-12 hover:bg-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/images/eye.svg",
                                    width: 30,
                                    height: 30,
                                    priority: true,
                                    alt: "trash",
                                    className: " cursor-pointer rounded-lg p-1",
                                    onClick: ()=>router.push(`/admin/createModule/${item.id}`)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border border-black rounded-full flex justify-center w-12 h-12 hover:bg-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/images/draw.svg",
                                    width: 25,
                                    height: 2,
                                    priority: true,
                                    alt: "draw",
                                    className: " cursor-pointer rounded-lg p-1",
                                    onClick: ()=>setEditMode(!editMode)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "border border-black rounded-full flex justify-center w-12 h-12 hover:bg-white",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/images/trash.svg",
                                    width: 25,
                                    height: 25,
                                    priority: true,
                                    alt: "trash",
                                    className: " cursor-pointer rounded-lg p-1",
                                    onClick: ()=>handleRemove()
                                })
                            })
                        ]
                    })
                ]
            }),
            editMode && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "flex pt-4 m-auto px-4 py-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full flex items-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            ...register("name"),
                            type: "text",
                            placeholder: "עריכה",
                            className: "border border-gray p-2 rounded-md"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-2 justify-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " rounded-full flex justify-center w-12 h-12",
                                style: {
                                    backgroundColor: "#31B0F2"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/images/vWhite.svg",
                                    width: 25,
                                    height: 25,
                                    priority: true,
                                    alt: "draw",
                                    className: " cursor-pointer rounded-lg p-1",
                                    onClick: handleSubmit(onSubmit)
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: " rounded-full flex justify-center w-12 h-12",
                                style: {
                                    backgroundColor: "rgba(49, 176, 242, 0.3)"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    src: "/images/xBlue.svg",
                                    width: 25,
                                    height: 25,
                                    priority: true,
                                    alt: "trash",
                                    className: " cursor-pointer rounded-lg p-1",
                                    onClick: ()=>setEditMode(false)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RellationCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 18:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7042);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4446);
/* harmony import */ var _RellationCard_RellationCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9799);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9191);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_5__, _RellationCard_RellationCard__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_4__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_5__, _RellationCard_RellationCard__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const RellationContainer = ({ data , title , level , parentId , isExercise  })=>{
    const { CourseMethods  } = (0,_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_5__/* .useCourse */ .T)();
    const [activeAdd, setActiveAdd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [filterData, setFilterData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [filterArr, setFilterArr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [changedArray, setChangedArray] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { register: registerAdd , handleSubmit: handleAdd  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    const onSubmitAdd = (data)=>{
        CourseMethods.createFunction(data.name, level, parentId);
        setActiveAdd(false);
        clearArray();
    };
    const onDragEnd = (result)=>{
        if (!result.destination) return;
        const newItems = data;
        const [removed] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, removed);
        if (filterArr.length > 0) {
            const updatedFilterArr = newItems.map((item, index)=>({
                    ...item,
                    orden: index + 1
                }));
            setFilterArr(updatedFilterArr);
        } else {
            const updatedData = newItems.map((item, index)=>({
                    ...item,
                    orden: index + 1
                }));
            setChangedArray(updatedData);
            setTimeout(()=>{
                updatedData.map((item)=>{
                    CourseMethods.silentUpdate(item.id, item.name, item.grade, item.level, item.published, item.orden);
                });
            }, 500);
        }
    };
    const clearArray = ()=>{
        setChangedArray([]);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (filterData) {
            let filter = (changedArray.length > 0 ? changedArray : data).filter((item)=>item.name.includes(filterData));
            setFilterArr(filter);
        } else {
            setFilterArr([]);
        }
    }, [
        data,
        filterData,
        changedArray
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {
        onDragEnd: onDragEnd,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "border border-black/20 rounded-md",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex w-full border-b-2 border-black/10 py-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex w-full m-auto px-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex py-4 m-auto px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    backgroundColor: "#31B0F2"
                                },
                                className: "w-11 h-10 rounded-lg text-center items-center justify-center cursor-pointer  flex",
                                onClick: ()=>setActiveAdd(!activeAdd),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "/images/+.svg",
                                    width: 20,
                                    height: 20,
                                    alt: "add",
                                    priority: true
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full flex justify-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_SearchInput_SearchInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    placeholder: "חיפוש",
                                    value: filterData,
                                    onChange: (e)=>setFilterData(e.target.value)
                                })
                            })
                        ]
                    }),
                    activeAdd && (!isExercise ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "m-auto px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "שם ה",
                                        title
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleAdd(onSubmitAdd),
                                className: "grid grid-cols-8 gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-6",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...registerAdd("name"),
                                            className: "border border-primary/30 rounded-md w-full px-2 py-2",
                                            placeholder: "שם"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-green/40  w-full rounded-md text-white  hover:bg-green/70 py-2",
                                            style: {
                                                backgroundColor: "#31B0F2"
                                            },
                                            children: "שמירה"
                                        })
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "m-auto px-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex py-2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "שם התרגיל"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleAdd(onSubmitAdd),
                                className: "grid grid-cols-8 gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            ...registerAdd("name"),
                                            className: "border border-primary/30 rounded-md w-full px-2 py-2",
                                            placeholder: "שם"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-span-12",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-green/40  w-full rounded-md text-white  hover:bg-green/70 py-2",
                                            style: {
                                                backgroundColor: "#31B0F2"
                                            },
                                            children: "בניית תרגיל"
                                        })
                                    })
                                ]
                            })
                        ]
                    })),
                    loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "myCenter p-12",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__.TailSpin, {
                            height: "80",
                            width: "80",
                            color: "#31B0F2",
                            ariaLabel: "tail-spin-loading",
                            radius: "1",
                            wrapperStyle: {},
                            wrapperClass: "",
                            visible: loading
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "overflow-auto py-2",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable, {
                            droppableId: "droppable",
                            children: (provided)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ...provided.droppableProps,
                                    ref: provided.innerRef,
                                    children: [
                                        (changedArray.length > 0 ? filterArr.length > 0 ? filterArr : changedArray : filterArr.length > 0 ? filterArr : data).map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable, {
                                                draggableId: item.id.toString(),
                                                index: index,
                                                children: (provided)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        ref: provided.innerRef,
                                                        ...provided.draggableProps,
                                                        ...provided.dragHandleProps,
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RellationCard_RellationCard__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                            item: item,
                                                            isExercise: isExercise,
                                                            level: level,
                                                            clearArray: clearArray
                                                        }, index)
                                                    })
                                            }, item.id)),
                                        provided.placeholder
                                    ]
                                })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RellationContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4446);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_3__]);
([_components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__, _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const CourseRellationsContainer = ()=>{
    const { CourseMethods , lvl1 , lvl2 , lvl3 , lvl4 , choosedLvl1 , choosedLvl2 , choosedLvl3 , choosedLvl4 , isLoadingLvl1 , loadingLvl2 , loadingLvl3 , loadingLvl4  } = (0,_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_3__/* .useCourse */ .T)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLoadingLvl1 || loadingLvl2 || loadingLvl3 || loadingLvl4 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "myCenter",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__.ThreeDots, {
                height: "80",
                width: "80",
                radius: "9",
                color: "#31B0F2",
                ariaLabel: "three-dots-loading",
                wrapperStyle: {},
                visible: true
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-4 gap-4 px-12 pb-12",
            children: [
                lvl1?.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "פרקים",
                    data: lvl1?.children,
                    level: 2,
                    parentId: choosedLvl1,
                    isExercise: false
                }),
                lvl2?.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "יחידות",
                    data: lvl2.children,
                    level: 3,
                    parentId: choosedLvl2,
                    isExercise: false
                }),
                lvl3?.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "נושאים",
                    data: lvl3.children,
                    level: 4,
                    parentId: choosedLvl3,
                    isExercise: false
                }),
                lvl4?.children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_RellationContainer_RellationContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    title: "תרגילים",
                    data: lvl4.children,
                    level: 5,
                    parentId: choosedLvl4,
                    isExercise: true
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseRellationsContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heading_SubHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6693);
/* harmony import */ var _heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2667);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8248);
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4446);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var _utils_sweetAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4100);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__]);
([_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_6__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const CourseCard = ({ item , isNew , handleCourse  })=>{
    const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.published);
    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { CourseMethods , choosedLvl1  } = (0,_providers_course_CourseProvider__WEBPACK_IMPORTED_MODULE_6__/* .useCourse */ .T)();
    const onSubmit = (data)=>{
        CourseMethods.updateFunction(item.id, data.name, data.grade, 1, checked, item.orden);
        setEditMode(false);
    };
    const handleChange = ()=>{
        setChecked(!checked);
        CourseMethods.updateFunction(item.id, item.name, item.grade, 1, !checked, item.orden);
    };
    const handleRemoveCourse = async ()=>{
        const res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_8__/* .onAsk */ .pl)("את בטוחה שאת רוצה למחוק?", "אם תלחצי כן לא תוכלי לשחזר את הקובץ והוא ימחק באופן סופי");
        if (res) {
            CourseMethods.removeFunction(item.id, 1);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `rounded-md relative ${editMode ? "editMode" : ""} relative ${isNew ? "bg-white" : "bg-green/10"} myShadowCard cursor-pointer ${choosedLvl1 == item.id ? "activeShadow" : ""}`,
        style: {
            height: "300px",
            width: "300px"
        },
        onClick: ()=>router.push(`/admin/tableOfContents/${item.id}`),
        children: [
            editMode && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute m-4 text-white",
                onClick: ()=>setEditMode(false),
                children: "X"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center h-full flex justify-center items-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: !isNew ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: editMode ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ...register("grade"),
                                        type: "text",
                                        placeholder: "כיתה",
                                        className: "px-2 rounded-md py-2 m-1 text-black"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ...register("name"),
                                        type: "text",
                                        placeholder: "שם הקורס",
                                        className: "px-2 rounded-md py-2 m-1 text-black"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-primary text-white mt-2 px-4 py-2 rounded-lg",
                                            type: "submit",
                                            children: "שמירה"
                                        })
                                    })
                                ]
                            })
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_SubHeading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    children: item.grade
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    className: "text-xl",
                                    children: item.name
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "bg-gray p-8 rounded-full",
                            onClick: ()=>handleCourse(),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/images/+.svg",
                                width: 19,
                                height: 15,
                                alt: "+"
                            })
                        })
                    })
                })
            }),
            !isNew ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `bg-green/30 absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-12 w-full mr-5 mt-2 mb-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `col-span-8 flex gap-4`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-white rounded-full cursor-pointer flex justify-center p-4",
                                    onClick: ()=>setEditMode(!editMode),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: `/images/draw.svg`,
                                        width: 15,
                                        height: 15,
                                        alt: "draw"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-white rounded-full  cursor-pointer flex justify-center p-4",
                                    onClick: ()=>handleRemoveCourse(),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: "/images/trash.svg",
                                        width: 19,
                                        height: 15,
                                        alt: "draw"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-span-4 items-center flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_switch__WEBPACK_IMPORTED_MODULE_5___default()), {
                                onChange: handleChange,
                                checked: checked
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `bg-gray absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const SearchInput = ({ placeholder , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex border border-black/50 px-2 rounded-md",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: placeholder,
                ...rest,
                className: "hover:border-none"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/images/search.svg",
                width: 15,
                height: 15,
                alt: "search",
                priority: true
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);


/***/ }),

/***/ 4446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ CourseProvider),
/* harmony export */   "T": () => (/* binding */ useCourse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8577);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_courses_courses__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
([_services_courses_courses__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Global





const CourseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
// React hook
const useCourse = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CourseContext);
    if (!context) {
        throw new Error('Can not run without "CourseProvider"');
    }
    return context;
};
const CourseProvider = (props)=>{
    // state
    const [choosedCourse, setChoosedCourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [choosedLvl1, setChoosedLvl1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [choosedLvl2, setChoosedLvl2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [choosedLvl3, setChoosedLvl3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [choosedLvl4, setChoosedLvl4] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [choosedLvl5, setChoosedLvl5] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // Helpers
    const { data: courses , isLoading: isLoadingCourses , isError: isErrorCourses , refetch: refetchCourses  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "get courses"
    ], ()=>_services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.getCoursesLvl1 */ .N.getCoursesLvl1(), {
        staleTime: 0,
        cacheTime: 0
    });
    const { data: lvl1 , isLoading: isLoadingLvl1 , isError: isErrorLvl1 , refetch: refetchLvl1  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "get course by id",
        choosedLvl1
    ], ()=>{
        if (choosedLvl1 === null) {
            return null;
        }
        return _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.getChildrenById */ .N.getChildrenById(choosedLvl1);
    }, {
        staleTime: 0,
        cacheTime: 0
    });
    const { data: lvl2 , isLoading: loadingLvl2 , isError: errorLvl2 , refetch: refetchLvl2  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "get course by id",
        choosedLvl2
    ], ()=>{
        if (choosedLvl2 === null) {
            return null;
        }
        return _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.getChildrenById */ .N.getChildrenById(choosedLvl2);
    }, {
        staleTime: 0,
        cacheTime: 0
    });
    const { data: lvl3 , isLoading: loadingLvl3 , isError: errorLvl3 , refetch: refetchLvl3  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "get course by id",
        choosedLvl3
    ], ()=>{
        if (choosedLvl3 === null) {
            return null;
        }
        return _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.getChildrenById */ .N.getChildrenById(choosedLvl3);
    }, {
        staleTime: 0,
        cacheTime: 0
    });
    const { data: lvl4 , isLoading: loadingLvl4 , isError: errorLvl4 , refetch: refetchLvl4  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "get course by id",
        choosedLvl4
    ], ()=>{
        if (choosedLvl4 === null) {
            return null;
        }
        return _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.getChildrenById */ .N.getChildrenById(choosedLvl4);
    }, {
        staleTime: 0,
        cacheTime: 0
    });
    const refetchingLvlFunc = (lvl)=>{
        if (lvl == 1) {
            refetchLvl1();
        } else if (lvl == 2) {
            refetchLvl2();
        } else if (lvl == 3) {
            refetchLvl3();
        } else if (lvl == 4) {
            refetchLvl4();
        }
        if (lvl == 0) {
            refetchLvl1();
        }
    };
    const refetchRemove = ()=>{
        refetchLvl1();
        refetchLvl2();
        refetchLvl3();
        refetchLvl4();
    };
    const updateFunction = async (id, name, grade, lvl, published, orden)=>{
        await _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.update */ .N.update(id, {
            name,
            grade,
            published,
            orden
        });
        refetchingLvlFunc(lvl - 1);
        refetchCourses();
    };
    const silentUpdate = async (id, name, grade, lvl, published, orden)=>{
        await _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.update */ .N.update(id, {
            name,
            grade,
            published,
            orden
        });
    };
    const removeFunction = async (id, lvl)=>{
        await _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.remove */ .N.remove(id);
        refetchRemove();
        refetchCourses();
    };
    const createFunction = async (name, level, parent)=>{
        await _services_courses_courses__WEBPACK_IMPORTED_MODULE_2__/* .CourseService.create */ .N.create({
            name: name,
            level: level,
            totalChildren: 1,
            parent: parent,
            published: true
        });
        if (parent == null) {
            refetchCourses();
        }
        refetchingLvlFunc(level - 1);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleRouter = ()=>{
            const { query  } = router;
            if (query.first && !query.second && !query.third && !query.fourth && !query.fifth) {
                setChoosedLvl1(query.first);
            } else if (query.first && query.second && !query.third && !query.fourth && !query.fifth) {
                setChoosedLvl1(query.first);
                setChoosedLvl2(query.second);
            } else if (query.first && query.second && query.third && !query.fourth && !query.fifth) {
                setChoosedLvl1(query.first);
                setChoosedLvl2(query.second);
                setChoosedLvl3(query.third);
            } else if (query.first && query.second && query.third && query.fourth && !query.fifth) {
                setChoosedLvl1(query.first);
                setChoosedLvl2(query.second);
                setChoosedLvl3(query.third);
                setChoosedLvl4(query.fourth);
            }
        };
        handleRouter();
    }, [
        router.query.first,
        router.query.second,
        router.query.third,
        router.query.fourth,
        router.query.fifth,
        router
    ]);
    const CourseMethods = {
        setChoosedLvl1,
        setChoosedLvl2,
        setChoosedLvl3,
        setChoosedLvl4,
        setChoosedLvl5,
        refetchLvl1,
        refetchLvl2,
        refetchLvl3,
        refetchLvl4,
        updateFunction,
        silentUpdate,
        removeFunction,
        createFunction,
        setChoosedCourse
    };
    const value = {
        courses,
        CourseMethods,
        lvl1,
        choosedLvl1,
        lvl2,
        choosedLvl2,
        lvl3,
        choosedLvl3,
        lvl4,
        choosedLvl4,
        choosedCourse,
        isLoadingLvl1,
        loadingLvl2,
        loadingLvl3,
        loadingLvl4
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CourseContext.Provider, {
        value: value,
        ...props
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8577:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ CourseService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const CourseService = {
    async create (data) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/courses`,
            method: "POST",
            data: data
        });
        return response.data;
    },
    async getCoursesLvl1 () {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/courses`,
            method: "GET"
        });
        return response.data;
    },
    async getChildrenById (id) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/courses/parent/${id}`,
            method: "GET"
        });
        return response.data;
    },
    async getRecursiveChildren (id) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/courses/recursiveId/${id}`,
            method: "GET"
        });
        return response.data;
    },
    async update (id, data) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/courses/${id}`,
            method: "PUT",
            data: data
        });
        return response.data;
    },
    async remove (id) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/courses/${id}`,
            method: "DELETE"
        });
        return response.data;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;