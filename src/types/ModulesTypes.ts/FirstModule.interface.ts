
type KeyModule = "field" | "input" | "selectbox";

export interface IFirstModule {
    name: string;
    description: string;
    description2: string;
    ColumnNames: (null | string)[];
    ColumnNamesPlaceHolder: (null | string)[];
    ColumnDescription: (null | string)[];
    exercises:Exercise[];
}

export interface Exercise {
  id: number;
  types: ExerciseType[];
}

export interface ExerciseType {
  value: string;
  values: string[];
  module: KeyModule;
  placeholder: string | null;
  answer: string;
}

export interface IFirstModuleResponse {
    data: IFirstModule;
}

