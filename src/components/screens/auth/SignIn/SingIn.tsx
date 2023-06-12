import React from 'react';
import SignInForm from '../components/SignInForm';
import AuthLayout from '../layout/AuthLayout';
import SignFormStudent from '../components/SignFormStudent';
import Meta from '@/ui/Meta';
const SingInStudent = () => {
    return (
        <Meta title='התחברות'>
            <AuthLayout>
                <div style={{width:'60%'}} className='px-44 pt-44'>
                    {/* <SignInForm/> */}
                    <SignFormStudent/>
                </div>
                
            </AuthLayout>
        </Meta>

    );
};

export default SingInStudent;