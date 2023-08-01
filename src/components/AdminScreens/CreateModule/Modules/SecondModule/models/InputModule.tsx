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
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
}

const InputModule: FC<InputModuleProps> = ({checkIsThereImage, id, answer,placeholder, register, col, row, setValue,isFullText, exerciseId, dataObjectId}) => {
    const {ExerciseMethods} = useExercise()
    const [isChecked, setIsChecked] = useState(isFullText)
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'input');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
      }, [col, row, setValue, isFullText, exerciseId, dataObjectId]);

      const handleCheckBox = () => {
        setIsChecked(!isChecked)
        ExerciseMethods.handleEditCheckBox(id, !isChecked)
      }

    return (
        <th className={checkIsThereImage ? '' : 'specific-th'}>
            <div className='px-4 py-2 bg-pad '>
                <input 
                type='text' 
                // disabled={isOnlineXml ? true : false}
                disabled
                placeholder={placeholder} 
                className='w-auto px-4 h-full py-2 border border-white rounded-md bg-white'  
                {...register(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer})}
                />
                {/* {answer &&
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
                } */}
            </div>
        </th>
    );
};

export default InputModule;