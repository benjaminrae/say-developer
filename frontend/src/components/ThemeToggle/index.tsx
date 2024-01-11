import { useContext } from 'react';
import { Moon } from '../../shared/Icons/Moon';
import { Sun } from '../../shared/Icons/Sun';
import { Switch } from '../../shared/Switch';
import { ThemeContext } from '../ThemeProvider/context';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    toggleTheme();

    console.log('Theme toggled');
  };

  return (
    <Switch
      handleChange={handleThemeChange}
      isOn={theme === 'light'}
      size="xl"
      id="theme"
      offChildren={<Sun color="#fff" size="md" />}
      onChildren={<Moon color="#fff" size="md" />}
    />
  );
};
