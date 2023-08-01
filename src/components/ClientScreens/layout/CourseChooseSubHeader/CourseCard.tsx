import React, {FC} from 'react';
import { ICourse } from '@/types/course.interface';

type CourseCardType = {
    course: ICourse;
}
const CourseCard: FC<CourseCardType> = ({course}) => {
    return (
        <div className='flex'>
            {course.name}
            {course?.children?.map((item,index) => 
                <div key={index}>
                    <CourseCard course={item} />
                </div>    
            )}
        </div>
    );
};

export default CourseCard;