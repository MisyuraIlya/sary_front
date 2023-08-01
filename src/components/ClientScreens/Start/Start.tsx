import React, { useEffect } from 'react';
import ClientLayout from '../layout/ClientLayout';
import SubHeading from '@/ui/heading/SubHeading';
import { useQuery } from '@tanstack/react-query';
import { CourseService } from '@/services/courses/courses';
import { useAuth } from '@/hooks/useAuth';
import CourseCard from './components/CourseCard';
import { useCourses } from '@/hooks/useCourses';
import { useActions } from '@/hooks/useActions';
import { IUser } from '@/types/user.interface';
const Start = () => {
    const {courses} = useCourses()
    const {user} = useAuth()
    const {getCoursesPerStudent} = useActions()

    useEffect(() => {
        if(user) {
            getCoursesPerStudent(user as unknown as IUser)
        }
    },[user,getCoursesPerStudent])
    return (
        <ClientLayout>
            <div className='flex justify-center text-center '>
                <div className='w-full mt-12'>
                    <div className='mb-12'>
                        <SubHeading>צהריים טובים, {user?.firstName}</SubHeading>
                        <SubHeading>כי, שבאת, מכאן מתחילים</SubHeading>
                    </div>
                    <div className='flex items-center justify-center w-full'>
                        <div className='grid grid-cols-4 gap-6'>
                        {courses?.map((course, key) => 
                            <div key={key}>
                                <CourseCard course={course}/>
                            </div>    
                        )}
                        </div>
                    </div>

                </div>
            </div>

        </ClientLayout>
    );
};

export default Start;