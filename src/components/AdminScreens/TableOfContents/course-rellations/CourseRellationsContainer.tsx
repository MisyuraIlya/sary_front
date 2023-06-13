import React, {FC, useEffect, useState} from 'react';
import RellationContainer from '../components/RellationContainer/RellationContainer';
import { ICourse } from '@/types/course.interface';
import { useQuery } from '@tanstack/react-query';
import { CourseService } from '@/services/courses/courses';
import { useCourse } from '@/providers/course/CourseProvider';
import { ThreeDots } from 'react-loader-spinner';
interface CourseRellationsContainerProps {

}
const CourseRellationsContainer: FC<CourseRellationsContainerProps> = () => {
    const {CourseMethods,lvl1,lvl2,lvl3,lvl4,choosedLvl1,choosedLvl2,choosedLvl3,choosedLvl4, isLoadingLvl1, loadingLvl2, loadingLvl3,loadingLvl4} = useCourse()
    return (
        <>
        {isLoadingLvl1 ||loadingLvl2 || loadingLvl3 || loadingLvl4 ?
            <div className='myCenter'>
                <ThreeDots 
                height="80" 
                width="80" 
                radius="9"
                color="#31B0F2" 
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
                />
            </div>
        :
            <div className='grid grid-cols-4 gap-4 px-12 '>
                {lvl1?.children &&
                    <RellationContainer 
                    title='פרקים' 
                    data={lvl1?.children} 
                    level={2} 
                    parentId={choosedLvl1!} 
                    isExercise={false}
                    />        
                }
                {lvl2?.children &&
                    <RellationContainer 
                    title='יחידות' 
                    data={lvl2.children} 
                    level={3} 
                    parentId={choosedLvl2!} 
                    isExercise={false}
                    />        
                }

                {lvl3?.children &&
                    <RellationContainer 
                    title='נושאים' 
                    data={lvl3.children} 
                    level={4} 
                    parentId={choosedLvl3!} 
                    isExercise={false}
                    />        
                }

                {lvl4?.children &&
                    <RellationContainer 
                    title='תרגילים' 
                    data={lvl4.children} 
                    level={5} 
                    parentId={choosedLvl4!} 
                    isExercise={true}
                    />        
                }
        </div>
        }


            

        </>
  
    );
};

export default CourseRellationsContainer;