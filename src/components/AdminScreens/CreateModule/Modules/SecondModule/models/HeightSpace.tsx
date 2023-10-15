import React, {FC, useEffect} from 'react';

type HeightSpaceProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
    CustomTableWidth: number
    value: string
}


const HeightSpace:FC<HeightSpaceProps> = ({CustomTableWidth, setValue, value , exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, isClearTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'heightSpace');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, [{value}]);
      }, [col, row, setValue,exerciseId, dataObjectId,value]);
    return (
        <th style={{height:`${value}px`}} className='bg-white w-screen'>
        </th>
    );
};

export default HeightSpace;