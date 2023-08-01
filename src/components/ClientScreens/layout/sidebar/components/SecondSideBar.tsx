import { useCourses } from '@/hooks/useCourses';
import React from 'react';
import SecondCourseCard from './SecondCourseCard';
import { useActions } from '@/hooks/useActions';
import ThirdCard from './ThirdCard';

const SecondSideBar = () => {

    const {selectedSecondCourse, selectedThirdCourse} = useCourses()
    const {closeChooseSecondCourse, closeChooseThirdCourse} = useActions()
    const slideLeft = selectedSecondCourse ? 'translateX(-312px)' : 'translateX(0)';
    return (
        <div 
            className='bg-white activeShadow fixed h-screen'             
            style={{
                zIndex: 100,
                width: '312px',
                transform: slideLeft,
                transition: 'transform 0.3s ease',
                height: `calc(100vh - 150px)`,
                top: '150px',
            }}
        >
            <div className='mr-6 ml-6'>
                <div className='flex justify-between'>
                    <div onClick={() => closeChooseSecondCourse()} className='mt-10 mb-10 cursor-pointer'>X</div>
                    {selectedThirdCourse?.id &&
                        <div onClick={() => closeChooseThirdCourse()}  className='mt-10 mb-10 cursor-pointer'>{"חזרה >"}</div>                
                    }
                </div>

                
                { !selectedThirdCourse?.id && selectedSecondCourse?.children?.map((course,index) => 
                    <div key={index}>
                        <SecondCourseCard course={course} />
                    </div>    
                )}

                {selectedThirdCourse?.id && <ThirdCard course={selectedThirdCourse} />}
            </div>
        </div>
    );
};

export default SecondSideBar;