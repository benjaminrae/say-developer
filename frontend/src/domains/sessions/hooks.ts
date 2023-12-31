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
