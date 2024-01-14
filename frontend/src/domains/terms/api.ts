import { sayDeveloperRequest } from '../api/request';
import { NewTerm, Term } from './types';

export const searchTerms = async (query: string): Promise<Term[]> => {
  const params = new URLSearchParams();
  params.append('term', query);

  const { data } = await sayDeveloperRequest.get<Term[]>(`/terms?${params.toString()}`);

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
