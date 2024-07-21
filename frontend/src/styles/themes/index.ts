import { DefaultTheme } from 'styled-components/dist/types';
import { Theme } from '@/components/ThemeProvider/types.ts';
import { darkTheme } from './darkTheme';
import { lightTheme } from './lightTheme';

export const themes: Record<Theme, DefaultTheme> = {
  dark: darkTheme,
  light: lightTheme,
};
