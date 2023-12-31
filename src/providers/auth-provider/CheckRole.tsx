import {FC, PropsWithChildren} from 'react'
import { TypeComponentAuthFields } from './auth-page.types'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { Links } from '@/screens/auth/enum'
const CheckRole: FC<PropsWithChildren<TypeComponentAuthFields>> = ({Component: {
    isOnlyUser, isOnlyAdmin
},children}) => {
    const {user} = useAuth()
    const router = useRouter()
    if (user) {
      if (isOnlyUser && !isOnlyAdmin) {
        // User is logged in and only users are allowed
        return <>{children}</>;
      } else if (!isOnlyUser && isOnlyAdmin ) {
        // User is logged in and is an admin
        return <>{children}</>;
      }
    }
    router.pathname !== Links.SIGN_IN_STUDENT && router.replace(`${Links.SIGN_IN_STUDENT}`)
    return null
}

export default CheckRole