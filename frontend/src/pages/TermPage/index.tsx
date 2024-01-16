import { useParams } from 'react-router-dom';
import { Page } from '../../components/Page';
import { useGetTerm } from '../../domains/terms/hooks';

export const TermPage = () => {
  const { term } = useParams();

  const { data } = useGetTerm(term ?? '');
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
        </>
      )}
    </Page>
  );
};
