import { useCallback, useEffect, useState } from 'react';
import { Term } from '../../domains/terms/types';
import {
  clearRecentSearches,
  getRelatedRecentSearches,
  removeRecentSearch,
  saveRecentSearch,
} from './logic.helper';
import { TermSearchSuggestion } from './types';

export const useRecentSearches = (currentSearch?: string) => {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const loadSearches = useCallback(() => {
    setRecentSearches(getRelatedRecentSearches(currentSearch || ''));
  }, [currentSearch]);

  const refreshSearches = () => {
    setRecentSearches(getRelatedRecentSearches(currentSearch || ''));
  };

  const removeSearch = (search: string) => {
    removeRecentSearch(search);
    loadSearches();
  };

  const saveSearch = (search: string) => {
    saveRecentSearch(search);
    refreshSearches();
  };

  const clearSearches = () => {
    clearRecentSearches();
    refreshSearches();
  };

  useEffect(() => {
    loadSearches();
  }, [loadSearches]);

  return {
    recentSearches,
    loadSearches,
    removeSearch,
    saveSearch,
    clearSearches,
  };
};

export const useCombineSearches = (
  recentSearches: string[],
  searches: Term[]
): TermSearchSuggestion[] => {
  const combinedSearches: TermSearchSuggestion[] = [
    ...recentSearches.map((term) => ({ term, isRecent: true })),
    ...(searches?.map((term) => ({ term: term.raw, isRecent: false })) || []),
  ];

  const uniqueSearches = combinedSearches.filter(
    (search, index, searches) => index === searches.findIndex((s) => s.term === search.term)
  );

  return uniqueSearches;
};
