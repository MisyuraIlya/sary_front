import React, {FC} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ISecondModule, ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { findSplitedScreens } from './helpers/findSplitedScreens';
import SecondModuleShared from '../sharedModule/SecondModuleShared';
import { findOverFlowValue } from '../SecondModule/helpers/findOverFlowValue';
import { findScreenWidth } from './helpers/findScreenWidth';
type ThirdFormProps = {

    register: any
    setValue: any
    control: any
}

const ThirdForm:FC<ThirdFormProps> = ({register, setValue, control}) => {

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
    const {screenLeft, screenRight} = findScreenWidth((exercises as ISecondModule))
    const {resRight, resLeft, resRegular} = findSplitedScreens((exercises as any)?.exercises)
    const overflow = findOverFlowValue((exercises as any)?.exercises)
    return (
        <>
        <div className='grid grid-cols-12 gap-4'>
            <div style={{gridColumn: `span ${screenRight} / span ${screenRight}`, overflow: overflow !== 0 ? `auto` : 'none', height: overflow !== 0 ? overflow : ''}} >
                <SecondModuleShared tab={null} exercises={resRight} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
            <div style={{gridColumn: `span ${screenLeft} / span ${screenLeft}`, overflow: overflow !== 0 ? `auto` : 'none', height: overflow !== 0 ? overflow : ''}} >
                <SecondModuleShared tab={null} exercises={resLeft} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
            <div style={{gridColumn: 'span 12 / span 12'}}>
                <SecondModuleShared tab={null} exercises={resRegular} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
        </div>
        </>

    );
};

export default ThirdForm;