import { useContext } from 'react';
import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Flex } from '../../shared/Flex';
import { AuthContext } from '../AuthProvider/context';
import { Avatar } from '../Avatar';
import { GithubLoginButton } from '../GithubLoginButton';
import { LogoutButton } from '../LogoutButton';
import { HeaderLink, HeaderStyled, HeaderTitle } from './Header.styled';

export const Header = () => {
  const { loginWithGithub, logoutProvider } = useAuthRedirect();
  const { user } = useContext(AuthContext);

  return (
    <HeaderStyled>
      <HeaderTitle>
        <HeaderLink to="/">Say.dev</HeaderLink>
      </HeaderTitle>
      <Flex gap="8px" alignItems="center">
        {user ? <LogoutButton /> : <GithubLoginButton />}
        <Avatar />
        {/* <ThemeToggle /> */}
      </Flex>
    </HeaderStyled>
  );
};
