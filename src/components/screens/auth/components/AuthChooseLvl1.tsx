import SubHeading from '@/ui/heading/SubHeading';
import React, {FC} from 'react';
import Card from './Card';
import { Links } from '../enum';
const AuthChooseLvl1= () => {
    
    return (
        <div>
            <div className=''>
                <SubHeading className='font-bold text-xl'>איך תרצו להתחבר?</SubHeading>
                <div className='py-14'>
                    <div className='pl-56 py-6 '>
                        <Card title='כניסה בית ספרית' imageLink='images/auth/house' link={Links.ENTERING_TYPE}/>                    
                    </div>
                    <div className='pl-56 py-6'>
                        <Card title='משתמש פרטי' imageLink='images/auth/avatar' link={Links.ENTERING_TEACTHER_TYPE}/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthChooseLvl1;