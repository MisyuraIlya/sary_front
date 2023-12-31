import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect, useState} from 'react';
import BoldChanger from '../components/BoldChanger';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
type instructionWhiteProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
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
    tab: number | null

}
const InstructionWhite:FC<instructionWhiteProps> = ({tab, whiteSpace, textAlign, paddingLeft, paddingRight,textBgColor,textMargin, widthText,CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable, collectionsCols}) => {

    const {isOnlineXml, choosedModule} = useExercise()
    // let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    let formattedValue = value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)

    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'instructionWhite');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag,tab]);

    
      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
        relative
        text-[23px]
        bg-white
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        `}
        
        style={{
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
            minWidth: isTable ? `${CustomTableWidth}px` : '',
            paddingRight:paddingRight ? `${paddingRight}px` : '', paddingLeft:paddingLeft ? `${paddingLeft}px` : ''
        }}
        
        >
            {!isOnlineXml &&
                <BoldChanger html={htmlTag} handleUpdateHtml={handleUpdateHtml}/>
            }

            <div className='text-right  px-4 py-4 fontSizeExercise ' 
                        style={choosedModule ? 
                            {width:widthText ? `${widthText}%` : '100%', marginRight:textMargin ? `${textMargin}%` : ''}:
                            {width:widthText ? `${widthText}%` : '100%',marginRight: textMargin ? `${textMargin}%` : ''}}
            >
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: htmlTag }}
                    style={{ textAlign: textAlign === 'אמצע' ? 'center' : undefined, whiteSpace: whiteSpace === 'לא' ? 'nowrap' : undefined}}
                    className=""
                />
            </div>
        </th>
    );
};

export default InstructionWhite;