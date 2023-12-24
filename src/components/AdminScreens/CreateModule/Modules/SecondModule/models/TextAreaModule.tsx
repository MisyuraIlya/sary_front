import React, {FC, useEffect,useRef} from 'react';
import RichTextEditor from '../components/RichTextEditor';
import ToolTip from '../ToolTip';
import { Collection } from '@/types/ModulesTypes.ts/FirstModule.interface';
type TextAreaModule2Props = {
    col: any;
    row: any;
    setValue: any
    exerciseId: number
    dataObjectId: number
    checkIsThereImage: boolean
    isTable: boolean
    answer: Collection[]
    placeholder: string
    isClearTable: boolean
    CustomTableWidth: number
    textAreaWidth: number
}

const TextAreaModule2: FC<TextAreaModule2Props> = ({
  CustomTableWidth,
  setValue,
  exerciseId,
  dataObjectId,
  col,
  row,
  checkIsThereImage,
  isTable,
  answer,
  placeholder,
  isClearTable,
  textAreaWidth
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].orden`, row);
    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].module_type`, 'textArea');
    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].isFullText`, false);
    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].placeholder`, placeholder);
    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionValues`, []);
    setValue(`exercises.${exerciseId}.data[${dataObjectId}].collectionsRows[${col}].collectionRow[${row}].collectionAnswers`, answer);
  }, [col, row, setValue, exerciseId, dataObjectId,placeholder,answer]);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
        const newHeight = textarea.scrollHeight + 'px';
        const tableRow = textarea.parentNode!.parentNode! as HTMLTableRowElement;
        tableRow.style.height = newHeight;
      }
  }, [col, row, setValue, exerciseId, dataObjectId, placeholder, answer]);
  console.log('textAreaWidthh',textAreaWidth)
  return (
    <th style={{ height: '100%' }}>
      <label className="input-sizer stacked bg-white" style={{width:textAreaWidth ? `${textAreaWidth}px` :  '350px'}}>
        <textarea
          ref={textareaRef}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            (target.parentNode as HTMLElement).dataset.value = target.value;
          }}
          rows={1}
          placeholder={placeholder}
        ></textarea>
      </label>
    </th>
  );
};

export default TextAreaModule2;
