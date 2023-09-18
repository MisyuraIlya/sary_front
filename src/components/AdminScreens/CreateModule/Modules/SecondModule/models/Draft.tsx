import React, {FC, useEffect} from 'react';
import SelectableText from '../components/SelectableText';
import SelectableText2 from '../components/SelectableText2';

type DraftProps = {
    value: string

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
}
const Draft:FC<DraftProps> = ({ checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'draft');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);

    return (
        <th className={`
        ${checkIsThereImage ? '' : ''}
        `}
        style={{
            verticalAlign: 'top', // Align text to the top
            textAlign: 'right',   // Align text to the right
        }}
        
        >
            <div className='text-right  px-4 py-4'>
                <div
                    // onInput={handleInputChange}
                    dangerouslySetInnerHTML={{ __html: value }}
                    className=""
                />
            </div>
            <SelectableText text="יש להיכנס בתפריט הראשי (מסומן בשלושה קווים אופקיים) למסך ההזמנה שלי ולבצע הזמנה" />
            <SelectableText2 />
        </th>
    );
};

export default Draft;