import { ISecondModuleExercises, ISecondModuleSubExercises, collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect} from 'react';

type SecondExerciseColumnsProps = {
    data: collectionsCols
    index: number
    exerciseId:number
    dataObjectId:number
    col: number
    setValue: any
    checkIsAllCategoryColsEmpty: boolean
    isTable: boolean
    isClearTable: boolean
    isDragModule: boolean
    
}

const SecondExerciseColumns:FC<SecondExerciseColumnsProps> = ({checkIsAllCategoryColsEmpty, data,exerciseId,dataObjectId, setValue, index, col, isTable, isClearTable, isDragModule}) => {
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsCols[${col}].orden`, data.orden ? data.orden : '');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsCols[${col}].title`, data.title ? data.title : '');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsCols[${col}].type`, data.type ? data.type : '');
      }, [col,setValue, data.orden, data.title, exerciseId, dataObjectId,data.type]);
    if (isDragModule) return null
    return (
        <>
            {!checkIsAllCategoryColsEmpty &&
            <th style={ index === 0 && data.title === '' ? { borderLeft:'' } :{ minWidth: '60px' }} key={data.id} className={`${isTable && data.title ? 'bg-[#BACEE9] ' : ''} ${(data.type === 'אות' || data.type === 'מספור')  ? 'onlyWordAndOrden' : ''}`}>
                {/* <div className='px-2 py-2'>{}</div> */}
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: data.title }}
                    className=""
                />
            </th>
            }

            

        </>
    );
};

export default SecondExerciseColumns;