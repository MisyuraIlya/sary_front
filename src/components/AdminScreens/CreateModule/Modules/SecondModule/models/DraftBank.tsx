import React, {FC, useEffect} from 'react';
import { collectionValues } from '@/types/ModulesTypes.ts/SecondModule.interface';

type DraftBankProps = {
    values: collectionValues[]

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    CustomTableWidth: number
    tab: number | null
}

const DraftBank:FC <DraftBankProps> = ({tab, CustomTableWidth, checkIsThereImage, values, setValue, exerciseId, dataObjectId, col , row, isTable}) => {
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'draftBank');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
        {values?.map((item,index) => {
            setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues.${index}.value`, item.value);
        })}
      }, [col, row, setValue, exerciseId, dataObjectId,values,tab]);

    return (
        <>
        {/* 
        <th>
            <div className={`${checkIsThereImage ? 'grid grid-cols-12 px-4' : 'grid grid-cols-12 px-4'} ${isTable ? 'tableModule' : ''}`} >
                {values?.map((item,index) => {
                setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues.${index}.value`, item.value);
                    return (
                        <div className='col-span-3 px-2 py-2' key={index}>
                            <div className='bg-white rounded-md px-2 py-2 cursor-pointer'>
                                {item.value}
                            </div>    
                        </div>    
                    )
                })}
            </div>
        </th> 
        */}
        </>

    );
};

export default DraftBank;