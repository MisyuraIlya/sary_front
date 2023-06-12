import { NextPage } from 'next'
import TableOfContents from '@/components/AdminScreens/TableOfContents/TableOfContents'
import { CourseProvider } from '@/providers/course/CourseProvider'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import CreateModule from '@/components/AdminScreens/CreateModule/CreateModule'
import { ExerciseProvider } from '@/providers/exercise/ExerciseProvider'
const CreateModulePage: NextPageAuth = () => {
    return (
    <ExerciseProvider>
        <CreateModule/>
    </ExerciseProvider>
    )
}
CreateModulePage.isOnlyAdmin = true
export default CreateModulePage