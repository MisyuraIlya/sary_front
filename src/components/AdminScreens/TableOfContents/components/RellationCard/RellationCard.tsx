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
    isExercise: boolean
    level: number
}
const RellationCard: FC<RellationCardProps> = ({item,isExercise,level}) => {
    const router = useRouter();
    const [editMode, setEditMode] = useState(false)
    const {CourseMethods, choosedLvl1, choosedLvl2 , choosedLvl3 ,choosedLvl4} = useCourse()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        CourseMethods.updateFunction(item.id,data.name,item.grade,item.level,item.published,item.orden)
        setEditMode(false)
    }
    const handleRemove = async () => {
        const res =  await onAsk('את בטוחה שאת רוצה למחוק?','אם תלחצי כן לא תוכלי לשחזר את הקובץ והוא ימחק באופן סופי')
        if(res) {CourseMethods.removeFunction(item.id,item.level)}
    }
    const {query} = router

    const handleChoose = (id: number) => {
        // choosedLVl(item.id)
        if(query.first && level === 2){
            router.push(`/admin/tableOfContents/${query.first}/${id}`)
        } else if ((query.first && query.second) && level === 3) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${id}`)
        } else if ((query.first && query.second && query.third) && level === 4) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${query.third}/${id}`)
        } else if ((query.first && !query.second && query.third && query.fourth) && level === 5) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${query.third}/${query.fourth}/${id}`)
        } else if ((query.first && !query.second && query.third && query.fourth &&  query.fifth)) {
            router.push(`/admin/tableOfContents/${query.first}/${query.second}/${query.third}/${query.fourth}/${query.fifth}`)
        } 
    }

    const checkOnActive = () => {
        if(level === 2 ) {
            if(choosedLvl2 == item.id) {
                console.log('2')
                return true
            } 
        } else if (level === 3) {
            if(choosedLvl3 == item.id) {
                return true
            }
        } else if (level === 4) {
            if(choosedLvl4 == item.id) {
                return true
            }
        } else if (level == 5) {

        } else {
            return false
        }
    }
    return (
        <div className={`border-t border-gray cardHover ${checkOnActive() ? 'clickedCard' : ''}`}>
            <div className='flex py-2 m-auto px-4 '>
                <div className='w-full flex items-center cursor-pointer' onClick={() => handleChoose(item.id)} >
                    <p>{item.name}</p>
                </div>
                <div className='flex gap-2 '>
                    {
                        isExercise &&
                        <div className=' border border-black rounded-full flex justify-center w-12 h-12'>
                            <Image src={'/images/eye.svg'} width={30} height={30} priority alt='trash' className=' cursor-pointer rounded-lg p-1' onClick={() => router.push(`/admin/createModule/${item.id}`)}/>
                        </div>
                    }      
                    <div className='border border-black rounded-full flex justify-center w-12 h-12'> 
                        <Image src={'/images/draw.svg'} width={25} height={2} priority alt='draw' className=' cursor-pointer rounded-lg p-1' onClick={() => setEditMode(!editMode)}/>
                    </div>  
                    <div className='border border-black rounded-full flex justify-center w-12 h-12'>
                        <Image src={'/images/trash.svg'} width={25} height={25} priority alt='trash' className=' cursor-pointer rounded-lg p-1'onClick={() => handleRemove()}/>
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
                        <Image src={'/images/vWhite.svg'} width={25} height={25} priority alt='draw' className=' cursor-pointer rounded-lg p-1' onClick={handleSubmit(onSubmit)}/>
                    </div>  
                    <div className=' rounded-full flex justify-center w-12 h-12' style={{backgroundColor:'rgba(49, 176, 242, 0.3)'}}>
                        <Image src={'/images/xBlue.svg'} width={25} height={25} priority alt='trash' className=' cursor-pointer rounded-lg p-1' onClick={() => setEditMode(false)}/>
                    </div>
 
                </div>  
            </form>  
            } 
        </div>
    );
};

export default RellationCard;