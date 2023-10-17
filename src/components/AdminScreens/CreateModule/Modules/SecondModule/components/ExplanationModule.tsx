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
    <div className="h-[250px] w-full">
      <div
        className="absolute h-[250px] bg-white w-full"
        style={{
          border: '2px solid #388FF5',
          borderRadius: '5px',
        }}
      >
        <div className="flex mr-10">
          <div className="pt-5 pr-5">
            <div style={{ background: '#BACEE9' }} className="rounded-full w-[45px] px-4 py-3">
              <Image src={'/images/quest.svg'} alt="quest" width={12} height={12} />
            </div>
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
