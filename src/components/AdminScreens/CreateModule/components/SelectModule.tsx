import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'
import { Collection } from '@/types/exercise.interface';
interface SelectModuleProps {
    answer: string
    options: Collection[]
    placeholder: string
    col: number
    row:number
    register: any
    setValue: any;
    control: any
}
const SelectModule:FC<SelectModuleProps> = ({placeholder, options, answer,col, row, register, setValue, control}) => {
    const optionsNew = options?.map(item => ({ value: item.value, label: item.value }));
    console.log('optionsNew',optionsNew, answer)
    const getValue = (value:any) => value ? optionsNew.find((option) => option.value.trim() == value) : {value:answer, label:answer}
    useEffect(() => {
        setValue(`collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, answer);
        setValue(`collectionsRows[${col}].collectionRow[${row}].collectionValues`, options);
        setValue(`collectionsRows[${col}].collectionRow[${row}].module_type`, 'selectbox');
      }, [answer, col, options, row, setValue]);

    return (
        <th className='bg-white pt-4'>
             <Controller control={control} name={`collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`} rules={{required:'צריך לבחור את התשובה'}} render={
                ({field:{onChange,value},fieldState:{error}}) => (
                <>
                {console.log('aaa=>',getValue(value))}
                <ReactSelect
                placeholder={placeholder}
                options={optionsNew}
                value={getValue(value)}
                onChange={(newValue) => onChange((newValue?.value))}
                className='ml-4 mr-4'
                />
                {error && (
                    <div style={{color:'red'}}>
                        {error.message}
                    </div>
                )}
                </>
                )
                }
            />
        </th>

    );
};

export default SelectModule;