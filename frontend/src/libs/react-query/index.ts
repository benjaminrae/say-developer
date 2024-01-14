import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export const QUERY_KEYS = {
  GET_SESSION: 'GET_SESSION',

  SEARCH_TERMS: 'SEARCH_TERMS',
  GET_TERMS: 'GET_TERMS',
  CREATE_TERM: 'CREATE_TERM',
} as const;

const queryKeyValues = Object.values(QUERY_KEYS);

if (new Set(queryKeyValues).size !== queryKeyValues.length) {
  throw new Error('Duplicate QUERY_KEYS');
}
