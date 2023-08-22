import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';
import ToolTip from '../ToolTip';
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';
interface RootInputModuleProps {
    id: number
    answer: Collection[]
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
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
      }, [col, row, setValue, isFullText, exerciseId, dataObjectId]);

      const handleCheckBox = () => {
        setIsChecked(!isChecked)
        ExerciseMethods.handleEditCheckBox(id, !isChecked)
      }

    return (
        <th className={`${checkIsThereImage ? 'align-text-top' : 'align-text-top '} ${isTable ? 'tableModule' : ''}`} style={{padding:'1rem 10px 0 10px'}}>
            <input 
            type='text' 
            // disabled={isOnlineXml ? true : false}
            disabled
            placeholder={placeholder} 
            className='w-auto px-4 h-full py-2 border border-gray rounded-md bg-white' 
            value={answer[0].value} 
            // {...register(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer})}
            />


            {(placeholder || answer.length > 1) &&
                <ToolTip placeholder={placeholder} answers={answer} />
            }
        </th>
    );
};

export default RootInputModule;