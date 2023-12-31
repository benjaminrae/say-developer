import { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider/context';
import { Button } from './shared/Button';
import { Switch } from './shared/Switch';

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

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Say Developer</h1>
      <Button onClick={handleGoogleLogin} variant="primary">
        Login With Google
      </Button>
      <Button onClick={handleGithubLogin} variant="secondary">
        Login With Github
      </Button>
      <span>Current theme: {`${theme}`}</span>
      <Button onClick={toggleTheme} variant="ghost">
        Toggle Theme
      </Button>
      <Button onClick={handleLogout} variant="stroke">
        Logout
      </Button>
      <Switch id="theme" isOn={theme === 'dark'} handleChange={toggleTheme} size="md" />
    </>
  );
};

export default App;
