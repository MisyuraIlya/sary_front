import React, {FC, useEffect} from 'react';

type TextModuleProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    CustomTableWidth: number
}
const HeadLine2:FC<TextModuleProps> = ({CustomTableWidth, firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'headline2');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);

    return (
        <th className={`
        ${checkIsThereImage ? '' : ''}
        `}
        style={{
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
            <div className='text-center  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className=""
                />
            </div>
        </th>
    );
};

export default HeadLine2;