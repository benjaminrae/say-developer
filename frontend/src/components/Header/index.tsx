import { ThemeToggle } from '../ThemeToggle';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>Say Developer</h1>
      <ThemeToggle />
    </HeaderStyled>
  );
};
