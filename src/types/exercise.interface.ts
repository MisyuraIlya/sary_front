import { ICourse } from "./course.interface";

export interface IExercise {
    id:              number;
    title?:           string;
    youtube_link: string;
    pdf?: string | null;
    description:     string;
    module: number;
    description2:    null | string;
    course:          ICourse;
    xl: string;
    collectionsCols: CollectionsCol[];
    collectionsRows: CollectionsRow[];
}

export interface CollectionsCol {
    id:     number;
    title:  string;
    orden: number;
}

export interface CollectionsRow {
    id:            number;
    orden:         number;
    youtube_link: string;
    pdf: string | null;
    collectionRow: CollectionRow[];
}

export interface CollectionRow {
    id:                number;
    placeholder:       null | string;
    module_type:       ModuleType;
    isFullText: boolean;
    orden: number;
    collectionAnswers: Collection[];
    collectionValues:  Collection[];
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
