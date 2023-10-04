import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect, useState} from 'react';
import BoldChanger from '../components/BoldChanger';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
type ExplanationProps = {
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
const Explanation:FC<ExplanationProps> = ({CustomTableWidth,firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable, collectionsCols}) => {

    const {isOnlineXml} = useExercise()
    let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    formattedValue = value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }


    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'explanation');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag]);

    
      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
        relative
        bg-white
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        `}
        style={{
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
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

export default Explanation;