import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import LoginInput from './LoginInput/LoginInput';

interface IUpdatePasswordForm {
    password: string
}

const UpdatePasswordForm = () => {

    const {register: register, handleSubmit, formState: {errors}, reset} = useForm<IUpdatePasswordForm>({
    })

    const onSubmit :SubmitHandler<IUpdatePasswordForm> = (data) => {
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='mt-10'>
            <LoginInput 
            heading='סיסמה' 
            placeholder='הכנס את הסיסמה שלך'
            {...register('password', {
                required: 'סיסמה שדה חובה',
                minLength: {
                    value:6,
                    message:'מינימום 6 תווים'
                }
            })}
            error={errors.password?.message}
            />
            <button type='submit' className='font-bold mt-10 text-center bg-button_primary w-full rounded-3xl py-2 text-white'>עדכון סיסמה</button>
        </form>
    );
};

export default UpdatePasswordForm;