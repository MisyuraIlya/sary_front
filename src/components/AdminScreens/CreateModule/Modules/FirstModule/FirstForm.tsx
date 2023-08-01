import React, {FC} from 'react';
import FirstModule from './FirstModule';
import ColsCard from '../../components/ColsCard';
import { useExercise } from '@/providers/exercise/ExerciseProvider';
import { collectionsCols, collectionsRows } from '@/types/ModulesTypes.ts/FirstModule.interface';
type FirstFormProps = {
    handleSubmitForm: any
    onSubmit: any
    register: any
    setValue: any
    control: any
}
const FirstForm: FC<FirstFormProps> = ({handleSubmitForm,onSubmit, register, setValue, control}) => {

    const {exercises} = useExercise()
    return (
        <form onSubmit={handleSubmitForm(onSubmit)} className='mr-12'>
            <table className=''>
            <tbody className=''>
                <tr className='heading bg-primary'>
                    <div className='text-center justify-center text-white'>
                    </div>
                    {
                    (exercises as any)?.collectionsCols?.map((item :collectionsCols ,index: number) => {
                        return(
                        <th key={index} className=''>
                            <ColsCard item={item} index={index+1} register={register} setValue={setValue}/>
                        </th>
                        )
                    })
                    }
                    <div className='text-center justify-center text-white '>
                    </div>
                </tr>
                {
                (exercises as any)?.collectionsRows?.map((item: collectionsRows,index: number) => {
                return(
                    <tr key={index}>
                        <FirstModule 
                        exercises={item} 
                        key={index} 
                        register={register} 
                        orden={item.orden}
                        setValue={setValue}
                        control={control}
                        />
                    </tr>
                    )
                })
                }
            </tbody>
            </table>
        </form>
    );
};

export default FirstForm;