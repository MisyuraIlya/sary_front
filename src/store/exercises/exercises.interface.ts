import { ISecondModule } from "@/types/ModulesTypes.ts/SecondModule.interface"
import { ICourse } from "@/types/course.interface"

export interface IInitialState {
    exercise: null | ISecondModule
    isLoading: boolean

}

