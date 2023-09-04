import { collectionRow } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getFirstTextModuleIdInArray = (arr: collectionRow[]) => {
    let res = '';
    for(let i = 0; i < arr.length ; i++) {
        if(arr[i].module_type === 'text'){
             res = arr[i]?.collectionValues[0]?.value;
             if (i === arr.length - 1) {
                res = '';
            }
        }

    }
    return res;
}