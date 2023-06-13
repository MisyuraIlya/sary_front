import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect} from 'react';

interface InputModuleProps {
    answer: string
    placeholder: string
    register: any
    col: number
    row: number
    setValue: any
    
}

const InputModule: FC<InputModuleProps> = ({answer,placeholder, register, col, row, setValue}) => {
    const {isOnlineXml} = useExercise()
    useEffect(() => {
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, 'input');
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
      }, [col, row, setValue]);
      

    
    return (
        <th className='bg-white pt-4'>
            <input 
            type='text' 
            disabled={isOnlineXml ? true : false}
            placeholder={placeholder} 
            className='w-28 px-4 h-full py-2 border border-gray rounded-md'  
            {...register(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer})}
            />
        </th>
    );
};

export default InputModule;