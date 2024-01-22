import styled from 'styled-components';
import { Link } from '../Link';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

export const HeaderLink = styled(Link)`
  all: unset;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
