import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';
interface InputModuleProps {
    id: number
    answer: string
    placeholder: string
    register: any
    col: number
    row: number
    setValue: any
    isFullText: boolean
    
}

const InputModule: FC<InputModuleProps> = ({id, answer,placeholder, register, col, row, setValue,isFullText}) => {
    const {ExerciseMethods} = useExercise()
    const [isChecked, setIsChecked] = useState(isFullText)
    useEffect(() => {
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, 'input');
        setValue(`collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
      }, [col, row, setValue, isFullText]);

      const handleCheckBox = () => {
        setIsChecked(!isChecked)
        ExerciseMethods.handleEditCheckBox(id, !isChecked)
      }

    return (
        <th className='bg-white align-text-top' style={{padding:'1rem 10px 0 10px'}}>
            <input 
            type='text' 
            // disabled={isOnlineXml ? true : false}
            disabled
            placeholder={placeholder} 
            className='w-auto px-4 h-full py-2 border border-gray rounded-md '  
            {...register(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer})}
            />

            {answer &&
            <div className='text-right flex items-center'>
            <input
                type="checkbox"
                className='w-4 h-4'
                // onClick={(e) => ExerciseMethods.handleEditCheckBox(id, isChecked)}
                onClick={() => handleCheckBox()}
                {...register(`collectionsRows[${col}].collectionRow[${row}].isFullText`,isChecked)} 
            />
                <span className='text-sm pr-2'>בכתיב מלא</span>
            </div>
            }

        </th>
    );
};

export default InputModule;