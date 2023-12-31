import React, {FC, useRef, ChangeEvent, useState} from 'react';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { ISecondModuleExercises } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SecondModuleShared from '../sharedModule/SecondModuleShared';

type SecondFormProps = {
    register: any
    setValue: any
    control: any
}

const SecondForm:FC<SecondFormProps> = ({register, setValue, control}) => {
    const {exercises} = useExercise()
    const findDraftsArray = (exercises as any)?.exercises?.map((item: ISecondModuleExercises) => {
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

    return (
        <div>
            <SecondModuleShared tab={null} exercises={(exercises as any)?.exercises} findDraftsArray={findDraftsArray} register={register} setValue={setValue} control={control} />
        </div>
    );
};

export default SecondForm;