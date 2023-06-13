import { instance } from "@/api/api.interceptor"
import { IFirstModuleResponse } from "@/types/ModulesTypes.ts/FirstModule.interface"
import { ICourse } from "@/types/course.interface"
import axios, { AxiosResponse } from 'axios';
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface";
interface courseDtoRequest {
    name: string
    grade?: string
    published: boolean
    color?:string
    level?: number
    orden?: number
    totalChildren?: number
    parent?: number | null
}

export const CourseService = {

    async create (data: courseDtoRequest) {
        const response = await axios<ICourse[]>({
            url: `/courses`,
            method:'POST',
            data: data
        })


        return response.data
    },


    async getCoursesLvl1 () {
        const response = await axios<ICourse[]>({
            url: `/courses`,
            method:'GET'
        })


        return response.data
    },

    async getChildrenById(id: number) {
        const response = await axios<ICourse>({
            url: `/courses/parent/${id}`,
            method:'GET'
        })

        return response.data
    },

    async getRecursiveChildren(id: number) {
        const response = await axios<ICourse>({
            url: `/courses/recursiveId/${id}`,
            method:'GET'
        })

        return response.data
    },

    async update (id: number, data: courseDtoRequest) {
        const response = await axios<ICourse[]>({
            url: `/courses/${id}`,
            method:'PUT',
            data: data
        })


        return response.data
    },

    async remove (id: number) {
        const response = await axios<ICourse[]>({
            url: `/courses/${id}`,
            method:'DELETE'
        })


        return response.data
    },


    

}