import 'styled-components';

declare module 'styled-components' {
  export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  export type FontSize = Size;

  export type SupportColor = {
    strong: string;
    mid: string;
    weak: string;
  };

  export interface DefaultTheme extends MainTheme {
    colors: {
      accent: {
        primary: string;
        secondary: string;
      };
      border: string;
      background: {
        primary: string;
        secondary: string;
      };
      ink: {
        primary: string;
        secondary: string;
      };
      white: string;
      black: string;
      hover: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      support: {
        blue: SupportColor;
        cyan: SupportColor;
        green: SupportColor;
        orange: SupportColor;
        ochre: SupportColor;
        brown: SupportColor;
        purple: SupportColor;
        red: SupportColor;
        pink: SupportColor;
      };
    };
  }

  export interface MainTheme {
    sizes: {
      borderRadius: Record<Size, string>;
      shadow: Record<Size, string>;
      borderWidth: {
        normal: string;
        inverted: string;
      };
    };
    typography: {
      fonts: {
        stack: string;
      };
      sizes: Record<FontSize, string>;
    };
  }
}
