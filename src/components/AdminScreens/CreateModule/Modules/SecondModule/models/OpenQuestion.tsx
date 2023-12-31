import React, {FC, useEffect} from 'react';
import RichTextEditor from '../components/RichTextEditor';

type OpenQuestionModuleProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean,
    placeholder: string
    isClearTable: boolean
    CustomTableWidth: number
    tab: number | null
}


const OpenQuestion:FC<OpenQuestionModuleProps> = ({tab, CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable,placeholder, isClearTable}) => {

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'openQuestion');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,placeholder,tab]);

    return (
        <th className={`${checkIsThereImage ? 'h-full justify-left text-center float-left' : 'h-full justify-lefttext-center float-left'} w-full`} 
            style={{
                minWidth: isTable ? `${CustomTableWidth}px` : '',
            }}
        >
            <div className='flex items-center py-4 px-2 w-full float-left'>
                <div className='rounded-md bg-white text-white px-2  float-left w-full'  >
                    <RichTextEditor placholder={placeholder}/>
                </div>
            </div>
        </th>
    );
};

export default OpenQuestion;