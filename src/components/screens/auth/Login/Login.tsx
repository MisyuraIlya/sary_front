import Meta from '@/ui/Meta';
import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import LoginForm from '../components/LoginForm';
import Heading from '@/ui/heading/Heading';
import Description from '@/ui/heading/Description';
import Image from 'next/image';
const Login = () => {
    return (
        <Meta title='כניסה למערכת'>
            <AuthLayout>
                <div className='h-full flex items-center ml-40 mr-40'>
                    <div>
                        <Image src={'/images/frame.svg'} width={43} height={40} alt='frame' priority className='absolute top-20'/>
                        <Heading className='font-bold text-5xl mb-10'>הי, ברוכים הבאים</Heading>
                        <Description className='mb-10'>אתה יכול להיכנס למערכת באמצעות דואר אלקטרוני וסיסמה, מקושר בחשבון או באמצעות כניסה יחידה לחשבון הארגון שלך</Description>
                        <LoginForm/>
                    </div>
                </div>
            </AuthLayout>
        </Meta>
    );
};

export default Login;