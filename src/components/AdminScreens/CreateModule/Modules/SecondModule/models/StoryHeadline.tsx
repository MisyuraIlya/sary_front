import React, {FC, useEffect} from 'react';

type StoryHeadlineProps = {
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

const StoryHeadline:FC<StoryHeadlineProps> = ({tab, CustomTableWidth, setValue, exerciseId, dataObjectId, col , row, checkIsThereImage, isTable, value}) => {

    useEffect(() => {
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'storyHeadline');
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`${tab !== null ? `[${tab}].` : ''}exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
    }, [col, row, setValue, exerciseId, dataObjectId,value,tab]);

    return (
        <div >
            <div className='font-bold pt-6 px-4' style={{fontSize:'30px'}} dangerouslySetInnerHTML={{ __html: value }}/>
        </div>
    );
};

export default StoryHeadline;