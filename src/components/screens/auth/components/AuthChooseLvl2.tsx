import React from 'react';
import SubHeading from '@/ui/heading/SubHeading';
import MiniCard from './MiniCard';
import { Links } from '../enum';
const AuthChooseLvl2 = () => {
    return (
        <div>
            <SubHeading className='font-bold text-xl'>איך תרצו להתחבר?</SubHeading>
            <div className='grid grid-cols-5 gap-56'>
                <MiniCard title='אני מורה' imageLink='images/auth/student' link={Links.ENTERING_TEACTHER_TYPE}/>
                <MiniCard title='אני תלמיד' imageLink='images/auth/student' link={Links.SIGN_IN_STUDENT}/>
            </div>
        </div>
    );
};

export default AuthChooseLvl2;