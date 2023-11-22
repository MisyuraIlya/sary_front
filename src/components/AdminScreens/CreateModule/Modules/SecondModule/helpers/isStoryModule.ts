import { ISecondModuleExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const isStoryFunc = (item: ISecondModuleExercises[]): boolean => {
    let isStory = false;
    item.map((item) => {
        const propertyName = `exercise${item.exercise}`;
        item[propertyName].data.map((item2) => {
            item2.collectionsRows.map((item3) => {
                item3.collectionRow.map((item4) => {
                    if(item4.module_type === 'story' || item4.module_type === 'storyHeadline'){
                        isStory = true
                    }
                })
            })
        })
    })
    return isStory
}   