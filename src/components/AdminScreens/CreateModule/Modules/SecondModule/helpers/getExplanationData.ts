import { collectionsRows } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getExplanationData = (collectionsRows: collectionsRows): string => {
    let value = '';
    collectionsRows?.collectionRow?.forEach((item) => {
        if (item?.collectionValues?.[0]?.value) {
            value = item.collectionValues[0].value;
        }
    });

    return value;
};