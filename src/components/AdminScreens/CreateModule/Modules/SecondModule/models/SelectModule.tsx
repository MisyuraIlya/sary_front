import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';
interface SelectModuleProps {
    answer: string
    options: Collection[]
    placeholder: string
    col: number
    row:number
    register: any
    setValue: any;
    control: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
}
const SelectModule:FC<SelectModuleProps> = ({checkIsThereImage, placeholder, options, answer,col, row, register, setValue, control, exerciseId, dataObjectId}) => {
    const optionsNew = Array.isArray(options)
    ? options.map((item) => ({ value: item.value, label: item.value }))
    : [];
    const getValue = (value:any) => value ? optionsNew.find((option) => option.value.trim() == value) : {value:answer, label:answer}
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, answer);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, options);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'selectbox');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
      }, [answer, col, options, row, setValue, exerciseId, dataObjectId]);

    return (
        <th className={checkIsThereImage ? '' : 'specific-th'}>
            <div className='py-2'>
                <Controller control={control} name={`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionAnswers[0].value`}  render={
                    ({field:{onChange,value},fieldState:{error}}) => (
                    <>
                    <ReactSelect
                    placeholder={placeholder}
                    options={optionsNew}
                    value={getValue(value)}
                    onChange={(newValue) => onChange((newValue?.value))}
                    className='ml-4 mr-4'
                    />
                    {/* {error && (
                        <div style={{color:'red'}}>
                            {error.message}
                        </div>
                    )} */}
                    </>
                    )
                    }
                />
            </div>
        </th>

    );
};

export default SelectModule;