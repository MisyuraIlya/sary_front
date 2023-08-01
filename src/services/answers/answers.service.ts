
import { instance } from "@/api/api.interceptor"

type CreateMainAnswerDto = {
    studentId: number

    exerciseId: number
    
    
}

type CreateAnswerDto = {
    value: string

    moduleType: string

    answerId: number

    studentId: number

    exerciseRowId: number

    isCorrect: boolean
}

export const AnswersService = {

    async createMainAnswer (data: CreateMainAnswerDto) {
        try {
            const response = await instance<any>({
                url: `/answers/main`,
                method:'POST',
                data: data
            })
            return response.data
        } catch(e: any) {
            console.log('[createMaExercisesServiceinAnswer].createMainAnswer error',e)
        }
    },

    async createAnswer (data: CreateAnswerDto) {
        try {
            const response = await instance<any>({
                url: `/answers/answer`,
                method:'POST',
                data: data
            })
            return response.data
        } catch(e: any) {
            console.log('[ExercisesService].createAnswer error',e)
        }

    },

    async checkExercise (studentId: number, exerciseId: number) {
        try {
            const response = await instance<any>({
                url: `/answers/check`,
                method:'PUT',
                data: {studentId, exerciseId}
            })
            return response.data
        } catch(e: any) {
            console.log('[ExercisesService].createAnswer error',e)
        }
    }, 

    async resetExercise (studentId: number, exerciseId: number) {
        try {
            const response = await instance<any>({
                url: `/answers/reset/${studentId}/${exerciseId}`,
                method:'DELETE',
            })
            return response.data
        } catch(e: any) {
            console.log('[ExercisesService].createAnswer error',e)
        }
    }, 

}
