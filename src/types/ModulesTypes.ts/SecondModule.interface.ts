//  exercises - *** stars array
export interface ISecondModule {
    id: number
    title?: string;
    module: number;
    pdf?: string;
    youtube_link?: string;
    description?: string;
    description2?: string;
    exercises?: ISecondModuleExercises[]
    xl: string;
}


// data - * star array
export interface ISecondModuleExercises {
    [exerciseN: string]: ISecondModuleExercisesData,
}

export interface ISecondModuleExercisesData {
    data: ISecondModuleSubExercises[]
    exercise: number;
}

export interface ISecondModuleSubExercises {
    id: number
    orden: number
    collectionsCols: collectionsCols[]
    collectionsRows: collectionsRows[]
}

export interface collectionsCols {
    id: number
    orden: number
    title: string
}

export interface collectionsRows {
    id: number
    orden: number
    youtube_link?: string
    pdf?: string
    collectionRow: collectionRow[]
}

export interface collectionRow {
    id: number
    orden: number
    module_type: module_type
    collectionValues: collectionValues[]
    collectionAnswers: collectionAnswers[]
    placeholder?: string
    isFullText: boolean
}

export interface collectionValues {
    id: number
    value: string
}

export interface collectionAnswers {
    id: number
    value: string
}

export type module_type =  "word" | "orden" | "instruction" | "subInstruction" | "text" | "input" | "selectbox" | "textarea" | "rootInput" | "mix" | "bank" | 'mixDrag' | 'checkBox' | 'image' | 'merged' | 'table' |''
