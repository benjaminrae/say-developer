import { UseQueryOptions, useQuery } from 'react-query';
import { Session } from './types';

import { QUERY_KEYS } from '../../libs/react-query';
import { getCurrentSession } from './api';

export const useSession = (options?: UseQueryOptions<Session | undefined>) => {
  return useQuery<Session | undefined>(
    [QUERY_KEYS.GET_SESSION],
    () => getCurrentSession(),
    options,
  );
};

export const useAuthRedirect = () => {
  const loginWithGoogle = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  const loginWithGithub = () => {
    window.location.href = 'http://localhost:3000/auth/github';
  };
  const logoutProvider = (provider: string) => {
    window.location.href = `http://localhost:3000/logout/${provider}`;
  };

  return { loginWithGoogle, loginWithGithub, logoutProvider } as const;
};
