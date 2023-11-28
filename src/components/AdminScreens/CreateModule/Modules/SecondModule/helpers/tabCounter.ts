import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const tabCounter = (item: ISecondModuleExercises[]): number => {
    let counter = 0;
    item.map((item) => {
        const propertyName = `exercise${item.exercise}`;
        item[propertyName].data.map((item2) => {
            item2.collectionsRows.map((item3) => {
                item3.collectionRow.map((item4) => {
                    if(item4?.module_type === 'story'){
                        counter = +item4.collectionValues[0].value
                    }
                })
            })
        })
    })
    return counter
}   