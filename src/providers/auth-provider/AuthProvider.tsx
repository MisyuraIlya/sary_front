import { FC, PropsWithChildren, useEffect } from 'react';
import { TypeComponentAuthFields } from './auth-page.types';
import dynamic from 'next/dynamic';
import { useAuth } from '@/hooks/useAuth';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';
import { getAccessToken } from '@/services/auth/auth.helper';
import Cookies from 'js-cookie';
const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
  Component: { isOnlyUser, isOnlyAdmin },
  children,
}) => {
  const { user } = useAuth();
  const { checkAuth, logout } = useActions();
  
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = getAccessToken();
    if (accessToken) {
      checkAuth();
    }
  }, [checkAuth]);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken && user) {
      logout();
    }
  }, [logout, user]);


  return (
    <>
      {isOnlyUser || isOnlyAdmin ? (
        <DynamicCheckRole Component={{ isOnlyUser, isOnlyAdmin }}>{children}</DynamicCheckRole>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthProvider;
