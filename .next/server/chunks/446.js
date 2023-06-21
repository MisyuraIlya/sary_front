"use strict";
exports.id = 446;
exports.ids = [446];
exports.modules = {

/***/ 5446:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1559);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1359);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3554);
/* harmony import */ var _ui_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4852);
/* harmony import */ var _ui_heading_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2667);
/* harmony import */ var _ModuleParser_FirstModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6594);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1930);
/* harmony import */ var _ui_heading_SubHeading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6693);
/* harmony import */ var _components_ColsCard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2609);
/* harmony import */ var _utils_sweetAlert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4100);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_SideBars_SideBars__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5390);
/* harmony import */ var _components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1480);
/* harmony import */ var _helpers_Substring10__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(7095);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__, react_select__WEBPACK_IMPORTED_MODULE_4__, _ModuleParser_FirstModule__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__, _components_ColsCard__WEBPACK_IMPORTED_MODULE_12__, _components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_17__]);
([_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__, react_select__WEBPACK_IMPORTED_MODULE_4__, _ModuleParser_FirstModule__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__, _components_ColsCard__WEBPACK_IMPORTED_MODULE_12__, _components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




















const options = [
    {
        value: 1,
        label: "מודול ראשון"
    }
];
const CreateModule = ()=>{
    const [isEmptySelect, setIsEmptySelect] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [module, setModule] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { ExerciseMethods , exercises , isOnlineXml , loading  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__/* .useExercise */ .t)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const moduleId = router.query.moduleId;
    const { register , handleSubmit: handleSubmitForm , watch , formState: { errors  } , setValue , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const onSubmit = (data)=>{
        console.log("data", data);
        ExerciseMethods.createMoudle(data);
    };
    const handleFileChange = (event)=>{
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        console.log("isEmptySelect", isEmptySelect);
        if (!isEmptySelect) {
            (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_13__/* .onInfoAlert */ .QS)("אנא בחרו מודל רצוי", "");
        } else {
            if (selectedFile) {
                try {
                    let res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_13__/* .onAsk */ .pl)("האם תרצו להריץ את הקובץ?", "");
                    if (res) {
                        ExerciseMethods.uploadXml(selectedFile);
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            } else {
                console.error("No file selected");
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (exercises) {
            setValue("title", exercises?.title);
            setValue("description", exercises?.description);
            setValue("description2", exercises?.description2);
            setValue("module", exercises?.module);
            setValue("courseId", moduleId);
            setValue("youtube_link", exercises?.youtube_link);
            setValue("pdf", exercises?.pdf);
        }
    }, [
        exercises,
        moduleId,
        setValue
    ]);
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const handleSidebarToggle = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleSidebarClose = ()=>{
        setIsSidebarOpen(false);
    };
    const getValue = (value)=>value ? options.find((option)=>option.value === value) : {
            value: exercises?.module,
            label: exercises?.module
        };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "יצירת מודול",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mr-12",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            children: exercises?.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_heading_SubHeading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            children: exercises?.description
                        }),
                        exercises?.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-b border-solid border-2 border-gray-400"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-2 py-10 px-2 relative",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                    control: control,
                                    name: `module`,
                                    rules: {
                                        required: "צריך לבחור מודול"
                                    },
                                    render: ({ field: { onChange , value  } , fieldState: { error  }  })=>{
                                        setIsEmptySelect(value);
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                console.log("value", value),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    placeholder: "בחירת מודול",
                                                    options: options,
                                                    value: getValue(value),
                                                    onChange: (newValue)=>onChange((newValue?.value)),
                                                    className: "w-96"
                                                }),
                                                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        color: "red",
                                                        position: "absolute",
                                                        bottom: "10px",
                                                        paddingRight: "15px"
                                                    },
                                                    children: error.message
                                                })
                                            ]
                                        });
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    encType: "multipart/form-data",
                                    className: "justify-end items-end flex gap-12",
                                    children: [
                                        exercises?.title && moduleId && isOnlineXml && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "bg-red text-white rounded-md",
                                            onClick: ()=>ExerciseMethods.deleteModule(moduleId),
                                            children: "מחיקה"
                                        }),
                                        !isOnlineXml && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    htmlFor: "fileInput",
                                                    className: "w-56 bg-primary flex items-center justify-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md cursor-pointer",
                                                    children: "בחר קובץ"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    id: "fileInput",
                                                    type: "file",
                                                    onChange: handleFileChange,
                                                    className: "hidden"
                                                }),
                                                selectedFile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            className: "bg-primary text-white rounded-md ",
                                                            children: "העלה"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "absolute ",
                                                            children: (0,_helpers_Substring10__WEBPACK_IMPORTED_MODULE_18__/* .substring10 */ .O)(selectedFile.name)
                                                        })
                                                    ]
                                                }),
                                                selectedFile && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    className: "bg-green text-white rounded-md",
                                                    onClick: handleSubmitForm(onSubmit),
                                                    children: "שמור"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-primary p-2 rounded-lg",
                                            onClick: ()=>handleSidebarToggle(),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
                                                src: "/images/settings.svg",
                                                alt: "settings",
                                                width: 25,
                                                height: 25
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "myCenter",
                    style: {
                        minHeight: "50vh"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__.Oval, {
                        height: 80,
                        width: 80,
                        color: "#4fa94d",
                        wrapperStyle: {},
                        wrapperClass: "",
                        visible: true,
                        ariaLabel: "oval-loading",
                        secondaryColor: "#4fa94d",
                        strokeWidth: 2,
                        strokeWidthSecondary: 2
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmitForm(onSubmit),
                    className: "mr-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                            className: "",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "heading bg-primary",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center justify-center text-white"
                                        }),
                                        exercises?.collectionsCols?.map((item, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ColsCard__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    item: item,
                                                    index: index + 1,
                                                    register: register,
                                                    setValue: setValue
                                                })
                                            }, index);
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "text-center justify-center text-white "
                                        })
                                    ]
                                }),
                                exercises?.collectionsRows?.map((item, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ModuleParser_FirstModule__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            exercises: item,
                                            register: register,
                                            orden: item.orden,
                                            setValue: setValue,
                                            control: control
                                        }, index)
                                    }, index);
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SideBars_SideBars__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    anchor: "left",
                    isOpen: isSidebarOpen,
                    onClose: handleSidebarClose,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "700px"
                        },
                        className: "myCenter",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "m-10 w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        children: exercises?.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_heading_SubHeading__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        children: exercises?.description
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pt-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        value: exercises?.description2 ?? "",
                                        className: "w-full h-96"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                    exercises: exercises,
                                    register: register,
                                    setValue: setValue,
                                    tableType: "exercises"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FieldModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9381);
