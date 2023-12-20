import type { DefaultTheme } from 'styled-components';

const mainTheme: Omit<DefaultTheme, 'colors'> = {
  colors: {
    primary: '#3C368C',
    primaryHover: '#4e46b4',
    secondary: '#1D4946',
    secondaryHover: '#40a69f',
    ghost: 'rgba(78, 70, 180, 0.12)',
    hover: 'rgba(0, 0, 0, 0.08)',
    white: '#fff',
    black: '#000',
    backdrop: 'rgba(0, 0, 0, 0.56)',
    greys: {
      lightest: '#f5f5f5;',
      light: '#ebebeb;',
      dark: '#999ca0',
    },
    support: {
      blue: '#3448F0',
      cyan: '#95F1D5',
      green: '#4AD15F',
      orange: '#FFB319',
      ochre: '#B3804A',
      brown: '#725550',
      purple: '#5C33CF',
      red: '#D33030',
      pink: '#FF4E64',
    },
  },
  sizes: {
    borderRadius: '8px',
  },
  ink: {},
  typography: {
    fonts: {
      stack:
        'Averta Std, --apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },
    sizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
  },
};

export default mainTheme;
