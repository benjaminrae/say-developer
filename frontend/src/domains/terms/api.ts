import {sayDeveloperRequest} from '../api/request';
import {NewTerm, PaginatedTerms, SearchTermsQuery, Term, TermWithPronunciations} from './types';
import {isAxiosError} from "axios";

import {TermAlreadyExistsError} from "./errors/TermAlreadyExistsError.ts";

export const searchTerms = async (query: SearchTermsQuery): Promise<PaginatedTerms> => {
  const params = new URLSearchParams();
  params.append('term', query.term);
  params.append('limit', query.limit?.toString() || '10');
  params.append('offset', query.offset?.toString() || '0');

  const {data} = await sayDeveloperRequest.get<PaginatedTerms>(`/terms?${params.toString()}`);

  return data;
};

export const createTerm = async (newTerm: NewTerm) => {
  try {
    const {data} = await sayDeveloperRequest.post<void>('/terms', newTerm);

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 409) {
        throw new TermAlreadyExistsError(error.response.data);
      }
    }

    throw error;
  }
};

export const getTerms = async () => {
  const {data} = await sayDeveloperRequest.get<Term[]>('/terms');

  return data;
};

export const getTerm = async (term: string) => {
  const {data} = await sayDeveloperRequest.get<Term>(`/terms/${term}`);

  return data;
};

export const getTermWithPronunciations = async (term: string) => {
  const {data} = await sayDeveloperRequest.get<TermWithPronunciations>(`/terms/${encodeURIComponent(term)}/pronunciations`);

  return data;
}

export const getRecentTerms = async () => {
  const {data} = await sayDeveloperRequest.get<string[]>('/terms/recent');

  return data
}
