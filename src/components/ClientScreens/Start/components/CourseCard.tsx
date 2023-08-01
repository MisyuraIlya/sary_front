import { useActions } from '@/hooks/useActions';
import { ICourse } from '@/types/course.interface';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
type CourseCardProps = {
    course: ICourse
}
const CourseCard:FC<CourseCardProps> = ({course}) => {

    const {chooseFirstCourse} = useActions()
    return (
        <div className='myShadowCard w-64 relative rounded-lg cursor-pointer' style={{background:course.bgColor}} onClick={() => chooseFirstCourse(course)}>
            <div className=''>
                <div className='h-52 flex items-center justify-center'>
                    <div className='rounded-full w-40 h-40 absolute ' style={{background:course.color}}>

                    </div>
                    <div className='relative z-20 bg-black text-white px-2 py-1'>
                        <p>
                            {course.name}
                        </p>
                    </div>
                </div>
                <div className='text-white py-2 text-sm font-bold rounded-b-lg' style={{backgroundColor:course.color}}>
                    <p>
                        {'כניסה לקורס >> '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;