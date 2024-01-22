import { Flex } from '../../shared/Flex';
import { FooterLink, FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Flex justifyContent="center" alignItems="center">
        <span>
          Made by <FooterLink href="https://benjaminrae.dev">Benjamin Rae</FooterLink> ©{' '}
          {new Date().getFullYear()}
        </span>
      </Flex>
    </FooterStyled>
  );
};
