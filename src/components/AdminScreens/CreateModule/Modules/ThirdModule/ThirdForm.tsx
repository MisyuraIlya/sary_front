import React, {FC} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import { findSplitedScreens } from './helpers/findSplitedScreens';
import SecondModuleShared from '../sharedModule/SecondModuleShared';
type ThirdFormProps = {
    handleSubmitForm: any
    onSubmit: any
    register: any
    setValue: any
    control: any
}

const ThirdForm:FC<ThirdFormProps> = ({handleSubmitForm,onSubmit, register, setValue, control}) => {

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

    const spanRight = 6
    const spanLeft = 6

    const {resRight, resLeft, resRegular} = findSplitedScreens((exercises as any)?.exercises)

    return (
        <div className='grid grid-cols-12 gap-4'>
            <div style={{gridColumn: 'span 6 / span 6'}}>
                <SecondModuleShared exercises={resRight} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
            <div style={{gridColumn: 'span 6 / span 6'}}>
                <SecondModuleShared exercises={resLeft} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
            <div style={{gridColumn: 'span 12 / span 12'}}>
                <SecondModuleShared exercises={resRegular} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control}/>
            </div>
        </div>
    );
};

export default ThirdForm;