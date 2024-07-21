import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Github } from '../../shared/Icons/Github';
import {Button} from "@/components/ui/button.tsx";

export const GithubLoginButton = () => {
  const { loginWithGithub } = useAuthRedirect();

  return (
    <Button onClick={loginWithGithub} >
      <Github color="currentColor"/>
      Login with GitHub
    </Button>
  );
};
