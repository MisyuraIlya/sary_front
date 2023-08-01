import { NextPage } from 'next'
import TableOfContents from '@/components/AdminScreens/TableOfContents/TableOfContents'
import { CourseProvider } from '@/providers/course/CourseProvider'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
import Exercise from '@/components/ClientScreens/Exercise/Exercise'
const TableOfContentsPage: NextPageAuth = () => {
    return (
        <Exercise/>
    )
}

TableOfContentsPage.isOnlyAdmin = false
TableOfContentsPage.isOnlyUser = false
export default TableOfContentsPage