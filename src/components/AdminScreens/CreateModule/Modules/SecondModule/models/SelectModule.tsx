import React, {FC,useEffect} from 'react';
import ReactSelect from 'react-select'
import { Controller } from 'react-hook-form'
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';
import ToolTip from '../ToolTip';

interface SelectModuleProps {
    answer: Collection[]
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
    isTable: boolean
    isMerged: boolean
}
const SelectModule:FC<SelectModuleProps> = ({isMerged,checkIsThereImage, placeholder, options, answer,col, row, register, setValue, control, exerciseId, dataObjectId, isTable}) => {
    const optionsNew = Array.isArray(options)
    ? options.map((item) => ({ value: item.value, label: item.value }))
    : [];

    const getValue = (value:any) => value ? optionsNew.find((option) => option.value.trim() == value) : {value:answer[0]?.value, label:answer[0]?.value}
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, options);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'selectbox');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
      }, [answer, col, options, row, setValue, exerciseId, dataObjectId,placeholder]);

    return (
        <>
        {!isMerged &&
                <th className={`

                ${isTable ? 'tableModule' : ''} relative
                `}>
                    
                    <div className='py-2'>
                        <Controller control={control} name={`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionAnswers[0].value`}  render={
                            ({field:{onChange,value},fieldState:{error}}) => {
        
                            return(
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
                            )}
                            }
                        />
                    </div>
                    {(placeholder || answer.length > 1) &&
                        <ToolTip placeholder={placeholder} answers={answer} />
                    }
        
                </th>
        }
        </>


    );
};

export default SelectModule;