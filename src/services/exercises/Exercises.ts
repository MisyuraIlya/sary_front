import { instance } from "@/api/api.interceptor"
import { IFirstModuleResponse } from "@/types/ModulesTypes.ts/FirstModule.interface"
import { ICourse } from "@/types/course.interface"
import axios, { AxiosResponse } from 'axios';
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface";
import { IExercise, ResponseUploadedPdf } from "@/types/exercise.interface";
interface courseDtoRequest {
    title: string
    description: string
    moduleType: number
    courseId: number
    exercises: any 
}

interface updatePdf {
    pdf: string;

    tableType: 'exercises' | 'exercises_rows';
}

interface updateLink {
    link: string;

    tableType: 'exercises' | 'exercises_rows';
}

interface updateCheked {
    id: number
    checked: boolean;
}

export const ExercisesService = {

    async create (data: any) {
        const response = await axios<any>({
            url: `/exercises`,
            method:'POST',
            data: data
        })


        return response.data
    },


    async getOne (id: number) {
        const response = await axios<IExercise>({
            url: `/exercises/${id}`,
            method:'GET',
        })


        return response.data
    },


    async parseXlFile(file: File): Promise<IExercise> {
        const formData = new FormData();
        formData.append('file', file); // Assuming the backend expects the file to be named 'xlFile'
        const response: AxiosResponse<IExercise> = await axios.post('/courses/uploadXl', formData);
        return response.data;
    },


    async delete(id: string | number): Promise<any> {
        const response = await axios<any>({
            url: `/exercises/${id}`,
            method:'DELETE',
        })


        return response.data
    },

    async uploadPdf(file: File): Promise<ResponseUploadedPdf> {
        const formData = new FormData();
        formData.append('file', file); // Assuming the backend expects the file to be named 'xlFile'
        const response: AxiosResponse<ResponseUploadedPdf> = await axios.post('/exercises/pdf', formData);
        return response.data;
    },


    async updatePdf (id: number, data: updatePdf) {
        const response = await axios<void>({
            url: `/exercises/pdf/${id}`,
            method:'PUT',
            data: data
        })


        return response.data
    },
    async updateLink (id: number, data: updateLink) {
        const response = await axios<void>({
            url: `/exercises/linkvideo/${id}`,
            method:'PUT',
            data: data
        })


        return response.data
    },
    
    async updateMultipleChecked (data: updateCheked[]) {
        const response = await axios<any>({
            url: `/exercises/updateChecked`,
            method:'POST',
            data: data
        })


        return response.data
    }
    


}