import { useActions } from '@/hooks/useActions';
import { useCourses } from '@/hooks/useCourses';
import { ICourse } from '@/types/course.interface';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, {useState} from 'react';

type courseProps = {
    course: ICourse
}
const CourseCard = ({course}: courseProps) => {

    const [isHovered, setIsHovered] = useState(false);
    const {chooseSecondCourse,closeChooseThirdCourse, closeChooseForthCourse, closeChooseFifthCourse} = useActions()
    const { selectedFirstCourse, selectedSecondCourse } = useCourses()
    const router = useRouter()
    const {first, second, third, fourth, fifth} = router.query;

    const handleHover = () => {
      setIsHovered(!isHovered);
    };

    const handleCourseSelection = (selectedCourse: ICourse) => {
        chooseSecondCourse(selectedCourse);
        closeChooseThirdCourse()
        closeChooseForthCourse()
        closeChooseFifthCourse()
        router.push(`/client/${first}/${selectedCourse.id}`)
    };

    const checkIsExistCourse = selectedSecondCourse?.id === course.id  
    return (
        <div>
            <div className='rounded-md ' onClick={() => handleCourseSelection(course)}>
                <div
                    className={` hover:bg-primary rounded-md mb-5 mt-5 px-2 py-2 flex justify-between hover:text-white cursor-pointer
                        ${checkIsExistCourse ? 'bg-primary !important text-white !important' : 'bg-sideBarCourseCardBg'}
                    `}
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <div className=''>
                        {course?.name}
                    </div>
                    <div>
                        <Image
                            src={isHovered || checkIsExistCourse? '/images/arrowLeftCardHover.svg' : '/images/arrowLeftCard.svg'}
                            alt="arrow"
                            width={8}
                            height={8}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CourseCard;