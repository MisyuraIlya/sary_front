import React, {FC} from 'react';
import SideBars from '@/components/SideBars/SideBars';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import Heading from '@/ui/heading/Heading';
import SideLinks from './sidebar-components/SideLinks';

type SideBarProps = {
    isSidebarOpen: any
    handleSidebarClose: any
    register: any
    setValue: any
}
const SideBar:FC<SideBarProps> = ({isSidebarOpen,handleSidebarClose, register, setValue}) => {

    const {exercises} = useExercise()
    return (
        <SideBars anchor="left" isOpen={isSidebarOpen} onClose={handleSidebarClose}>
            <div style={{width:'700px'}} className='myCenter'>
            <div className='m-10 w-full'>
                <div className='text-center'>
                <Heading>{exercises?.title}</Heading>
                </div>
                <h3 className='font-bold text-primary text-right underline'>הוראות תרגיל</h3>
                <div>
                <div 
                
                // onInput={handleInputChange} 
                dangerouslySetInnerHTML={{ __html: exercises?.description ?? '' }}
                className='text-right pr-2'
                />
                {/* <SubHeading>{exercises?.description}</SubHeading> */}
                </div>
                <div className='pt-12'>
                <h3 className='font-bold text-primary text-right underline'>הדרכה</h3>
                {/* <textarea value={exercises?.description2 ?? ''}  readOnly className='w-full h-96 cursor-default'/>  */}
                <div 
                
                // onInput={handleInputChange} 
                dangerouslySetInnerHTML={{ __html: exercises?.description2 ?? '' }}
                className='text-right pr-2'
                />
                </div>
                <SideLinks exercises={exercises} register={register} setValue={setValue} tableType={'exercises'}/>
            </div>

            </div>
        </SideBars>

    );
};

export default SideBar;