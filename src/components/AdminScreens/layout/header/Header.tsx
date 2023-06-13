import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'

const Header: FC = () => {
    return (
        <header className='bg-primary w-full py-2 px-6 grid grid-cols-2' style={{height:'70px'}}>
            <div className='flex justify-start items-center'>
                <Image
                priority
                width={48}
                height={48}
                src={'/images/header/avatars/avatar.svg'}    
                alt='Sary'
                />
                <p className='text-center text-white px-4'>אורלי</p>
            </div>
            <div className='flex justify-end'>
                <div className='flex'>
                    <Link href={'/admin/tableOfContents'} className='flex justify-center items-center px-4'>
                        <Image
                        priority
                        width={28}
                        height={20}
                        src={'/images/header/paper.svg'}    
                        alt='Sary'
                        />
                    </Link>  
                    <Link href={'/admin/tableOfContents'} className='flex justify-center items-center px-4' >
                        <Image
                        priority
                        width={28}
                        height={20}
                        src={'/images/header/forum.svg'}    
                        alt='Sary'
                        />
                    </Link>  
                    <Link href={'/admin/tableOfContents'} className='flex justify-center items-center pr-4 relative'>
                        <Image
                        priority
                        width={28}
                        height={20}
                        src={'/images/header/bell.svg'}    
                        alt='Sary'
                        />
                        <div className='items-center rounded-full bg-red text-white absolute left-4 px-1'>
                            <p>12</p>
                        </div>  
                    </Link>  
                </div>
                <div className="flex justify-between px-8">
                    <div className="w-1/2 border-r" style={{borderColor:'#F3F6F9'}}></div>
                    <div className="w-1/2"></div>
                </div>
                <div className='flex'>
                    <Link href={'/admin/tableOfContents'} className='flex'>
                        <Image
                        priority
                        width={50}
                        height={37}
                        src={'/images/header/logo.svg'}    
                        alt='Sary'
                        />
                        <Image
                        priority
                        width={180}
                        height={37}
                        src={'/images/header/logoTitle.svg'}    
                        alt='Sary'
                        className='items-center justify-center pt-5 px-4'
                        />
                    </Link>    
                </div>
            </div>
        </header>
    );
};

export default Header;