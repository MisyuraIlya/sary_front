import React, {FC, useEffect, useState} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import BoldChanger from '../components/BoldChanger';
type SubInstructionProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
    CustomTableWidth: number
    tab: number | null
}
const SubInstruction:FC<SubInstructionProps> = ({tab, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {

    const {isOnlineXml} = useExercise()
    // let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    let formattedValue = value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'subInstruction');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value,htmlTag,tab]);

    return (
        <th className={`${checkIsThereImage ? 'm-1 px-4 py-4 ' : 'm-1 px-4 py-4'} text-[23px] leading-10`}   >
            <div className='text-right' >
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

export default SubInstruction;