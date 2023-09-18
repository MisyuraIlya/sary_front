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
  
  

function SelectableText2() {
  const [drafts, setDrafts] = useState<Draft[]>(buttonDrafts)
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 });
  const textAreaRef = useRef<HTMLDivElement | null>(null);
  const [openModal, setOpenModal] = useState(false)
  const [finalResult, setFinalResult] = useState<FinalWord[]>([])

  const handleMouseUp = () => {
    if (textAreaRef.current) {
      const selectionObject = window.getSelection();
      const start = selectionObject?.anchorOffset || 0;
      const end = selectionObject?.focusOffset || 0;
      setSelection({ start, end });
      setOpenModal(true)
    }
  };

  const handleChooseColor = (type: Draft) => {
    const existingSelectionIndex = finalResult.findIndex(
      (check) => check.word.start === selection.start && check.word.end === selection.end
    );
  
    if (existingSelectionIndex !== -1) {
      // Update the color of the existing selection
      const updatedFinalResult = [...finalResult];
      updatedFinalResult[existingSelectionIndex].draft = type;
      setFinalResult(updatedFinalResult);
    } else {
      // Add a new selection
      const newDrafts = drafts.filter((item) => item.name !== type.name);
      let obj = {
        word: selection,
        draft: type,
      };
      setFinalResult([...finalResult, obj]);
    }
  
    setOpenModal(false); // Close the color selection modal
  };

  const highlightText = (text: string) => {
    let highlightedParts: (JSX.Element | string)[] | null = null;
  
    finalResult.forEach((result, index) => {
      const { word, draft } = result;
      const { start, end } = word;
      const beforeSelection = text.slice(0, start);
      const selectedText = text.slice(start, end);
  
      if (!highlightedParts) {
        highlightedParts = [];
      }
  
      highlightedParts.push(
        <span key={index}>
          {beforeSelection}
          <span style={{ background: draft.color }}>{selectedText}</span>
        </span>
      );
  
      // Update the remaining text after the current selection
      text = text.slice(end);
    });
  
    // Append any remaining text as plain text
    if (text.length > 0 && highlightedParts) {
      highlightedParts.push(text);
    }
  
    return highlightedParts ?? text;
  };

  console.log('finalResult',finalResult)
  return (
    <div>
        {openModal && 
            drafts.map((item) => {
                return (
                    <div className={`px-2`}>
                    <div className='px-2 rounded-full cursor-pointer' style={{background:item.color}} onClick={() => handleChooseColor(item)}>
                        {item.name}
                    </div>  
                    </div>
                )
                })
        }
      <p>Drag to select text:</p>
      <div
        ref={textAreaRef}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '100px',
        }}
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
