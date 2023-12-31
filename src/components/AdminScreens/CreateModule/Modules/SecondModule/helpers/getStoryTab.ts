import { ISecondModuleSubExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const getStoryTab = (ISecondModuleSubExercises: ISecondModuleSubExercises): number | null => {
    let numberTab = null
    ISecondModuleSubExercises.collectionsRows?.map((item) => item.collectionRow?.map((sub) => sub?.collectionAnswers?.map((sub3) => numberTab = +sub3?.value)))
    return numberTab;
}