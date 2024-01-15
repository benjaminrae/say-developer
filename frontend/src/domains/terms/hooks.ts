import { UseQueryOptions, useMutation, useQuery } from 'react-query';
import { QUERY_KEYS } from '../../libs/react-query';
import { createTerm, searchTerms } from './api';
import { PaginatedTerms, SearchTermsQuery } from './types';

export const useSearchTerms = (
  query: SearchTermsQuery,
  options?: UseQueryOptions<PaginatedTerms>
) => {
  return useQuery<PaginatedTerms>(
    [QUERY_KEYS.SEARCH_TERMS, query],
    () => searchTerms(query),
    options
  );
};

export const useCreateTerm = () => {
  return useMutation(createTerm);
};
