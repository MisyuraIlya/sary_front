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


    console.log('value',value)
    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'icon');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, [{value: value}]);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, []);
      }, [col, row, setValue,exerciseId, dataObjectId, value]);

      const isDisabledTh = collectionsCols.some((item) => item.orden === col + 1 && item.title == 'h')

      console.log('value',value,)
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
        bg-[#005CBB]
        pt-2
        ${isDisabledTh && 'disbleTh'}
        ${checkIsThereImage ? '' : ''}
        ${(firstIdTextModule === value && !isClearTable)  ? 'specific-th ' : ''}
        
        `}
        >
 

            <div className=' text-right  fontSizeExercise pr-4 pt-1 flex items-center justify-center h-full'>
                <Image src={'/images/' + handleIcon()} width={50} height={50} alt='image' />
            </div>
        </th>
    );
};

export default IconModule;