import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getStroryNumber = (item :ISecondModuleExercises) => {
    const propertyName = `exercise${item.exercise}`;
    const values = item[propertyName]?.data.flatMap((item) => {
        const collectionsRows = item.collectionsRows;
        const allRows = collectionsRows.flatMap((item2) => item2.collectionRow);
        let filteredRows = allRows.filter((item3) => item3?.module_type ===  'story');
        console.log('filteredRows',filteredRows)
        const allValues = filteredRows.flatMap((item3) => item3.collectionValues);
        return allValues.flatMap((item4) => item4.value);
      });
      console.log('as',values)
      if(values[0]) {
        return  +values[0];
      } else {
        return 1
      }
}

