import React, {FC, useEffect, useState} from 'react';
import Exercise from '@/components/ClientScreens/Exercise/Exercise';
import FieldModule from '../../components/models/FieldModule';
import InputModule from '../../components/models/InputModule';
import SelectModule from '../../components/models/SelectModule';
import { collectionRow, collectionsRows } from '@/types/ModulesTypes.ts/FirstModule.interface';
import TextAreaModule from '../../components/models/TextAreaModule';
import SideBars from '@/components/SideBars/SideBars';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { ExercisesService } from '@/services/exercises/Exercises';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import Heading from '@/ui/heading/Heading';
import SideLinks from '../../components/sidebar-components/SideLinks';
interface FirstModule {
    exercises: collectionsRows;
    register: any;
    orden: number
    setValue:any
    control:any
}
const FirstModule:FC <FirstModule> = ({exercises, register, orden,setValue , control}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const {isOnlineXml} = useExercise()

    useEffect(() => {
        setValue(`collectionsRows[${orden}].orden`, orden);
        setValue(`collectionsRows[${orden}].youtube_link`, exercises?.youtube_link);
        setValue(`collectionsRows[${orden}].pdf`, exercises?.pdf);
      }, [orden, setValue,exercises?.pdf,exercises?.youtube_link]);


      const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
      const handleSidebarClose = () => {
        setIsSidebarOpen(false);
      };
      console.log('exercises',exercises)

    return (
        <>
            <th className='bg-primary text-white align-text-top'>
                {orden}
            </th>
            {
                exercises.collectionRow.map((item,index) => {
                    if(item.module_type == 'text') return <FieldModule key={index} value={item.collectionValues[0].value}  register={register} col={orden} row={item.orden} setValue={setValue} />
                    if(item.module_type == 'input') return <InputModule key={index} id={item.id} answer={item.collectionAnswers.length > 0 ? item.collectionAnswers[0].value : ""  } placeholder={item.placeholder || ''}  register={register} col={orden} row={item.orden} setValue={setValue} isFullText={item.isFullText} />
                    if(item.module_type == 'selectbox') return <SelectModule key={index} placeholder={item.placeholder || ''} options={item.collectionValues} answer={item.collectionAnswers.length > 0 ? item.collectionAnswers[0].value : ""} register={register}   col={orden} row={item.orden} setValue={setValue} control={control} />
                    if(item.module_type == 'textarea') return <TextAreaModule key={index} value={item.collectionValues[0].value}  register={register} col={orden} row={item.orden} setValue={setValue}/>
                })
            }
            <th className='bg-white relative pl-4'>
                <div className='pb-4'>
                    <div className={` rounded-lg cursor-pointer `} onClick={() => handleSidebarToggle()} >


                        <Image src={`${exercises?.youtube_link && exercises?.pdf ? '/images/settings_primary.svg' : '/images/settings_clear.svg'}`} alt='settings' width={25} height={25}/>
                    </div> 
                    <div className='absolute right-0'>
                        {exercises?.youtube_link && exercises?.pdf && <Image src={`/images/v.svg`} width={15} height={15} alt='v' />}
                    </div>
                </div>
            </th>


            <SideBars anchor="left" isOpen={isSidebarOpen} onClose={handleSidebarClose}>
                <div style={{width:'700px'}} className='myCenter'>
                    <div className='m-10 w-full'>
                        <div className='text-center'>
                            <Heading>שורה מספר: {exercises?.orden} </Heading>
                        </div>
                        <SideLinks exercises={exercises} register={register} setValue={setValue} tableType={'exercises_rows'} orden={orden}/>
                    </div>
                </div>
            </SideBars>
        </>
    );
};

export default FirstModule;