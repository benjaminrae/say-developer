import { Link, useSearchParams } from 'react-router-dom';
import { Page } from '../../components/Page';
import { TermSearch } from '../../components/TermSearch';
import { useSearchTerms } from '../../domains/terms/hooks';
import { Divider } from '../../shared/Divider';

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  const term = searchParams.get('term');

  const { data } = useSearchTerms({ term: term ?? '' });

  return (
    <Page pageTitle={`${term} - Search`}>
      <TermSearch />
      <h1>{term}</h1>
      <span>{data?.count} results found</span>
      <Divider />
      {data?.count && (
        <ul>
          {data?.terms.map((term) => (
            <li key={term.id}>{term.raw}</li>
          ))}
        </ul>
      )}

      <p>Can't find what you're looking for?</p>
      <Link to={`/new-term?term=${term}`}>Request "{term}" be added to Say.dev</Link>
    </Page>
  );
};
