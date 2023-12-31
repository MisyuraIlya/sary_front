import React, {FC} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ForthModule, ISecondModule, ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { findSplitedScreens } from '../ThirdModule/helpers/findSplitedScreens';
import SecondModuleShared from '../sharedModule/SecondModuleShared';
import { findOverFlowValue } from '../SecondModule/helpers/findOverFlowValue';
import { findScreenWidth } from '../ThirdModule/helpers/findScreenWidth';

type ForthFromProps = {
    register: any
    setValue: any
    control: any
}

const ForthFrom:FC<ForthFromProps> = ({register, setValue, control}) => {

    const {exercises, choosedTab,ExerciseMethods} = useExercise()

    const sortedTabs =  (exercises as ForthModule)?.sort((a, b) => a.tabOrden - b.tabOrden);
    console.log('sortedTabs',sortedTabs)
    return (
        <>
        <div className=' flex gap-2 w-full pt-5 pb-5 ' style={{borderBottom:'1px solid #00000033'}}>
            <div className='mr-[80px] flex  gap-5'>
                {
                    (sortedTabs as ForthModule)?.map((item,index) => 
                    <>
                        <div 
                        className={`${choosedTab  == item.tab ? 'bg-[#3995F5] text-white' : 'bg-[#F0FBFF] color-[#F0FBFF]'}  pt-2 pb-2 pr-4 pl-4 rounded-md cursor-pointer`} 
                        key={index} 
                        onClick={() => ExerciseMethods.setChoosedTab(item.tab)}
                        >
                        {item.tab}
                        </div>
                    </>
                    )
                }
            </div>
        </div>
        {(exercises as ForthModule)?.map((item,index) => {
        const findDraftsArray = (item as any)?.exercises?.map((item: ISecondModuleExercises, indexx:number) => {
            const propertyName = `exercise${item.exercise}`;
            const draftBankCollectionValues = item[propertyName]?.data
            .flatMap((subItem) => subItem.collectionsRows
            .flatMap((rows) => rows.collectionRow
            .filter((row) => row?.module_type === "draftBank")
            .map((row) => row.collectionValues)
            ));
            return draftBankCollectionValues;
        })
        .filter((array: any) => array.length > 0)?.[0]?.[0]; 
        const {screenLeft, screenRight} = findScreenWidth((item as ISecondModule))
        const {resRight, resLeft, resRegular} = findSplitedScreens((item as any)?.exercises)
        const overflow = findOverFlowValue((item as any)?.exercises)
        return (
        <div className={`${item.tab == choosedTab ? 'grid grid-cols-12 gap-4' : 'hidden'}`} key={index}>
            <div style={{gridColumn: `span ${screenRight} / span ${screenRight}`, overflow: overflow !== 0 ? `auto` : 'none', height: overflow !== 0 ? overflow : ''}} >
                <SecondModuleShared tab={index} exercises={resRight} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
            <div style={{gridColumn: `span ${screenLeft} / span ${screenLeft}`, overflow: overflow !== 0 ? `auto` : 'none', height: overflow !== 0 ? overflow : ''}} >
                <SecondModuleShared tab={index} exercises={resLeft} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
            <div style={{gridColumn: 'span 12 / span 12'}}>
                <SecondModuleShared tab={index} exercises={resRegular} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
        </div> 
        )}
        )}

        </>

    );
};

export default ForthFrom;