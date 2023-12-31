import { useExercise } from '@/providers/exercise/ExerciseProvider';
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
    widthText: number
    textMargin: number
    textBgColor: string
    paddingLeft:number
    paddingRight: number
    tab: number | null
};

const SecondHead: FC<SecondHeadProps> = ({tab, widthText, textMargin, textBgColor, paddingLeft, paddingRight, checkIsIcon, CustomTableWidth, checkIsThereImage, value, register, col, row, setValue , exerciseId, dataObjectId, isTable, isClearTable}) => {
    const {isOnlineXml, choosedModule} = useExercise()
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'secondHead');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value,tab]);
    
    return (
        <th 
            className={`${checkIsThereImage ? '' : ''} ${(isTable || isClearTable) ? 'tableModule' : ''} ${checkIsIcon && 'bg-[#005CBB] text-white'} text-[23px] leading-10`} 
            style={{
                minWidth: isTable ? `${CustomTableWidth}px` : '',
                paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
            }}
            >
            <div  className={`text-right px-4 py-6 ${textBgColor == 'לבן' && 'bg-white mt-10 mb-10 rounded-md shadow-xl px-8 shadow-black/10'}`}
                style={choosedModule ? 
                {width:widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}:
                {width:widthText ? `${widthText}%` : '100%',marginRight: textMargin ? `${textMargin}%` : ''}}
            >
                <h3 className='text-[26px] font-semibold'>{value}</h3>
            </div>
        </th>
    );
};

export default SecondHead;
