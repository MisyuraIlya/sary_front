import React, { useState, ChangeEvent, FC, useEffect } from "react";
import { TokenAnnotator } from "react-text-annotate";
import ReactDOM from "react-dom";
import { collectionValues } from "@/types/ModulesTypes.ts/SecondModule.interface";
const TAG_COLORS: Record<string, string> = {
  'נושא / יחידת הנושא': "#FFDB50",
  'נושא': "#A5EEA8",
  'נשוא': "#A5EEA8",
  'נושא + נשוא': '#A1E1F5',
  'נשוא מורחב': '#B6CFFF',
  'תמורה': '#CFFF93',
  'מילת קישור': '#D8DDEB',
  'נושא סתמי + נשוא': '#FED3FA',
  'מושא / יחידת המושא': '#EEA5B6',
  'תיאור / יחידת התיאור': '#E7D0DE',
  'לוואי': '#FFEAB6',
  'פסוקית': '#D0E7E3',
  'מילת שעבוד': '#CDFFEA',
  'איבר א': '#79BFFF',
  'איבר ב': '#B4DBFF',
  'אוגד': '#62FEEB',

};

interface Span {
  start: number;
  end: number;
  tag: string;
  color:string;
}

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div
    style={{
      boxShadow: "0 2px 4px rgba(0,0,0,.1)",
      margin: 6,
      maxWidth: 500,
      padding: 16,
    }}
  >
    {children}
  </div>
);

type TextAnnotationProps = {
  draftBankCollectionValues: collectionValues[];
  text: string;
  row: any
  col: any
  exerciseId: number
  dataObjectId: number
};

const TextAnnotation: FC<TextAnnotationProps> = ({ draftBankCollectionValues, text, row, col, exerciseId, dataObjectId }) => {
  const [value, setValue] = useState<Span[]>([]);
  const [tag, setTag] = useState<string>("");
  const [modal, setModal] = useState(false);

  const handleChange = async (newValue: Span[]) => {
    setModal(true);
  
    if (newValue.length > 0) {
      const lastValueIndex = newValue.length - 1;
      if (value.length < newValue.length) {
        let clientChoose = '';
        clientChoose = await chooseNewTag();
        newValue[lastValueIndex].tag = clientChoose;
        newValue[lastValueIndex].color = TAG_COLORS[clientChoose];
        console.log('newValue',newValue)
      }

    }
  
    const modalElement = document.getElementById(`modal-root-${exerciseId}-${dataObjectId}-${col}-${row}`);
    if (modalElement) {
      ReactDOM.unmountComponentAtNode(modalElement);
    }
    setTag("");
    setValue(newValue);
  };

  const chooseNewTag = () => {
    return new Promise<string>((resolve) => {
      // This function will be called when an option is selected
      const handleOptionSelect = (selectedTag: string) => {
        resolve(selectedTag); // Resolve the promise with the selected option
      };

      // Render the tag options if the modal element exists
      const modalElement = document.getElementById(`modal-root-${exerciseId}-${dataObjectId}-${col}-${row}`);
      if (modalElement) {
        const tagOptions = draftBankCollectionValues.map((item) => (
          <div
            key={item.value}
            onClick={() => handleOptionSelect(item.value)}
            className="p-2"
          >
            <div className="rounded-full flex " style={{ cursor: "pointer", padding: "4px 10px", marginBottom: "4px", backgroundColor: TAG_COLORS[item.value] }}>
              {item.value}
            </div>

          </div>
        ));

        ReactDOM.render(tagOptions, modalElement);

        // Cleanup when the modal is closed or the component unmounts
        return () => {
          ReactDOM.unmountComponentAtNode(modalElement);
        };
      }
    });
  };

  return (
    <div style={{ padding: 24, fontFamily: "IBM Plex Sans" }} className="">
      <div style={{ display: "flex", marginBottom: 24 }}>
        <Card>
          {/* {modal && ( */}
          <div className=" w-full absolute top-14">
            <div id={`modal-root-${exerciseId}-${dataObjectId}-${col}-${row}`} className="flex"></div>
          </div>
          {/* )} */}

          <TokenAnnotator
            style={{
              maxWidth: 500,
              lineHeight: 1.5,
            }}
            tokens={text.split(" ")}
            value={value}
            onChange={handleChange}
            className=""
            getSpan={(span) => ({
              ...span,
              tag: tag,
              color: TAG_COLORS[tag],
            })}
          />
        </Card>
      </div>
    </div>
  );
};

export default TextAnnotation;
