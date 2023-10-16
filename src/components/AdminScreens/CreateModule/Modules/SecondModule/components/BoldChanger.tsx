import React, { useState, FC } from 'react';
import Image from 'next/image';

type BoldChangerProps = {
    html: string
    handleUpdateHtml: (value: string) => void 
}

const BoldChanger:FC<BoldChangerProps> = ({html, handleUpdateHtml}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [value, setValue] = useState('')
    const [previousValue, setPreviousValue] = useState('')
    const [error, setError] = useState('')
    const [number, setNumber] = useState('')

    const handleClick = () => {
        setError('')
        setPreviousValue(html)

        if(number) {
            const words = html.split(' ');
            let newWord = '';
            let count = 1; 
            const updatedWords = words.map((word) => {
                if (word === value.trim()) {
                    if(count === +number){
                        word = `<b>${word}</b>`;
                    }
                    count++;
                }
            
                newWord += word + ' '; 
            
                return word; 
            });
            
            handleUpdateHtml(newWord)
            setValue('')
            setIsOpen(false)
            setNumber('')
        } else {
            const regex = new RegExp(value, 'g');
            if (html.match(regex)) {
              const updatedHtml = html.replace(regex, `<b>${value}</b>`);
              handleUpdateHtml(updatedHtml)
              setValue('')
              setIsOpen(false)
            } else {
              setError(`האות ${value} לא נמצא בטקסט`)
            }
        }

    };

    const handlePreviousHtml = () => {
        console.log('previousValue',previousValue)
        handleUpdateHtml(previousValue)
        setIsOpen(false)
    }

    return (
        <>
            <div className='absolute top-[-10px] z-40 cursor-pointer ' onClick={() => setIsOpen(!isOpen)}>
                <Image src={`/images/settings_clear.svg`} alt='settings' width={27} height={27}/>
            </div>
            {isOpen &&
                <div className='absolute border w-56 h-60 border-gray bg-white rounded-sm z-50 text-sm'>
                    <div className='w-full items-center flex justify-center'>
                        <div>
                            <p className='text-center'>שינוי מילה לבולד</p>
                            <div className='items-center flex justify-center'>
                                <input value={value} onChange={(e) => setValue(e.target.value)} className='border border-primary rounded-sm w-48' placeholder='אות'/>
                            </div>
                            <div className='items-center flex justify-center mt-2'>
                                <input value={number} onChange={(e) => setNumber(e.target.value)} className='border border-primary rounded-sm w-48' placeholder='מספר ברשימה [אופציונלי]'/>
                            </div>
                            <div className='flex gap-2'>
                                <div className='flex items-center justify-center mt-5'>
                                    <button className='border border-primary text-primary px-4  h-10 rounded-md' onClick={() => setIsOpen(false)}>סגור</button>
                                </div> 
                                <div className='flex items-center justify-center mt-5'>
                                    <button className='bg-primary text-white px-2 h-10 rounded-md' onClick={() => handleClick()}>עדכן</button>
                                </div> 
                                <div className='flex items-center justify-center mt-5'>
                                    <button className='bg-primary text-white px-2 h-10 rounded-md' onClick={() => handlePreviousHtml()}>בטל שינוי קודם</button>
                                </div>
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