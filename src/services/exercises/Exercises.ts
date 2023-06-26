import { instance } from "@/api/api.interceptor"
import { IFirstModuleResponse } from "@/types/ModulesTypes.ts/FirstModule.interface"
import { ICourse } from "@/types/course.interface"
import axios, { AxiosResponse } from 'axios';
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface";
import { IExercise, ResponseUploadedPdf } from "@/types/exercise.interface";
import { onErrorAlert } from "@/utils/sweetAlert";
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
        try {
            const response = await instance<any>({
                url: `/exercises`,
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


    async getOne (id: number) {
        const response = await instance<IExercise>({
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
        try {
            const response = await instance<any>({
                url: `/exercises/${id}`,
                method:'DELETE',
            })
    
    
            return response.data
        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }

    },

    async uploadPdf(file: File) {

        // try {
            const formData = new FormData();
            formData.append('file', file); // Assuming the backend expects the file to be named 'xlFile'
            const response: AxiosResponse<ResponseUploadedPdf> = await axios.post('/exercises/pdf', formData);
            return response.data;
        // } catch(e: any) {
        //     if (e.response) {
        //         onErrorAlert(e.response.data.message, '')
        //     }
        // }

    },


    async updatePdf (id: number, data: updatePdf) {
        try {
            const response = await instance<void>({
                url: `/exercises/pdf/${id}`,
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
    async updateLink (id: number, data: updateLink) {

        try {
            const response = await instance<void>({
                url: `/exercises/linkvideo/${id}`,
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
    
    async updateMultipleChecked (data: updateCheked[]) {
        try {
            const response = await instance<any>({
                url: `/exercises/updateChecked`,
                method:'POST',
                data: data
            })
            return response.data

        } catch(e: any) {
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }



    }
    


}