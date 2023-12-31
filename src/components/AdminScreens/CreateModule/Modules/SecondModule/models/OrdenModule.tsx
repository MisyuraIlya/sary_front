import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect} from 'react';

type OrdenModuleProps = {
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
    index: number
    tab: number | null
}
const OrdenModule:FC<OrdenModuleProps> = ({tab, index, isExplanationRowSplited, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {
    const {choosedModule} = useExercise()
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'orden');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId, value, tab]);
    return (
        <th  style={{
                minWidth:'70px', 
                maxWidth:'70px',
                verticalAlign: 'top', // Align text to the top
                textAlign: 'right', 
                paddingTop:'25px',
            }} 
            className={`
                specific-th 
                ${(isTable || isClearTable) ? '' : ''} 
                pt-4
                ${isExplanationRowSplited && 'bg-white'}
                `} 

            >
            <div className='text-center flex justify-center items-center py-1'>
                <div style={(index == 1 ) ? {background:'#002536', color:'white'} : {background:'#BACEE9'}} className='px-2 rounded-md'>
                    {value}
                </div>
            </div>
        </th>
    );
};

export default OrdenModule;