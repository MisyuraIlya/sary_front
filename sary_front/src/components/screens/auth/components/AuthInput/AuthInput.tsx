import React, {forwardRef} from 'react';
import { AuthInputTypes } from './AuthInput.interface';
import cn from 'clsx'
const AuthInput = forwardRef<HTMLInputElement, AuthInputTypes>(
    ({placeholder, error, className, type='text', 
    style, ...rest} , ref) => {
        return (
            <div className={cn('mb-4',className)} style={style}>
                <label>
                    <input placeholder={placeholder} className={cn('border border-auth_card_image_border px-4 py-4 w-full outline-none transition-all placeholder:text-gray rounded-sm', 
                    {
                        'border-red': !!error
                        
                    })} ref={ref} type={type} {...rest} />
                </label>
                {error && <div className='text-red mt-1 text-sm'>{error}</div>}
            </div>
        );
    }
)

AuthInput.displayName = 'Input'
export default AuthInput;