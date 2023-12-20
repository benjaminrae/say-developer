import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      secondaryHover: string;
      ghost: string;
      hover: string;
      white: string;
      black: string;
      backdrop: string;
      greys: {
        lightest: string;
        light: string;
        dark: string;
      };
      support: {
        blue: string;
        cyan: string;
        green: string;
        orange: string;
        ochre: string;
        brown: string;
        purple: string;
        red: string;
        pink: string;
      };
    };
    sizes: {
      borderRadius: string;
    };
    ink: Record<string, string>;
    typography: {
      fonts: {
        stack: string;
      };
      sizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
  }
}
