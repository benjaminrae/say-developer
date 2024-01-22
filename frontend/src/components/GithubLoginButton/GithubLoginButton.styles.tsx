import styled, { css } from 'styled-components';
import { Button } from '../../shared/Button';

export const GithubLight = css`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

export const GithubDark = css`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.black};
`;

export const GithubLoginButtonStyled = styled(Button)`
  ${({ theme }) => (theme.theme === 'light' ? GithubLight : GithubDark)}
`;
