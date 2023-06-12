import React, {FC, useEffect} from 'react';
import { Exercise } from '@/types/ModulesTypes.ts/FirstModule.interface';
import FieldModule from '../components/FieldModule';
import InputModule from '../components/InputModule';
import SelectModule from '../components/SelectModule';
import { CollectionsRow } from '@/types/exercise.interface';

interface FirstModule {
    exercises: CollectionsRow;
    register: any;
    orden: number
    setValue:any
    control:any
}
const FirstModule:FC <FirstModule> = ({exercises, register, orden,setValue , control}) => {
    useEffect(() => {
        setValue(`collectionsRows[${orden}].orden`, orden);
    },[])
    return (
        <>
            <th className='bg-primary text-white'>
                {orden}
            </th>
            {
                exercises.collectionRow.map((item,index) => {
                    if(item.module_type == 'text') return <FieldModule key={index} value={item.collectionValues[0].value}  register={register} col={orden} row={item.orden} setValue={setValue} />
                    if(item.module_type == 'input') return <InputModule key={index} answer={item.collectionAnswers.length > 0 ? item.collectionAnswers[0].value : ""  } placeholder={item.placeholder || ''}  register={register} col={orden} row={item.orden} setValue={setValue}/>
                    if(item.module_type == 'selectbox') return <SelectModule key={index} placeholder={item.placeholder || ''} options={item.collectionValues} answer={item.collectionAnswers.length > 0 ? item.collectionAnswers[0].value : ""} register={register}   col={orden} row={item.orden} setValue={setValue} control={control} />
                })
            }
            <th className='bg-white'>
                <div className='flex gap-6 items-center justify-center pt-4'>
                    <div className='border rounded-lg w-16 text-sm text-center leading-none py-1 cursor-pointer'>
                        <p>
                            העלאת קובץ הסבר
                        </p>
                    </div>
                    <div className='border rounded-lg w-16 text-sm text-center leading-none py-1 cursor-pointer'>
                        <p>
                            העלאת קובץ וידיאו
                        </p>
                    </div>
                </div>
            </th>
        </>
    );
};

export default FirstModule;