import React, { FC, useState } from 'react';
import Image from 'next/image';
import { ISecondModuleSubExercises, collectionsRows } from '@/types/ModulesTypes.ts/SecondModule.interface';
import SideBars from '@/components/SideBars/SideBars';
import Heading from '@/ui/heading/Heading';
import SideLinks from './SideLinks';
type Props = {
    data: ISecondModuleSubExercises
    rows: collectionsRows
}

const SideBarIcons: FC<Props> = ({data,rows}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
      const handleSidebarClose = () => {
        setIsSidebarOpen(false);
      };

    return (
        <th style={{ float:'left', borderBottom:'0px'}} className='flex items-center absolute left-0 mt' colSpan={data.collectionsCols.length} >
            
            <div className={`px-2 py-2 cursor-pointer`} onClick={() => handleSidebarToggle()} >
                <div className='flex items-center justify-center'>
                    <Image src={`/images/settings_clear.svg`} alt='settings' width={27} height={27}/>
                </div>
                <div>
                    <span className='text-sm'>הגדרות</span>
                </div>
            </div> 

            <div className={`px-2 py-2 cursor-pointer`} >
                <div className='flex items-center justify-center'>
                    <Image src={'/images/folder.svg'} alt='folder' width={30} height={30} />
                </div>
                <div>
                    <span className='text-sm'>וידיאו</span>
                </div>
            </div> 


            <div className='px-2 rounded-full flex text-center items-center justify-center cursor-pointer'  >
                <div>
                    <div  className=' flex text-center items-center justify-center'>
                        <div style={{background:'#BACEE9'}} className='rounded-full px-3 py-2'>
                            <Image src={'/images/quest.svg'} alt='quest' width={7} height={7} />
                        </div>
                    </div>
                    <div>
                        <span className='text-sm'>הסבר</span>
                    </div>
                </div>
            </div>


            <SideBars anchor="left" isOpen={isSidebarOpen} onClose={handleSidebarClose}>
                <div style={{width:'700px'}} className='myCenter'>
                    <div className='m-10 w-full'>
                        <div className='text-center'>
                            {/* <Heading>שורה מספר: {exercises?.orden} </Heading> */}
                        </div>
                        <SideLinks rows={rows}/>
                    </div>
                </div>
            </SideBars>
        </th>
    );
};

export default SideBarIcons;