/* harmony import */ var _components_InputModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5265);
/* harmony import */ var _components_SelectModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2339);
/* harmony import */ var _components_TextAreaModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5948);
/* harmony import */ var _components_SideBars_SideBars__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5390);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7326);
/* harmony import */ var _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1930);
/* harmony import */ var _ui_heading_Heading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2667);
/* harmony import */ var _components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1480);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FieldModule__WEBPACK_IMPORTED_MODULE_2__, _components_SelectModule__WEBPACK_IMPORTED_MODULE_4__, _components_TextAreaModule__WEBPACK_IMPORTED_MODULE_5__, _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_8__, _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_9__, _components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_11__]);
([_components_FieldModule__WEBPACK_IMPORTED_MODULE_2__, _components_SelectModule__WEBPACK_IMPORTED_MODULE_4__, _components_TextAreaModule__WEBPACK_IMPORTED_MODULE_5__, _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_8__, _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_9__, _components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const FirstModule = ({ exercises , register , orden , setValue , control  })=>{
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { isOnlineXml  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_9__/* .useExercise */ .t)();
    const uploadPdf = async (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            const data = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_8__/* .ExercisesService.uploadPdf */ .s.uploadPdf(file);
            setValue(`collectionsRows[${orden}].pdf`, data.path);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${orden}].orden`, orden);
        setValue(`collectionsRows[${orden}].youtube_link`, exercises?.youtube_link);
        setValue(`collectionsRows[${orden}].pdf`, exercises?.pdf);
    }, [
        orden,
        setValue,
        exercises?.pdf,
        exercises?.youtube_link
    ]);
    const handleSidebarToggle = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleSidebarClose = ()=>{
        setIsSidebarOpen(false);
    };
    const openNewTab = ()=>{
        if (exercises?.pdf) {
            window.open(`http://localhost:4000/${exercises?.pdf}`, "_blank", "noopener");
        }
    };
    const openNewTabYoutube = ()=>{
        if (exercises?.pdf) {
            window.open(`${exercises?.youtube_link}`, "_blank", "noopener");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                className: "bg-primary text-white pt-5",
                children: orden
            }),
            exercises.collectionRow.map((item, index)=>{
                if (item.module_type == "text") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FieldModule__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    value: item.collectionValues[0].value,
                    register: register,
                    col: orden,
                    row: item.orden,
                    setValue: setValue
                }, index);
                if (item.module_type == "input") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_InputModule__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    answer: item.collectionAnswers.length > 0 ? item.collectionAnswers[0].value : "",
                    placeholder: item.placeholder || "",
                    register: register,
                    col: orden,
                    row: item.orden,
                    setValue: setValue,
                    isFullText: item.isFullText
                }, index);
                if (item.module_type == "selectbox") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SelectModule__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    placeholder: item.placeholder || "",
                    options: item.collectionValues,
                    answer: item.collectionAnswers.length > 0 ? item.collectionAnswers[0].value : "",
                    register: register,
                    col: orden,
                    row: item.orden,
                    setValue: setValue,
                    control: control
                }, index);
                if (item.module_type == "textarea") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_TextAreaModule__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    value: item.collectionValues[0].value,
                    register: register,
                    col: orden,
                    row: item.orden,
                    setValue: setValue
                }, index);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                className: "bg-white",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex gap-6 items-center justify-center pt-4",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-primary p-2 rounded-lg cursor-pointer",
                        onClick: ()=>handleSidebarToggle(),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                            src: "/images/settings.svg",
                            alt: "settings",
                            width: 25,
                            height: 25
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SideBars_SideBars__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                anchor: "left",
                isOpen: isSidebarOpen,
                onClose: handleSidebarClose,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: "700px"
                    },
                    className: "myCenter",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "m-10 w-full",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_heading_Heading__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    children: [
                                        "שורה מספר: ",
                                        exercises?.orden,
                                        " "
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sidebar_components_SideLinks__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                exercises: exercises,
                                register: register,
                                setValue: setValue,
                                tableType: "exercises_rows",
                                orden: orden
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirstModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1930);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__]);
_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ColsCard = ({ item , register , setValue , index  })=>{
    const { isOnlineXml  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__/* .useExercise */ .t)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setValue(`collectionsCols[${item.orden}].orden`, index);
    }, [
        item.orden,
        index,
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            disabled: true,
            // disabled={isOnlineXml ? true : false}
            className: "w-36 rounded-md  text-white bg-primary text-center",
            ...register(`collectionsCols[${item.orden}].title`, {
                value: item.title
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColsCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1930);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__]);
_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FieldModule = ({ value , register , col , row , setValue  })=>{
    const { isOnlineXml  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__/* .useExercise */ .t)();
    const handleInputChange = (event)=>{
        const text = event.target.innerText;
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, text);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "text");
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
        setValue(`collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    }, [
        col,
        row,
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        className: "pt-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    contentEditable: true,
                    // onInput={handleInputChange} 
                    dangerouslySetInnerHTML: {
                        __html: value
                    },
                    className: "text-right pr-2"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
                    disable: true,
                    ...register(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, {
                        value: [
                            {
                                value: value
                            }
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const InputModule = ({ answer , placeholder , register , col , row , setValue , isFullText  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "input");
        setValue(`collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
    }, [
        col,
        row,
        setValue,
        isFullText
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
        className: "bg-white pt-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                // disabled={isOnlineXml ? true : false}
                disabled: true,
                placeholder: placeholder,
                className: "w-28 px-4 h-full py-2 border border-gray rounded-md",
                ...register(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, {
                    value: answer
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "checkbox",
                        ...register(`collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-sm pr-2",
                        children: "בכתיב מלא"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputModule);


/***/ }),

/***/ 2339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3554);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
([react_select__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SelectModule = ({ placeholder , options , answer , col , row , register , setValue , control  })=>{
    const optionsNew = options?.map((item)=>({
            value: item.value,
            label: item.value
        }));
    const getValue = (value)=>value ? optionsNew.find((option)=>option.value.trim() == value) : {
            value: answer,
            label: answer
        };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, answer);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, options);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "selectbox");
        setValue(`collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    }, [
        answer,
        col,
        options,
        row,
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        className: "bg-white pt-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
            control: control,
            name: `collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,
            rules: {
                required: "צריך לבחור את התשובה"
            },
            render: ({ field: { onChange , value  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            placeholder: placeholder,
                            options: optionsNew,
                            value: getValue(value),
                            onChange: (newValue)=>onChange((newValue?.value)),
                            className: "ml-4 mr-4"
                        }),
                        error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                color: "red"
                            },
                            children: error.message
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1930);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__]);
_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TextAreaModule = ({ value , register , col , row , setValue  })=>{
    const { isOnlineXml  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_1__/* .useExercise */ .t)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "textarea");
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
        setValue(`collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    }, [
        col,
        row,
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        className: "bg-white pt-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
            // disabled={isOnlineXml ? true : false} 
            disabled: true,
            type: "hidden",
            ...register(`collectionsRows[${col}].collectionRow[${row}].collectionValues[0].value`, {
                value
            }),
            style: {
                width: "200px",
                height: "50px",
                resize: "none"
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAreaModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1480:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1930);
/* harmony import */ var _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7326);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_2__, _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_3__]);
([_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_2__, _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const SideLinks = ({ exercises , register , setValue , tableType , orden  })=>{
    const { isOnlineXml  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_2__/* .useExercise */ .t)();
    const [openEditPdf, setOpenEditPdf] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openEditVideo, setOpenEditVideo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [localFile, setLocalFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [link, setLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isUpdatedLink, setIsUpdatedLink] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isUpdatedPdf, setIsUpdatedPdf] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const uploadPdf = async (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            const data = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_3__/* .ExercisesService.uploadPdf */ .s.uploadPdf(file);
            setValue(`${tableType == "exercises" ? "pdf" : `collectionsRows[${orden}].pdf`}`, data.path);
            setLocalFile(data.path);
        }
    };
    const openNewTab = ()=>{
        let pdfLink = exercises?.pdf;
        if (isUpdatedPdf) {
            pdfLink = localFile;
        }
        if (exercises?.pdf) {
            window.open(`http://localhost:4000/${pdfLink}`, "_blank", "noopener");
        }
    };
    const openNewTabYoutube = ()=>{
        let youtubeLink = exercises?.youtube_link;
        if (isUpdatedLink) {
            youtubeLink = link;
        }
        if (youtubeLink) {
            window.open(youtubeLink, "_blank", "noopener");
        }
    };
    const handleSavePdf = ()=>{
        if (exercises?.id && localFile && tableType) {
            let data = {
                pdf: localFile,
                tableType
            };
            _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_3__/* .ExercisesService.updatePdf */ .s.updatePdf(exercises?.id, data);
        }
        setIsUpdatedPdf(true);
        setOpenEditPdf(false);
    };
    const handleSaveLink = ()=>{
        if (exercises?.id && link && tableType) {
            let data = {
                link: link,
                tableType
            };
            _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_3__/* .ExercisesService.updateLink */ .s.updateLink(exercises?.id, data);
        }
        setIsUpdatedLink(true);
        setOpenEditVideo(false);
    };
    const embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/rO3F9XQ4hoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mb-12",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            children: isOnlineXml ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "m-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: " items-center flex",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${isUpdatedPdf ? isUpdatedPdf : exercises?.pdf ? "bg-primary text-white" : " bg-gray text-black"}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`,
                                        onClick: openNewTab,
                                        children: "picture_as_pdf"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pr-4",
                                        children: exercises?.pdf ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "לינק ל PDF"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "לא קיים קובץ PDF"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-primary text-white rounded-lg py-1 px-2 mr-12 cursor-pointer",
                                        onClick: (event)=>{
                                            event.preventDefault();
                                            setOpenEditPdf(!openEditPdf);
                                        },
                                        children: "עדכן"
                                    })
                                ]
                            }),
                            isUpdatedPdf && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-green/60",
                                children: "עודכן בהצלחה!"
                            }),
                            openEditPdf && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "file",
                                        placeholder: "עדכן קובץ PDF",
                                        className: "border border-gray m-2 px-2 rounded-md",
                                        onChange: uploadPdf
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-primary text-white px-2 py-1 rounded-lg",
                                        onClick: (event)=>{
                                            event.preventDefault(), handleSavePdf();
                                        },
                                        children: "שמור"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "m-2",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${isUpdatedLink ? isUpdatedLink : exercises?.youtube_link ? "bg-primary text-white" : " bg-gray text-black"}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`,
                                        onClick: openNewTabYoutube,
                                        children: "youtube_activity"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "pr-4",
                                        children: exercises?.youtube_link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "לינק לסרטון"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: "לא קיים לינק לסרטון"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-primary text-white rounded-lg py-1 px-2 mr-12 cursor-pointer",
                                        onClick: (event)=>{
                                            event.preventDefault();
                                            setOpenEditVideo(!openEditVideo);
                                        },
                                        children: "עדכן"
                                    })
                                ]
                            }),
                            isUpdatedLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-green/60",
                                children: "עודכן בהצלחה!"
                            }),
                            openEditVideo && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "עדכן לינק לסרטון",
                                        className: "border border-gray m-2 px-2 rounded-md",
                                        value: link,
                                        onChange: (e)=>setLink(e.target.value)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-primary text-white px-2 py-1 rounded-lg",
                                        onClick: (event)=>{
                                            event.preventDefault();
                                            handleSaveLink();
                                        },
                                        children: "שמור"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-4 mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${isUpdatedLink ? isUpdatedLink : exercises?.youtube_link ? "bg-primary text-white" : " bg-gray text-black"}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`,
                                onClick: openNewTabYoutube,
                                children: "youtube_activity"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "לינק ליוטיוב",
                                className: "w-full border border-gray rounded-md px-2",
                                ...register(`${tableType == "exercises" ? "youtube_link" : `collectionsRows[${orden}].youtube_link`}`)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-4 mg-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `${isUpdatedPdf ? isUpdatedPdf : exercises?.pdf ? "bg-primary text-white" : " bg-gray text-black"}  p-2 rounded-md material-symbols-outlined fill cursor-pointer`,
                                onClick: openNewTab,
                                children: "picture_as_pdf"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                onChange: uploadPdf,
                                className: "w-full border border-gray rounded-md px-2"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideLinks);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ children , className , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...rest,
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("rounded-x1 font-medium px-10 py-2 shadow", className),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 7095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ substring10)
/* harmony export */ });
const substring10 = (str)=>{
    if (str.length > 10) {
        return str.slice(0, 10) + "...";
    }
    return str;
};


/***/ }),

/***/ 1930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ExerciseProvider),
/* harmony export */   "t": () => (/* binding */ useExercise)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7326);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_sweetAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4100);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__]);
_services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Global





const ExerciseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
// React hook
const useExercise = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ExerciseContext);
    if (!context) {
        throw new Error('Can not run without "ExerciseProvider"');
    }
    return context;
};
const ExerciseProvider = (props)=>{
    // state
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [exercises, setExercises] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [isOnlineXml, setIsOnlineXml] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const moduleId = router.query.moduleId;
    // Helpers
    const fetchOnline = async (id)=>{
        setLoading(true);
        try {
            const response = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__/* .ExercisesService.getOne */ .s.getOne(id);
            if (response) {
                setExercises(response);
                setIsOnlineXml(true);
            }
        } catch (e) {
            console.log("error", e);
        } finally{
            setLoading(false);
        }
    };
    const uploadXml = async (file)=>{
        setLoading(true);
        try {
            const response = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__/* .ExercisesService.parseXlFile */ .s.parseXlFile(file);
            setExercises(response);
            setIsOnlineXml(false);
        } catch (e) {
            console.log("error", e);
            (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_4__/* .onErrorAlert */ .Cf)("שגיאה בלפרסס את המודול", "XL אינו תקין");
        } finally{
            setLoading(false);
        }
    };
    const createMoudle = async (data)=>{
        setLoading(true);
        try {
            const response = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__/* .ExercisesService.create */ .s.create(data);
            setTimeout(()=>{
                fetchOnline(moduleId);
                (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_4__/* .onSuccessAlert */ .KO)("תרגיל נשמר בהצלחה!", "");
                setLoading(false);
            }, 2000);
        } catch (e) {
            console.log("error", e);
        } finally{}
    };
    const deleteModule = async (id)=>{
        const res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_4__/* .onAsk */ .pl)("האם תרצו למחוק את המודול הזה?", "");
        if (res) {
            setLoading(true);
            setExercises(undefined);
            setIsOnlineXml(false);
            try {
                const response = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__/* .ExercisesService["delete"] */ .s["delete"](id);
                await fetchOnline(moduleId);
            } catch (e) {
                console.log("error", e);
            } finally{
                setLoading(false);
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const moduleId = router.query.moduleId;
        fetchOnline(moduleId);
    }, [
        router.query.moduleId
    ]);
    const ExerciseMethods = {
        setId,
        uploadXml,
        createMoudle,
        deleteModule
    };
    const value = {
        exercises,
        ExerciseMethods,
        loading,
        isOnlineXml
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExerciseContext.Provider, {
        value: value,
        ...props
    });
};


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7326:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ExercisesService)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const ExercisesService = {
    async create (data) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/exercises`,
            method: "POST",
            data: data
        });
        return response.data;
    },
    async getOne (id) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/exercises/${id}`,
            method: "GET"
        });
        return response.data;
    },
    async parseXlFile (file) {
        const formData = new FormData();
        formData.append("file", file); // Assuming the backend expects the file to be named 'xlFile'
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/courses/uploadXl", formData);
        return response.data;
    },
    async delete (id) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/exercises/${id}`,
            method: "DELETE"
        });
        return response.data;
    },
    async uploadPdf (file) {
        const formData = new FormData();
        formData.append("file", file); // Assuming the backend expects the file to be named 'xlFile'
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("/exercises/pdf", formData);
        return response.data;
    },
    async updatePdf (id, data) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/exercises/pdf/${id}`,
            method: "PUT",
            data: data
        });
        return response.data;
    },
    async updateLink (id, data) {
        const response = await (0,axios__WEBPACK_IMPORTED_MODULE_0__["default"])({
            url: `/exercises/linkvideo/${id}`,
            method: "PUT",
            data: data
        });
        return response.data;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;