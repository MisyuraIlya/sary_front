import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import SingInStudent from '../SignIn/SingIn';
import SignInForm from '../components/SignInForm';
import Meta from '@/ui/Meta';

const TeacherSignIn = () => {
    return (

        <Meta title='התחברות'>
            <AuthLayout>
                <SignInForm/>

                phone

            </AuthLayout>
        </Meta>

    );
};

export default TeacherSignIn;