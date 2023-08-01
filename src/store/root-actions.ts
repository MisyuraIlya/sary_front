import * as userActions from './user/user.actions'
import * as coursesActions from './courses/courses.actions'
import { courseSlice } from './courses/courses.slice'
import * as exercisesAsctions from './exercises/exercises.actions'
import { exerciseSlice } from './exercises/exercises.slice'


const courseRducers = courseSlice.actions
const exerciseReducers = exerciseSlice.actions
export const rootActions = {
    ...userActions,
    ...coursesActions,
    ...courseRducers,
    ...exerciseReducers,
    ...exercisesAsctions
}