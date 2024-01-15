export type Term = {
  id: string;
  raw: string;
  words: string[];
  description: string;
  aliases: string[];
  createdBy: string;
};

export type NewTerm = {
  raw: string;
  words?: string[];
  description?: string;
  aliases?: string[];
};

export type PaginatedTerms = {
  terms: Term[];
  count: number;
  next: number;
  previous: number;
};

export type SearchTermsQuery = {
  term: string;
  limit?: number;
  offset?: number;
};
