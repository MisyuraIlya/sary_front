import { type } from 'os';
import React, { FC, useEffect, useState } from 'react';

type InstructionProps = {
    value: string;
    register: any;
    col: any;
    row: any;
    
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
};

const Instruction: FC<InstructionProps> = ({ checkIsThereImage, value, register, col, row, setValue , exerciseId, dataObjectId, isTable}) => {
    // Replace newlines "\n" with "<br>" tags
    const formattedValue = value.replace(/\n/g, '<br>');

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'instruction');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value]);

    return (
        <th className={`${checkIsThereImage ? '' : ''} ${isTable ? 'tableModule' : ''}`} style={{background:'#E5F0FE'}}>
            <div  className='text-right px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: formattedValue }}
                    className=""
                />
            </div>
        </th>
    );
};

export default Instruction;
