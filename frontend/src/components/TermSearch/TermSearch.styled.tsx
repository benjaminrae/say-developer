import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TermSearchStyled = styled.form`
  border-radius: ${(props) => props.theme.sizes.borderRadius.md};
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  border: 1px solid ${(props) => props.theme.colors.border};
  flex-direction: column;

  .icon {
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

export const TermSearchHeading = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const TermSearchResult = styled(Link)`
  flex: 1;
`;
