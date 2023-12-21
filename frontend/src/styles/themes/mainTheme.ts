import { DefaultTheme } from 'styled-components/dist/types';

export const mainTheme = {
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
} satisfies Omit<DefaultTheme, 'colors'>;
