import { ICourse } from "../course.interface";

export interface IFirstModule {
    id:              number;
    title?:           string;
    youtube_link: string;
    pdf?: string | null;
    description:     string;
    module: number;
    description2:    null | string;
    course:          ICourse;
    xl: string;
    isInTheBook: boolean;
    collectionsCols: collectionsCols[];
    collectionsRows: collectionsRows[];
}

export interface collectionsCols {
    id:     number;
    title:  string;
    orden: number;
}

export interface collectionsRows {
    id:            number;
    orden:         number;
    youtube_link: string;
    pdf: string | null;
    isInTheBook: boolean;
    collectionRow: collectionRow[];
}

export interface collectionRow {
    id:                number;
    placeholder:       null | string;
    module_type:       ModuleType;
    isFullText: boolean;
    orden: number;
    collectionAnswers: Collection[];
    collectionValues:  Collection[];
    exerciseRowAnswer?: exerciseRowAnswer[];
}

export interface Collection {
    id:    number;
    value: string;
}

export enum ModuleType {
    Input = "input",
    Selectbox = "selectbox",
    Text = "text",
    TextArea = "textarea"
}


export interface ResponseUploadedPdf {
    path: string
}

export interface exerciseRowAnswer {
    id: number;
    isCorrect: boolean;
    moduleType: ModuleType;
    value: string;
    isDone: boolean
}