import React from 'react';
import SubHeading from '@/ui/heading/SubHeading';
import AuthInput from './AuthInput/AuthInput';
import { useForm, SubmitHandler } from 'react-hook-form'
import { validEmail } from '../valid-email';
import { IEmailPassword } from '@/store/user/user.interface';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import LoginInput from './LoginInput/LoginInput';
import Link from 'next/link';
import { Links } from '../enum';
const SignInForm = () => {

    const {isLoading} = useAuth()

    const {login, register} = useActions()

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IEmailPassword>({
        mode: 'onChange'
        
    })

    const onSubmit :SubmitHandler<IEmailPassword> = (data) => {
        login(data)
        reset()
    }


    return (
        <div className='content '>
            <div className='py-12 px-8 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <LoginInput  
                    {...formRegister('email', {
                        required: 'מספר טלפון',
                        pattern: validEmail
                    })}
                    heading='מספר טלפון'
                    placeholder='שם משתמש'
                    error={errors.email?.message}/>
                    <LoginInput  {...formRegister('password', {
                        required: 'סיסמה שדה חובה',
                        minLength: {
                            value:6,
                            message:'מינימום 6 תווים'
                        }
                    })}
                    type='password'
                    heading='סיסמה'
                    placeholder='סיסמה'
                    error={errors.password?.message}
                    />
                    <div className='flex justify-between'>
                        <div>
                            <Link href={Links.FORGOT_PASSWORD} className='text-button_primary cursor-pointer'>שחכתי סיסמה</Link>
                        </div>
                        <div className='flex gap-2'>
                            <input type='checkbox' checked={true} className='w-5 rounded-2xl' />
                            <p>זכור אותי</p>
                        </div>
                    </div>
                    <button type='submit' className='font-bold mt-10 text-center bg-button_primary w-full rounded-3xl py-2 text-white'>כניסה</button>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;