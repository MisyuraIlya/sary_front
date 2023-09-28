import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect} from 'react';

type TextCopyModuleProps = {
    value: string

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    collectionsCols: collectionsCols[]
}
const TextCopy:FC<TextCopyModuleProps> = ({firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, collectionsCols}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'textCopy');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);

    //   const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')

    return (
        <th className={`
        ${checkIsThereImage ? '' : ''}
        ${firstIdTextModule === value ? 'specific-th ' : ''}
        `}
        
        >
            <div className='text-center px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className="bg-white rounded-md"
                />
            </div>
        </th>
    );
};

export default TextCopy;