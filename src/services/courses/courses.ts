import { instance } from "@/api/api.interceptor"
import { IFirstModuleResponse } from "@/types/ModulesTypes.ts/FirstModule.interface"
import { ICourse } from "@/types/course.interface"
import axios, { AxiosResponse } from 'axios';
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface";
import { onErrorAlert } from "@/utils/sweetAlert";
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
        try {
            const response = await instance<ICourse[]>({
                url: `/courses`,
                method:'POST',
                data: data
            })
            return response.data
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }

    },


    async getCoursesLvl1 () {
        const response = await instance<ICourse[]>({
            url: `/courses`,
            method:'GET'
        })


        return response.data
    },

    async getChildrenById(id: number) {
        const response = await instance<ICourse>({
            url: `/courses/parent/${id}`,
            method:'GET'
        })

        return response.data
    },

    async getRecursiveChildren(id: number) {
        const response = await instance<ICourse>({
            url: `/courses/recursiveId/${id}`,
            method:'GET'
        })

        return response.data
    },

    async update (id: number, data: courseDtoRequest) {
        try {
            const response = await instance<ICourse[]>({
                url: `/courses/${id}`,
                method:'PUT',
                data: data
            })
    
    
            return response.data
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }

    },

    async remove (id: number) {
        try {
            const response = await instance<ICourse[]>({
                url: `/courses/${id}`,
                method:'DELETE'
            })
            return response.data
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }

    },


    

}