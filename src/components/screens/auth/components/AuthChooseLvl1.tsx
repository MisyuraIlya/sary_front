import SubHeading from '@/ui/heading/SubHeading';
import React, {FC} from 'react';
import Card from './Card';
import { Links } from '../enum';
import Image from 'next/image';
const AuthChooseLvl1= () => {
    
    return (
        <div>
            <div className=''>
                <Image src={'/images/frame.svg'} width={43} height={40} alt='frame' priority className='absolute top-20'/>
                <SubHeading className='font-bold text-3xl'>איך תרצו להתחבר?</SubHeading>
                <div className=''>
                    <div className='pl-12 py-4'>
                        <Card title='כניסה בית ספרית' imageLink='images/auth/house' link={Links.ENTERING_TYPE}/>                    
                    </div>
                    <div className='pl-12 py-4'>
                        <Card title='משתמש פרטי' imageLink='images/auth/avatar' link={Links.ENTERING_TEACTHER_TYPE}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthChooseLvl1;