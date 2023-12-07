import { ISecondModule, ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const findScreenWidth = (exercises: ISecondModule) => {
    let screenLeft = 6;
    let screenRight = 6;


    (exercises as any)?.exercises?.map((item: ISecondModuleExercises) => {
        const propertyName = `exercise${item.exercise}`;
        const draftBankCollectionValues = item[propertyName]?.data.map((subItem) =>
        subItem.collectionsRows.map((rows) =>
            rows.collectionRow
            .map((row) => {
                if(row?.module_type === 'splitedScreenLeft'){
                    screenLeft = +row?.collectionValues[0].value 
                }

                if(row?.module_type === 'splitedScreenRight') {
                    screenRight = +row?.collectionValues[0].value 
                }
            })
        )
        );
    })

    return {screenLeft, screenRight}
}