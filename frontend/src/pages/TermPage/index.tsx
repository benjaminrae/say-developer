import {Link, useParams} from 'react-router-dom';
import {Page} from '../../components/Page';
import {useGetTermWithPronunciations} from '../../domains/terms/hooks';

export const TermPage = () => {
  const {term} = useParams();

  const {data} = useGetTermWithPronunciations(term ?? '');
  return (
    <Page pageTitle={term}>
      {data && (
        <>
          <h1>{data.raw}</h1>
          <p>{data.description}</p>
          {data.aliases && (
            <ul>
              {data.aliases.map((alias) => (
                <li key={alias}>{alias}</li>
              ))}
            </ul>
          )}
          <p>Know how to pronounce {term}?</p>
          <Link to={`/pronounce/${term}`}>Submit your pronunciation for {term}</Link>
        </>
      )}
    </Page>
  );
};
