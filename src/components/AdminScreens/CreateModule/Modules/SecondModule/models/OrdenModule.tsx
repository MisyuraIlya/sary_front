import React, {FC, useEffect} from 'react';

type OrdenModuleProps = {
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
}
const OrdenModule:FC<OrdenModuleProps> = ({CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'orden');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId, value]);

    return (
        <th  style={{
            minWidth:'55px', 
            maxWidth:'60px',
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right', 
            
            }} 
            className={`${checkIsThereImage ? '' : 'specific-th'} ${(isTable || isClearTable) ? '' : ''} pt-4`} 
            >
            <div className='text-center flex justify-center items-center py-1'>
                <div style={{background:'#BACEE9'}} className='px-2 rounded-md '>
                    {value}
                </div>
            </div>
        </th>
    );
};

export default OrdenModule;