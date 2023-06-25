import Heading from '@/ui/heading/Heading';
import Image from 'next/image';
import React, { FC, PropsWithChildren } from 'react';

const AuthLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 bg-primary h-screen px-12 py-12 relative'>
                <Image src={'/images/logo.svg'} width={100} height={85} alt='logo' priority />
                <Image src={'/images/logoTitle.svg'} width={246} height={36} alt='logo' className='pt-6' priority />

                <div className='pt-32'>
                    <Heading className='text-white m-0 p-0'>
                        לימוד עברית:
                    </Heading>
                    <Heading className='text-white m-0 p-0'>
                        הבנה, הבעה ולשון
                    </Heading>
                    <Heading className='text-white m-0 p-0'>
                        לחטיבה העליונה
                    </Heading>
                </div>

                <div className='absolute bottom-10'>
                    <Image src={'/images/auth/id.png'} width={141} height={95} alt='logo' className='pt-6' priority />

                </div>

            </div>
            <div className='col-span-8 bg-authBg h-full'>
                {children}
            </div>
            
        </div>
    );
};

export default AuthLayout;