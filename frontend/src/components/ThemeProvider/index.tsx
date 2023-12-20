import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { ThemeContext } from './context';
import { usePreferredTheme } from './hooks';
import { saveUserTheme } from './logic.helper';
import { Theme } from './types';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(usePreferredTheme());

  const setTheme = useCallback(
    (theme: Theme) => {
      setThemeState(theme);
      saveUserTheme(theme);
    },
    [setThemeState]
  );

  const value = useMemo(() => ({ setTheme, theme }), [setTheme, theme]);

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
