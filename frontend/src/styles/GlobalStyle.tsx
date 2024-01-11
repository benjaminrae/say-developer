import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: ${(props) => props.theme.typography.fonts.stack};
    color: ${(props) => props.theme.colors.ink.primary};
    background-color: ${(props) => props.theme.colors.background.primary};
  }
`;
