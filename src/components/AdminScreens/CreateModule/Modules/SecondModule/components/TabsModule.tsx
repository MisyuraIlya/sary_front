import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC} from 'react';

type TabsModuleProps = {
    tabsCounter: number
}

const TabsModule:FC<TabsModuleProps> = ({tabsCounter}) => {
    const {ExerciseMethods,choosedTab} = useExercise()
    const elements = Array.from({ length: tabsCounter }, (_, index) => (
        <div 
        className={`${choosedTab == index + 1 ? 'bg-[#3995F5] text-white' : 'bg-white color-[#000000B2]'} pt-2 pb-2 pr-4 pl-4 rounded-md cursor-pointer`} 
        key={index} 
        onClick={() => ExerciseMethods.setChoosedTab(index + 1)}
        >
            טקסט {index + 1}
        </div>
      ));

    return (
        <div className='flex gap-5 w-full pt-5 pb-5 ' style={{borderBottom:'1px solid #00000033'}}>
            <div className='mr-4'>

            </div>
            {elements}
        </div>
    );
};

export default TabsModule;