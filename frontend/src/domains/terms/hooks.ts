import { UseQueryOptions, useQuery } from 'react-query';
import { QUERY_KEYS } from '../../libs/react-query';
import { searchTerms } from './api';
import { Term } from './types';

export const useSearchTerms = (term: string, options?: UseQueryOptions<Term[]>) => {
  return useQuery<Term[]>([QUERY_KEYS.SEARCH_TERMS, term], () => searchTerms(term), options);
};
