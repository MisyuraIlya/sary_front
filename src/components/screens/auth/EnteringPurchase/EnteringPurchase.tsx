import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import SubHeading from '@/ui/heading/SubHeading';
import MiniCard from '../components/MiniCard';
import { Links } from '../enum';
import Meta from '@/ui/Meta';
const EnteringPurchase = () => {
    return (
        <Meta title='התחברות מורה'>
            <AuthLayout>
                <div className='px-44 pt-44'>
                    <SubHeading className='font-bold text-xl'>איך תרצו להתחבר?</SubHeading>
                    <div className='grid grid-cols-5 gap-56'>
                        <MiniCard title='רכישת קורסים' imageLink='images/auth/purchase_course' link={'/'}/>
                        <MiniCard title='רכישת חוברות' imageLink='images/auth/purchase_book' link={'/'}/>
                    </div>
                </div>
            </AuthLayout>
        </Meta>

    );
};

export default EnteringPurchase;