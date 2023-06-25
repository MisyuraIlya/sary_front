import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';
interface InputModuleProps {
    answer: string
    placeholder: string
    register: any
    col: number
    row: number
    setValue: any
    isFullText: boolean
    
}

const InputModule: FC<InputModuleProps> = ({answer,placeholder, register, col, row, setValue,isFullText}) => {
    const {ExerciseMethods} = useExercise()
    useEffect(() => {
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, 'input');
        setValue(`collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
      }, [col, row, setValue, isFullText]);

      ExerciseMethods.setIsChanged(true)
    return (
        <th className='bg-white pt-4'>
            <input 
            type='text' 
            // disabled={isOnlineXml ? true : false}
            disabled
            placeholder={placeholder} 
            className='w-28 px-4 h-full py-2 border border-gray rounded-md'  
            {...register(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer})}
            />

            {answer &&
            <div className=''>
            <input
                type="checkbox"
                onChange={ExerciseMethods.setIsChanged(true)}
                {...register(`collectionsRows[${col}].collectionRow[${row}].isFullText`,isFullText)} 
            />
                <span className='text-sm pr-2'>בכתיב מלא</span>
            </div>
            }

        </th>
    );
};

export default InputModule;