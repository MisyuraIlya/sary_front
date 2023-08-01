import { ICourse } from "@/types/course.interface"
import { IFirstModule } from "@/types/ModulesTypes.ts/FirstModule.interface"

export interface IInitialState {
    exercise: null | IFirstModule
    isLoading: boolean

}

