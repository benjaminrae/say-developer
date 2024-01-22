import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchTerms } from '../../domains/terms/hooks';
import { useDebouncedValue } from '../../hooks/useDebouncedValue';
import { Button } from '../../shared/Button';
import { Divider } from '../../shared/Divider';
import { Clock } from '../../shared/Icons/Clock';
import { Search } from '../../shared/Icons/Search';
import {
  TermSearchInput,
  TermSearchOpenRow,
  TermSearchResult,
  TermSearchRow,
  TermSearchStyled,
} from './TermSearch.styled';
import { useCombineSearches, useRecentSearches } from './hooks';

export type TermSearchResult = {
  term: string;
  isRecent: boolean;
};

export const TermSearch = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useDebouncedValue('');
  const [isDirty, setIsDirty] = useState(false);

  const handleSearchInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setIsOpen(value.length > 0);
    setSearchInput(value);
    setSearchTerm(value);
  };

  const { data } = useSearchTerms({ term: searchTerm });

  const { recentSearches, saveSearch, removeSearch } = useRecentSearches(searchTerm);

  const combinedSearches = useCombineSearches(recentSearches, data?.terms || []);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isDirty) {
      return;
    }

    if (searchInput === '') {
      return;
    }
    saveSearch(searchInput);
    navigate(`/search?term=${searchInput}`);
  };

  return (
    <TermSearchStyled onSubmit={handleSearchSubmit}>
      <TermSearchRow>
        <Search color="#000" />
        <TermSearchInput
          placeholder="Search for a term..."
          value={searchInput}
          onChange={handleSearchInputChange}
          autoCorrect="false"
          onFocus={() => setIsOpen(true)}
        />
        <Button type="submit" variant="ghost" className="term-search__button">
          Search
        </Button>
      </TermSearchRow>

      {isOpen && (
        <>
          <Divider />
          {combinedSearches.map(({ term, isRecent }) => (
            <TermSearchOpenRow key={term}>
              {isRecent ? <Clock color="#000" /> : <Search color="#000" />}
              <TermSearchResult to={`/search?term=${term}`}>{term}</TermSearchResult>
              {isRecent && (
                <Button variant="ghost" type="button" onClick={() => removeSearch(term)} size="sm">
                  remove
                </Button>
              )}
            </TermSearchOpenRow>
          ))}
        </>
      )}
    </TermSearchStyled>
  );
};
