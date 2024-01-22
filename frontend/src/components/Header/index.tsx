import { useContext } from 'react';
import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Button } from '../../shared/Button';
import { Flex } from '../../shared/Flex';
import { AuthContext } from '../AuthProvider/context';
import { Avatar } from '../Avatar';
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
        {user ? (
          <Button onClick={() => logoutProvider(user.provider)}>Logout</Button>
        ) : (
          <Button onClick={loginWithGithub}>Login with Github</Button>
        )}
        <Avatar />
        {/* <ThemeToggle /> */}
      </Flex>
    </HeaderStyled>
  );
};
