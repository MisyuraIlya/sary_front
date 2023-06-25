import { NextPage } from 'next'
import TableOfContents from '@/components/AdminScreens/TableOfContents/TableOfContents'
import { CourseProvider } from '@/providers/course/CourseProvider'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import { ExerciseProvider } from '@/providers/exercise/ExerciseProvider'
import CreateModule from '@/components/AdminScreens/CreateModule/CreateModule'
const CreateExercisesPage: NextPageAuth = () => {
    return (
    <ExerciseProvider>
        <CreateModule/> 
    </ExerciseProvider>
    )
}
CreateExercisesPage.isOnlyAdmin = true
CreateExercisesPage.isOnlyUser = false
export default CreateExercisesPage