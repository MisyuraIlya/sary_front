import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, { FC, ChangeEvent, useEffect } from 'react';

interface FieldModule {
  value: string;
  register: any;
  col: number;
  row: number;
  setValue: any;
}

const FieldModule: FC<FieldModule> = ({ value, register, col, row, setValue }) => {
  const {isOnlineXml} = useExercise()  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.innerText;
    setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, text);
  };

  useEffect(() => {
    setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
    setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, 'text');
    setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
  }, [col, row, setValue]);

  return (
    <th className='pt-4'>
      <div>
        <div contentEditable onInput={handleInputChange} dangerouslySetInnerHTML={{ __html: value }} />
        
        <input type="hidden" disable {...register(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, { value:[{value: value}] })} />
      </div>
    </th>
  );
};

export default FieldModule;
