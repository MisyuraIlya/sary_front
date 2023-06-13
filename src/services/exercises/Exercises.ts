import { instance } from "@/api/api.interceptor"
import { IFirstModuleResponse } from "@/types/ModulesTypes.ts/FirstModule.interface"
import { ICourse } from "@/types/course.interface"
import axios, { AxiosResponse } from 'axios';
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface";
import { IExercise } from "@/types/exercise.interface";
interface courseDtoRequest {
    title: string
    description: string
    moduleType: number
    courseId: number
    exercises: any 
}

export const ExercisesService = {

    async create (data: any) {
        console.log('data',JSON.stringify(data))
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
        const response: AxiosResponse<IExercise> = await axios.post('http://3.74.233.199:4000/courses/uploadXl', formData);
        return response.data;
    },


    async delete(id: string | number): Promise<any> {
        const response = await axios<any>({
            url: `/exercises/${id}`,
            method:'DELETE',
        })


        return response.data
    }


}