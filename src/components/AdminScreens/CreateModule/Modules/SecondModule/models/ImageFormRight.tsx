import React, {FC, useEffect} from 'react';

type ImageFormProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
}


const ImageFormRight:FC<ImageFormProps> = ({setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, isClearTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'imageRight');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId]);

    return (
        <>
            
        </>
    );
};

export default ImageFormRight;