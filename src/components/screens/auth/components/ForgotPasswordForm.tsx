import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import LoginInput from './LoginInput/LoginInput';
import { validEmail } from '../valid-email';
interface IForgoPasswordForm {
    email: string
}
const ForgotPasswordForm = () => {

    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<IForgoPasswordForm>({
        mode: 'onChange'
    })

    const onSubmit :SubmitHandler<IForgoPasswordForm> = (data) => {
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
            <LoginInput  
            {...formRegister('email', {
                required: 'מייל שדה חובה',
                pattern: validEmail
            })}
            heading='דוא"ל'
            placeholder='מה הדוא"ל שלך'
            error={errors.email?.message}
            />
            <button type='submit' className='font-bold mt-10 text-center bg-button_primary w-full rounded-3xl py-2 text-white'>שיחזור סיסמה</button>
        </form>
    );
};

export default ForgotPasswordForm;