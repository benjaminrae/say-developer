import { sayDeveloperRequest } from '../api/request';
import { NewTerm, PaginatedTerms, SearchTermsQuery, Term } from './types';

export const searchTerms = async (query: SearchTermsQuery): Promise<PaginatedTerms> => {
  const params = new URLSearchParams();
  params.append('term', query.term);
  params.append('limit', query.limit?.toString() || '10');
  params.append('offset', query.offset?.toString() || '0');

  const { data } = await sayDeveloperRequest.get<PaginatedTerms>(`/terms?${params.toString()}`);

  return data;
};

export const createTerm = async (newTerm: NewTerm) => {
  const { data } = await sayDeveloperRequest.post<Term>('/terms', newTerm);

  return data;
};

export const getTerms = async () => {
  const { data } = await sayDeveloperRequest.get<Term[]>('/terms');

  return data;
};
