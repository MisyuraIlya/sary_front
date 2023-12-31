import React, {FC, useEffect} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { useState } from 'react';
import BoldChanger from '../components/BoldChanger';
import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
type NumberBoldProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    isClearTable: boolean
    collectionsCols: collectionsCols[]
    CustomTableWidth: number
    tab: number | null
}
const NumberBold:FC<NumberBoldProps> = ({tab, CustomTableWidth,isClearTable,collectionsCols,  firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'text');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value,tab]);

    const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')

    return (
        <th className={`
        relative
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        leading-[60px]
        
        `}
        
        style={{
            verticalAlign: 'top', 
            textAlign: 'right',   
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
            <div className='text-right  px-4 py-4  fontSizeExercise font-bold'>
                {value}
            </div>
        </th>
    );
};

export default NumberBold;