import React, {FC} from 'react';
import { collectionRow } from '@/types/ModulesTypes.ts/SecondModule.interface';
import Image from 'next/image';
import SelectModule from './models/SelectModule';
import InputModule from './models/InputModule';
import Instruction from './models/Instruction';
import WordModule from './models/WordModule';
import OrdenModule from './models/OrdenModule';
import SubInstruction from './models/SubInstruction';
import RootInputModule from './models/RootInputModule';
import BankModule from './models/BankModule';
import MixModule from './models/MixModule';
import MixDrag from './models/MixDrag';
import TextModule from './models/TextModule';
import CheckBoxModule from './models/CheckBoxModule';
import EmptyType from './models/EmptyType';
import ImageForm from './models/ImageForm';
import UnitedForm from './models/UnitedForm';
import TableModule from './models/TableModule';
import OpenQuestion from './models/OpenQuestion';
import MergedExercise from './models/MergedExercise';
type SecondRowCard = {
    row: collectionRow 
    orden: number
    register: any
    setValue: any
    control: any
    index: number
    exerciseId: number
    dataObjectId: number
    isExistWord: boolean
    checkIsThereImage:boolean
    isTable: boolean,
    mergedData: any
    firstIdTextModule: string
}
    const SecondRowCard:FC<SecondRowCard> = ({firstIdTextModule, mergedData, row,orden,register, setValue, control, index, exerciseId, dataObjectId, isExistWord, checkIsThereImage, isTable  }) => {

    return (
        <>
            {row?.module_type === 'input' && <InputModule isMerged={row?.isMerged} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'instruction' && <Instruction isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'orden' && <OrdenModule isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'selectbox' && <SelectModule  isMerged={row?.isMerged} isTable={isTable} checkIsThereImage={checkIsThereImage} exerciseId={exerciseId} dataObjectId={dataObjectId} key={index} placeholder={row.placeholder || ''} options={row.collectionValues} answer={row.collectionAnswers} register={register}   col={orden} row={row.orden} setValue={setValue} control={control} />}
            {row?.module_type === 'subInstruction' && <SubInstruction isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'text' && <TextModule firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'rootInput' && <RootInputModule isMerged={row?.isMerged} isTable={isTable}checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} key={index} exerciseId={exerciseId} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText}/>}
            {row?.module_type === 'textarea' && <th>textarea</th>}
            {row?.module_type === 'word' && <WordModule isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {row?.module_type === 'mix' && <MixModule/>}
            
            {row?.module_type === 'bank' && <BankModule  isTable={isTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} />}
            {row?.module_type === 'mixDrag' && <MixDrag  isTable={isTable}checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0].value}/>}
            
            {row?.module_type === 'checkBox' && <CheckBoxModule  isTable={isTable}checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} values={row.collectionValues} answer={row.collectionAnswers.length > 0 ? row.collectionAnswers[0].value : ""}/>}
            {row?.module_type === '' && <EmptyType  isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}

            {/* IMAGE and UNITED  FORM USED AS PARAMETERS ONLY FOR REACT HOOK FORM THE MAIN COMPONENT IN SecondForm.tsx */}
            {row?.module_type === 'image' && <ImageForm  isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'merged' && <UnitedForm  isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'table' && <TableModule  isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'openQuestion' && <OpenQuestion  isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'mergedExercise' && <MergedExercise mergedData={mergedData} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} control={control}/>}
        </>

    );
};

export default SecondRowCard;