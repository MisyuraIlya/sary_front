import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const findOverFlowValue = (exercises : ISecondModuleExercises[]): number => {

    let value = 0;

    exercises?.map((item) => {
        const propertyName = `exercise${item.exercise}`;
        const currentExecNumber = item.exercise
        item[propertyName]?.data?.map((item,index) => {
            item.collectionsRows.map((item2,index2) => {
                item2.collectionRow.map((item3,index3) => {
                    if(item3?.module_type === 'overflow') {
                        value = +item3.collectionValues[0].value
                    }
              
                })
            })
        })
    })



    return value;

}