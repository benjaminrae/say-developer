import { PropsWithChildren } from 'react';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../libs/react-query';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { AuthProvider } from '../AuthProvider';
import { ThemeProvider } from '../ThemeProvider';

export type ProvidersProps = PropsWithChildren;

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <div>
      <ThemeProvider>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};
