import React, {FC, useEffect} from 'react';
import { collectionAnswers } from '@/types/ModulesTypes.ts/SecondModule.interface';

type MixDragProps = {
    value: string

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
}
const MixDrag:FC<MixDragProps> = ({checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'mixDrag');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, [{value}]);
      }, [col, row, setValue, exerciseId, dataObjectId, value]);

    return (
        <th className={`${checkIsThereImage ? '' : 'specific-th'} ${isTable ? 'tableModule' : ''}`}>
            <div className='py-4 px-4' >
                <div className=''>
                    {value}
                </div>
            </div>
        </th>
    );
};

export default MixDrag;