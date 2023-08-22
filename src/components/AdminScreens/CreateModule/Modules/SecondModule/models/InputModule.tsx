import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect,useState} from 'react';
import { Controller } from 'react-hook-form';
import ToolTip from '../ToolTip';
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';
interface InputModuleProps {
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
    isTable: boolean
}

const InputModule: FC<InputModuleProps> = ({checkIsThereImage, id, answer,placeholder, register, col, row, setValue,isFullText, exerciseId, dataObjectId,isTable}) => {
    const {ExerciseMethods} = useExercise()
    const [isChecked, setIsChecked] = useState(isFullText)
    console.log('answer',answer)
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'input');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, isFullText);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
        
      }, [col, row, setValue, isFullText, exerciseId, dataObjectId]);

      const handleCheckBox = () => {
        setIsChecked(!isChecked)
        ExerciseMethods.handleEditCheckBox(id, !isChecked)
      }
      
    return (
        <th className={`${checkIsThereImage ? '' : ''} ${isTable ? 'tableModule' : ''} relative `}>
            <div className='px-4 py-2 bg-pad '>
                <input 
                type='text' 
                // disabled={isOnlineXml ? true : false}
                disabled
                placeholder={placeholder} 
                className='w-40 px-4 h-full py-2 border border-white rounded-md bg-white'  
                value={answer[0].value}
                // {...register(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`,{value: answer[0].value})}
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
            {(placeholder || answer.length > 1) &&
                <ToolTip placeholder={placeholder} answers={answer} />
            }
        </th>
    );
};

export default InputModule;