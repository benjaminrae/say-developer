import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { themes } from '../../styles/themes';
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

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(newTheme);
    saveUserTheme(newTheme);
  }, [setThemeState, theme]);

  const value = useMemo(() => ({ setTheme, theme, toggleTheme }), [setTheme, theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={themes[theme]}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};
