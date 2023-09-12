import React, { useState } from 'react';

interface SelectableTextProps {
  text: string;
}

const SelectableText: React.FC<SelectableTextProps> = ({ text }) => {
  const [selectedText, setSelectedText] = useState<string>('');

  const handleSelect = () => {
    const selection = window.getSelection();
    const selectedText = selection ? selection.toString() : '';
    console.log('selectedText',selectedText)

    setSelectedText(selectedText);
  };

  return (
    <div className="selectable-text" onMouseUp={handleSelect}>
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className={`${
            selectedText.includes(word) ? 'bg-yellow-200' : ''
          } p-1`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default SelectableText;
