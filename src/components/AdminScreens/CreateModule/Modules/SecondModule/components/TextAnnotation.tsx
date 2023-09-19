import React, { useState, ChangeEvent } from "react";
import { TokenAnnotator, TextAnnotator } from "react-text-annotate";

const TEXT = "העירייה חילקה חבילות שי לחג לאזרחיה הותיקים"
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
  

const TextAnnotation = () => {

    const [value, setValue] = useState<Span[]>([]);
    const [tag, setTag] = useState<string>("נושא");

    const handleChange = (newValue: Span[]) => {
        setValue(newValue);
    };

    const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTag(e.target.value);
    };

    const handleTokenClick = (start: number, end: number) => {
        // Handle token click by setting the tag for the selected text
        const selectedText = TEXT.slice(start, end);
        const tag = prompt(`Enter a tag for "${selectedText}":`);
        if (tag) {
          const newSpan = { start, end, tag };
          setValue((prevValue) => [...prevValue, newSpan]);
        }
      };
      


    return (
        <div style={{ padding: 24, fontFamily: "IBM Plex Sans" }}>
        <div style={{ display: "flex", marginBottom: 24 }}>
          <Card>

            <select onChange={handleTagChange} value={tag}>
              <option value="נושא">נושא</option>
              <option value="נשוא">נשוא</option>
            </select>
            
            <TokenAnnotator
              style={{
                maxWidth: 500,
                lineHeight: 1.5,
              }}
              tokens={TEXT.split(" ")}
              value={value}
              onChange={handleChange}
              className=""
            
              getSpan={(span) => ({
                ...span,
                tag: tag,
                color: TAG_COLORS[tag],
                
              })
            }
            />
          </Card>
        </div>
        {/* <Card>
          <pre>{JSON.stringify(value, null, 2)}</pre>
        </Card> */}
      </div>
    );
};

export default TextAnnotation;