import React from 'react';
import { Tooltip, Typography } from "@material-tailwind/react";
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';


type Props = {
    placeholder: string
    answers: Collection[]
}

const ToolTip = ({placeholder, answers}: Props) => {
    return (
        <div>
             <div className='absolute right-[-10px] top-1/3'>
                <Tooltip
                    placement="bottom"
                    className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                    content={
                        <div className="w-30">
                        {placeholder &&
                            <Typography color="black" className="font-medium">
                                פלייסחולדר: {placeholder}
                            </Typography>
                        }
    

                        {answers?.length > 1 && answers?.map((item, index) => 
                        <Typography color="black" className="font-medium">
                            תשובה {index + 1}: {item.value}
                        </Typography>
                        )}
                        </div>
                    }
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-5 w-5 cursor-pointer text-blue-gray-500"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                    </svg>
                </Tooltip>
            </div>
        </div>
    );
};

export default ToolTip;