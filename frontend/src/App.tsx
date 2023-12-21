import { useContext } from 'react';
import { ThemeContext } from './components/ThemeProvider/context';

const App = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:3000/auth/github';
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Say Developer</h1>
      <button onClick={handleGoogleLogin}>Login With Google</button>
      <button onClick={handleGithubLogin}>Login With Github</button>
      <span>Current theme: {`${theme}`}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default App;
