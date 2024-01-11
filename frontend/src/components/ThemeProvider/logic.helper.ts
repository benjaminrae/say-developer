import { THEME_STORAGE_KEY } from './constants';
import { Theme } from './types';

export const saveUserTheme = (theme: Theme) => {
  if (!isValidTheme(theme)) {
    return;
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error(error);
  }
};

export const getSavedUserTheme = (): Theme | undefined => {
  try {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (isValidTheme(storedTheme)) {
      return storedTheme;
    }

    return undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const isValidTheme = (theme: string | null): theme is Theme => {
  return theme === 'dark' || theme === 'light';
};
