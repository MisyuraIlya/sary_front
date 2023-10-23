import { ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import React, {FC} from 'react';
import { getTableCustomValue } from '../SecondModule/helpers/getTableCustomValue';
import { getTableCustomAnswer } from '../SecondModule/helpers/getTableCustomAnswer';
import { getPropertiesValue } from '../SecondModule/helpers/getPropertiesValue';
import { getStroryNumber } from '../SecondModule/helpers/getStoryNumber';
import DragAndDropModule from '../SecondModule/components/DragAndDropModule';
import ImageModule from '../SecondModule/models/ImageModule';
import VideoModule from '../SecondModule/models/VideoModule';
import ChartModule from '../SecondModule/models/ChartModule';
import SecondExercise from '../SecondModule/SecondExercise';
import TabsModule from '../SecondModule/components/TabsModule';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
type SecondModuleSharedProps = {
    exercises: ISecondModuleExercises[]
    findDraftsArray: any
    register: any
    setValue: any
    control: any
}

const SecondModuleShared: FC<SecondModuleSharedProps> = ({exercises, findDraftsArray, register, setValue, control}) => {
    const {choosedTab} = useExercise()
    return (
        <>
        {exercises.map((item: ISecondModuleExercises, indexx:number) => {
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
                <div className={` ${isStory ? 'bg-[#EDF2F9]' : 'bg-white'} ${isDragModule && 'pr-[65px]'}`} key={indexx}>
                        {
                            isDragModule && 
                            <DragAndDropModule item={item} />
                        }
                    <div className={` grid grid-cols-12 ${checkIsThereMergedBackground && 'bg-exerciseCardBg'}`}>
                        {
                            checkIsThereImageRight && 
                            <ImageModule data={checkIsThereImageRightData} CustomImageCol={CustomImageCol}  isStory={isStory} choosedTab={ getStoryNumber === choosedTab }/>
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
                            <ImageModule data={checkIsThereImageLeftData} CustomImageCol={CustomImageCol} isStory={isStory} choosedTab={ getStoryNumber === choosedTab }/>
                        }
                    </div>  
      
                </div>  
                )
            }
  
   

        )}     
        </>
    );
};

export default SecondModuleShared;