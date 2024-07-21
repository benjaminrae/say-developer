import {useSearchParams} from 'react-router-dom';
import {Link} from '../../components/Link';
import {Page} from '../../components/Page';
import {TermSearch} from '../../components/TermSearch';
import {useSearchTerms} from '../../domains/terms/hooks';
import {Separator} from "@/components/ui/separator.tsx";
import {Heading, Paragraph} from "@/shared/Typography";

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();

  const term = searchParams.get('term');

  const {data} = useSearchTerms({term: term ?? ''});

  return (
    <Page pageTitle={`${term} - Search`}>
      <TermSearch/>
      <Heading level={1}>
        {term}
      </Heading>
      <span>{data?.count ?? 0} results found</span>
      <Separator className="my-2"/>
      {data?.count! > 0 && (
        <ul>
          {data?.terms.map((term) => (
            <li key={term.id}>
              <Link to={`/term/${term.raw}`}>{term.raw}</Link>
            </li>
          ))}
        </ul>
      )}
      {!data?.count && (
        <>
          <Paragraph>Can't find what you're looking for?</Paragraph>
          <Link to={`/new-term?term=${term}`}>Request "{term}" be added to Say.dev</Link>
        </>
      )}
    </Page>
  )
};
