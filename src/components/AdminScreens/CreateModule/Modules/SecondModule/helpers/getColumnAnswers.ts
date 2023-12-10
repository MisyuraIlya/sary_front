import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface"

export const getColumnAnswers = (orden: number, item:ISecondModuleExercises) => {
    const result: string[] = []
    const propertyName = `exercise${item.exercise}`;
    item[propertyName].data.map((data1) => {
        data1.collectionsRows.map((data2) => {
            data2.collectionRow.map((data3) => {
                if(data3?.module_type === 'mixDrag' && data3.orden === orden) {
                    data3.collectionAnswers.map((data4) => {
                        result.push(data4.value)
                    })
                }
            })
        })
    })
    return result
}