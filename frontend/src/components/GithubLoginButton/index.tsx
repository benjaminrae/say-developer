import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Github } from '../../shared/Icons/Github';
import { GithubLoginButtonStyled } from './GithubLoginButton.styles';

export const GithubLoginButton = () => {
  const { loginWithGithub } = useAuthRedirect();

  return (
    <GithubLoginButtonStyled onClick={loginWithGithub} leftIcon={Github}>
      Login with GitHub
    </GithubLoginButtonStyled>
  );
};
