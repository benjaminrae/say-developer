import { Page } from '../../components/Page';
import { TermSearch } from '../../components/TermSearch';

export const HomePage = () => {
  return (
    <Page pageTitle="Home">
      <h2>Pronounce like a native developer</h2>
      <TermSearch />
    </Page>
  );
};
