import { useContext } from 'react';
import { Flex } from '../../shared/Flex';
import { AuthContext } from '../AuthProvider/context';
import { GithubLoginButton } from '../GithubLoginButton';
import { UserMenu } from '../UserMenu';
import { HeaderLink, HeaderStyled, HeaderTitle } from './Header.styled';

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <HeaderStyled>
      <HeaderTitle>
        <HeaderLink to="/">Say.dev</HeaderLink>
      </HeaderTitle>
      <Flex gap="8px" alignItems="center">
        {user ? <UserMenu /> : <GithubLoginButton />}
      </Flex>
    </HeaderStyled>
  );
};
