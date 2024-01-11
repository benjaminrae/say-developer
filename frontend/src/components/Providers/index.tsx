import { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../libs/react-query';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { AuthProvider } from '../AuthProvider';
import { ThemeProvider } from '../ThemeProvider';

export type ProvidersProps = PropsWithChildren;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};
