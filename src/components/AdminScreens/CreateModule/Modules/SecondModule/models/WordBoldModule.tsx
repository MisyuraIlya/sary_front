import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect} from 'react';

type WordModuleProps = {
    value: string

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
    CustomTableWidth: number
    isExplanationRowSplited: boolean
    tab: number | null
}

const WordBoldModule:FC<WordModuleProps> = ({tab, isExplanationRowSplited, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {

    const {choosedModule} = useExercise()
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`,row)
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'wordBold');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId, value,tab]);

    return (
        <th 
        className={`${checkIsThereImage ? 'h-full justify-center text-center w-12' : 'h-full justify-center text-center w-12 specific-th'} ${(isTable || isClearTable) ? 'onlyWordAndOrden' : 'onlyWordAndOrden'} ${isExplanationRowSplited && 'bg-white'}`}  
        style={{
            minWidth:'70px', 
            maxWidth:'70px',
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right', 
            paddingTop:'30px',  
        }}

        >
            <div className='flex items-center justify-center'>
                <div className='rounded-md bg-primary text-white px-2'  >
                    {value}
                </div>
            </div>
        </th>
    );
};

export default WordBoldModule;