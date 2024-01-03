import { Header } from '../Header';
import { PageStyled } from './Page.styled';
import { PageProps } from './types';

export const Page = ({ children }: PageProps) => {
  return (
    <PageStyled>
      <Header />
      {children}
    </PageStyled>
  );
};
