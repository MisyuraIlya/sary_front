import React, {FC, useEffect} from 'react';

type OrdenBoldModuleProps = {
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
    isExplanationRowSplited: boolean
}
const OrdenBoldModule:FC<OrdenBoldModuleProps> = ({isExplanationRowSplited, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'ordenBold');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId, value]);

    return (
        <th  style={{
            minWidth:'60px', 
            maxWidth:'70px',
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right', 
            paddingTop:'25px',

            
            }} 
            className={`${checkIsThereImage ? '' : 'specific-th'} ${(isTable || isClearTable) ? '' : ''} pt-4 ${isExplanationRowSplited && 'bg-white'}`} 
            >
            <div className='text-center flex justify-center items-center py-1'>
                <div className='rounded-md bg-primary text-white px-2'>
                    {value}
                </div>
            </div>
        </th>
    );
};

export default OrdenBoldModule;