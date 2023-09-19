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
}


const OpenQuestion:FC<OpenQuestionModuleProps> = ({setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable,placeholder, isClearTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'openQuestion');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId]);

    return (
        <th className={`${checkIsThereImage ? 'h-full justify-left text-center float-left' : 'h-full justify-lefttext-center float-left'} ${(isTable || isClearTable) ? 'tableModule' : ''} w-full`}  >
            <div className='flex items-center py-4 px-2 w-full float-left w-full'>
                <div className='rounded-md bg-white text-white px-2  float-left w-full'  >
                    <RichTextEditor placholder={placeholder}/>
                </div>
            </div>
        </th>
    );
};

export default OpenQuestion;