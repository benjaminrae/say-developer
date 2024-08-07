import {PropsWithChildren} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {QueryClientProvider} from 'react-query';
import {queryClient} from '@/libs/react-query';
import {GlobalStyle} from '../../styles/GlobalStyle';
import {AuthProvider} from '../AuthProvider';
import {ThemeProvider} from '../ThemeProvider';
import {ToastProvider} from "../ToastProvider/ToastProvider.tsx";
import {FeatureFlagsProvider} from "@/components/FeatureFlagsProvider/FeatureFlagsProvider.tsx";

export type ProvidersProps = PropsWithChildren;

export const Providers = ({children}: ProvidersProps) => {
  return (
    <FeatureFlagsProvider>
      <HelmetProvider>
        <ThemeProvider>
          <GlobalStyle/>
          <ToastProvider>
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                {children}
              </AuthProvider>
            </QueryClientProvider>
          </ToastProvider>
        </ThemeProvider>
      </HelmetProvider>
    </FeatureFlagsProvider>
  );
};
