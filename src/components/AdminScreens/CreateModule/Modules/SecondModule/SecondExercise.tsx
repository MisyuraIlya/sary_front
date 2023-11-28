import React, {FC, useEffect, useState} from 'react';
import { ISecondModuleSubExercises, collectionValues } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SecondRowCard from './SecondRowCard';
import Image from 'next/image';
import SecondExerciseColumns from './SecondExerciseColumns';
import { handleMergedExercise } from './helpers/handleMergedExercise';
import { getFirstTextModuleIdInArray } from './helpers/getFirstTextModuleIdInArray';
import SideBars from '@/components/SideBars/SideBars';
import SideBarIcons from './components/SideBarIcons';
import ExplanationModule from './components/ExplanationModule';
import { getExplanationData } from './helpers/getExplanationData';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
type SecondExerciseProps = {
    data: ISecondModuleSubExercises
    register: any
    setValue: any
    control: any
    exerciseId: number
    dataObjectId: number
    checkIsThereMergedBackground: boolean
    checkIsThereImage: boolean
    isTable: boolean
    isClearTable: boolean
    isDragModule: boolean
    draftBankCollectionValues: collectionValues[]
    CustomTableWidth: number
    CustomInputWidth: number
    CustomSelectBoxWidth: number
    isStory: boolean
}


