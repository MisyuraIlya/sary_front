import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';

type ExplanationProps = {
  htmlTag: string;
};

const ExplanationModule: FC<ExplanationProps> = ({ htmlTag }) => {
  let replacedText = htmlTag.replaceAll(' ; ', '<br>');
  // replacedText = replacedText?.replaceAll(';', "<br/>");
  const [htmlTagNew, setHtmlTagNew] = useState<string>(replacedText);

  useEffect(() => {
    setHtmlTagNew(replacedText);
  }, [htmlTag,replacedText]);

  return (
    <div className="w-[90vw] relative pt-10 pb-10 bg-white" >
      <div className=" bg-white w-[90%] mr-[100px]">
        <div className="flex mr-10" style={{border: `1px solid #D0D0D0`, borderRadius: '5px' }}>
          <div className="text-center flex pt-1 pr-5">
              <Image src={'/images/textExpand.svg'} alt="quest" width={40} height={60} />
          </div>
          <div className='pt-4 pr-4'>
            <p className='text-[#00000099]'>הסבר  | </p>
          </div>
          <div className="text-right px-4 mr-5 fontSizeExercise">
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
