import React from 'react';
import Meta from '@/ui/Meta';
import AuthLayout from '../layout/AuthLayout';
import Heading from '@/ui/heading/Heading';
import Description from '@/ui/heading/Description';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
const ForgotPassword = () => {
    return (
        <Meta title='שחכתי סיסמה'>
            <AuthLayout>
                <div className='h-full flex items-center ml-40 mr-40'>
                    <div>
                        <Heading>שחכת סיסמה?</Heading>
                        <Description>אל תדאג, נחזיר את זה בעוד רגע. ראשית עלינו לאמת אותך באמצעות דואר אלקטרוני</Description>
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </AuthLayout>
        </Meta>
    );
};

export default ForgotPassword;