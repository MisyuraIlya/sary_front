import React, {FC, useEffect} from 'react';

type IconDescriptionTwoProps = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    CustomTableWidth: number
    value: string
}

const IconDescriptionTwo:FC<IconDescriptionTwoProps> = ({CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, value}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'iconDescriptionTwo');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId,value]);

    return (
        <div className='p-2'>
            <div className='m-5 bg-[#eaeaea] rounded-lg text-black'>
            <div className='px-4 pt-5 pb-7  font-medium'  dangerouslySetInnerHTML={{ __html: value }}/>

            </div>
        </div>
    );
};

export default IconDescriptionTwo;