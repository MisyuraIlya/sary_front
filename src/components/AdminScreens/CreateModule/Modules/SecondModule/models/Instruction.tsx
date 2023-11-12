import { type } from 'os';
import React, { FC, useEffect, useState } from 'react';
import BoldChanger from '../components/BoldChanger';
import { useExercise } from '@/providers/exercise/ExerciseProvider';

type InstructionProps = {
    value: string;
    register: any;
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
    CustomTableWidth: number
    checkIsIcon: boolean
};

const Instruction: FC<InstructionProps> = ({ checkIsIcon, CustomTableWidth, checkIsThereImage, value, register, col, row, setValue , exerciseId, dataObjectId, isTable, isClearTable}) => {
    // Replace newlines "\n" with "<br>" tags
    const {isOnlineXml} = useExercise()
    let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    // let formattedValue = value?.replaceAll(';', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }


    useEffect(() => {
        console.log('htmlTag',htmlTag)
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'instruction');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value, htmlTag]);
    
    return (
        <th 
            className={`${checkIsThereImage ? '' : ''} ${(isTable || isClearTable) ? 'tableModule' : ''} ${checkIsIcon && 'bg-[#005CBB] text-white'} text-[23px] leading-10`} 
            style={{
                minWidth: isTable ? `${CustomTableWidth}px` : '',
            }}
            >
            <div  className='text-right px-4 py-4'>
                {!isOnlineXml &&
                    <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
                }

                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className="fontSizeExercise"
                />
            </div>
        </th>
    );
};

export default Instruction;
