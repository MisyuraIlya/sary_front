import React from 'react';
import SubHeading from '@/ui/heading/SubHeading';
import AuthInput from './AuthInput/AuthInput';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { validEmail } from '../valid-email';
import { IEmailPassword } from '@/store/user/user.interface';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import ReactSelect from 'react-select'
import { useAuthRedirect } from '../useAuthRedirect';
import { Oval } from 'react-loader-spinner';
const options = [
    {
    value:'russia',
    label:'russia'
    },
    {
      value:'USA',
      label:'USA'
    },
    {
      value:'ISRAEL',
      label:'ISRAEL'
    },
    
  ]

interface signFromStudent extends IEmailPassword {
    name: string
    year: string
}
const SignFormStudent = () => {
    useAuthRedirect()
    const {isLoading} = useAuth()

    const {login, register} = useActions()

    const {register: formRegister, handleSubmit, formState:{errors},reset,resetField, getValues, getFieldState,watch, setValue,control } = useForm<signFromStudent>({
        mode: 'onChange'
        
    })

    const getValue = (value:string) => value ? options.find((option) => option.value === value) : ''
    const onSubmit :SubmitHandler<signFromStudent> = (data) => {
        login(data)
        reset()
    }

    return (
        <div>
            <div>
                <SubHeading className='font-bold text-xl'>התחברות באמצעות קוד משתמש וסיסמה</SubHeading>
                <div className='py-14'>
                    <div className='border border-auth_card_image_border py-12 px-8 rounded-xl'>
                    {isLoading ? 
                    <div className='myCenter'>
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={isLoading}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}

                    />
                    </div>    

                    :
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
                            {/* <div className='grid grid-cols-2 gap-4'>
                                <Controller control={control} name='address.country' rules={{required:'שם בית הספר שדה חובה'}} render={
                                    ({field:{onChange,value},fieldState:{error}}) => (
                                    <>
                                    <ReactSelect
                                    placeholder={'Countries'}
                                    options={options}
                                    value={getValue(value)}
                                    onChange={(newValue) => onChange((newValue).value)}
                                    // isMulti={isMulti}
                                    // components={animatedComponents}
                                    // isLoading={isLoading}
                                    className='w-full'
                                    />
                                    {error && (
                                        <div style={{color:'red'}}>
                                            {error.message}
                                        </div>
                                    )}
                                        </>

                                        )
                                    }
                                />
                                <AuthInput  {...formRegister('year', {
                                        required: 'סיסמה שדה חובה',
                                        minLength: {
                                            value:4,
                                            message:'מינימום 4 תווים'
                                        }
                                    })}
                                    type='text'
                                    placeholder='השנה'
                                    error={errors.password?.message}
                                />
                            </div> */}
                            <p className='underline cursor-pointer'>שכחתי סיסמא</p>
                            <button className='bg-primary text-white w-full py-4 rounded-sm'>כניסה</button>
                        </form>        
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignFormStudent;