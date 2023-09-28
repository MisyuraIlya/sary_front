import React, {FC, useEffect} from 'react';
import RichTextEditor from '../components/RichTextEditor';
import ToolTip from '../ToolTip';
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';
type OpenQuestionModuleProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    answer: Collection[]
    placeholder: string
    isClearTable: boolean
}

const OpenQuestionHamarot:FC<OpenQuestionModuleProps> = ({setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, answer, placeholder, isClearTable}) => {
    console.log('answer',answer)
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'openQuestionHamarot');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
      }, [col, row, setValue, exerciseId, dataObjectId,placeholder,answer]);
    return (
        <th className={`${checkIsThereImage ? 'h-full justify-left text-center float-left' : 'h-full justify-lefttext-center float-left'} ${(isTable || isClearTable) ? 'tableModule' : ''} w-full relative`}  >
            <div className='flex items-center py-4 px-2 w-full float-left'>
                <div className='rounded-md bg-white text-white px-2  float-left w-full'  >
                    <RichTextEditor placholder={placeholder}/>
                </div>
            </div>

            {( answer.length > 0) &&
                <ToolTip placeholder={placeholder} answers={answer} />
            }

        </th>
    );
};

export default OpenQuestionHamarot;