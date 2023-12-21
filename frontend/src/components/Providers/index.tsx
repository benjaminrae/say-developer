import { PropsWithChildren } from 'react';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { ThemeProvider } from '../ThemeProvider';

export type ProvidersProps = PropsWithChildren;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </div>
  );
};
