export const handleMergedExercise = (collectionRow: any) => {
    let mergedCollection: any = null;
    for (let i = 0; i < collectionRow.length; i++) {
      const currentObj = collectionRow[i];
      
      if (currentObj.module_type === 'mergedExercise') {
        // Make sure we have a previous and next object to merge
        if (i > 0 && i < collectionRow.length - 1) {
          const previousObj = collectionRow[i - 1];
          const nextObj = collectionRow[i + 1];
          previousObj.isMerged = true
          nextObj.isMerged = true
          // Merge the previous, current, and next objects into one
          const mergedExercise = {
            ...currentObj,
            previous: previousObj,
            next: nextObj,
          }

          // Push the merged object to the result array
          mergedCollection = mergedExercise
        }
      } else {
        // If not a 'mergedExercise', simply push it to the result array
       
      }
    }
    
    return mergedCollection;
}