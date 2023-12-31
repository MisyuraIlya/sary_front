import React, {FC, useEffect} from 'react';

type IconDescriptionOneProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    CustomTableWidth: number
    value: string
    tab: number | null
}

const IconDescriptionOne:FC<IconDescriptionOneProps> = ({tab, CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, value}) => {

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'iconDescriptionOne');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value,tab]);

    return (
        <div className='px-4 pt-5 pb-7  text-white font-medium text-xl'  dangerouslySetInnerHTML={{ __html: value }}/>
    );
};

export default IconDescriptionOne;