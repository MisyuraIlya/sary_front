import React from 'react';
import SignInForm from '../components/SignInForm';
import AuthLayout from '../layout/AuthLayout';
import SignFormStudent from '../components/SignFormStudent';
import Meta from '@/ui/Meta';
import Image from 'next/image';
import Heading from '@/ui/heading/Heading';
import Description from '@/ui/heading/Description';
import { useAuthRedirect } from '../useAuthRedirect';
const SingInStudent = () => {
    useAuthRedirect()
    return (
        <Meta title='התחברות'>
            <AuthLayout>
            <div className='h-full flex items-center ml-40 mr-40'>
                    <div>
                        <Image src={'/images/frame.svg'} width={43} height={40} alt='frame' priority className='absolute top-20'/>
                        <Heading className='font-bold text-5xl mb-10'>הי, ברוכים הבאים</Heading>
                        <Description className='mb-10'>אתה יכול להיכנס למערכת באמצעות דואר אלקטרוני וסיסמה, מקושר בחשבון או באמצעות כניסה יחידה לחשבון הארגון שלך</Description>
                        <SignInForm/>
                    </div>
                </div>
            </AuthLayout>
        </Meta>

    );
};

export default SingInStudent;