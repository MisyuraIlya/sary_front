import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, { FC } from 'react';

type TabsModuleProps = {
  arrayTabs: Array<{ name: string; tabOrden: number }>;
  firstTab: string;
};

const TabsModule: FC<TabsModuleProps> = ({ arrayTabs, firstTab }) => {
  const { ExerciseMethods, choosedTab } = useExercise();
  // Sort the arrayTabs based on the tabOrden property
  const sortedTabs = arrayTabs.sort((a, b) => a.tabOrden - b.tabOrden);
  return (
    <div className='flex gap-2 w-full pt-5 pb-5 ' style={{ borderBottom: '1px solid #00000033' }}>
      {sortedTabs.length > 1 &&
        sortedTabs.map((item, index) => (
          <>
            <div className='mr-2'></div>
            <div
              className={`${(choosedTab ? choosedTab : firstTab) === item.name ? 'bg-[#3995F5] text-white' : 'bg-[#F0FBFF] color-[#000000B2]'} pt-2 pb-2 pr-4 pl-4 rounded-md cursor-pointer`}
              key={index}
              onClick={() => ExerciseMethods.setChoosedTab(item.name)}
            >
              {item.name}
            </div>
          </>
        ))}
    </div>
  );
};

export default TabsModule;
