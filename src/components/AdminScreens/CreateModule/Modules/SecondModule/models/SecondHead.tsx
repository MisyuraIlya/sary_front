import React, { FC, useEffect, useState } from 'react';

type SecondHeadProps = {
    value: string;
    register: any;
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
    CustomTableWidth: number
    checkIsIcon: boolean
};

const SecondHead: FC<SecondHeadProps> = ({ checkIsIcon, CustomTableWidth, checkIsThereImage, value, register, col, row, setValue , exerciseId, dataObjectId, isTable, isClearTable}) => {
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'secondHead');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value]);
    
    return (
        <th 
            className={`${checkIsThereImage ? '' : ''} ${(isTable || isClearTable) ? 'tableModule' : ''} ${checkIsIcon && 'bg-[#005CBB] text-white'} text-[23px] leading-10`} 
            style={{
                minWidth: isTable ? `${CustomTableWidth}px` : '',
            }}
            >
            <div  className='text-right px-4'>
                <h3 className='text-[26px] font-semibold'>{value}</h3>
            </div>
        </th>
    );
};

export default SecondHead;
