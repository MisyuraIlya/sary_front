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
}

const StoryInstruction:FC<StoryInstructionProps> = ({CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, value}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'storyInstruction');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, [{value}]);
      }, [col, row, setValue, exerciseId, dataObjectId,value]);
      
    return (
        <th className='bg-[#005BBB] w-full text-right text-white h-[68px]'>
            <div className='flex  gap-3 items-center mr-5'>
                <Image src={'/images/story.svg'} width={50} height={50} alt='story' />
                <h4 >{value}</h4>
            </div>
        </th>
    );
};

export default StoryInstruction;