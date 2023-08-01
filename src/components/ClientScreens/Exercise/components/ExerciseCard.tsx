import { collectionRow } from '@/types/ModulesTypes.ts/FirstModule.interface';
import Image from 'next/image';
import React from 'react';
import HandleExercise from './HandleExercise';

type ExerciseCardProps = {
    item: collectionRow
}
const ExerciseCard = ({item} : ExerciseCardProps) => {
    return (
        <>
        <th>
            <div className='px-2 ' style={{background:'#BACEE9'}}>
                {item.orden}
            </div>
        </th>
        {/* <HandleExercise item={item.collectionRow} /> */}
        <th>
            <div className='flex gap-4'>
                <div>
                    <Image src={'/images/folder.svg'} alt='folder' width={40} height={40} />
                    <p>וידיאו</p>
                </div>
                <div>
                    <div className='circle rounded-full bg-primary flex items-center justify-center' style={{width:'40px', height:'40px'}}>
                        <Image src={'/images/quest.svg'} alt='folder' width={15} height={15} />
                    </div>
                    <p>הסבר</p>
                </div>

            </div>
        </th>
        </>

    );
};

export default ExerciseCard;