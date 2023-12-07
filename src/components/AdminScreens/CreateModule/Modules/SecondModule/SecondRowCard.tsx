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
import HeightSpace from './models/HeightSpace';
import WordBoldModule from './models/WordBoldModule';
import OrdenBoldModule from './models/OrdenBoldModule';
import StoryModule from './models/StoryModule';
import StoryInstruction from './models/StoryInstruction';
import StoryHeadline from './models/StoryHeadline';
import OriginModule from './models/OriginModule';
import SplitedScreenRight from './models/SplitedScreenRight';
import DoneSplitedScreenRight from './models/DoneSplitedScreenRight';
import SplitedScreenLeft from './models/SplitedScreenLeft';
import DoneSplitedScreenLeft from './models/DoneSplitedScreenLeft';

import Explanation from './models/Explanation';
import ExplanationSplited from './models/ExplanationSplited';
import NumberBold from './models/NumberBold';
import IconModule from './models/IconModule';
import MainHead from './models/MainHead';
import SecondHead from './models/SecondHead';
import Divider from './models/Divider';
import WordRegular from './models/WordRegular';
import IconSecondModule from './models/IconSecondModule';
import SongModule from './models/SongModule';
import InstructionWhite from './models/InstructionWhite';
import ToggleModule from './models/ToggleModule';
import SecondHeadWhiteModule from './models/SecondHeadWhite';
import IconDescriptionOne from './models/IconDescriptionOne';
import IconDescriptionTwo from './models/IconDescriptionTwo';
import CircleModule from './models/Circle';
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
    isExplanationRowSplited: boolean
    isStoryInstruction: boolean
    checkIsIcon: boolean
    isIcon1: boolean
    isIcon2: boolean
    songPropetries: number
    widthText: number
    textMargin: number
    textBgColor: string
}
    const SecondRowCard:FC<SecondRowCard> = ({textBgColor,textMargin, widthText,songPropetries, checkIsIcon, isStoryInstruction, isExplanationRowSplited, CustomSelectBoxWidth, CustomTableWidth, firstIdTextModule, mergedData, row,orden,register, setValue, control, index, exerciseId, dataObjectId, isExistWord, checkIsThereImage, isTable, isClearTable, draftBankCollectionValues, collectionsCols, CustomInputWidth, isIcon1, isIcon2 }) => {
    return (
        <>
            {row?.module_type === 'input' && <InputModule CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth}isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'inputCentered' && <InputCenteredModule CustomInputWidth={CustomInputWidth} CustomTableWidth={CustomTableWidth}isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'instruction' && <Instruction checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'orden' && <OrdenModule index={index} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'ordenBold' && <OrdenBoldModule isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'selectbox' && <SelectModule CustomSelectBoxWidth={CustomSelectBoxWidth} CustomTableWidth={CustomTableWidth}  isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} exerciseId={exerciseId} dataObjectId={dataObjectId} key={index} placeholder={row.placeholder || ''} options={row.collectionValues} answer={row.collectionAnswers} register={register}   col={orden} row={row.orden} setValue={setValue} control={control} />}
            {row?.module_type === 'subInstruction' && <SubInstruction CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} />}
            {row?.module_type === 'text' && <TextModule textBgColor={textBgColor} textMargin={textMargin} widthText={widthText} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            
            {row?.module_type === 'textCentered' && <TextModuleCentered CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'rootInput' && <RootInputModule CustomTableWidth={CustomTableWidth} isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} key={index} exerciseId={exerciseId} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText}/>}
            
            {row?.module_type === 'explanationSplited' && <ExplanationSplited CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'explanation' && <Explanation CustomTableWidth={CustomTableWidth}  isTable={isTable}   checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            
            {row?.module_type === 'word' && <WordModule isIcon1={isIcon1} isIcon2={isIcon2} index={index} isStoryInstruction={isStoryInstruction} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {row?.module_type === 'wordBold' && <WordBoldModule isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            {row?.module_type === 'mix' && <MixModule/>}
            
            {row?.module_type === 'bank' && <BankModule CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} />}
            {row?.module_type === 'mixDrag' && <MixDrag CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0].value}/>}
            
            {row?.module_type === 'checkBox' && <CheckBoxModule CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} values={row.collectionValues} answer={row.collectionAnswers}/>}
            {row?.module_type === '' && <EmptyType CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}

            {/* IMAGE and UNITED  FORM USED AS PARAMETERS ONLY FOR REACT HOOK FORM THE MAIN COMPONENT IN SecondForm.tsx */}
            {row?.module_type === 'imageRight' && <ImageFormRight CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {row?.module_type === 'imageLeft' && <ImageFormLeft CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {row?.module_type === 'video' && <VideoForm  CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'chart' && <ChartForm CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}/>}
            {row?.module_type === 'merged' && <UnitedForm CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {row?.module_type === 'table' && <TableModule CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {row?.module_type === 'tableClear' && <TableClearModule CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {row?.module_type === 'openQuestion' && <OpenQuestion CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} placeholder={row.placeholder || ''}/>}
            {row?.module_type === 'mergedExercise' && <MergedExercise CustomTableWidth={CustomTableWidth} mergedData={mergedData} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} control={control}/>}
            {row?.module_type === 'textCopy' && <TextCopy CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'headline2' && <HeadLine2 CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}

            {row?.module_type === 'numberBold' && <NumberBold CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value} isClearTable={false} collectionsCols={collectionsCols}/>}
            
            {row?.module_type === 'clearText' && <ClearText collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}

            {row?.module_type === 'icon1' && <IconModule collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}

            {row?.module_type === 'icon2' && <IconSecondModule collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}

            {row?.module_type === 'typedInput' && <TypedInput CustomTableWidth={CustomTableWidth} isMerged={row?.isMerged} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} key={index} id={row.id} answer={row.collectionAnswers} placeholder={row.placeholder || ''}  register={register} col={orden} row={row.orden} setValue={setValue} isFullText={row.isFullText} />}
            {row?.module_type === 'openQuestionHamarot' && <OpenQuestionHamarot CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} answer={row.collectionAnswers} placeholder={row.placeholder || ''}/>}
            {row?.module_type === 'draftBank' && <DraftBank CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} values={row.collectionValues} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue}  />}
            {row?.module_type === 'draft' && <Draft CustomTableWidth={CustomTableWidth} draftBankCollectionValues={draftBankCollectionValues}  isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/> }
            {row?.module_type === 'heightSpace' && <HeightSpace  CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionAnswers[0]?.value}/>}
            {row?.module_type === 'properties' && <Properties CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/> }

            {/* EXCEPT MODULE3 */}
            {row?.module_type === 'story' && <StoryModule CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'storyInstruction' && <StoryInstruction CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'storyHeadline' && <StoryHeadline CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'origin' && <OriginModule CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value} />}
            {row?.module_type === 'divider' && <Divider checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={''} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'mainHead' && <MainHead checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'secondHead' && <SecondHead checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'instructionWhite' && <InstructionWhite CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols}  isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            {row?.module_type === 'wordRegular' && <WordRegular index={index} isStoryInstruction={isStoryInstruction} isExplanationRowSplited={isExplanationRowSplited} CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row?.collectionValues[0]?.value}/>}
            
            {row?.module_type === 'secondHeadWhite' && <SecondHeadWhiteModule checkIsIcon={checkIsIcon}CustomTableWidth={CustomTableWidth} isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} setValue={setValue} value={row.collectionValues[0].value} col={orden} row={row.orden} register={register} />}
            {row?.module_type === 'iconDescriptionOne' && <IconDescriptionOne CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value} />}
            {row?.module_type === 'iconDescriptionTwo' && <IconDescriptionTwo CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value} />}
            {row?.module_type === 'circle' && <CircleModule collectionsCols={collectionsCols} isClearTable={isClearTable} CustomTableWidth={CustomTableWidth} firstIdTextModule={firstIdTextModule} isTable={isTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}
            
            {/* SPLITED SCREEN FORMS */}
            {row?.module_type === 'overflow' && <ToggleModule CustomTableWidth={CustomTableWidth}  isTable={isTable} isClearTable={isClearTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/>}
            {row?.module_type === 'splitedScreenRight' && <SplitedScreenRight CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'doneSplitedScreenRight' && <DoneSplitedScreenRight CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'splitedScreenLeft' && <SplitedScreenLeft CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'doneSplitedScreenLeft' && <DoneSplitedScreenLeft CustomTableWidth={CustomTableWidth} isTable={isTable} checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0]?.value}/> }
            {row?.module_type === 'song' && <SongModule songPropetries={songPropetries} CustomTableWidth={CustomTableWidth} collectionsCols={collectionsCols}  isTable={isTable} isClearTable={isClearTable}  checkIsThereImage={checkIsThereImage} dataObjectId={dataObjectId} exerciseId={exerciseId} col={orden} row={row.orden} setValue={setValue} value={row.collectionValues[0].value}/>}

        
        </>

    );
};

export default SecondRowCard;