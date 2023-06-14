import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { CollectionsCol } from '@/types/exercise.interface';
import React, {FC, useEffect} from 'react';

type ColsCardProps = {
    item:CollectionsCol
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
            placeholder={'כותרת'} 
            className='w-36 rounded-md  text-white bg-primary text-center' 
            {...register(`collectionsCols[${item.orden}].title`, {value: item.title})}/>
        </div>
    );
};

export default ColsCard;