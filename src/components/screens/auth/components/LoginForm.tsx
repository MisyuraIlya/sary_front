import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import LoginInput from './LoginInput/LoginInput';

interface LoginForm {
    code: string;
    password: string;
    nameSchool: string;
    year: number;
    
}
const LoginForm = () => {

    const {register: register, handleSubmit, formState:{errors},reset,resetField, getValues, getFieldState,watch, setValue,control } = useForm<LoginForm>()


    const onSubmit :SubmitHandler<LoginForm> = (data) => {
    }   


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <LoginInput 
            heading='קוד משתמש' 
            placeholder='קוד משתמש'
            {...register('code', {
                required: 'קוד משתמש שדה חובה',
            })}
            error={errors.code?.message}
            />

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

            <div className='grid grid-cols-12 gap-12'>
                <div className='col-span-7'>
                    <LoginInput 
                    heading='שם בית הספר' 
                    placeholder='שם בית הספר'
                    {...register('nameSchool', {
                        required: 'שם בית ספר חובה',
                    })}
                    error={errors.nameSchool?.message}
                    />
                </div>
                <div className='col-span-5'>
                    <LoginInput 
                    heading='השנה' 
                    placeholder='השנה'
                    {...register('year', {
                        required: 'שנה שדה חובה',
                    })}
                    error={errors.year?.message}
                    />
                </div>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className='text-button_primary cursor-pointer'>שחכתי סיסמה</p>
                </div>


                <div className='flex gap-2'>
                    <input type='checkbox' checked={true} className='w-5 rounded-2xl' />
                    <p>זכור אותי</p>
                </div>
            </div>

            <button type='submit' className='font-bold mt-10 text-center bg-button_primary w-full rounded-3xl py-2 text-white'>כניסה</button>
        </form>
    );
};

export default LoginForm;