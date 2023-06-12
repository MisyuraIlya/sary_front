import React from 'react';
import SubHeading from '@/ui/heading/SubHeading';
import AuthInput from './AuthInput/AuthInput';
import { useForm, SubmitHandler } from 'react-hook-form'
import { validEmail } from '../valid-email';
import { IEmailPassword } from '@/store/user/user.interface';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
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
        <div>
            <div className='content px-44 py-44'>
                <SubHeading className='font-bold text-xl'>התחברות באמצעות קוד משתמש וסיסמה</SubHeading>
                <div className='py-14'>
                    <div className='border border-auth_card_image_border py-12 px-8 rounded-xl'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <AuthInput  {...formRegister('email', {
                                required: 'מייל שדה חובה',
                                pattern: validEmail
                            })}
                            placeholder='שם משתמש'
                            error={errors.email?.message}/>
                            <AuthInput  {...formRegister('password', {
                                required: 'סיסמה שדה חובה',
                                minLength: {
                                    value:6,
                                    message:'מינימום 6 תווים'
                                }
                            })}
                            type='password'
                            placeholder='סיסמה'
                            error={errors.password?.message}
                            />
                            <p className='underline cursor-pointer'>שחכתי סיסמה</p>
                            <button className='bg-primary text-white w-full py-4 rounded-sm'>כניסה</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;