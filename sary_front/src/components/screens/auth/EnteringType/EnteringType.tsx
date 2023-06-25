import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import AuthChooseLvl2 from '../components/AuthChooseLvl2';
import Meta from '@/ui/Meta';

const EnteringType = () => {
    return (
        <Meta title='כניסה משרד החינוך'>
            <AuthLayout>
                <div className='px-44 pt-44'>
                    <AuthChooseLvl2/>
                </div>
            </AuthLayout>
        </Meta>

    );
};

export default EnteringType;