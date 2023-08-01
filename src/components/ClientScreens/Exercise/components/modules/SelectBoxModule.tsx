import React, { useEffect, useState } from 'react';
import { collectionRow } from '@/types/ModulesTypes.ts/FirstModule.interface';
import ReactSelect from 'react-select'
import { AnswersService } from '@/services/answers/answers.service';
import { useAuth } from '@/hooks/useAuth';
type SelectBoxProps = {
    collection: collectionRow
}


const SelectBoxModule = ({collection}: SelectBoxProps) => {
    const {user} = useAuth()
    const optionsNew = Array.isArray(collection.collectionValues)
    ? collection.collectionValues.map((item) => ({ value: item.value, label: item.value }))
    : [];
    
    const isDone = collection?.exerciseRowAnswer?.[0]?.isDone 
    const isCorrect  = collection?.exerciseRowAnswer?.[0]?.isCorrect 
    
    const handleOnChange = (value: string | undefined) => {
        const isCorrect = collection.collectionAnswers?.[0].value.trim() === value?.trim();
        let obj = {
            value: value!,
            moduleType: 'selectbox',
            answerId: 5,
            studentId: user?.id!,
            exerciseRowId: collection.id,
            isCorrect:isCorrect
        }
        AnswersService.createAnswer(obj)
    }

    const answer =  collection?.exerciseRowAnswer?.[0]?.value 

    
    return (
        <div style={{minWidth:'200px'}}>
            <ReactSelect
                placeholder={'בחירה'}
                options={optionsNew}
                className={`ml-4 mr-4 ${isDone  ?  isCorrect ? 'border border-green' : 'border border-red'  : ''}`}
                onChange={(e) => handleOnChange(e?.label)}
                defaultValue={ answer ? {label: answer, value: answer} :null}
            />
        </div>
    );
};

export default SelectBoxModule;