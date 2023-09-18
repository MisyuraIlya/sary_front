import React, { useState } from 'react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import { setSelecteableWord, getSelecteableWord } from '../helpers/localstorage';

interface SelectableTextProps {
  text: string;
}

type Draft = {
  name: string,
  color: string
}

type FinalWord = {
  word: string,
  draft: Draft
}

const buttonDrafts = [
  {
    name:'נושא',
    color:'#FFDB50'
  },
  {
    name:'נשוא',
    color:'#A5EEA8'
  }
]

const SelectableText: React.FC<SelectableTextProps> = ({ text }) => {
  const [drafts, setDrafts] = useState<Draft[]>(buttonDrafts)
  const [selectedText, setSelectedText] = useState<string>('');
  // const [selectedDraft, setSelectedDraft] = useState<Draft>();
  const [finalResult, setFinalResult] = useState<FinalWord[]>([])
  const handleSelect = () => {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString() : '';
    setSelectedText(selectedText);
  };

  const handleChooseColor = (type: Draft) => {
    const newDraft = drafts.filter((item) => item.name !== type.name)
    // setDrafts(newDraft)
    let obj = {
      word: selectedText,
      draft: type
    }
    setFinalResult([...finalResult, obj])
    // setSelectedText('')
  }
 

  return (

    <div className="selectable-text">
      {text.split(' ').map((word, index) => {
        let checkIsThereDraft = finalResult.filter((check) => check.word === word)[0]
        console.log('checkIsThereDraft',checkIsThereDraft)
        return (
        <>
          <Popover>
            <PopoverHandler>
              {/* <Button>   */}
                <span
                  key={index}
                  className={`p-1`}
                  onMouseUp={handleSelect}
                  
                  style={checkIsThereDraft ? { background: checkIsThereDraft.draft.color } : {}}
                >
                  {word}
                </span>
              {/* </Button> */}
              </PopoverHandler>
              <PopoverContent>
              <div className='flex'>
                {drafts.map((item) => {
                  return (
                    <div className={`px-2`}>
                      <div className='px-2 rounded-full cursor-pointer' style={{background:item.color}} onClick={() => handleChooseColor(item)}>
                        {item.name}
                      </div>  
                    </div>
                  )
                })}
              </div>
            </PopoverContent>
          </Popover>
        </>
    )})}
    </div>


  
  );
};

export default SelectableText;
