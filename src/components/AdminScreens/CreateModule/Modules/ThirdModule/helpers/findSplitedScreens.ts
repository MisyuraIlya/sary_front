import { ISecondModuleExercises, ISecondModuleSubExercises } from "@/types/ModulesTypes.ts/SecondModule.interface";

export const findSplitedScreens = (exercises : ISecondModuleExercises[]) => {
    const resRight: ISecondModuleExercises[] = [];
    const resLeft: ISecondModuleExercises[] = [];
    const resRegular: ISecondModuleExercises[] = [];
    
    exercises.map((exerc, key) => {
        const rightArr = splitedScreenHandler(exercises, +exerc.exercise, 'splitedScreenRight','doneSplitedScreenRight')
        const leftArr = splitedScreenHandler(exercises, +exerc.exercise, 'splitedScreenLeft', 'doneSplitedScreenLeft')
        if(rightArr) {
            resRight.push(exerc)
        } else if(leftArr) { 
            resLeft.push(exerc)
        } else {
            resRegular.push(exerc)
        }

    })

    
    return {resRight, resLeft, resRegular}
}



const splitedScreenHandler = (exercises : ISecondModuleExercises[],exerciseNumber: number, moduleTypeStart: string, moduleTypeDone: string ): boolean => {
    let starts = 0
    let ends = 0 
    exercises?.map((item) => {
        const propertyName = `exercise${item.exercise}`;
        const currentExecNumber = item.exercise
        item[propertyName]?.data?.map((item,index) => {
            item.collectionsRows.map((item2,index2) => {
                item2.collectionRow.map((item3,index3) => {
                    if(item3?.module_type === moduleTypeStart) {
                        starts = +currentExecNumber
                    }
                    if(item3?.module_type === moduleTypeDone) {
                        ends = +currentExecNumber
                    }
                })
            })
        })
    })

    if (starts <= exerciseNumber && exerciseNumber <= ends) {
        return true;
    } else {
        return false;
    }
    
}
