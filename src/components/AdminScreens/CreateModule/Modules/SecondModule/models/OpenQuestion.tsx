import React, {FC, useEffect} from 'react';
import RichTextEditor from '../components/RichTextEditor';

type OpenQuestionModuleProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
}


const OpenQuestion:FC<OpenQuestionModuleProps> = ({setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'openQuestion');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId]);

    return (
        <th className={`${checkIsThereImage ? 'h-full justify-center text-centerc w-full' : 'h-full justify-center text-centerc w-full '} ${isTable ? 'tableModule' : ''}`}  >
            <div className='flex items-center py-4 px-2'>
                <div className='rounded-md bg-white text-white px-2'  >
                    <RichTextEditor/>
                </div>
            </div>
        </th>
    );
};

export default OpenQuestion;