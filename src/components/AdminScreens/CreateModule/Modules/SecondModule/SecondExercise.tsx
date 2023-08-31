import React, {FC, useEffect} from 'react';
import { ISecondModuleSubExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SecondRowCard from './SecondRowCard';
import Image from 'next/image';
import SecondExerciseColumns from './SecondExerciseColumns';
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
    isDragModule: boolean
}
const SecondExercise:FC<SecondExerciseProps> = ({checkIsThereImage, data,register,setValue,control, exerciseId,checkIsThereMergedBackground,  dataObjectId,isTable, isDragModule}) => {

    const CheckLineIsWordOrInstructionOrEmpty = (array: ISecondModuleSubExercises) => {
        let moduleTypes = ["", "word", "instruction"];
        let moduleTypeCount = 0;

        array.collectionsRows.map((item) => {
            item.collectionRow.map((subItem) => {
                if(subItem?.module_type !== 'word' && subItem?.module_type !== 'instruction' && subItem?.module_type !== 'subInstruction' && subItem?.module_type !== '') {
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

    const checkIsAllCategoryColsEmpty = data.collectionsCols.every((item) => !item.title || item.title.length === 0);
    const checkLineColor = CheckLineIsWordOrInstructionOrEmpty(data)

    useEffect(() => {
        setValue(`exercises.${exerciseId}.exercise`, exerciseId);
        setValue(`exercises.${exerciseId}.data[${dataObjectId}].orden`, data.orden);

    },[exerciseId,dataObjectId, data.orden, setValue ])
    return (
        <table  className={`myTable w-full ${checkLineColor ? 'bg-mainExerciseBg' : 'bg-exerciseCardBg'} ${isTable ? 'tableModule' : ''}`} style={{borderSpacing:'0'}}>
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
                                isDragModule={isDragModule}
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
                        const isExistImage = rows?.collectionRow.some((item) => item?.module_type === 'image' && item?.collectionValues[0]?.value !== null);
                        const isExistCheckBox = rows?.collectionRow.some((item) => item?.module_type === 'checkBox' && item?.collectionValues[0]?.value !== null);
                        const isBank = rows?.collectionRow.some((item) => item?.module_type === 'bank' && item?.collectionValues[0]?.value !== null);

                        const mergedExercise = rows?.collectionRow.some((item) => item?.module_type === 'mergedExercise' && item?.collectionValues[0]?.value !== null);
                        console.log('mergedExercise',mergedExercise)
                        console.log('rows',rows)
                        return (
                            // <tr style={(isExistInstruction || isExistSubInstruction ) ? {minWidth:'100px',background:'#E5F0FE'} : {minWidth:'100px',background:'#EDF2F9'} }>
                            <>
                            { !checkIsThereMergedBackground &&
                                <div className='bg-white h-1 absolute z-10 w-full '></div>                        
                            }
                            <tr className='w-full' key={keys}>
                                
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
                                    isTable={isTable}
                                    index={index}
                                />  
                                </>
                          
                                )}
                                
                            {keys == 0 && isExistInstruction &&
                            <th style={{ float:'left', borderBottom:'0px'}} className='flex items-center absolute left-0' colSpan={data.collectionsCols.length} >
                                <div className='px-2 py-2'>
                                    <Image src={'/images/folder.svg'} alt='folder' width={30} height={30} />
                                    <span className='text-sm'>וידיאו</span>
                                </div>
                                <div className='px-2 rounded-full flex text-center items-center justify-center'  >
                                    <div>
                                        <div  className=' flex text-center items-center justify-center'>
                                            <div style={{background:'#BACEE9'}} className='rounded-full px-3 py-2'>
                                                <Image src={'/images/quest.svg'} alt='quest' width={10} height={10}/>
                                            </div>
                                        </div>
                                        <div>
                                            <span className='text-sm'>הסבר</span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            }
                            

                            </tr>
                            { !checkIsThereMergedBackground &&
                                <div className='bg-white h-1 absolute z-10 w-full '></div>                        
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