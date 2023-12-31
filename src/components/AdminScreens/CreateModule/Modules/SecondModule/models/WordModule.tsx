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
    isStoryInstruction: boolean
    index: number
    isIcon1: boolean
    isIcon2: boolean
    tab: number | null
}

const WordModule:FC<WordModuleProps> = ({tab, index, isStoryInstruction, isExplanationRowSplited, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable, isIcon1 , isIcon2}) => {
    
    const {choosedModule} = useExercise()
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`,row)
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'word');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId, value,tab]);
    return (
        <th 
        className={`
        ${checkIsThereImage ? 'h-full justify-center text-center w-12' : 'h-full justify-center text-center w-12 '} 
        ${(isTable || isClearTable) ? 'onlyWordAndOrden' : 'onlyWordAndOrden'} 
        ${isExplanationRowSplited && 'bg-white'}
        ${isIcon1 && 'bg-[#005BBB] specific-th'}
        ${isIcon2 && 'bg-[#3995F5] specific-th'}
        ${choosedModule.value != 3 && 'specific-th'}
        `}  
        style={{
            minWidth:'70px', 
            maxWidth:'70px',
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right', 
            paddingTop:'30px', 
        }}

        >
            <div className='flex items-center justify-center'>
                <div  style={(index == 1 ) ? {background:'#002536', color:'white'} : {background:'#BACEE9'}}  className='px-2 rounded-md'>
                    {value}
                </div>
            </div>
        </th>
    );
};

export default WordModule;