import { MainTheme } from 'styled-components';

export const mainTheme: MainTheme = {
  breakpoints: {
    phone: '@media (max-width: 480px)',
    tablet: '@media (max-width: 768px), (max-height: 400px) and (orientation: landscape)',
    desktop: '@media (max-width: 1024px)',
    widescreen: '@media (max-width: 1440px)',
  },
  sizes: {
    borderRadius: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1rem',
      xl: '1.25rem',
    },
    shadow: {
      xs: '0 4px 12px -6px rgb(0 0 0 / 0.06)',
      sm: '0 6px 6px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4)',
      md: '0 12px 12px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4)',
      lg: '0 8px 24px -6px rgb(0 0 0 / 0.16), 0 0 1px rgb(0 0 0 / 0.4)',
      xl: '0 32px 32px -8px rgb(0 0 0 / 0.08), 0 0 32px -8px rgb(0 0 0 / 0.12), 0 0 1px rgb(0 0 0 / 0.2)',
    },
    borderWidth: {
      normal: '0.0625rem',
      inverted: '0.125rem',
    },
  },
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
