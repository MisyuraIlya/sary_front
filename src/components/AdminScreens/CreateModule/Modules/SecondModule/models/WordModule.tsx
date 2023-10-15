import React, {FC, useEffect} from 'react';

type WordModuleProps = {
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
    isExplanationRow: boolean
    isStoryInstruction: boolean
}

const WordModule:FC<WordModuleProps> = ({isStoryInstruction, isExplanationRow, CustomTableWidth, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable, isClearTable}) => {
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`,row)
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'word');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue, exerciseId, dataObjectId, value]);

    return (
        <th 
        className={`
        ${checkIsThereImage ? 'h-full justify-center text-center w-12' : 'h-full justify-center text-center w-12 specific-th'} 
        ${(isTable || isClearTable) ? 'onlyWordAndOrden' : 'onlyWordAndOrden'} 
        ${isExplanationRow && 'bg-white'}
        ${isStoryInstruction && 'bg-[#005BBB]'}
        `}  
        style={{
            width:'50px',
            paddingTop:'20px',
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',  
        }}

        >
            <div className='flex items-center justify-center'>
                <div  style={(col == 0 || col == 1 ) ? {background:'#002536', color:'white'} : {background:'#BACEE9'}}  className='px-2 rounded-md'>
                    {value}
                </div>
            </div>
        </th>
    );
};

export default WordModule;