import { Page } from './components/Page';
import { VoiceRecorder } from './components/VoiceRecorder';
import { Button } from './shared/Button';

const App = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:3000/auth/github';
  };
  const handleLogout = () => {
    window.location.href = 'http://localhost:3000/logout';
  };

  return (
    <>
      <Page>
        <Button onClick={handleGoogleLogin} variant="primary">
          Login With Google
        </Button>
        <Button onClick={handleGithubLogin} variant="secondary">
          Login With Github
        </Button>
        <Button onClick={handleLogout} variant="stroke">
          Logout
        </Button>

        <VoiceRecorder />
      </Page>
    </>
  );
};

export default App;
