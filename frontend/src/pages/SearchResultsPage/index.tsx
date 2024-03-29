import { useSearchParams } from 'react-router-dom';
import { Link } from '../../components/Link';
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
      {data?.count! > 0 && (
        <ul>
          {data?.terms.map((term) => (
            <li key={term.id}>
              <Link to={`/term/${term.raw}`}>{term.raw}</Link>
            </li>
          ))}
        </ul>
      )}

      <p>Can't find what you're looking for?</p>
      <Link to={`/new-term?term=${term}`}>Request "{term}" be added to Say.dev</Link>
    </Page>
  );
};
