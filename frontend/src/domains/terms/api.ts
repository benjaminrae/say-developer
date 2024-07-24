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

export const getFeaturedTerms = async () => {
  const data: Term[] = [
    {
      id: "f3a29b1b-7b33-4b29-9f58-1e0d041efdbc",
      raw: "Python",
      description: "A high-level, interpreted programming language known for its readability and wide usage in web development, data science, and automation.",
      phonetic: "PY-thon",
      aliases: ["Py"],
      words: [],
      createdBy: ""
    },
    {
      id: "d9d19d7d-66a6-4e39-8f7d-441aaf9ae08f",
      raw: "JavaScript",
      description: "A versatile, high-level programming language that is primarily used for creating interactive effects within web browsers.",
      phonetic: "JAH-vuh-SKRIPT",
      aliases: ["JS"],
      words: [],
      createdBy: ""
    },
    {
      id: "5f5b9ec3-daa1-4e59-b9c4-4512f49b6c91",
      raw: "Java",
      description: "A widely-used object-oriented programming language that is platform-independent and used for building applications across various devices.",
      phonetic: "JAH-vuh",
      aliases: [],
      words: [],
      createdBy: ""
    },
    {
      id: "1a9c570d-bf72-497b-8ff7-ecf1a37bbfbd",
      raw: "C++",
      description: "An extension of the C programming language, known for its performance and use in system/software development, game development, and real-time simulations.",
      phonetic: "SEE-plus-plus",
      aliases: [],
      words: [],
      createdBy: "",
    }
  ];

  return data;
}
