import { NextPage } from 'next'
import TableOfContents from '@/components/AdminScreens/TableOfContents/TableOfContents'
import { CourseProvider } from '@/providers/course/CourseProvider'
import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'
const TableOfContentsPage: NextPageAuth = () => {
    return (
    <CourseProvider>
        <TableOfContents/>
    </CourseProvider>
    )
}

TableOfContentsPage.isOnlyAdmin = true
TableOfContentsPage.isOnlyUser = false
export default TableOfContentsPage