import { DefaultTheme } from 'styled-components';
import { mainTheme } from './mainTheme';
import { moonLight } from './moonColors';
import { supportColors } from './supportColors';

export const lightTheme: DefaultTheme = {
  ...mainTheme,
  colors: {
    accent: {
      primary: moonLight.piccolo,
      secondary: moonLight.hit,
    },
    border: moonLight.beerus,
    background: {
      primary: moonLight.goku,
      secondary: moonLight.gohan,
    },
    ink: {
      primary: moonLight.bulma,
      secondary: moonLight.trunks,
    },
    white: moonLight.goten,
    black: moonLight.popo,
    hover: {
      primary: moonLight.jiren,
      secondary: moonLight.heles,
      tertiary: moonLight.zeno,
    },
    support: supportColors,
  },
};
