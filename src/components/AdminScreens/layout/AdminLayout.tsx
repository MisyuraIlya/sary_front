import React, {FC, PropsWithChildren} from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
const AdminLayout:FC <PropsWithChildren> = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-12 bg-white" style={{ paddingTop:'70px'}}>
                <div className="col-span-1" style={{height:'100%'}}>
                    <Sidebar/>
                </div>
                <div className="col-span-11 mb-[900px]" style={{minHeight:'calc(100vh - 70px)'}}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;