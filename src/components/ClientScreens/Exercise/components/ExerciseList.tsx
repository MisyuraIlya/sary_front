import { useExercises } from '@/hooks/useExercises';
import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseList = () => {
    const {exercise} = useExercises()
    return (
        <table className='ml-12 mr-12'>
            <tbody className='bg-white'>
            {/* <tr>
               
                {exercise?.collectionsCols?.map((item, index) => (
                <th key={index}>
                    <div  className='text-center'>
                        <h4>{item.title}</h4>
                    </div>
                </th>
                ))}
            </tr> */}
    
            {/* {exercise?.collectionsRows?.map((item, index) => (
                <tr key={index}>
                    <td colSpan={exercise?.collectionsCols.length}>
                        <ExerciseCard item={item} />
                    </td>
                </tr>
            ))} */}
            </tbody>
        </table>
    );
};

export default ExerciseList;

