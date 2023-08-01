import { ICourse } from '@/types/course.interface';
import React from 'react';
import FifthCard from './FifthCard';
import { useActions } from '@/hooks/useActions';
import { useCourses } from '@/hooks/useCourses';
import { useRouter } from 'next/router';
type ForthCardProps = {
    course: ICourse
}
const ForthCard = ({course}:ForthCardProps ) => {
    const {selectedForthCourse, selectedFifthCourse} = useCourses()
    const {chooseFifthCourse} = useActions()

    const isExist = selectedFifthCourse?.id === course.id

    const router = useRouter()
    const {first, second, third, fourth, fifth} = router.query;

    const handleChoose = () => {
        chooseFifthCourse(course)
        router.push(`/client/${first}/${second}/${third}/${course.id}`)
    }
    return (
        <div className='mt-5 mb-5'>
            <div className={`px-4 py-2 cursor-pointer ${isExist ? 'bg-primary text-white' : 'bg-sideBarCourseCardBgSecond' }`}  onClick={() => handleChoose()}>
                {course.name} V a
            </div>

            <div>
                {isExist&& course?.children?.map((item,index) =>
                    <div className='' key={index}>
                        <FifthCard course={item}/>
                    </div>    
                )}
            </div>
            
        </div>
    );
};

export default ForthCard;