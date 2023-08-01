import { ICourse } from "@/types/course.interface"

export interface IInitialState {
    courses: ICourse[] | null
    isLoading: boolean
    selectedFirstCourse: null | ICourse
    selectedSecondCourse: null | ICourse
    selectedThirdCourse: null | ICourse
    selectedForthCourse: null | ICourse
    selectedFifthCourse: null | ICourse
    
}

export interface CoursesResponse {
    id: number
    course: ICourse
    
}