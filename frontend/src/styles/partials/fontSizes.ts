import { css } from 'styled-components';
import { FontSizes } from '../types';

export type FontSizesProps = {
  size?: FontSizes;
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
