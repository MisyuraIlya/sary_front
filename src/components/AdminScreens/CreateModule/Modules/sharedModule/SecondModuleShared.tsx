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
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { isStoryFunc } from '../SecondModule/helpers/isStoryModule';
import { getPropertiesValueString } from '../SecondModule/helpers/getPropertiesValueString';
import PdfIframe from '../SecondModule/models/PdfIframe';
type SecondModuleSharedProps = {
    exercises: ISecondModuleExercises[]
    findDraftsArray: any
    register: any
    setValue: any
    control: any
    tab: number | null 
}

const SecondModuleShared: FC<SecondModuleSharedProps> = ({tab, exercises, findDraftsArray, register, setValue, control}) => {
    const {choosedTab,ExerciseMethods } = useExercise()
    return (
        <>
        {exercises.map((item: ISecondModuleExercises, indexx:number) => {
                const propertyName = `exercise${item.exercise}`;
                const checkIsThereImageRight = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'imageRight')))
                const checkIsThereImageLeft = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'imageLeft')))
                const checkIsThereVideo = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'video')))
                const checkIsTherePdf = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'pdf')))
                const checkIsThereChart = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'chart')))
                const checkIsThereProperties= item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'properties')))
                const isTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'table')))
                const isClearTable = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'tableClear')))
                const isIcon = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'icon1' || row?.module_type === 'icon2')))
                const checkIsThereImageRightData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'imageRight')))
                const checkIsThereImageLeftData = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'imageLeft')))
                const checkIsThereImageVideo = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'video')))
                const checkIsThereImageChart = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'chart')))
                const checkIsTherePdfChart = item[propertyName]?.data.filter((subItem) => subItem.collectionsRows.filter((rows) => rows.collectionRow.filter((row) => row?.module_type === 'pdf')))
                const checkIsThereMergedBackground = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'merged'|| row?.module_type === 'storyHeadline' || row?.module_type === 'imageLeft' || row?.module_type === 'imageRight')))
                const isBackgroundWhite = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'instructionWhite')))
                const isHeadDescriptionOne = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'iconDescriptionOne')))
                const isHeadDescriptionTwo = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'iconDescriptionTwo')))
                const isSecondHeadWhite = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'secondHeadWhite')))
                const checkIsThereBorder = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'border')))
                const isDragModule = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'bank')))
                const isIcon1 = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'icon1')))
                const isIcon2 = item[propertyName]?.data.some((subItem) => subItem.collectionsRows.some((rows) => rows.collectionRow.some((row) => row?.module_type === 'icon2')))
                
                let iconBg = ''
                if(isIcon1) {
                    iconBg = '#005CBB'
                }
                if(isIcon2) {
                    iconBg = '#3995F5'
                }
                let CustomTableWidth = 200;
                let CustomImageCol = 4 ;
                let CustomInputWidth = 200;
                let CustomSelectBoxWidth = 300;
                let songPropetries = 60;
                let widthText = 100;
                let textMargin = 0;
                let textBgColor = '';
                let defaultBackground = 'bg-exerciseCardBgg'
                let paddingLeft = 0
                let paddingRight = 0
                let whiteSpace = ''
                let textAlign = ''
                let textAreaWidth = 0
                if(isTable) {
                    CustomTableWidth = +getTableCustomValue(item, 'table')
                }
                if(checkIsThereMergedBackground) {
                    defaultBackground = getTableCustomValue(item, 'merged') as string;
                    if(defaultBackground === 'לבן'){
                        defaultBackground = "bg-white"
                    } 
                    if(defaultBackground === 'כחול') {
                        defaultBackground = 'bg-[#E5F0FE]';
                    }
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
                    songPropetries = getPropertiesValue(item, 'properties','רוחב שיר')
                    textMargin = getPropertiesValue(item, 'properties','טקסט צדדים')
                    textBgColor = getPropertiesValueString(item, 'properties','צבע טקסט')
                    paddingLeft = getPropertiesValue(item, 'properties','ריפוד שמאל')
                    paddingRight = getPropertiesValue(item, 'properties','ריפוד ימין')
                    textAlign = getPropertiesValueString(item, 'properties','מיקום טקסט')
                    whiteSpace = getPropertiesValueString(item, 'properties','שבירת טקסט')
                    widthText = getPropertiesValue(item, 'properties','רוחב טקסט')
                    textAreaWidth = getPropertiesValue(item, 'properties','רוחב תא מותאם')
                }
                let calulcatedImageColSpan = 12 - CustomImageCol
                const isStory = isStoryFunc(exercises)
                const getStoryNumber = getStroryNumber(item)
                return (
                <div 
                className={` 
                ${isBackgroundWhite && 'bg-white border-sky-500 rounded-md'}
                ${isSecondHeadWhite && 'bg-white border-sky-500 rounded-md'} 
                ${checkIsThereBorder && 'border '}
                ${isStory ? 'bg-[#EDF2F9]' : 'bg-[#EDF2F9]'} 
                `}  
                key={indexx}
                style={{background:(isHeadDescriptionOne || isHeadDescriptionTwo) ? iconBg: ''}}
                >
                        {
                            isDragModule && 
                            <DragAndDropModule item={item} isDragModule={isDragModule} />
                        }
                    <div className={` grid grid-cols-12 ${checkIsThereMergedBackground && `${defaultBackground}`}`}>
                        {
                            checkIsThereImageRight && 
                            <ImageModule data={checkIsThereImageRightData} CustomImageCol={CustomImageCol}  isStory={isStory} choosedTab={ getStoryNumber === choosedTab }/>
                        }
                        {
                            checkIsThereVideo &&
                            <VideoModule data={checkIsThereImageVideo} />
                        }
                        {
                            checkIsTherePdf &&
                            <PdfIframe data={checkIsTherePdfChart} />
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
                                    `}
                                    >
                                        <SecondExercise tab={tab} textAreaWidth={textAreaWidth} textAlign={textAlign} whiteSpace={whiteSpace} paddingRight={paddingRight} paddingLeft={paddingLeft} textBgColor={textBgColor} textMargin={textMargin} widthText={widthText} songPropetries={songPropetries} isStory={isStory} CustomSelectBoxWidth={CustomSelectBoxWidth} CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth} draftBankCollectionValues={findDraftsArray} isClearTable={isClearTable} isTable={isTable} checkIsThereImage={(checkIsThereImageRight || checkIsThereImageLeft)} isDragModule={isDragModule} exerciseId={+item.exercise} checkIsThereMergedBackground={checkIsThereMergedBackground} dataObjectId={dataObjectId} data={exercise} register={register} setValue={setValue} control={control} />
                                    </div>    
                                )
                            }

                            )}
                        </div>  
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