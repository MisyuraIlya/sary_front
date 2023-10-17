import React, {FC, useRef, ChangeEvent, useState} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SecondExercise from './SecondExercise';
import Image from 'next/image';
import ImageModule from './models/ImageModule';
import DragAndDropModule from './components/DragAndDropModule';
import VideoModule from './models/VideoModule';
import ChartModule from './models/ChartModule';
import { getTableCustomValue } from './helpers/getTableCustomValue';
import { getTableCustomAnswer } from './helpers/getTableCustomAnswer';
import { getPropertiesValue } from './helpers/getPropertiesValue';
import TabsModule from './components/TabsModule';
import { getStoryTab } from './helpers/getStoryTab';
import { getStroryNumber } from './helpers/getStoryNumber';
import SecondModuleShared from '../sharedModule/SecondModuleShared';
type SecondFormProps = {
    handleSubmitForm: any
    onSubmit: any
    register: any
    setValue: any
    control: any
}

const SecondForm:FC<SecondFormProps> = ({handleSubmitForm,onSubmit, register, setValue, control}) => {
    const {exercises, choosedTab,isOnlineXml} = useExercise()
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
            <SecondModuleShared exercises={(exercises as any)?.exercises} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control} />
            {/* {(exercises as any)?.exercises?.map((item: ISecondModuleExercises, indexx:number) => {
                console.log('item',item)
                const propertyName = `exercise${item.exercise}`;
                const checkIsThereImageRight = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'imageRight')))
                const checkIsThereImageLeft = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'imageLeft')))
                const checkIsThereVideo = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'video')))
                const checkIsThereChart = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'chart')))
                const checkIsThereProperties= item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'properties')))
                const isTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'table')))
                const isClearTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'tableClear')))
                const checkIsThereImageRightData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'imageRight')))
                const checkIsThereImageLeftData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'imageLeft')))
                const checkIsThereImageVideo = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'video')))
                const checkIsThereImageChart = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'chart')))
                const checkIsThereMergedBackground = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'merged')))
                const isDragModule = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'bank')))
                const TabCounter = 2;

                let CustomTableWidth = 200;
                let CustomImageCol = 4 ;
                let CustomInputWidth = 200;
                let CustomSelectBoxWidth = 300;
                if(isTable) {
                    CustomTableWidth = getTableCustomValue(item, 'table')
                }
                if(checkIsThereImageRight) {
                    CustomImageCol = getTableCustomAnswer(item, 'imageRight')
                }
                if(checkIsThereImageLeft) {
                    CustomImageCol = getTableCustomAnswer(item, 'imageLeft')
                }
                if(checkIsThereProperties) {
                    CustomInputWidth = getPropertiesValue(item, 'properties','שדה הקלדה')
                    CustomSelectBoxWidth = getPropertiesValue(item, 'properties','שדה בחירה')
                }

                let calulcatedImageColSpan = 12 - CustomImageCol
                const isStory = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'story')))
                const getStoryNumber = getStroryNumber(item)
                const isHaveStoryInstruction = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'storyInstruction')))
                
                return (
                <div className={` ${isStory ? 'bg-[#EDF2F9]' : 'bg-white'} ml-4 mr-4`} key={indexx}>
                        {
                            isDragModule && 
                            <DragAndDropModule item={item} />
                        }
                    <div className={` grid grid-cols-12 ${checkIsThereMergedBackground && 'bg-exerciseCardBg'}`}>
                        {
                            checkIsThereImageRight && 
                            <ImageModule data={checkIsThereImageRightData} CustomImageCol={CustomImageCol} isStory={( isStory && getStoryNumber === choosedTab )}/>
                        }
                        {
                            checkIsThereVideo &&
                            <VideoModule data={checkIsThereImageVideo} />
                        }

                        {
                            checkIsThereChart &&

                            <ChartModule data={checkIsThereImageChart} />
                        }

                        <div  style={(checkIsThereImageRight || checkIsThereImageLeft) ?{gridColumn:`span ${calulcatedImageColSpan} / span ${calulcatedImageColSpan}`} : {gridColumn:'span 12 / span 12'}}>
                            {item[propertyName].data.map((exercise,dataObjectId) =>   {
                                return (
                                    <div 
                                    style={checkIsThereMergedBackground ? {} : {borderBottom:'4px solid white'}}
                                    key={dataObjectId}
                                    className={`
                                    ${isTable ? 'inOnlyTable' : ''} 
                                    ${(isStory && (getStoryNumber !== choosedTab) && 'hidden')}
                                    `}
                                    >
                                        <SecondExercise isStory={isStory} CustomSelectBoxWidth={CustomSelectBoxWidth} CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth} draftBankCollectionValues={findDraftsArray} isClearTable={isClearTable} isTable={isTable} checkIsThereImage={(checkIsThereImageRight || checkIsThereImageLeft)} isDragModule={isDragModule} exerciseId={+item.exercise} checkIsThereMergedBackground={checkIsThereMergedBackground} dataObjectId={dataObjectId} data={exercise} register={register} setValue={setValue} control={control} />
                                    </div>    
                                )
                            }

                            )}
                        </div>  

                        {isHaveStoryInstruction && 
                        ( isStory && getStoryNumber === choosedTab ) &&
                            <div style={{gridColumn: 'span 12 / span 12'}} className='mr-10 mt-2'>
                                <TabsModule tabsCounter={TabCounter}/>
                            </div>    
                        }


                        {
                            checkIsThereImageLeft && 
                            <ImageModule data={checkIsThereImageLeftData} CustomImageCol={CustomImageCol} isStory={( isStory && getStoryNumber === choosedTab )}/>
                        }
                    </div>  
      
                </div>  
                )
            }
  
   

            )} */}
        </div>
    );
};

export default SecondForm;