import React, { useState, FC } from 'react';
import Image from 'next/image';

type BoldChangerProps = {
    html: string
    handleUpdateHtml: (value: string) => void 
}

const BoldChanger:FC<BoldChangerProps> = ({html, handleUpdateHtml}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    const handleClick = () => {
        setError('')
        const regex = new RegExp(value, 'g');
        if (html.match(regex)) {
          const updatedHtml = html.replace(regex, `<b>${value}</b>`);
          handleUpdateHtml(updatedHtml)
          setValue('')
          setIsOpen(false)
        } else {
          setError(`האות ${value} לא נמצא בטקסט`)
        }
    };

    return (
        <>
            <div className='absolute top-[-10px] z-50 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <Image src={`/images/settings_clear.svg`} alt='settings' width={27} height={27}/>
            </div>
            {isOpen &&
                <div className='absolute border w-56 h-40 border-gray bg-white rounded-sm '>
                    <div className='w-full items-center flex justify-center'>
                        <div>
                            <p className='text-center'>שינוי מילה לבולד</p>
                            <div className='items-center flex justify-center'>
                                <input value={value} onChange={(e) => setValue(e.target.value)} className='border border-primary rounded-sm w-48'/>
                            </div>
                            <div className='flex items-center justify-center mt-5'>
                                <button className='bg-primary text-white px-4 py-1 rounded-md' onClick={() => handleClick()}>עדכן</button>
                            </div> 
                            <div className='items-center flex justify-center text-center'>
                                {error && 
                                    <p className='text-red'>{error}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        
        </>

    );
};

export default BoldChanger;