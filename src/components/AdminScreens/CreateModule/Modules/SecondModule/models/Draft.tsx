import React, {FC, useEffect} from 'react';
import TextAnnotation from '../components/TextAnnotation';
import { collectionValues } from '@/types/ModulesTypes.ts/SecondModule.interface';


type DraftProps = {
    value: string

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    draftBankCollectionValues: collectionValues[]
    CustomTableWidth: number
}
const Draft:FC<DraftProps> = ({ CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, draftBankCollectionValues}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'draft');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);
    return (
        <th className={`
        ${checkIsThereImage ? '' : ''}
        bg-white
        `}
        
        style={{
            verticalAlign: 'top', 
            textAlign: 'right', 
            width:'100%',
            paddingTop:'20px',
            minWidth: isTable ? `${CustomTableWidth}px` : '',
            
        }}
        
        >
            {/* <div className='text-right  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className=""
                />
            </div> */}
            <div style={{
                          border: `2px solid #388FF5`, 
                          borderRadius: '5px',
                          paddingTop:'27px'
            }}>
            <TextAnnotation draftBankCollectionValues={draftBankCollectionValues} text={value} row={row} col={col} exerciseId={exerciseId} dataObjectId={dataObjectId}/>

            </div>
        </th>
    );
};

export default Draft;