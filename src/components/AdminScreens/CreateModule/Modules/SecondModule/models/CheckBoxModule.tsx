import React, {FC, useEffect} from 'react';
import { collectionValues } from '@/types/ModulesTypes.ts/SecondModule.interface';
type CheckBoxModuleProps = {
    values: collectionValues[]

    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    answer:string
    isTable: boolean
    isClearTable: boolean
    CustomTableWidth: number
}
const CheckBoxModule:FC<CheckBoxModuleProps> = ({CustomTableWidth, checkIsThereImage, values, setValue, exerciseId, dataObjectId, col , row, answer, isTable, isClearTable}) => {

    useEffect(() => {
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'checkBox');
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers[0].value`, answer);
    }, [col, row, setValue, exerciseId, answer, dataObjectId]);

    console.log('answer',answer)
    const answers = answer?.split(';').map(item => item.trim());
    console.log('answers2',answers)
    return (
        <th 
        style={{width:'100%',minWidth: isTable ? `${CustomTableWidth}px` : '',}}
        className={`${checkIsThereImage ? '' : 'specific-th'}`}
        >
            <div className='fontSizeExercise' style={{lineHeight:'30px',paddingRight:'20px'}}> 
                {values?.map((item,index) =>  {
                    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues.${index}.value`, item.value);
                    const isTheAnswer = answers.includes(item.value)
                    console.log('isTheAnswer',item.value, isTheAnswer)
                    const isLastItem = index === values.length - 1
                    if(item.value){
                        return (
                            <div style={{width:'100%'}} key={index}>
                                <div className=''>
                                    <span className='flex gap-2'>
                                        <input type='checkbox'  className='w-5' checked={isTheAnswer}/>
                                        {item.value}
                                    </span>
                                </div>    
                            </div>
                        )
                    }
                }

                )}
            </div>
        </th>
    );
};

export default CheckBoxModule;