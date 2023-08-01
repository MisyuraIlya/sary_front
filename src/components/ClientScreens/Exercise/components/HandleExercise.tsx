import { collectionRow } from '@/types/ModulesTypes.ts/FirstModule.interface';
import React from 'react';
import InputModule from './modules/InputModule';
import TextModule from './modules/TextModule';
import SelectBoxModule from './modules/SelectBoxModule';
import TextAreaModule from './modules/TextAreaModule';

type HandleExerciseProps = {
    item: collectionRow[]
}

const HandleExercise = ({ item }: HandleExerciseProps) => {
    return (
        <>
            {item?.map((type) => {
                const uniqueKey = type.id; // Use any unique identifier from the 'type' object

                if (type.module_type === 'text') {
                    return (
                        <th key={uniqueKey} className='w-52'>
                            <TextModule collection={type} />
                        </th>
                    );
                } else if (type.module_type === 'input') {
                    return (
                        <th key={uniqueKey} className='w-52'>
                            <InputModule collection={type} />
                        </th>
                    );
                } else if (type.module_type === 'selectbox') {
                    return (
                        <th key={uniqueKey} className='w-52'>
                            <SelectBoxModule collection={type} />
                        </th>
                    );
                } else if (type.module_type === 'textarea') {
                    return (
                        <th key={uniqueKey} className='w-52'>
                            <TextAreaModule collection={type} />
                        </th>
                    );
                } else {
                    return (
                        <th key={uniqueKey} className='w-52'>
                            מודול לא תקין
                        </th>
                    );
                }
            })}
        </>
    );
};

export default HandleExercise;
