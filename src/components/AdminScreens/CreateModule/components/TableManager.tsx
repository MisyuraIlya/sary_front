import { useExercise } from '@/providers/exercise/ExerciseProvider';
import React, {FC} from 'react';
import { Oval } from 'react-loader-spinner';
import ColsCard from './ColsCard';
import FirstModule from '../Modules/FirstModule/FirstModule';
import FirstForm from '../Modules/FirstModule/FirstForm';
import SecondForm from '../Modules/SecondModule/SecondForm';
type TableManagerProps = {
    handleSubmitForm: any
    onSubmit: any
    register: any
    setValue: any
    control: any
}

const TableManager:FC<TableManagerProps> = ({handleSubmitForm, onSubmit, register, setValue, control}) => {

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
              {choosedModule === 1 && exercises && <FirstForm handleSubmitForm={handleSubmitForm} register={register} setValue={setValue} control={control} onSubmit={onSubmit}/>}
              {choosedModule === 2 && exercises && <SecondForm handleSubmitForm={handleSubmitForm} register={register} setValue={setValue} control={control} onSubmit={onSubmit}/>}
              </>
            }
        </>
    );
};

export default TableManager;