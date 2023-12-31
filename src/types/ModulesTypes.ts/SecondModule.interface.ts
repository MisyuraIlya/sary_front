//  exercises - *** stars array
export type ForthModule = ISecondModule[]

export interface ISecondModule {
    id: number
    title?: string;
    module: number;
    tab: string;
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
    type: string
    questionIds: collectionValues[] 
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
    isFullText: boolean,
    isMerged: boolean
}

export interface collectionValues {
    id: number
    value: string
}

export interface collectionAnswers {
    id: number
    value: string
}

export type module_type =  '' | "word" | "orden" | "instruction" | "subInstruction" | "text" | "input" | "selectbox" | "explanation" | "rootInput" | "mix" | "bank" | 'mixDrag' | 'checkBox' | 'imageRight' |  'imageLeft' |'merged' | 'table' | 'questInstruction' | 'openQuestion' | 'mergedExercise' | 'textCopy' | 'headline2' | 'clearText' | 'typedInput' | 'openQuestionHamarot' | 'draftBank' | 'draft' | 'tableClear' | 'video' | 'chart' | 'textCentered' | 'properties' | 'inputCentered' | 'heightSpace' | 'wordBold' | 'ordenBold' | 'story' | 'storyInstruction' | 'storyHeadline' | 'explanationSplited' | 'origin' | 'splitedScreenRight' | 'doneSplitedScreenRight' | 'splitedScreenLeft' | 'doneSplitedScreenLeft' |'numberBold' | 'icon1' | 'icon2' | 'divider' | 'mainHead' | 'secondHead' | 'globalSettings' | 'instructionWhite' | 'border' | 'wordRegular' | 'song' | 'iconDescriptionOne' |'secondHeadWhite' | 'iconDescriptionTwo' | 'circle' | 'overflow' | 'textArea' | 'pdf' |'textModuled' 

export interface ResponseUploadedPdf {
    path: string
}