const SecondExercise:FC<SecondExerciseProps> = ({isStory, CustomSelectBoxWidth, CustomTableWidth, checkIsThereImage, data,register,setValue,control, exerciseId,checkIsThereMergedBackground,  dataObjectId,isTable,isClearTable, isDragModule, draftBankCollectionValues, CustomInputWidth }) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {choosedModule} = useExercise()
    const CheckLineIsWordOrInstructionOrEmpty = (array: ISecondModuleSubExercises) => {
        let moduleTypes = ["", "word", "instruction"];
        let moduleTypeCount = 0;
        array.collectionsRows.map((item) => {
            item.collectionRow.map((subItem) => {
                if(subItem?.module_type !== 'word' &&  subItem?.module_type !== 'orden' && subItem?.module_type !== 'instruction' && subItem?.module_type !== 'subInstruction' && subItem?.module_type !== '' && subItem?.module_type !== 'properties' && subItem?.module_type !== 'doneSplitedScreenLeft' ) {
                    moduleTypeCount++
                }
            })
        })
        if(moduleTypeCount === 0) {
            return true
        } else {
            return false
        }
    }

    const isIcon1Func = (array: ISecondModuleSubExercises): boolean => {
        let isIcon1 = false;
        array.collectionsRows.map((item) => {
            item.collectionRow.map((subItem) => {
                if(subItem?.module_type == 'icon1') {
                    isIcon1= true
                }
            })
        })

        return isIcon1;
    }

    const isIcon2Func = (array: ISecondModuleSubExercises): boolean => {
        let isIcon2 = false;
        array.collectionsRows.map((item) => {
            item.collectionRow.map((subItem) => {
                if(subItem?.module_type == 'icon2') {
                    isIcon2= true
                }
            })
        })

        return isIcon2;
    }

    const checkIsIconModule = (array: ISecondModuleSubExercises) => {
        let isThereIconModule = false
        
        array.collectionsRows.forEach((item) => {
            item.collectionRow.forEach((subItem) => {
                if (subItem?.module_type == 'icon1') {
                    isThereIconModule = true
                }
            })
        })
    
        return isThereIconModule
    }

    const checkIsAllCategoryColsEmpty = data.collectionsCols.every((item) => !item.title || item.title.length === 0);
    const checkLineColor = CheckLineIsWordOrInstructionOrEmpty(data)
    const isIcon1 = isIcon1Func(data)
    const isIcon2 = isIcon2Func(data)

    const checkIsIcon = checkIsIconModule(data)
    useEffect(() => {
        setValue(`exercises.${exerciseId}.exercise`, exerciseId);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].orden`, data.orden);

    },[exerciseId,dataObjectId, data.orden, setValue ])

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
    const handleSidebarClose = () => {
        setIsSidebarOpen(false);
    };

    return (
        <table  className={`myTable w-full  ${isIcon1 && 'bg-[#005CBB]'} ${isIcon2 && 'bg-[#3995F5]'} ${ checkLineColor ? 'bg-mainExerciseBg' : ''}  ${isTable ? 'tableModule' : ''}`} style={{borderSpacing:'0'}}>
            <div className='relative'>
                <tbody>
                    <tr className='w-full'>
                        {data.collectionsCols.map((column, index) => {
                            return (
                            <SecondExerciseColumns
                                key={index} // Add a unique key prop here
                                checkIsAllCategoryColsEmpty={checkIsAllCategoryColsEmpty}
                                data={column}
                                col={index + 1}
                                index={index}
                                setValue={setValue}
                                exerciseId={exerciseId}
                                dataObjectId={dataObjectId}
                                isTable={isTable}
                                isClearTable={isClearTable}
                                isDragModule={isDragModule}
                                CustomTableWidth={CustomTableWidth}
                                
                            />
                            );
                        })}
                    </tr>
                    {data?.collectionsRows?.map((rows,keys) => {
                        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${rows.orden}].orden`, rows.orden);
                        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${rows.orden}].youtube_link`, null);
                        setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${rows.orden}].pdf`, null);
                        const isExistWord = rows?.collectionRow.some((item) => item?.module_type === 'word' && item?.collectionValues[0]?.value !== null);
                        const isExistInstruction = rows?.collectionRow.some((item) => item?.module_type === 'instruction' && item?.collectionValues[0]?.value !== null);
                        const isExistSubInstruction = rows?.collectionRow.some((item) => item?.module_type === 'subInstruction' && item?.collectionValues[0]?.value !== null);
                        const isExistImage = rows?.collectionRow.some((item) => item?.module_type === 'imageRight' && item?.collectionValues[0]?.value !== null);
                        // const isExistCheckBox = rows?.collectionRow.some((item) => item?.module_type === 'checkBox' && item?.collectionValues[0]?.value !== null);
                        const isBank = rows?.collectionRow.some((item) => item?.module_type === 'bank' && item?.collectionValues[0]?.value !== null);
                        const mergedExercise = rows?.collectionRow.some((item) => item?.module_type === 'mergedExercise' && item?.collectionValues[0]?.value !== null);
                        const isExplanationRow =  rows?.collectionRow.some((item) => item?.module_type === 'explanation' && item?.collectionValues[0]?.value !== null);
                        const isExplanationRowSplited =  rows?.collectionRow.some((item) => item?.module_type === 'explanationSplited' && item?.collectionValues[0]?.value !== null);
                        const explanationData = getExplanationData(rows)
                        const isStoryInstruction = rows?.collectionRow.some((item) => item?.module_type === 'storyInstruction');
                        let mergedData: any = null
                        if(mergedExercise) {
                            mergedData = handleMergedExercise(rows.collectionRow)
                        } 
                        const firstIdTextModule = getFirstTextModuleIdInArray(rows?.collectionRow)
                        return (
                            // <tr style={(isExistInstruction || isExistSubInstruction ) ? {minWidth:'100px',background:'#E5F0FE'} : {minWidth:'100px',background:'#EDF2F9'} }>
                            <>
                            { !checkIsThereMergedBackground &&
                                <div className={`h-1 absolute z-1 w-full`}></div>                        
                            }
                            <tr className={`w-full `} key={keys} >
                                
                                {rows?.collectionRow.map((row, index) => 
                                    <>
                                    <SecondRowCard
                                        key={index} // Add a unique key prop here
                                        checkIsThereImage={checkIsThereImage}
                                        isExistWord={isExistWord}
                                        exerciseId={exerciseId}
                                        dataObjectId={dataObjectId}
                                        row={row}
                                        orden={rows.orden}
                                        register={register}
                                        setValue={setValue}
                                        control={control}
                                        isClearTable={isClearTable}
                                        isTable={isTable}
                                        index={index}
                                        mergedData={mergedData}
                                        firstIdTextModule={firstIdTextModule}
                                        draftBankCollectionValues={draftBankCollectionValues}
                                        collectionsCols={data.collectionsCols}
                                        CustomTableWidth={CustomTableWidth}
                                        CustomInputWidth={CustomInputWidth}
                                        CustomSelectBoxWidth={CustomSelectBoxWidth}
                                        isExplanationRowSplited={isExplanationRowSplited}
                                        isStoryInstruction={isStoryInstruction}
                                        checkIsIcon={checkIsIcon}
                                        isIcon1={isIcon1}
                                        isIcon2={isIcon2}
                                    />  
                                    </>
                                )}

                                
                                
                            {keys == 0 && isExistInstruction &&
                                <SideBarIcons data={data} rows={rows}/>
                            }
                            

                            </tr>


                            {isExplanationRow &&
                                <tr>
                                    <td className='relative' colSpan={data.collectionsCols.length}>
                                        <ExplanationModule htmlTag={explanationData} />
                                    </td>
                                </tr>
                            } 

                            { !checkIsThereMergedBackground &&
                                <div className={`${isStory ? 'bg-[#EDF2F9]' : 'bg-white'}  h-1 absolute z-1 w-full`}></div>                        
                            }
                            </>
                        )}
                        
                    )}
                    
                </tbody>
            </div>
 
        </table>
    );
};

export default SecondExercise;