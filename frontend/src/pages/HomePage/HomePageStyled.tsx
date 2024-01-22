import styled, { Size } from 'styled-components';
import { Page } from '../../components/Page';

export const HomePageStyled = styled(Page)``;

export const HomePageTitle = styled.h1<{ size: Size }>`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 800;
  text-align: center;

  ${({ size }) => {
    switch (size) {
      case 'xs':
      case 'sm':
        return `
          font-size: 2.3rem;
        `;
      case 'md':
        return `
          font-size: 2.5rem;
        `;
      case 'lg':
      case 'xl':
        return `
          font-size: 3rem;
        `;
      default:
        return `
          font-size: 3rem;
        `;
    }
  }}
`;
