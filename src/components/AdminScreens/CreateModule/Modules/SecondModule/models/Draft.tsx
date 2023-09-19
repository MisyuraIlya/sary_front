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
}
const Draft:FC<DraftProps> = ({ checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, draftBankCollectionValues}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'draft');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);
      console.log('heree')
    return (
        <th className={`
        ${checkIsThereImage ? '' : ''}
        `}
        style={{
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
        }}
        
        >
            <div className='text-right  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className=""
                />
            </div>
            <TextAnnotation draftBankCollectionValues={draftBankCollectionValues} text={value}/>
        </th>
    );
};

export default Draft;