import React, { useRef, useState } from 'react';

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

  type Draft = {
    name: string,
    color: string
  }

  type FinalWord = {
    word: { start: number; end: number },
    draft: Draft
  }
  
  

function SelectableText2({text}: {text:string}) {
  const [drafts, setDrafts] = useState<Draft[]>(buttonDrafts)
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });
  const textAreaRef = useRef<HTMLDivElement | null>(null);
  const [openModal, setOpenModal] = useState(false)
  const [finalResult, setFinalResult] = useState<FinalWord[]>([])

  const handleMouseUp = () => {
    if (textAreaRef.current) {
      const selectionObject = window.getSelection();
      let start = selectionObject?.anchorOffset || 0;
      let end = selectionObject?.focusOffset || 0;
      if(start > end ) {
        let newEnd = end
        end = start
        start = newEnd
      }
      const lengthBetweenStartAndEnd = end - start;
      if (lengthBetweenStartAndEnd > 2) {
        setSelection({ start, end });
        setOpenModal(true);
      }
    }
  };

  const handleChooseColor = (type: Draft) => {
    const existingSelectionIndex = finalResult.findIndex(
      (check) => check.word.start === selection.start && check.word.end === selection.end
    );
  
    if (existingSelectionIndex !== -1) {
      const updatedFinalResult = [...finalResult];
      updatedFinalResult[existingSelectionIndex].draft = type;
      setFinalResult(updatedFinalResult);
    } else {
      const newDrafts = drafts.filter((item) => item.name !== type.name);
      let obj = {
        word: selection,
        draft: type,
      };
      setFinalResult([...finalResult, obj]);
    }
  
    setOpenModal(false); 
  };

  const highlightText = (text: string) => {
    const handleDelete = (index: number) => {
      const updatedFinalResult = [...finalResult];
      updatedFinalResult.splice(index, 1);
      setFinalResult(updatedFinalResult);
    };
  
    return (
      <span>
        {finalResult.map((result, index) => {
          const { word, draft } = result;
          const { start, end } = word;
          const beforeSelection = text.slice(0, start);
          const selectedText = text.slice(start, end);
          text = text.slice(end);
  
          return (
            <span key={index} className='relative'>
              {beforeSelection}
              {/* <div className='w-full absolute top-[-30px] text-center flex justify-center align-center'>
                  <span className='rounded-full' style={{background: draft.color}}>{result.draft.name}</span>
              </div> */}
              <span
                style={{ background: draft.color, cursor: 'pointer' }}
                onClick={() => handleDelete(index)} // Handle delete onClick
                className='relative'
              >
                {selectedText} 
                <span className='absolute top-[-30px] text-center right-1/3 rounded-full px-2'  style={{background: draft.color}}>{result.draft.name}</span>
              </span>
            </span>
          );
        })}
        {text} {/* Append any remaining text as plain text */}
      </span>
    );
  };
  return (
    <div className='relative'>
        {openModal && 

        <div className='  flex bg-white px-2 py-2 rounded-md mb-10'>
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
        }

      <div
        ref={textAreaRef}
        onMouseUp={handleMouseUp}
      >
        {highlightText(
          'העירייה חילקה חבילות שי לחג לאזרחיה הותיקים',
        )}
      </div>
      <p>Selection:</p>
      <p>Start: {selection.start}</p>
      <p>End: {selection.end}</p>
    </div>
  );
}

export default SelectableText2;
