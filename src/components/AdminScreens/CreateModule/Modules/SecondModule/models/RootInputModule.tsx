import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';

interface RootInputModuleProps {
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
    isTable :boolean
}

const RootInputModule: FC<RootInputModuleProps> = ({checkIsThereImage, id, answer,placeholder, register, col, row, setValue,isFullText, exerciseId, dataObjectId, isTable}) => {
    const {ExerciseMethods} = useExercise()
    const [isChecked, setIsChecked] = useState(isFullText)
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'rootInput');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
      }, [col, row, setValue, isFullText, exerciseId, dataObjectId]);

      const handleCheckBox = () => {
        setIsChecked(!isChecked)
        ExerciseMethods.handleEditCheckBox(id, !isChecked)
      }

    return (
        <th className={`${checkIsThereImage ? 'align-text-top' : 'align-text-top specific-th'} ${isTable ? 'tableModule' : ''}`} style={{padding:'1rem 10px 0 10px'}}>
            <input 
            type='text' 
            // disabled={isOnlineXml ? true : false}
            disabled
            placeholder={placeholder} 
            className='w-auto px-4 h-full py-2 border border-gray rounded-md bg-white'  
            {...register(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer})}
            />



        </th>
    );
};

export default RootInputModule;