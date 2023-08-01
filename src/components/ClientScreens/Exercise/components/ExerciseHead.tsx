import { useExercises } from '@/hooks/useExercises';
import Image from 'next/image';
import React from 'react';

const ExerciseHead = () => {
    const {exercise} = useExercises()
    return (
        <div className='bg-white activeShadow'>
            <div className='grid grid-cols-3 mr-12 ml-12  mb-10  py-5 '>
                <div>
                    <h1 className='font-bold'>{exercise?.title}</h1>
                    <div className='flex gap-5 mt-2'>
                        <button className='bg-primary w-32 px-2 py-1 rounded-sm text-white font-bold'>הוראות תרגיל</button>
                        <button className='bg-primary w-32 px-2 py-1 rounded-sm text-white font-bold'>הדרכה</button>
                    </div>
                </div>
                <div>
                    <div className='flex gap-12'>
                        <div className='bg-sideBarCourseCardBgSecond rounded-md flex justify-center item-center activeShadow' style={{width:'141px'}}>
                            <div className='mr-4 ml-4 flex justify-center text-center'>
                                <div>
                                    <Image src={'/images/video.svg'} alt='video' width={80} height={40} className='m-auto' />
                                    <div>
                                        <p>לצפות וללמוד</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg-sideBarCourseCardBgSecond rounded-md flex justify-center item-center activeShadow' style={{width:'141px'}}>
                            <div className='mr-4 ml-4 flex justify-center text-center'>
                                <div>
                                    <Image src={'/images/book.svg'} alt='video' width={80} height={40} className='m-auto mt-4' />
                                    <div >
                                        <p>הסבר</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>מבדק</h1>
                    <p>תאריך הגשה 13.3.2023</p>
                    <p>שעית הגשה: 14:00</p>
                </div>
            </div>
        </div>

    );
};

export default ExerciseHead;