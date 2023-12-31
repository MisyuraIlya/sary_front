import Image from 'next/image';
import React, {FC, useEffect} from 'react';

type StoryInstructionProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    CustomTableWidth: number
    value: string
    tab: number | null
}

const StoryInstruction:FC<StoryInstructionProps> = ({tab, CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, value}) => {
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'storyInstruction');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value,tab]);
      
    return (
        <th className='text-right text-white py-4'>
            <div className='flex items-center mr-5 justify-center '>
                <h4 style={{fontSize:'30px', fontWeight:'600', paddingTop:'10px'}}>{value}</h4>
            </div>
        </th>
    );
};

export default StoryInstruction;