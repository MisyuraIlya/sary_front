import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getFirstTab = (item: ISecondModuleExercises[]) => {
    let firstTab: string = '';

    outerLoop: for (const currentItem of item) {
        const propertyName = `exercise${currentItem.exercise}`;

        for (const item2 of currentItem[propertyName].data) {
            for (const item3 of item2.collectionsRows) {
                for (const item4 of item3.collectionRow) {
                    if (item4?.module_type === 'story') {
                        firstTab = item4.collectionValues[0].value;
                        break outerLoop; 
                    }
                }
            }
        }
    }

    return firstTab;
}

export const getArrayTabs = (item: ISecondModuleExercises[]) => {
    let existStory: string[] = [];
    item.forEach((item) => {
        const propertyName = `exercise${item.exercise}`;

        item[propertyName].data.forEach((item2) => {
            item2.collectionsRows.forEach((item3) => {
                item3.collectionRow.forEach((item4) => {
                    if (item4?.module_type === 'story') {
                        const storyValue = item4.collectionValues[0].value;
                        const valueExists = existStory.includes(storyValue);
                        if (!valueExists) {
                            existStory.push(storyValue);
                        }
                    }
                });
            });
        });
    });

    return existStory;
}