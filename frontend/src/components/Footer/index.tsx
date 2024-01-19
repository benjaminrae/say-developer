import { Flex } from '../../shared/Flex';
import { FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Flex justifyContent="center" alignItems="center">
        <span>
          Made by <a href="https://benjaminrae.dev">Benjamin Rae</a> © {new Date().getFullYear()}
        </span>
      </Flex>
    </FooterStyled>
  );
};
