import { IInitialState } from "./exercises.interface"
import { createSlice } from "@reduxjs/toolkit"
import { getExercise } from "./exercises.actions"
const initialState: IInitialState = {
    exercise: null,
    isLoading: false,
}

export const exerciseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        clearExercise: (state) => {
            state.exercise = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getExercise.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getExercise.fulfilled, (state, { payload }) => {
            state.exercise = payload
            state.isLoading = false;
        }),
        builder.addCase(getExercise.rejected, (state) => {
            state.isLoading = false;
        });

    }
})