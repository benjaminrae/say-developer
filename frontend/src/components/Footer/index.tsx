import { Flex } from '../../shared/Flex';
import { Link } from '../Link';
import { FooterStyled } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Flex justifyContent="center" alignItems="center">
        <span>
          Made by{' '}
          <Link href="https://benjaminrae.dev" target="_blank">
            Benjamin Rae
          </Link>{' '}
          © {new Date().getFullYear()}
        </span>
      </Flex>
    </FooterStyled>
  );
};
