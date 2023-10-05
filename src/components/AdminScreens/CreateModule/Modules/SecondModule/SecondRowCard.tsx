import React, {FC} from 'react';
import { collectionRow, collectionValues, collectionsCols } from '@/types/ModulesTypes.ts/SecondModule.interface';
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
import ImageForm from './models/ImageFormRight';
import UnitedForm from './models/UnitedForm';
import TableModule from './models/TableModule';
import OpenQuestion from './models/OpenQuestion';
import MergedExercise from './models/MergedExercise';
import TextCopy from './models/TextCopy';
import HeadLine2 from './models/HeadLine2';
import ClearText from './models/ClearText';
import TypedInput from './models/TypedInput';
import OpenQuestionHamarot from './models/OpenQuestionHamarot';
import Draft from './models/Draft';
import DraftBank from './models/DraftBank';
import TableClearModule from './models/TableClearModule';
import ImageFormRight from './models/ImageFormRight';
import ImageFormLeft from './models/ImageFormLeft';
import VideoFormLeft from './models/ChartForm';
import VideoFormRight from './models/VideoForm';
import VideoForm from './models/VideoForm';
import ChartForm from './models/ChartForm';
import TextModuleCentered from './models/TextModuleCentered';
import Properties from './models/Properties';
import InputCenteredModule from './models/InputCenteredModule';
import Explanation from './models/Explanation';
import HeightSpace from './models/HeightSpace';
import WordBoldModule from './models/WordBoldModule';
import OrdenBoldModule from './models/OrdenBoldModule';

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
    isClearTable: boolean,
    mergedData: any
    firstIdTextModule: string
    draftBankCollectionValues: collectionValues[]
    collectionsCols: collectionsCols[]
    CustomTableWidth: number
    CustomInputWidth: number
    CustomSelectBoxWidth: number
}
    const SecondRowCard:FC<SecondRowCard> = ({CustomSelectBoxWidth, CustomTableWidth, firstIdTextModule, mergedData, row,orden,register, setValue, control, index, exerciseId, dataObjectId, isExistWord, checkIsThereImage, isTable, isClearTable, draftBankCollectionValues, collectionsCols, CustomInputWidth }) => {

    return (
        <>
            {row?.module_type === 'input' && <InputModule CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth}isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'inputCentered' && <InputCenteredModule CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth}isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'instruction' && <Instruction CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'orden' && <OrdenModule CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'ordenBold' && <OrdenBoldModule CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'selectbox' && <SelectModule CustomSelectBoxWidth={CustomSelectBoxWidth} CustomTableWidth={CustomTableWidth}  isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} exerciseId={exerciseId} dataObjectId={dataObjectId} key={index} placeholder={row.placeholder || ''} options={row.collectionValues} answer={row.collectionAnswers} register={register}   col={orden} row={row.orden} setValue={setValue} control={control} />}
            {row?.module_type === 'subInstruction' && <SubInstruction CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'text' && <TextModule CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'textCentered' && <TextModuleCentered CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'rootInput' && <RootInputModule CustomTableWidth={CustomTableWidth} isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} key={index} exerciseId={exerciseId} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText}/>}
            {row?.module_type === 'explanation' && <Explanation CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'word' && <WordModule CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {row?.module_type === 'wordBold' && <WordBoldModule CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {row?.module_type === 'mix' && <MixModule/>}
            
            {row?.module_type === 'bank' && <BankModule CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} />}
            {row?.module_type === 'mixDrag' && <MixDrag CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0].value}/>}
            
            {row?.module_type === 'checkBox' && <CheckBoxModule CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} values={row.collectionValues} answer={row.collectionAnswers.length > 0 ? row.collectionAnswers[0].value : ""}/>}
            {row?.module_type === '' && <EmptyType CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}

            {/* IMAGE and UNITED  FORM USED AS PARAMETERS ONLY FOR REACT HOOK FORM THE MAIN COMPONENT IN SecondForm.tsx */}
            {row?.module_type === 'imageRight' && <ImageFormRight CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {row?.module_type === 'imageLeft' && <ImageFormLeft CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {row?.module_type === 'video' && <VideoForm  CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'chart' && <ChartForm CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'merged' && <UnitedForm CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'table' && <TableModule CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {row?.module_type === 'tableClear' && <TableClearModule CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {row?.module_type === 'openQuestion' && <OpenQuestion CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} placeholder={row.placeholder || ''}/>}
            {row?.module_type === 'mergedExercise' && <MergedExercise CustomTableWidth={CustomTableWidth} mergedData={mergedData} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} control={control}/>}
            {row?.module_type === 'textCopy' && <TextCopy CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'headline2' && <HeadLine2 CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'clearText' && <ClearText CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'typedInput' && <TypedInput CustomTableWidth={CustomTableWidth} isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'openQuestionHamarot' && <OpenQuestionHamarot CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} answer={row.collectionAnswers} placeholder={row.placeholder || ''}/>}
            {row?.module_type === 'draftBank' && <DraftBank CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}  />}
            {row?.module_type === 'draft' && <Draft CustomTableWidth={CustomTableWidth} draftBankCollectionValues={draftBankCollectionValues}  isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/> }
            {row?.module_type === 'heightSpace' && <HeightSpace  CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {row?.module_type === 'properties' && <Properties CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/> }


        </>

    );
};

export default SecondRowCard;