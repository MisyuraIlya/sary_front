import React, {FC, useEffect} from 'react';
import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import Image from 'next/image';
type CircleProps = {
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
const CircleModule:FC<CircleProps> = ({tab, CustomTableWidth,isClearTable,collectionsCols,  firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {


    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'circle');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value,tab]);


    return (
        <th className={`ml-2`}>
            <div className={`text-right  fontSizeExercise pr-4 pt-1 flex items-center justify-center h-full ${value == 'מלאה'? '' : 'mr-10'}`}>
                <div className={`h-4 w-4 ${value == 'מלאה'? 'bg-[#898E93]' : 'border border-[#898E93]'} rounded-full`}>{}</div>
            </div>
        </th>
    );
};

export default CircleModule;