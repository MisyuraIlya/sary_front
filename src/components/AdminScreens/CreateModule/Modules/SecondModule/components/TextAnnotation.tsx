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
  tokens:string[]
}

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div

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
    let currentLength = value.length
    setModal(true);
    let tokess = ['']
    let restokess = ''
    if(newValue[currentLength] && newValue[currentLength]?.tokens){
      tokess = newValue[currentLength]?.tokens
      restokess = tokess.join(' ')
    }
    if (newValue.length > 0) {
      const lastValueIndex = newValue.length - 1;
      if (value.length < newValue.length) {
        let clientChoose = '';
        clientChoose = await chooseNewTag(restokess);
        newValue[lastValueIndex].tag = clientChoose;
        newValue[lastValueIndex].color = TAG_COLORS[clientChoose];
      }

    }
    const modalElement = document.getElementById(`modal-root-${exerciseId}-${dataObjectId}-${col}-${row}`);
    if (modalElement) {
      ReactDOM.unmountComponentAtNode(modalElement);
    }
    setTag("");
    setValue(newValue);
  };

  const chooseNewTag = (tokess: string) => {
    
    return new Promise<string>((resolve) => {
      // This function will be called when an option is selected
      const handleOptionSelect = (selectedTag: string) => {
        resolve(selectedTag); // Resolve the promise with the selected option
      };

      // Render the tag options if the modal element exists
      const modalElement = document.getElementById(`modal-root-${exerciseId}-${dataObjectId}-${col}-${row}`);
      if (modalElement) {
        const newTagOptions = 
        <>
              {tokess &&
                <div className="pt-3">
                  <b>{tokess}:</b>           
                </div>
              }
              {
                draftBankCollectionValues?.map((item) => (
                  <div
                    key={item.value}
                    onClick={() => handleOptionSelect(item.value)}
                    className="p-2"
                  >
                    <div className="rounded-full flex " style={{ cursor: "pointer", padding: "4px 10px", marginBottom: "4px", backgroundColor: TAG_COLORS[item.value] }}>
                      {item.value}
                    </div>
                  </div>
                ))
              }
              
        
        </>


        ReactDOM.render(newTagOptions, modalElement);

        // Cleanup when the modal is closed or the component unmounts
        return () => {
          ReactDOM.unmountComponentAtNode(modalElement);
        };
      }
    });
  };

  return (
    <div className="w-full h-32 flex items-center px-4 relative"    style={{
      
      }}>
      <div className=""               
       >
        <Card>
          {/* {modal && ( */}

          <div className=" w-full relative top-[-20px] z-50 right-20">
            <div id={`modal-root-${exerciseId}-${dataObjectId}-${col}-${row}`} className="flex">
            </div>
          </div>
          {/* )} */}

          <TokenAnnotator
            tokens={text.split(" ")}
            value={value}
            onChange={handleChange}
            className="pr-20"
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
