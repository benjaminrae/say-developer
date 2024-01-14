import { useContext } from 'react';
import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Button } from '../../shared/Button';
import { Flex } from '../../shared/Flex';
import { AuthContext } from '../AuthProvider/context';
import { ThemeToggle } from '../ThemeToggle';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  const { loginWithGithub, logoutProvider } = useAuthRedirect();
  const { user } = useContext(AuthContext);

  return (
    <HeaderStyled>
      <h1>Say.dev</h1>
      <Flex gap="8px" alignItems="center">
        {user ? (
          <Button onClick={() => logoutProvider(user.provider)}>Logout</Button>
        ) : (
          <Button onClick={loginWithGithub}>Login with Github</Button>
        )}
        <ThemeToggle />
      </Flex>
    </HeaderStyled>
  );
};
