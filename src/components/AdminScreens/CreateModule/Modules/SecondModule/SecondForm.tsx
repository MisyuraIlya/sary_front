import React, {FC, useRef, ChangeEvent, useState} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SecondExercise from './SecondExercise';
import Image from 'next/image';
import ImageModule from './models/ImageModule';
import DragAndDropModule from './components/DragAndDropModule';
import VideoModule from './models/VideoModule';

type SecondFormProps = {
    handleSubmitForm: any
    onSubmit: any
    register: any
    setValue: any
    control: any
}

const SecondForm:FC<SecondFormProps> = ({handleSubmitForm,onSubmit, register, setValue, control}) => {
    const {exercises} = useExercise()

    const findDraftsArray = (exercises as any)?.exercises?.map((item: ISecondModuleExercises, indexx:number) => {
        const propertyName = `exercise${item.exercise}`;
        const draftBankCollectionValues = item[propertyName]?.data
        .flatMap((subItem) =>
        subItem.collectionsRows.flatMap((rows) =>
            rows.collectionRow
            .filter((row) => row?.module_type === "draftBank")
            .map((row) => row.collectionValues)
        )
        );
        return draftBankCollectionValues;
    })
    .filter((array: any) => array.length > 0)?.[0]?.[0]; 

    return (
        <div>
            {(exercises as any)?.exercises?.map((item: ISecondModuleExercises, indexx:number) => {
                const propertyName = `exercise${item.exercise}`;
                const checkIsThereImageRight = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'imageRight')))
                const checkIsThereImageLeft = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'imageLeft')))
                const checkIsThereVideoRight = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'videoRight')))
                const checkIsThereVideoLeft = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'videoLeft')))
                const isTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'table')))
                const isClearTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'tableClear')))
                const checkIsThereImageRightData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'imageRight')))
                const checkIsThereImageLeftData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'imageLeft')))
                const checkIsThereImageVideoRightData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'videoRight')))
                const checkIsThereImageVideoLeftData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'videoLeft')))
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
                            checkIsThereImageRight &&
                            <ImageModule data={checkIsThereImageRightData}/>
                        }
                        {
                            checkIsThereVideoRight&&

                            <VideoModule data={checkIsThereImageVideoRightData} />
                        }

                        <div className={`col-span-${(checkIsThereImageRight || checkIsThereImageLeft || checkIsThereVideoRight || checkIsThereVideoLeft ) ? '8' : '12'} `}  >
                            {item[propertyName].data.map((exercise,dataObjectId) =>  
                                <div 
                                style={checkIsThereMergedBackground ? {} : {borderBottom:'4px solid white'}}
                                key={dataObjectId}
                                className={`${isTable ? 'inOnlyTable' : ''} `}
                                >
                                    <SecondExercise draftBankCollectionValues={findDraftsArray} isClearTable={isClearTable} isTable={isTable} checkIsThereImage={(checkIsThereImageRight || checkIsThereImageLeft)} isDragModule={isDragModule} exerciseId={+item.exercise} checkIsThereMergedBackground={checkIsThereMergedBackground} dataObjectId={dataObjectId} data={exercise} register={register} setValue={setValue} control={control} />
                                </div>    
                            )}
                        </div>  

                        {
                            checkIsThereVideoLeft &&

                            <VideoModule data={checkIsThereImageVideoLeftData} />
                        }

                        {
                            checkIsThereImageLeft &&
                            <ImageModule data={checkIsThereImageLeftData}/>
                        }
                    </div>  
      
                </div>  
                )
            }
  
   

            )}
        </div>
    );
};

export default SecondForm;