import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const tabCounter = (item: ISecondModuleExercises[]): number => {
    let counter = 0;
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
                            counter++;
                        }
                    }
                });
            });
        });
    });

    return counter;
}   