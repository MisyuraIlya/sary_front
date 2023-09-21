import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"
import { useRouter } from "next/router"
export const useAuthRedirect = () => {
    const {user} = useAuth()

    const {replace} = useRouter()

    useEffect(() => {
      console.log('user',user)
        if (user?.userType?.title === 'admin') {
          replace('/admin/tableOfContents')
        } 
        if (user?.userType?.title === 'student') {
          replace('/')
        }
      }, [user, replace])
}