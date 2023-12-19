import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC} from 'react';

type TabsModuleProps = {
    arrayTabs: Array<string>
    firstTab: string
}

const TabsModule:FC<TabsModuleProps> = ({arrayTabs,firstTab}) => {
    const {ExerciseMethods,choosedTab} = useExercise()
    console.log('arrayTabs',arrayTabs)
    return (
        <div className='flex gap-2 w-full pt-5 pb-5 ' style={{borderBottom:'1px solid #00000033'}}>

        {arrayTabs.length > 1 &&
            arrayTabs?.map((item,index) => 
            <>
                <div className='mr-2'></div>
                <div 
                className={`${(choosedTab ? choosedTab : firstTab) == item ? 'bg-[#3995F5] text-white' : 'bg-white color-[#000000B2]'} pt-2 pb-2 pr-4 pl-4 rounded-md cursor-pointer`} 
                key={index} 
                onClick={() => ExerciseMethods.setChoosedTab(item)}
                >
                   {item}
                </div>
            </>
            )
        }
        </div>


    );
};

export default TabsModule;