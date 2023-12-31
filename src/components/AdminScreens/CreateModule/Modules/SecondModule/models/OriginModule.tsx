import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect} from 'react';

type OriginModuleProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    CustomTableWidth: number
    value: string
    widthText: number
    textMargin: number
    textBgColor: string
    paddingLeft:number
    paddingRight: number
    tab: number | null
}

const OriginModule:FC<OriginModuleProps> = ({tab, paddingLeft, paddingRight,textBgColor,textMargin, widthText,CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, value}) => {

    const {isOnlineXml, choosedModule} = useExercise()
    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'origin');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value,tab]);

    return (
        <th
        style={{
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
            width:`${widthText}%`,
            paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
        }}
        >   
            <div className={` ${textBgColor == 'לבן' && 'bg-white mt-10 mb-10 rounded-md shadow-xl px-8 shadow-black/10'}`}>

            </div>
            <div className='px-4 pt-5 pb-7' style={{color:'#00000080', width: widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}} dangerouslySetInnerHTML={{ __html: value }}/>
        </th>
    );
};

export default OriginModule;