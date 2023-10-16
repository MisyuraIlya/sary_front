import Heading from '@/ui/heading/Heading';
import SubHeading from '@/ui/heading/SubHeading';
import Image from 'next/image';
import React, { FC, PropsWithChildren } from 'react';

const AuthLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-6 h-screen px-12 py-12 relative authBg'>
                <Image src={'/images/dots.svg'} width={470} height={45} alt='logo' priority  className='absolute top-0 right-0'/>
                <div className='flex gap-4'>
                <Image src={'/images/logo.svg'} width={100} height={85} alt='logo' priority />
                <Image src={'/images/logoTitle.svg'} width={206} height={36} alt='logo' className='pt-6' priority />
                </div>

                
                {/* <div className='pt-32'>
                    <Heading className='text-white m-0 p-0'>
                        לימוד עברית:
                    </Heading>
                    <Heading className='text-white m-0 p-0'>
                        הבנה, הבעה ולשון
                    </Heading>
                    <Heading className='text-white m-0 p-0'>
                        לחטיבה העליונה
                    </Heading>
                </div> */}
                <div className='float-left z-1 relative'>
                    <div className='w-full mt-24 flex items-center text-center justify-end'>
                        <Image src={'/images/ilustrate.png'} width={500} height={185} alt='logo' priority />
                    </div>
                    <div className='text-white'>
                        <Heading>לימודי עברית</Heading>
                        <SubHeading>הבנה, הבעה ולשון לחטיבה העליונה</SubHeading>
                    </div>
                </div>


                <div className='absolute bottom-10'>
                    <Image src={'/images/auth/id.png'} width={141} height={95} alt='logo' className='pt-6' priority />

                </div>
                <Image src={'/images/dots.svg'} width={300} height={45} alt='logo' priority  className='absolute bottom-0 left-0'/>
            </div>
            <div className='col-span-6 bg-white h-full'>
                {children}
            </div>
            
        </div>
    );
};

export default AuthLayout;