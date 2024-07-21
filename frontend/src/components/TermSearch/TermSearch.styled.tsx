import styled from 'styled-components';
import { Link } from '../Link';

export const TermSearchStyled = styled.form`
  border-radius: ${(props) => props.theme.sizes.borderRadius.md};
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.border};
  flex-direction: column;

  .icon {
  }

  .term-search__button {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const TermSearchInput = styled.input`
  all: unset;
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const TermSearchRow = styled.div<{ $isFocused?: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  ${(props) =>
    props.$isFocused &&
    `
    border: 1px solid ${props.theme.colors.accent.primary};
    border-radius: ${props.theme.sizes.borderRadius.md};
  `}
`;

export const TermSearchOpenRow = styled(TermSearchRow)`
  color: ${(props) => props.theme.colors.black};
  align-self: stretch;
  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.support.blue.weak};
  }
`;

export const TermSearchHeading = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const TermSearchResult = styled(Link)`
  all: unset;
  flex: 1;
  cursor: pointer;
`;
