import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import AuthChooseLvl1 from '../components/AuthChooseLvl1';
import Meta from '@/ui/Meta';

const Entering = () => {
    return (
        <Meta title='כניסת משתמשים'>
            <AuthLayout>
                <div className='px-44 pt-44'>
                    <AuthChooseLvl1/>
                </div>
            </AuthLayout>
        </Meta>

    );
};

export default Entering;