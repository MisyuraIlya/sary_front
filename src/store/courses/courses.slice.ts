import { CoursesResponse, IInitialState } from "./courses.interface"
import { createSlice } from "@reduxjs/toolkit"
import { getStoreLocal } from "@/utils/local-storage"
import { getCoursesPerStudent } from "./courses.actions"
const initialState: IInitialState = {
    courses: null,
    isLoading: false,
    selectedFirstCourse: null,
    selectedSecondCourse: null,
    selectedThirdCourse: null,
    selectedForthCourse: null,
    selectedFifthCourse: null 
}

export const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        chooseFirstCourse: (state, action) => {
            if (state.selectedFirstCourse && state.selectedFirstCourse.id === action.payload.id) {
                state.selectedFirstCourse = null;
            } else {
                state.selectedFirstCourse = action.payload;
            }
        },
        closeFirstChooseCourse: (state) => {
            state.selectedFirstCourse = null;
        },
        chooseSecondCourse: (state, action) => {
            if (state.selectedSecondCourse && state.selectedSecondCourse.id === action.payload.id) {
                state.selectedSecondCourse = null;
            } else {
                state.selectedSecondCourse = action.payload;
            }
        },
        closeChooseSecondCourse: (state) => {
            state.selectedSecondCourse = null;
        },
        chooseThirdCourse: (state, action) => {
            if (state.selectedThirdCourse && state.selectedThirdCourse.id === action.payload.id) {
                state.selectedThirdCourse = null;
            } else {
                state.selectedThirdCourse = action.payload;
            }
        },
        closeChooseThirdCourse: (state) => {
            state.selectedThirdCourse = null;
        },
        chooseForthCourse: (state, action) => {
            if (state.selectedForthCourse && state.selectedForthCourse.id === action.payload.id) {
                state.selectedForthCourse = null;
            } else {
                state.selectedForthCourse = action.payload;
            }
        },
        closeChooseForthCourse: (state) => {
            state.selectedFifthCourse = null;
        },
        chooseFifthCourse: (state, action) => {
            if (state.selectedFifthCourse && state.selectedFifthCourse.id === action.payload.id) {
                state.selectedFifthCourse = null;
            } else {
                state.selectedFifthCourse = action.payload;
            }
        },
        closeChooseFifthCourse: (state) => {
            state.selectedFifthCourse = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCoursesPerStudent.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getCoursesPerStudent.fulfilled, (state, { payload }) => {
            state.courses = payload.map((item) => item.course);
            state.isLoading = false;
        }),
        builder.addCase(getCoursesPerStudent.rejected, (state) => {
            state.isLoading = false;
        });

    }
})