import {ChangeEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useSearchTerms} from '../../domains/terms/hooks';
import {useDebouncedValue} from '../../hooks/useDebouncedValue';
import {Clock} from '../../shared/Icons/Clock';
import {Search} from '../../shared/Icons/Search';
import {
  TermSearchInput,
  TermSearchOpenRow,
  TermSearchResult,
  TermSearchRow,
  TermSearchStyled,
} from './TermSearch.styled';
import {useCombineSearches, useRecentSearches} from './hooks';
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

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

  const handleSearchInputChange = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setIsOpen(value.length > 0);
    setSearchInput(value);
    setSearchTerm(value);
  };

  const {data} = useSearchTerms({term: searchTerm});

  const {recentSearches, saveSearch, removeSearch} = useRecentSearches(searchTerm);

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

  function isNotLastTerm(index: number) {
    return index !== combinedSearches.length - 1;
  }

  return (
    <TermSearchStyled onSubmit={handleSearchSubmit}>
      <TermSearchRow>
        <Search color="#000"/>
        <TermSearchInput
          placeholder="Search for a term..."
          value={searchInput}
          onChange={handleSearchInputChange}
          autoCorrect="false"
          onFocus={() => setIsOpen(true)}
        />
        <Button type="submit" variant="ghost">
          Search
        </Button>
      </TermSearchRow>

      {isOpen && (
        <>
          <Separator className="my-1"/>
          {combinedSearches.map(({term, isRecent}, index) => (
            <>
              <div className="flex items-center">
                {isRecent ? <Clock color="#000" className="mr-2"/> : <Search color="#000"/>}
                <TermSearchOpenRow key={term} className="flex-1">
                  <TermSearchResult to={`/search?term=${term}`}>{term}</TermSearchResult>
                </TermSearchOpenRow>
                {isRecent && (
                  <Button variant="ghost" type="button" onClick={() => removeSearch(term)}
                          className="text-xs">
                    remove
                  </Button>
                )}
              </div>
              {isNotLastTerm(index) && <Separator className="my-1"/>
              }
            </>
          ))}
        </>
      )}
    </TermSearchStyled>
  );
};
