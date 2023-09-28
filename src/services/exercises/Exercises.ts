import { instance } from "@/api/api.interceptor"
import axios, { AxiosResponse } from 'axios';
import { IFirstModule, ResponseUploadedPdf} from "@/types/ModulesTypes.ts/FirstModule.interface";
import { ISecondModule } from "@/types/ModulesTypes.ts/SecondModule.interface";
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

interface updateIsInTheBook {
    isInTheBook: boolean;
}

type ModuleIdToExercise<ModuleId extends number> = ModuleId extends 1 ? IFirstModule : ISecondModule


export const ExercisesService = {

    async createFirstModule (data: any) {
        try {
            const response = await instance<any>({
                url: `/exercises/1`,
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

    async createSecondModule (data: any) {
        try {
            const response = await instance<any>({
                url: `/exercises/2`,
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

    async ReadStudentExerciseWithAnswersPerStudent(idExercise: number, idStudent: number) {
        const response = await instance<IFirstModule>({
            url: `/exercises/${idExercise}/${idStudent}`,
            method:'GET',
        })
        return response.data
    },
    async getOne (id: number | string) {
        const response = await instance<IFirstModule>({
            url: `/exercises/${id}`,
            method:'GET',
        })


        return response.data
    },
    async parseXlFile<ModuleId extends number>(file: File, ModuleId: number): Promise<ModuleIdToExercise<ModuleId>> {
        
        const formData = new FormData();
        formData.append('file', file); 
        const response:  AxiosResponse<ModuleIdToExercise<ModuleId>> = await axios.post(`/courses/uploadXl/${ModuleId}`, formData);
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

    },
    async updateIsInTheBook (id:number, data: updateIsInTheBook) {
        try {
            const response = await instance<any>({
                url: `/exercises/isInTheBook/${id}`,
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

    async createImage (id:number, file: File) {
        const formData = new FormData();
        formData.append('file', file); // Assuming the backend expects the file to be named 'xlFile'
        const response: AxiosResponse<ResponseUploadedPdf> = await axios.post(`/exercises/image/${id}`, formData);
        return response.data;
    },

    async updateExerciseLinkVideo (id: number, link: string) {
        try {
            const response = await instance<any>({
                url: `/exercises/exerciseLinkVideo/${id}`,
                method:'PUT',
                data: {
                    link
                }
            })
            return response.data

        } catch(e: any) {
            console.log('e',e)
            if (e.response) {
                onErrorAlert(e.response.data.message, '')
            }
        }
    }


}