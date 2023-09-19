import React, { useState, ChangeEvent, FC, useEffect } from "react";
import { TokenAnnotator } from "react-text-annotate";
import ReactDOM from "react-dom";
import { collectionValues } from "@/types/ModulesTypes.ts/SecondModule.interface";
const TAG_COLORS: Record<string, string> = {
  נושא: "#A5EEA8",
  נשוא: "#FFDB50",
};

interface Span {
  start: number;
  end: number;
  tag: string;
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
};

const TextAnnotation: FC<TextAnnotationProps> = ({ draftBankCollectionValues, text }) => {
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
      }

    }
  
    const modalElement = document.getElementById("modal-root");
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
      const modalElement = document.getElementById("modal-root");
      console.log('modalElement', modalElement)
      if (modalElement) {
        const tagOptions = draftBankCollectionValues.map((item) => (
          <div
            key={item.value}
            onClick={() => handleOptionSelect(item.value)}
            style={{ cursor: "pointer", padding: "4px 8px", marginBottom: "4px", backgroundColor: TAG_COLORS[item.value] }}
          >
            {item.value}
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
    <div style={{ padding: 24, fontFamily: "IBM Plex Sans" }}>
      <div style={{ display: "flex", marginBottom: 24 }}>
        <Card>
          {/* {modal && ( */}
          <div>
            <p>Select a tag:</p>
            <div id="modal-root"></div>
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
