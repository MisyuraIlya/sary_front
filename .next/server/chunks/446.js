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
/* harmony import */ var _layout_AdminLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(521);
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select__WEBPACK_IMPORTED_MODULE_4__, _ModuleParser_FirstModule__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__]);
([react_select__WEBPACK_IMPORTED_MODULE_4__, _ModuleParser_FirstModule__WEBPACK_IMPORTED_MODULE_7__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__, _providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const options = [
    {
        value: 1,
        label: "מודול ראשון"
    },
    {
        value: 2,
        label: "מודול שני"
    },
    {
        value: 3,
        label: "מודול שלישי"
    }
];
const CreateModule = ()=>{
    const [selectedFile, setSelectedFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [module, setModule] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const { ExerciseMethods , exercises  } = (0,_providers_exercise_ExerciseProvider__WEBPACK_IMPORTED_MODULE_10__/* .useExercise */ .t)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { moduleId  } = router.query;
    const { register , handleSubmit: handleSubmitForm , watch , formState: { errors  } , setValue , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)();
    const onSubmit = (data)=>{
        ExerciseMethods.createMoudle(data);
    };
    const handleFileChange = (event)=>{
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (selectedFile) {
            try {
                ExerciseMethods.uploadXml(selectedFile);
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            console.error("No file selected");
        }
    };
    const handleAutoUpload = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async ()=>{
        if (selectedFile) {
            let res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_13__/* .onAsk */ .pl)("האם תרצו להריץ את הקובץ?", "");
            if (res) {
                ExerciseMethods.uploadXml(selectedFile);
            }
        }
    }, [
        ExerciseMethods,
        selectedFile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (exercises) {
            setValue("title", exercises?.title);
            setValue("description", exercises?.description);
            setValue("description2", exercises?.description2);
            setValue("courseId", moduleId);
        }
    }, [
        exercises,
        moduleId,
        setValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        handleAutoUpload();
    }, [
        handleAutoUpload,
        selectedFile
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_Meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "create Module",
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
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border-b border-solid border-2 border-gray-400"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-2 py-10 px-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                                    control: control,
                                    name: `module`,
                                    rules: {
                                        required: "צריך לבחור מודול"
                                    },
                                    render: ({ field: { onChange , value  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                    placeholder: "בחירת מודול",
                                                    options: options,
                                                    onChange: (newValue)=>onChange((newValue?.value)),
                                                    className: "w-96"
                                                }),
                                                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        color: "red"
                                                    },
                                                    children: error.message
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                    onSubmit: handleSubmit,
                                    encType: "multipart/form-data",
                                    className: "justify-end items-end flex gap-12",
                                    children: [
                                        exercises?.title && moduleId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "bg-red text-white rounded-md",
                                            onClick: ()=>ExerciseMethods.deleteModule(moduleId[0]),
                                            children: "מחיקה"
                                        }),
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
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            className: "bg-green text-white rounded-md",
                                            onClick: handleSubmitForm(onSubmit),
                                            children: "שמור"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SelectModule__WEBPACK_IMPORTED_MODULE_4__]);
_components_SelectModule__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FirstModule = ({ exercises , register , orden , setValue , control  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${orden}].orden`, orden);
    }, [
        orden,
        setValue
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                className: "bg-primary text-white",
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
                    setValue: setValue
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                className: "bg-white",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-6 items-center justify-center pt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border rounded-lg w-16 text-sm text-center leading-none py-1 cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "העלאת קובץ הסבר"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "border rounded-lg w-16 text-sm text-center leading-none py-1 cursor-pointer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "העלאת קובץ וידיאו"
                            })
                        })
                    ]
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ColsCard = ({ item , register , setValue , index  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsCols[${item.orden}].orden`, index);
    }, [
        item.orden,
        index,
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-1",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            value: item.title,
            placeholder: "כותרת",
            className: "w-36 rounded-md px-2",
            ...register(`collectionsCols[${item.orden}].title`)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColsCard);


/***/ }),

/***/ 9381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const FieldModule = ({ value , register , col , row , setValue  })=>{
    const handleInputChange = (event)=>{
        const text = event.target.innerText;
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, text);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "text");
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
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
                    onInput: handleInputChange,
                    dangerouslySetInnerHTML: {
                        __html: value
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "hidden",
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


const InputModule = ({ answer , placeholder , register , col , row , setValue  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "input");
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
    }, [
        col,
        row,
        setValue
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        className: "bg-white pt-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "text",
            placeholder: placeholder,
            className: "w-28 px-4 h-full py-2 border border-gray rounded-md",
            ...register(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, {
                value: answer
            })
        })
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
    const getValue = (value)=>value ? optionsNew.find((option)=>option.value === value) : {
            value: answer,
            label: answer
        };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, answer);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, options);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, "selectbox");
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
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const moduleId = router.query.moduleId;
    // Helpers
    const fetchOnline = async (id)=>{
        setLoading(true);
        try {
            const response = await _services_exercises_Exercises__WEBPACK_IMPORTED_MODULE_2__/* .ExercisesService.getOne */ .s.getOne(id);
            if (response) {
                setExercises(response);
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
        } catch (e) {
            console.log("error", e);
            (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_4__/* .onErrorAlert */ .Cf)("שגיאה בלפרסס את המודול", "אנא פנה לצוות דיגירטייד");
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
            }, 2000);
        } catch (e) {
            console.log("error", e);
        } finally{
            setLoading(false);
        }
    };
    const deleteModule = async (id)=>{
        const res = await (0,_utils_sweetAlert__WEBPACK_IMPORTED_MODULE_4__/* .onAsk */ .pl)("האם תרצו למחוק את המודול הזה?", "");
        if (res) {
            setLoading(true);
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
        loading
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
/* harmony import */ var _api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9420);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const ExercisesService = {
    async create (data) {
        console.log("data", JSON.stringify(data));
        const response = await (0,_api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__/* .instance */ .e)({
            url: `/exercises`,
            method: "POST",
            data: data
        });
        return response.data;
    },
    async getOne (id) {
        const response = await (0,_api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__/* .instance */ .e)({
            url: `/exercises/${id}`,
            method: "GET"
        });
        return response.data;
    },
    async parseXlFile (file) {
        const formData = new FormData();
        formData.append("file", file); // Assuming the backend expects the file to be named 'xlFile'
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("http://localhost:4000/courses/uploadXl", formData);
        return response.data;
    },
    async delete (id) {
        const response = await (0,_api_api_interceptor__WEBPACK_IMPORTED_MODULE_0__/* .instance */ .e)({
            url: `/exercises/${id}`,
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