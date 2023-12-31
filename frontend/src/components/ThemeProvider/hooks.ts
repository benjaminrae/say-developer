import { useEffect, useState } from 'react';
import { getSavedUserTheme, saveUserTheme } from './logic.helper';

export const usePreferredTheme = () => {
  
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark, setIsDark] = useState(getCurrentTheme());

  const userThemeListener = (event: MediaQueryListEvent) => {
    setIsDark(event.matches);
  };

  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkThemeQuery.addEventListener('change', userThemeListener);
    return () => {
      darkThemeQuery.removeEventListener('change', userThemeListener);
    };
  }, []);
  const savedTheme = getSavedUserTheme();

  if (savedTheme !== undefined) {
    return savedTheme;
  }
  
  const theme = isDark ? 'dark' : 'light';
  
  saveUserTheme(theme);

  return theme;
};
