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
    // let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    let formattedValue = value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    const checkIsString = (value: any) => {
        return  typeof value === 'string';
    }


    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'text');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag]);

      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
      console.log('firstIdTextModuleee',firstIdTextModule,isClearTable)
    return (
        <th className={`
        specific-th 
        relative
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        leading-[60px]
        `}
        
        style={{
            verticalAlign: 'top', 
            textAlign: 'right',   
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
            {!isOnlineXml && checkIsString(htmlTag) &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            }

            <div className='text-right  px-4 py-4  fontSizeExercise'>
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