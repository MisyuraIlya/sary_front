import React from 'react';
import SubHeading from '@/ui/heading/SubHeading';
import MiniCard from '../components/MiniCard';
import { Links } from '../enum';
import AuthLayout from '../layout/AuthLayout';
import Meta from '@/ui/Meta';
const TeacherEnterType = () => {
    return (
        <Meta title='התחברות משרד החינוך'>
            <AuthLayout>
                <div className='content px-44 pt-44'>
                    <SubHeading className='font-bold text-xl'>איך תרצו להתחבר?</SubHeading>
                    <div className='grid grid-cols-5 gap-8'>
                        <MiniCard title='התחברות' imageLink='images/auth/signIn' link={Links.SIGN_IN_STUDENT}/>
                        <MiniCard title='רכישת מנוי' imageLink='images/auth/subscription' link={Links.ENTERING_PURCHASE}/>
                    </div>
                </div>
            </AuthLayout>
        </Meta>


    );
};

export default TeacherEnterType;