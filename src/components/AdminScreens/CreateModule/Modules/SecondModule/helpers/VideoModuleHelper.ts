import { ISecondModuleSubExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getVideoValue = (data: ISecondModuleSubExercises[]) => {
    const values = data.flatMap((item) => {
        const collectionsRows = item.collectionsRows;
        const allRows = collectionsRows.flatMap((item2) => item2.collectionRow);
        let filteredRows = allRows.filter((item3) => item3?.module_type ===  'videoRight');
        if(filteredRows.length === 0 ) {
          filteredRows = allRows.filter((item3) => item3?.module_type ===  'videoLeft');
        }
        const allValues = filteredRows.flatMap((item3) => item3.collectionValues);
        return allValues.flatMap((item4) => item4.value);
      });

      return values[0]
}

export const getVideoId = (data: ISecondModuleSubExercises[]) => {
    const values = data.flatMap((item) => {
        const collectionsRows = item.collectionsRows;
        const allRows = collectionsRows.flatMap((item2) => item2?.collectionRow);
        let filteredRows = allRows.filter((item3) => item3?.module_type ===  'videoRight');
        if(filteredRows.length === 0) {
          filteredRows = allRows.filter((item3) => item3?.module_type ===  'videoLeft');
        }
        return filteredRows.flatMap((item3) => item3.id);
      });

      return values[0]
}