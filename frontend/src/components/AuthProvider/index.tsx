import { PropsWithChildren, useMemo } from 'react';
import { useSession } from '../../domains/sessions/hooks';
import { AuthContext } from './context';
import { AuthStore } from './types';

type AuthProviderProps = PropsWithChildren;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isLoading, isError, error, isSuccess } = useSession();

  const value = useMemo<AuthStore>(() => {
    return {
      user: isSuccess ? data : undefined,
      error: isError ? (error as Error) : undefined,
      isError: isError,
      isLoading: isLoading,
      isAuthenticated: data?.provider !== undefined,
    };
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
