import React, {FC, PropsWithChildren, useEffect} from 'react';
import Header from './header/Header';
import CourseChooseSubHeader from './CourseChooseSubHeader/CourseChooseSubHeader';
import Sidebar from './sidebar/Sidebar';
import SecondSideBar from './sidebar/components/SecondSideBar';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import {IUser} from '@/types/user.interface'
import { useRouter } from 'next/router';
const ClientLayout:FC <PropsWithChildren> = ({children}) => {
    const {getCoursesPerStudent} = useActions()
    
    const {user} = useAuth()
    const router = useRouter()
    const {first} = router.query;
    useEffect(() => {
        if(user) {
            getCoursesPerStudent(user as unknown as IUser)
        }
    },[user,first,getCoursesPerStudent])

    return (
        <div>
            <Header/>
            <CourseChooseSubHeader/>
            <Sidebar/>
            <SecondSideBar/>
            <div className="w-full" style={{backgroundColor:'white', paddingTop:'150px'}}>
                <div  style={{minHeight:'calc(100vh - 150px)', width:'calc(100vw - 312px', float:'left'}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ClientLayout;