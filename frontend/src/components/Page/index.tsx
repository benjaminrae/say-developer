import { PageTitle } from '../PageTitle';
import { PageStyled } from './Page.styled';
import { PageProps } from './types';

export const Page = ({ children, pageTitle }: PageProps) => {
  return (
    <PageStyled>
      <PageTitle title={pageTitle} />
      {children}
    </PageStyled>
  );
};
