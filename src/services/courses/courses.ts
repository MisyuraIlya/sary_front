import { instance } from "@/api/api.interceptor"
import { ICourse, CoursesPerUserResponse } from "@/types/course.interface"
import axios, { AxiosResponse } from 'axios';
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

export interface ResponseUploadedImage {
    path: string
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

    async getCoursesPerStudent(id: number) {
        const response = await instance<CoursesPerUserResponse[]>({
            url: `/courses/curserPerStudent/${id}`,
            method:'GET'
        })

        return response.data
    },

    async saveImage(file: File, id: number) {
        try {
            const formData = new FormData();
            formData.append('image', file); 
            const response: AxiosResponse<ResponseUploadedImage> = await axios.post(`/courses/image/${id}`, formData);
            return response.data;
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }
    },

    async savePdf(file: File, id: number) {
        try {
            const formData = new FormData();
            formData.append('file', file); 
            const response: AxiosResponse<ResponseUploadedImage> = await axios.post(`/courses/pdf/${id}`, formData);
            return response.data;
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }
    }

    

}