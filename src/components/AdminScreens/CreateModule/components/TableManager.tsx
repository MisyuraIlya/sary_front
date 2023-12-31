import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC} from 'react';
import { Oval } from 'react-loader-spinner';
import SecondForm from '../Modules/SecondModule/SecondForm';
import ThirdForm from '../Modules/ThirdModule/ThirdForm';
import ForthFrom from '../Modules/ForthModule/ForthFrom';

type TableManagerProps = {
    register: any
    setValue: any
    control: any
}

const TableManager:FC<TableManagerProps> = ({register, setValue, control}) => {
    const {loading, choosedModule, exercises} = useExercise()
    return (
        <>
            {loading ?
              <div className='myCenter' style={{minHeight:'50vh'}}>
                <Oval
                  height={80}
                  width={80}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel='oval-loading'
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
              :
              <>
              {/* {choosedModule === 1 && exercises && <FirstForm handleSubmitForm={handleSubmitForm} register={register} setValue={setValue} control={control} onSubmit={onSubmit}/>} */}
              {choosedModule.value === 21 && exercises && <SecondForm  register={register} setValue={setValue} control={control}/>}
              {choosedModule.value === 2 && exercises && <SecondForm register={register} setValue={setValue} control={control}/>}
              {choosedModule.value === 3 && exercises && <ThirdForm  register={register} setValue={setValue} control={control}/>}
              {choosedModule.value === 4 && exercises && <ForthFrom  register={register} setValue={setValue} control={control}/>}
              </>
            }
        </>
    );
};

export default TableManager;