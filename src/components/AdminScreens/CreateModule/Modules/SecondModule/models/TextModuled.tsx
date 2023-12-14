import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect, useState} from 'react';
import BoldChanger from '../components/BoldChanger';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
type TextModuledProps = {
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
    widthText: number
    textMargin: number
    textBgColor: string
    paddingLeft:number
    paddingRight: number
    whiteSpace: string
    textAlign: string

}
const TextModuled:FC<TextModuledProps> = ({whiteSpace, textAlign, paddingLeft, paddingRight,textBgColor,textMargin, widthText,CustomTableWidth,firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable, collectionsCols}) => {

    const {isOnlineXml, choosedModule} = useExercise()
    // let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    let formattedValue = value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'textModuled');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag]);
      console.log('whiteSpace',whiteSpace)
      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
        relative
        text-[23px]
        
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable && choosedModule !== 3)  ? 'specific-th ' : ''}
        ${choosedModule === 3 && 'text-justify'}
        pt-2
        pb-2
        `}
        
        style={{
            width:`${widthText}%`,
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
            minWidth: isTable ? `${CustomTableWidth}px` : '',
            paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
        }}
        
        >
            {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            }

            <div className={`fontSizeExercise text-justify ${textBgColor == 'לבן' && 'bg-white mt-10 mb-10 rounded-md shadow-xl px-8 shadow-black/10'} pt-4 pb-4`}
            style={choosedModule ? 
                {width:widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}:
                {width:widthText ? `${widthText}%` : '100%',marginRight: textMargin ? `${textMargin}%` : ''}}
            >
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    className=""
                    style={{ textAlign: textAlign === 'אמצע' ? 'center' : undefined, whiteSpace: whiteSpace === 'לא' ? 'nowrap' : undefined}}
                />
            </div>
        </th>
    );
};

export default TextModuled;