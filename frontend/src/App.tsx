import { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider/context';
import { ThemeToggle } from './components/ThemeToggle';
import { Button } from './shared/Button';
import { Sun } from './shared/Icons/Sun';
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
      <ThemeToggle />
      <Switch handleChange={toggleTheme} isOn={true} />
      <Sun />
    </>
  );
};

export default App;
