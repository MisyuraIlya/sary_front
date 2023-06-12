import CourseCard from '@/ui/CourseCard/CourseCard';
import Description from '@/ui/heading/Description';
import Heading from '@/ui/heading/Heading';
import SubHeading from '@/ui/heading/SubHeading';
import React, { useState } from 'react';
import CourseRellationsContainer from './course-rellations/CourseRellationsContainer';
import Image from 'next/image';
import { useForm, SubmitHandler } from "react-hook-form";
import Meta from '@/ui/Meta';
import { useCourse } from '@/providers/course/CourseProvider';
import AdminLayout from '../layout/AdminLayout';
import { CourseService } from '@/services/courses/courses';
import { ICourse } from '@/types/course.interface';

type courseType = {
    name: string,
};

const TableOfContents = () => {

    const [addCourse, setAddCourse] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<courseType>();
    const {courses, CourseMethods, choosedLvl1, choosedCourse} = useCourse()
    const onSubmit = () => CourseMethods.createFunction('', 1, null)
    
    const handleChooseCourse = (item: ICourse) => {
        CourseMethods.setChoosedCourse(item.name)
        CourseMethods.setChoosedLvl1(item.id)
    }
    return (
        <Meta title='courses'>
            <AdminLayout>
                <div className='h-full' style={{backgroundColor:'#F0FBFF'}}>
                    <div className='mr-12 mb-10'>
                        <Heading className='pt-12 pb-4'>תוכן העניינים</Heading>
                            <div className='gap-8 flex overflow-x-auto w-full'>
                                <div>
                                <CourseCard
                                    item={{
                                        id: 0,
                                        color: '',
                                        level: 1,
                                        published: true,
                                        name: '',
                                        grade: '',
                                        orden: 0,
                                        image: '',
                                    }}
                                    isNew={true}
                                    handleCourse={onSubmit}
                                />
                                </div>
                                {courses?.map((item,index) =>
                                    <div onClick={() => handleChooseCourse(item)} className='flex-shrink-0 ' key={index}>
                                        <CourseCard  item={item} key={index} isNew={false} handleCourse={onSubmit}/>
                                    </div>    
                                )}
                            </div>
                    </div>
                    <div style={{minHeight:'50%'}} className='bg-white pb-12'>
                        {choosedCourse &&
                            <div className='px-12 py-6'>
                                <p>עריכת קורס: {choosedCourse} </p>
                            </div>
                        }

                        { choosedLvl1 &&
                            <CourseRellationsContainer/>
                        }
                    </div>
                </div>
            </AdminLayout>
        </Meta>

    );
};

export default TableOfContents;