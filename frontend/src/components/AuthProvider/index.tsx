import { PropsWithChildren, useMemo } from 'react';
import { useSession } from '../../domains/sessions/hooks';
import { AuthContext } from './context';
import { AuthStore } from './types';
import { User } from '../../domains/sessions/types';

type AuthProviderProps = PropsWithChildren;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { data, isLoading, isError, error, isSuccess } = useSession();

  const value = useMemo<AuthStore>(() => {
    const user: User | undefined = isSuccess ? data?.user : undefined;

    console.log(data?.user);
    console.log(isSuccess);

    return {
      user: user,
      error: isError ? (error as Error) : undefined,
      isError: isError,
      isLoading: isLoading,
      isAuthenticated: user?.provider !== undefined,
    };
  }, [data, error, isError, isLoading, isSuccess]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
