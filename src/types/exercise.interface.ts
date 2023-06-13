import { ICourse } from "./course.interface";

export interface IExercise {
    id:              number;
    title:           string;
    description:     string;
    module: number;
    description2:    null | string;
    course:          ICourse;
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
    collectionRow: CollectionRow[];
}

export interface CollectionRow {
    id:                number;
    placeholder:       null | string;
    module_type:       ModuleType;
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

