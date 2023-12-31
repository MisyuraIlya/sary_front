import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC, useEffect, useState} from 'react';
import BoldChanger from '../components/BoldChanger';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
type SongModuleProps = {
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
    songPropetries: number
    tab: number | null

}
const SongModule:FC<SongModuleProps> = ({tab, songPropetries, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable, collectionsCols}) => {

    const {isOnlineXml, choosedModule} = useExercise()
    // let formattedValue = value?.replaceAll('#', "&nbsp;&nbsp;&nbsp;&nbsp;");
    let formattedValue = value?.replaceAll('@', "<br/>");
    const [htmlTag, setHtmlTal] = useState<string>(formattedValue)
    const handleUpdateHtml = (updatedHtml: string) => {
        setHtmlTal(updatedHtml)
    }

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'song');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: htmlTag}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value, htmlTag,tab]);

    
      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')
    return (
        <th className={`
        relative
        text-[23px]
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        w-full
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

            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}} className='pt-5 pb-5'>
                <div style={{width:`${songPropetries}%`}}>
                    <div className=' py-4 fontSizeExercise bg-white shadow-xl shadow-black/10 rounded-sm px-9 text-justify '>
                        <div
                            // onInput={handleInputChange}
                            dangerouslySetInnerHTML={{ __html: htmlTag }}
                            className=""
                        />
                    </div>
                </div>
            </div>

        </th>
    );
};

export default SongModule;