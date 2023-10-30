import React, {FC, useEffect} from 'react';
import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
import Image from 'next/image';
type IconModuleProps = {
    value: string
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable : boolean
    firstIdTextModule: string
    isClearTable: boolean
    collectionsCols: collectionsCols[]
    CustomTableWidth: number
}
const IconModule:FC<IconModuleProps> = ({CustomTableWidth,isClearTable,collectionsCols,  firstIdTextModule, checkIsThereImage, value, setValue, exerciseId, dataObjectId, col , row, isTable}) => {



    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'text');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);

      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')

      console.log('value',value, value == 'דיון')
      const handleIcon = () => {
        if(value == 'דיון') {
            return 'conversation.svg'
        } else if(value == 'הוראה'){
            return 'instruction.svg';
        } else if(value == 'כתיבה') {
            return 'write.svg'
        } else if(value == 'נושא') {
            return 'section.svg'
        } else if (value === 'תרגול') {
            return 'exercise.svg'
        }else {
            return ''
        }
      }
    return (
        <th className={`
        relative
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        leading-[60px]
        `}
        
        style={{
            verticalAlign: 'top', 
            textAlign: 'right',   
            minWidth: isTable ? `${CustomTableWidth}px` : '',
        }}
        >
 

            <div className='text-right  px-4 py-4  fontSizeExercise'>
                <Image src={'/images/' + handleIcon()} width={70} height={70} alt='image' />
            </div>
        </th>
    );
};

export default IconModule;