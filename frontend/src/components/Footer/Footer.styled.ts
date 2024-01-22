import styled from 'styled-components';

export const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem 0;
`;

export const FooterLink = styled.a`
  color: ${(props) => props.theme.colors.ink.primary};
  font-weight: bold;
`;
