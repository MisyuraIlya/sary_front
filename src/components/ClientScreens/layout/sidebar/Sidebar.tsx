import { useCourses } from '@/hooks/useCourses';
import React from 'react';
import CourseCard from './components/CourseCard';
import { useActions } from '@/hooks/useActions';
import { ICourse } from '@/types/course.interface';
import Image from 'next/image';

const Sidebar = () => {
    const {selectedFirstCourse} = useCourses()
    console.log('selectedSecondCourse',selectedFirstCourse)
    return (
        <div className='fixed h-screen top-0 z-200 sideBg' style={{width:'312px',zIndex:10000000}}>
            <div className='text-center relative top-5'>
                <h1 className='text-white font-bold'>{selectedFirstCourse?.name}</h1>
            </div>
            <div className='mr-4 ml-4 top-44 relative'>
                <input type='text' placeholder='חיפוש' className='bg-white px-2 rounded-md py-1' style={{border:'1px solid #91A4B7'}}/>
                {selectedFirstCourse?.children?.map((course, index) => 
                    <div key={index}>
                        <CourseCard course={course} key={index}/>
                    </div>    
                )}
            </div>
            <div className='absolute bottom-0 w-full'>
                <div className='relative flex justify-between mr-5 ml-5 bottom-5' >
                    <Image src={'/images/id.png'} alt='id' width={120} height={90} className='rounded-sm' />
                    <div className='bg-white flex items-center justify-center rounded-sm' style={{width:'120px', height:'90px'}}>
                        <div>
                            <Image src={'/images/courseVideo.svg'} alt='nigash' width={50} height={50} className='m-auto' />
                            <div>
                                <p className='text-sm'>סרטוני הדרכה</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-primary w-full relative h-12 flex justify-end'>
                    <div className='mr-4 ml-4 flex items-center'>
                        <Image src={'/images/nigash.svg'} alt='nigash' width={30} height={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;