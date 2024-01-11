import { css } from 'styled-components';
import { type FontSizesProps } from './fontSizes';

const paddings = css<FontSizesProps>`
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return {
          padding: '4px 8px',
        };
      case 'sm':
        return { padding: '4px 12px' };
      case 'md':
        return { padding: '8px 16px' };
      case 'lg':
        return { padding: '12px 16px' };
      case 'xl':
        return { padding: '16px 26px' };
    }
  }};
`;

export default paddings;
