import React from 'react';
import { collectionRow } from '@/types/ModulesTypes.ts/SecondModule.interface';
type TextModuleProps = {
    collection: collectionRow
}

const TextModule = ({collection}: TextModuleProps) => {
    return (
        <>
        <div 
        contentEditable 
        // onInput={handleInputChange} 
        dangerouslySetInnerHTML={{ __html: collection?.collectionValues[0].value }}
        className='text-right pr-5 pl-5'
        />

        </>
    );
};

export default TextModule;