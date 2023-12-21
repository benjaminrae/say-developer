import { FontSize, css } from 'styled-components';

export type FontSizesProps = {
  size?: FontSize;
};

export const fontSizes = css<FontSizesProps>`
  ${({
    size,
    theme: {
      typography: {
        sizes: { xs, lg, md, sm, xl },
      },
    },
  }) => {
    switch (size) {
      case 'xs':
        return {
          'font-size': xs,
        };
      case 'sm':
        return { 'font-size': sm };
      case 'md':
        return { 'font-size': md };
      case 'lg':
        return { 'font-size': lg };
      case 'xl':
        return { 'font-size': xl };
    }
  }};
`;
