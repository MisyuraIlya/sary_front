import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useExercises } from '@/hooks/useExercises';
import { AnswersService } from '@/services/answers/answers.service';
import { useRouter } from 'next/router';
import React from 'react';
import { onAsk } from '@/utils/sweetAlert';
const ExerciseBottom = () => {
    const {user} = useAuth()
    const {exercise} = useExercises()
    const router = useRouter();
    const { fifth } = router.query;
    const {getExercise} = useActions()

    const handleCheck = async () => {
        if(user && exercise){
            const response = await AnswersService.checkExercise(user?.id,exercise?.id)
            if(fifth) {
                getExercise({idExercise:+fifth, idStudent: user.id });
            }
        }
    }

    const handleReset  = async () => {
        const ask = await onAsk('האם אתה בטוח שרוצה לרסט הכל?' ,'')
        if(ask) {
            if(user && exercise) {
                await AnswersService.resetExercise( user.id, exercise.id)
                if(fifth){
                    getExercise({idExercise:+fifth, idStudent: user.id });
                }
            }
        }
    }

    return (
        <div className='mr-24 ml-24'>
            <div className='flex justify-between'>
                <div className='flex gap-8'>
                    <button className='bg-button_primary text-white rounded-3xl activeShadow  w-40 py-1 hover:bg-primary' onClick={() => handleCheck()}>בדיקה</button>
                    <button className='bg-white text-button_primary rounded-3xl activeShadow w-40 py-1 hover:bg-primary hover:text-white' onClick={() => handleReset()}>נקה</button>
                </div>
                <div>
                    <button className='bg-button_primary text-white rounded-3xl activeShadow w-40 py-1 hover:bg-primary'>שמירה</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseBottom;