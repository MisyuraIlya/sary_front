import React, {FC, useEffect} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { useState } from 'react';
import BoldChanger from '../components/BoldChanger';
import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
type TextModuleProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    isClearTable: boolean
    collectionsCols: collectionsCols[]
    CustomTableWidth: number
}
const ClearText:FC<TextModuleProps> = ({CustomTableWidth,isClearTable,collectionsCols,  firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {

    const {isOnlineXml} = useExercise()
    const [htmlTag, setHtmlTal] = useState<string>(value)

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'text');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag]);


      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')

    return (
        <th className={`
        relative
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        `}
        
        style={{
            verticalAlign: 'top', 
            textAlign: 'right',   
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
            {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            }

            <div className='text-right  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className=""
                />
            </div>
        </th>
    );
};

export default ClearText;