import { ICourse } from '@/types/course.interface';
import React from 'react';
import ForthCard from './ForthCard';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
type ThirdCardProps = {
    course: ICourse
}

const ThirdCard = ({course}: ThirdCardProps) => {
    const {chooseForthCourse} = useActions()
    const router = useRouter()
    const {first, second, third, fourth, fifth} = router.query;

    const handleChoose = () => {
        chooseForthCourse(course)
        router.push(`/client/${first}/${second}/${third}/${course.id}`)
    }
    return (
        <div>
            <div className='bg-cardPrimary text-white px-4 py-2 rounded-sm mt-5 mb-5' onClick={() => handleChoose()}>
                {course.name}
            </div>
            <div>
                {course?.children?.map((course,index) => 
                    <div key={index}>
                        <ForthCard course={course} />
                    </div>    
                )}
            </div>
        </div>
    );
};

export default ThirdCard;