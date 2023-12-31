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
    isClearTable: boolean
    CustomTableWidth: number
    tab: number | null
}
const MixDrag:FC<MixDragProps> = ({tab, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'mixDrag');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, [{value}]);
      }, [col, row, setValue, exerciseId, dataObjectId, value,tab]);

    return (
        <>
        {/* <th className={`${checkIsThereImage ? '' : ''} ${isTable ? 'tableModule' : ''}`}>
            <div className='py-4 px-4 w-48 bg-white' >
                <div className=''>
                    {value}
                </div>
            </div>
        </th> */}
        </>
    );
};

export default MixDrag;