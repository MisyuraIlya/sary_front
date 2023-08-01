import React from 'react';
import Meta from '@/ui/Meta';
import AuthLayout from '../layout/AuthLayout';
import Heading from '@/ui/heading/Heading';
import Description from '@/ui/heading/Description';
import UpdatePasswordForm from '../components/UpdatePasswordForm';
const UpdatePassword = () => {
    return (
        <Meta title='עדכון סיסמה'>
            <AuthLayout>
                <div className='h-full flex items-center ml-40 mr-40'>
                    <div>
                        <Heading>עדכון סיסמה?</Heading>
                        <Description>אנא הזן סיסמה חזקה שתזכור. אבל גם אם לא - אתה תמיד יכול לאפס אותו שוב</Description>
                        <UpdatePasswordForm/>
                    </div>
                </div>
            </AuthLayout>
        </Meta>
    );
};

export default UpdatePassword;