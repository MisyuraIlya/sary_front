import React, {ButtonHTMLAttributes, FC} from 'react';
import cn from 'clsx'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    
}

const Button: FC<ButtonProps> = ({children, className ,...rest}) => {

    return (
        <button 
        {...rest}
        className={cn('rounded-x1 font-medium px-10 py-2 shadow',className)}>
            {children}
        </button>
    );
};

export default Button;