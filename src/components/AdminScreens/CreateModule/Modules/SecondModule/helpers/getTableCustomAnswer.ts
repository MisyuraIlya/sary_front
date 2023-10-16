import { ISecondModuleExercises, module_type } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getTableCustomAnswer = (item :ISecondModuleExercises, type : module_type) => {
    const propertyName = `exercise${item.exercise}`;
    const values = item[propertyName]?.data.flatMap((item) => {
        const collectionsRows = item.collectionsRows;
        const allRows = collectionsRows.flatMap((item2) => item2.collectionRow);
        let filteredRows = allRows.filter((item3) => item3?.module_type ===  type);
        const allValues = filteredRows.flatMap((item3) => item3.collectionAnswers);
        return allValues.flatMap((item4) => item4.value);
      });
      console.log('values',values)
      if(type === 'properties') {
        return +(values[0].split(':'))[1]
      }
      
      if(values[0]) {
        return  +values[0];
      } else {
        return 300
      }
}