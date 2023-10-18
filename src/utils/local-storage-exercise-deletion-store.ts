

export const ExerciseDeletionStoredData = {
    saveExerciseDeletionStore(pdf: string | null | undefined, link: string | null | undefined){
        if(pdf){
            localStorage.setItem('storedPdf',pdf)
        }

        if(link) {
            localStorage.setItem('storedLink', link )
        }
        
    },
    
     deleteExerciseDeletionStore(){
        localStorage.removeItem('storedPdf')
        localStorage.removeItem('storedLink')
    },

    isExistData(): {pdf: string | null, link:string | null}{
        const pdf = localStorage.getItem('storedPdf')
        const link = localStorage.getItem('storedLink')

        return {pdf, link}

    }   


}