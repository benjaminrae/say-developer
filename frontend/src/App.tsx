import { useContext } from 'react';
import { AuthContext } from './components/AuthProvider/context';
import { ThemeContext } from './components/ThemeProvider/context';
import { Button } from './shared/Button';

const App = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:3000/auth/github';
  };
  const handleLogout = () => {
    window.location.href = "http://localhost:3000/logout";
  }

  const { theme, toggleTheme } = useContext(ThemeContext);

  const {user} = useContext(AuthContext);

  return (
    <>
      <h1>Say Developer</h1>
      <Button onClick={handleGoogleLogin}>Login With Google</Button>
      <Button onClick={handleGithubLogin}>Login With Github</Button>
      <span>Current theme: {`${theme}`}</span>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <Button onClick={handleLogout}>Logout</Button>
      <span>current user : {JSON.stringify(user)}</span>
    </>
  );
};

export default App;
