import React, {FC, useState} from 'react';
import SubHeading from '../heading/SubHeading';
import Heading from '../heading/Heading';
import Image from 'next/image';
import Switch from "react-switch";
import Field from '../input/Field';
import { CourseService } from '@/services/courses/courses';
import { useCourse } from '@/providers/course/CourseProvider';
import { useForm, SubmitHandler } from "react-hook-form";
import { ICourse } from '@/types/course.interface';
import { onAsk } from '@/utils/sweetAlert';
import { useRouter } from 'next/router';
interface CourseCard {
    item: ICourse
    isNew: boolean
    handleCourse: () => void
}

type CourseForm = {
    name: string,
    grade: string
};

const CourseCard: FC <CourseCard> = ({item,isNew, handleCourse }) => {
    const [checked, setChecked] = useState(item.published)
    const [editMode, setEditMode] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<CourseForm>();
    const router = useRouter()
    const {CourseMethods, choosedLvl1} = useCourse();

    const onSubmit: SubmitHandler<CourseForm> = (data) => {
        CourseMethods.updateFunction(item.id,data.name, data.grade, 1,checked, item.orden)
        setEditMode(false)
    }
    const handleChange = () => {
        setChecked(!checked)
        CourseMethods.updateFunction(item.id,item.name, item.grade, 1,!checked, item.orden)
    }

    const handleRemoveCourse = async () => {
        const res =  await onAsk('את בטוחה שאת רוצה למחוק?','אם תלחצי כן לא תוכלי לשחזר את הקובץ והוא ימחק באופן סופי')
        if(res) {CourseMethods.removeFunction(item.id, 1)}
    }

    return (
        <div className={`rounded-md relative ${editMode ? 'editMode' : ''} relative ${isNew ? 'bg-white' : 'bg-green/10'} myShadowCard cursor-pointer ${choosedLvl1 == item.id ? 'activeShadow' : ''}`} style={{height:'300px', width:'300px'}} onClick={() => router.push(`/admin/tableOfContents/${item.id}`)}>
            {editMode && <span className='absolute m-4 text-white' onClick={() => setEditMode(false)}>X</span>}
            <div className='text-center h-full flex justify-center items-center'>
                <div>
                    {
                        !isNew ?
                            <>
                                {editMode ? 
                                    <>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input {...register("grade")} type='text' placeholder='כיתה' className='px-2 rounded-md py-2 m-1 text-black'/>
                                            <input {...register("name")} type='text' placeholder='שם הקורס' className='px-2 rounded-md py-2 m-1 text-black' />
                                            <div>
                                                <button className='bg-primary text-white mt-2 px-4 py-2 rounded-lg' type='submit'>שמירה</button>
                                            </div>
                                        </form>
                                    </>
                                :
                                    <>
                                        <SubHeading>{item.grade}</SubHeading>
                                        <Heading className='text-xl'>{item.name}</Heading>
                                    </>
                                }

                            </>
                        :

                        <>
                            <div className='bg-gray p-8 rounded-full' onClick={() => handleCourse()}>
                                <Image src={'/images/+.svg'} width={19} height={15} alt='+'/>
                            </div>
                        </>

                    }

                </div>
            </div>
            {
                !isNew ?
                <div className={`bg-green/30 absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`}>
                    {/* {!openInput && */}
                    <div className='grid grid-cols-12 w-full mr-5 mt-2 mb-2'>
                        <div className={`col-span-8 flex gap-4`}>
                            <div className='bg-white rounded-full cursor-pointer flex justify-center p-4' onClick={() => setEditMode(!editMode)}>
                                <Image src={`/images/draw.svg`} width={15} height={15} alt='draw'/>
                            </div>
                            <div className='bg-white rounded-full  cursor-pointer flex justify-center p-4' onClick={() => handleRemoveCourse()}>
                                <Image src={'/images/trash.svg'} width={19} height={15} alt='draw'/>
                            </div>
                        </div>
                        <div className='col-span-4 items-center flex justify-center'>
                            <Switch onChange={handleChange} checked={checked} />
                        </div>
                    </div>
                    {/* }  */}

                    {/* {openInput &&
                    <div className='flex gap-4'>
                        <input type='text' placeholder='שם הקורס' className='px-2 rounded-sm'/>
                        <div className='bg-white rounded-full cursor-pointer flex justify-center p-4'  onClick={() => setOpenInput(false)}>
                            <Image src={`/images/v.svg`} width={15} height={15} alt='draw' />
                        </div>
                    </div> 
                    } */}
                </div>
                :
                <div className={`bg-gray absolute rounded-b-md bottom-0 w-full flex text-center items-center justify-center py-1 h-16`}>

                </div>    

            }

        </div>
    );
};






export default CourseCard;