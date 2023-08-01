import { useCourses } from '@/hooks/useCourses';
import { ICourse } from '@/types/course.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type FifthCardProps = {
    course: ICourse
}

const FifthCard = ({course} : FifthCardProps) => {

    const {selectedFifthCourse} = useCourses()
    const router = useRouter()
    const {first, second, third, fourth, fifth} = router.query;

    return (
        <div className='bg-sideBarCourseCardBg px-4 py-2 mt-5 mb-5'>
            <Link href={`/client/${first}/${second}/${third}/${fourth}/${course.id}`} >
                {course?.name}            
            </Link>
        </div>
    );
};

export default FifthCard;