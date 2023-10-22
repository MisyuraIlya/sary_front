import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

type ExplanationProps = {
  htmlTag: string;
};

const ExplanationModule: FC<ExplanationProps> = ({ htmlTag }) => {
  const replacedText = htmlTag.replace(/@/g, '<br>');

  const [htmlTagNew, setHtmlTagNew] = useState<string>(replacedText);

  useEffect(() => {
    setHtmlTagNew(replacedText);
  }, [htmlTag,replacedText]);

  return (
    <div className="w-[89vw] relative" 
    style={{
      border: `2px solid #388FF5`, 
      borderRadius: '5px' 
  }}
  >
      <div className=" bg-white w-full">
        <div className="flex mr-10">
          <div className="pt-8 pr-5">
              <Image src={'/images/textExpand.svg'} alt="quest" width={40} height={60} />
          </div>
          <div className="text-right px-4 py-4 mt-2 mr-5 fontSizeExercise">
            <div
              dangerouslySetInnerHTML={{ __html: htmlTagNew }}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplanationModule;
