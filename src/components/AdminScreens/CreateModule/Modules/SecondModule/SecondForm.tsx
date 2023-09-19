import React, {FC, useRef, ChangeEvent, useState} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SecondExercise from './SecondExercise';
import Image from 'next/image';
import ImageModule from './models/ImageModule';
import DragAndDropModule from './components/DragAndDropModule';

type SecondFormProps = {
    handleSubmitForm: any
    onSubmit: any
    register: any
    setValue: any
    control: any
}

const SecondForm:FC<SecondFormProps> = ({handleSubmitForm,onSubmit, register, setValue, control}) => {
    const {exercises} = useExercise()
    return (
        <div>
            {(exercises as any)?.exercises?.map((item: ISecondModuleExercises, indexx:number) => {
                const propertyName = `exercise${item.exercise}`;
                const checkIsThereImage = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'image')))
                const isTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'table')))
                const isClearTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'tableClear')))
                const checkIsThereImageData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'image')))
                const checkIsThereMergedBackground = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'merged')))
            
                const isDragModule = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'bank')))
                return (
                <div className='bg-white  ml-4 mr-4' key={indexx}>
                        {
                            isDragModule &&
                            <DragAndDropModule item={item} />
                        }
                    <div className={`p-2 grid grid-cols-12 ${checkIsThereMergedBackground && 'bg-exerciseCardBg'}`}>
                        {
                            checkIsThereImage &&
                            <ImageModule data={checkIsThereImageData}/>
                        }

                        <div className={`col-span-${checkIsThereImage ? '8' : '12'} `}  >
                            {item[propertyName].data.map((exercise,dataObjectId) =>  
                                <div 
                                style={checkIsThereMergedBackground ? {} : {borderBottom:'4px solid white'}}
                                key={dataObjectId}
                                className={`${isTable ? 'inOnlyTable' : ''} `}
                                >
                                    <SecondExercise isClearTable={isClearTable} isTable={isTable} checkIsThereImage={checkIsThereImage} isDragModule={isDragModule} exerciseId={+item.exercise} checkIsThereMergedBackground={checkIsThereMergedBackground} dataObjectId={dataObjectId} data={exercise} register={register} setValue={setValue} control={control} />
                                </div>    
                            )}
                        </div>  
                    </div>  
      
                </div>  
                )
            }
  
   

            )}
        </div>
    );
};

export default SecondForm;