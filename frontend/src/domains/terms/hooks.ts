import {useMutation, useQuery, UseQueryOptions} from 'react-query';
import {QUERY_KEYS} from '@/libs/react-query';
import {
  createTerm,
  getFeaturedTerms,
  getRecentTerms,
  getTerm,
  getTermWithPronunciations,
  searchTerms
} from './api';
import {PaginatedTerms, SearchTermsQuery, Term, TermWithPronunciations} from './types';

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

export const useGetTerm = (term: string, options?: UseQueryOptions<Term>) => {
  return useQuery([QUERY_KEYS.GET_TERMS, term, options], () => getTerm(term));
};


export const useGetTermWithPronunciations = (term: string, options?: UseQueryOptions<TermWithPronunciations>) => {
  return useQuery([QUERY_KEYS.GET_TERM_WITH_PRONUNCIATIONS, term, options], () => getTermWithPronunciations(term))
}

export const useGetRecentTerms = (options?: UseQueryOptions<string[]>) => {
  return useQuery([QUERY_KEYS.GET_RECENT_TERMS, options], () => getRecentTerms());
}

export const useGetFeaturedTerms = (options?: UseQueryOptions<Term[]>) => {
  return useQuery([QUERY_KEYS.GET_FEATURED_TERMS, options], getFeaturedTerms);
}
