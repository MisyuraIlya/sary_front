import { ICourse } from '@/types/course.interface';
import React, {useState} from 'react';
import Image from 'next/image';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
type SecondCourseCardProps = {
    course: ICourse
}
const SecondCourseCard = ({course} : SecondCourseCardProps) => {

    const [isHovered, setIsHovered] = useState(false);
    const {chooseThirdCourse} = useActions()
    const router = useRouter()
    const {first, second, third, fourth, fifth} = router.query;
    const handleHover = () => {
        setIsHovered(!isHovered);
      };

    const handleChoose = () => {
        chooseThirdCourse(course)
        router.push(`/client/${first}/${second}/${course.id}`)
    }

    return (
        <div 
            className='bg-sideBarCourseCardBg text-primary hover:bg-primary hover:text-white rounded-sm py-2 cursor-pointer mb-5 mt-5'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={() => handleChoose()}
        >
            <div className='flex justify-between px-4'>
                <div>
                    {course.name}
                </div>
                <div>
                        <Image
                            src={isHovered ? '/images/arrowLeftCardHover.svg' : '/images/arrowLeftCard.svg'}
                            alt="arrow"
                            width={8}
                            height={8}
                        />
                </div>
            </div>
        </div>
    );
};

export default SecondCourseCard;