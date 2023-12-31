import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC, useEffect} from 'react';
import { collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
type ColsCardProps = {
    item:collectionsCols
    register: any
    setValue: any
    index:number
}
const ColsCard:FC<ColsCardProps> = ({item,register,setValue, index}) => {
    const {isOnlineXml} = useExercise()
    useEffect(() => {
        setValue(`collectionsCols[${item.orden}].orden`, index); 
      }, [item.orden, index, setValue]);
    return (
        <div className='p-1'>
            <input 
            disabled
            // disabled={isOnlineXml ? true : false}
            className='w-36 rounded-md  text-white bg-primary text-center' 
            {...register(`collectionsCols[${item.orden}].title`, {value: item.title})}/>
        </div>
    );
};

export default ColsCard;