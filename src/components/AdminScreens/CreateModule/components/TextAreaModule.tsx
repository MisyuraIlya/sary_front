import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect} from 'react';

interface TextAreaModuleProps {
    value: string;
    register: any;
    col: number;
    row: number;
    setValue: any;
    
}

const TextAreaModule: FC<TextAreaModuleProps> = ({value, register, col, row, setValue}) => {
    const {isOnlineXml} = useExercise()
    useEffect(() => {
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, 'textarea');
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue]);
      

      
    return (
        <th className='bg-white pt-4'>
            <textarea 
            // disabled={isOnlineXml ? true : false} 
            disabled
            type="hidden" 
            {...register(`collectionsRows[${col}].collectionRow[${row}].collectionValues[0].value`, {value})} 
            style={{width:'200px', height:'50px', resize:'none'}}/>
        </th>
    );
};

export default TextAreaModule;