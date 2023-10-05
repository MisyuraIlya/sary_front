import { ISecondModuleExercises, module_type } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getPropertiesValue = (item :ISecondModuleExercises, type : module_type, typeHewbrew: string) => {
    const propertyName = `exercise${item.exercise}`;
    const values = item[propertyName]?.data.flatMap((item) => {
        const collectionsRows = item.collectionsRows;
        const allRows = collectionsRows.flatMap((item2) => item2.collectionRow);
        let filteredRows = allRows.filter((item3) => item3?.module_type ===  type);
        const allValues = filteredRows.flatMap((item3) => item3.collectionValues);
        return allValues.flatMap((item4) => item4.value);
      });


    let data = (values[0].split(';'))
    let res = '';

    data?.map((item) => {
        const splited = item.split(':')
        if(typeHewbrew == splited[0].trim()){
            res = splited[1];
        }
    })
    return +res ;
}