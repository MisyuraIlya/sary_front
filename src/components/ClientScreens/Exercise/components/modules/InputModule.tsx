import React, { useState,useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { AnswersService } from '@/services/answers/answers.service';
import { useAuth } from '@/hooks/useAuth';
import { collectionRow } from '@/types/ModulesTypes.ts/SecondModule.interface';
type InputModuleProps = {
    collection: collectionRow
}

const InputModule = ({collection}: InputModuleProps) => {
    // const [value, setValue] = useState('');
    // const [valueDebouced] = useDebounce(value, 1000);
    // const {user} = useAuth()
    // const isDone = collection?.exerciseRowAnswer?.[0]?.isDone 
    // const isCorrect  = collection?.exerciseRowAnswer?.[0]?.isCorrect 
    // useEffect(() => {
    //   setValue(collection?.exerciseRowAnswer?.[0]?.value ?? '');
    // }, [collection]);

    // useEffect(() => {
    //     if(valueDebouced) {
    //         let checkIsCorrect = collection?.collectionAnswers?.[0]?.value === valueDebouced
    //         let obj = {
    //             value: valueDebouced,
    //             moduleType: 'input',
    //             answerId: 5,
    //             studentId: user?.id!,
    //             exerciseRowId: collection.id,
    //             isCorrect: checkIsCorrect
    //         }
    //         AnswersService.createAnswer(obj)
    //     }

    // },[valueDebouced, collection?.collectionAnswers, collection.id, user?.id])


    // return (
    //     <div>
    //         <input
    //             style={
    //                 isDone
    //                 ? isCorrect
    //                     ? { border: '1px solid green' }
    //                     : { border: '1px solid red' }
    //                 : {}
    //             }
    //             type="text"
    //             placeholder=""
    //             className="border border-primary"
    //             value={value}
    //             onChange={(e) => setValue(e.target.value)}
    //         />
    //     </div>
    // );
};

export default InputModule;