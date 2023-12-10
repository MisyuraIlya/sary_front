import { ISecondModuleExercises, collectionValues, collectionsCols } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getBankArr = (item: ISecondModuleExercises) => {
    const bankValues: collectionValues[] = [];
    const propertyName = `exercise${item.exercise}`;
    item[propertyName].data.map((data1) => {
        data1.collectionsRows.map((data2) => {
            data2.collectionRow.map((data3) => {
                if(data3?.module_type === 'bank') {
                    data3.collectionValues.map((data4) => {
                        bankValues.push(data4)
                    })
                }
            })
        })
    })
  
    return bankValues;
}

export const getColumns = (item: ISecondModuleExercises) => {
    const columns: collectionsCols[] = [];
    const propertyName = `exercise${item.exercise}`;

    item[propertyName].data.map((data1) => {
        data1.collectionsCols.map((data2) => {
            if(data2.type === 'גרירה') {
                data2.questionIds = []
                columns.push(data2)
            }
        })
    })

    return columns;
}

export const getDragModuleData = (item: ISecondModuleExercises) => {
    const bankArr = getBankArr(item)
    const columns = getColumns(item)
    let obj = {
        id:999999,
        orden: 0,
        type:'bank',
        title:'מחסן מילים',
        questionIds: bankArr
    }
    columns.unshift(obj)
    return columns;
}