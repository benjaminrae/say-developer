import { MAX_RECENT_SEARCHES, RECENT_SEARCHES_STORAGE_KEY } from './constants';

export const saveRecentSearch = (search: string) => {
  const recentSearches = getRecentSearches();

  const newRecentSearches = [search, ...recentSearches].slice(0, MAX_RECENT_SEARCHES);
  localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(newRecentSearches));
};

export const getRecentSearches = (): string[] => {
  try {
    const recentSearches = localStorage.getItem(RECENT_SEARCHES_STORAGE_KEY);

    if (recentSearches) {
      return JSON.parse(recentSearches);
    }

    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const clearRecentSearches = () => {
  localStorage.removeItem(RECENT_SEARCHES_STORAGE_KEY);
};

export const getRelatedRecentSearches = (search: string): string[] => {
  const recentSearches = getRecentSearches();

  const relatedRecentSearches = recentSearches.filter((recentSearch) => {
    return recentSearch.includes(search);
  });

  return relatedRecentSearches;
};

export const removeRecentSearch = (search: string) => {
  const recentSearches = getRecentSearches();
  const newRecentSearches = recentSearches.filter((recentSearch) => {
    return recentSearch !== search;
  });
  localStorage.setItem(RECENT_SEARCHES_STORAGE_KEY, JSON.stringify(newRecentSearches));
};
