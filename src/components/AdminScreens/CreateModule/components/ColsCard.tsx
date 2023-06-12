import { CollectionsCol } from '@/types/exercise.interface';
import React, {FC, useEffect} from 'react';

type ColsCardProps = {
    item:CollectionsCol
    register: any
    setValue: any
    index:number
}
const ColsCard:FC<ColsCardProps> = ({item,register,setValue, index}) => {
    useEffect(() => {
        setValue(`collectionsCols[${item.orden}].orden`, index); 
    },[])
    return (
        <div className='p-1'>
            <input value={item.title}  placeholder={'כותרת'} className='w-36 rounded-md px-2' {...register(`collectionsCols[${item.orden}].title`)}/>
        </div>
    );
};

export default ColsCard;