import { ICourse } from '@/types/course.interface';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form";
import { useCourse } from '@/providers/course/CourseProvider';
import { onAsk } from '@/utils/sweetAlert';
import { useRouter } from 'next/router';
type Inputs = {
    name: string,
  };

interface RellationCardProps {
    item: ICourse;
    choosedLVl: (id: number) => void;
    isExercise: boolean
}
const RellationCard: FC<RellationCardProps> = ({item,choosedLVl,isExercise}) => {
    const router = useRouter();
    const [editMode, setEditMode] = useState(false)
    const {CourseMethods} = useCourse()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => CourseMethods.updateFunction(item.id,data.name,item.grade,item.level,item.published,item.orden)
    const handleRemove = async () => {
        const res =  await onAsk('את בטוחה שאת רוצה למחוק?','אם תלחצי כן לא תוכלי לשחזר את הקובץ והוא ימחק באופן סופי')
        if(res) {CourseMethods.removeFunction(item.id,item.level)}
    }
    return (
        <div className='border-t border-gray '>
            <div className='flex py-2 m-auto px-4'>
                <div className='w-full flex items-center cursor-pointer' onClick={() => choosedLVl(item.id)}>
                    <p>{item.name}</p>
                </div>
                <div className='flex gap-2 '>
                    {
                        isExercise &&
                        <div className=' border border-black rounded-full flex justify-center w-12 h-12'>
                            <Image src={'images/eye.svg'} width={30} height={30} priority alt='trash' className=' cursor-pointer rounded-lg p-1' onClick={() => router.push(`/admin/createModule/${item.id}`)}/>
                        </div>
                    }      
                    <div className='border border-black rounded-full flex justify-center w-12 h-12'> 
                        <Image src={'images/draw.svg'} width={25} height={2} priority alt='draw' className=' cursor-pointer rounded-lg p-1' onClick={() => setEditMode(!editMode)}/>
                    </div>  
                    <div className='border border-black rounded-full flex justify-center w-12 h-12'>
                        <Image src={'images/trash.svg'} width={25} height={25} priority alt='trash' className=' cursor-pointer rounded-lg p-1'onClick={() => handleRemove()}/>
                    </div>    
                </div>    
            </div>  
            {editMode &&
            <form className='flex pt-4 m-auto px-4 py-4'>
                <div className='w-full flex items-center'>
                    <input {...register("name")} type='text' placeholder='עריכה' className='border border-gray p-2 rounded-md'/>
                </div>
                <div className='flex gap-2 justify-end'>
                    <div className=' rounded-full flex justify-center w-12 h-12' style={{backgroundColor:'#31B0F2'}} > 
                        <Image src={'images/vWhite.svg'} width={25} height={25} priority alt='draw' className=' cursor-pointer rounded-lg p-1' onClick={handleSubmit(onSubmit)}/>
                    </div>  
                    <div className=' rounded-full flex justify-center w-12 h-12' style={{backgroundColor:'rgba(49, 176, 242, 0.3)'}}>
                        <Image src={'images/xBlue.svg'} width={25} height={25} priority alt='trash' className=' cursor-pointer rounded-lg p-1' onClick={() => setEditMode(false)}/>
                    </div>
 
                </div>  
            </form>  
            } 
        </div>
    );
};

export default RellationCard;