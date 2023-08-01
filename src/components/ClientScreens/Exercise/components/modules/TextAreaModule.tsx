import React from 'react';
import { collectionRow } from '@/types/ModulesTypes.ts/FirstModule.interface';

type SelectBoxProps = {
    collection: collectionRow
}


const TextAreaModule = ({collection}: SelectBoxProps) => {
    return (
        <div>
            {collection?.collectionValues[0].value}
        </div>
    );
};

export default TextAreaModule;