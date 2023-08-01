import React, { useEffect } from 'react';
import ClientLayout from '../layout/ClientLayout';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
import { useExercises } from '@/hooks/useExercises';
import ExerciseHead from './components/ExerciseHead';
import ExerciseList from './components/ExerciseList';
import ExerciseBottom from './components/ExerciseBottom';
import {IUser} from '@/types/user.interface';

const Exercise = () => {

    const {user} = useAuth()
    const {getExercise, getCoursesPerStudent, clearExercise} = useActions()
    const router = useRouter();
    const {fifth} = router.query;

    useEffect(() => {
        if(fifth && user) {
            getExercise({idExercise:+fifth, idStudent: user.id });
        } else {
            clearExercise()
        }
    },[fifth,user,getExercise, clearExercise ])

    return (
        <ClientLayout>
            {/* <ExerciseHead/>
            <ExerciseList/>
            <ExerciseBottom/> */}
            <div className='mb-10'></div>
        </ClientLayout>
    );
};

export default Exercise;