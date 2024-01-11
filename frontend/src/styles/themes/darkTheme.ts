import { DefaultTheme } from 'styled-components';
import { mainTheme } from './mainTheme';
import { moonDark } from './moonColors';
import { supportColors } from './supportColors';

export const darkTheme: DefaultTheme = {
  ...mainTheme,
  colors: {
    accent: {
      primary: moonDark.piccolo,
      secondary: moonDark.hit,
    },
    border: moonDark.beerus,
    background: {
      primary: moonDark.goku,
      secondary: moonDark.gohan,
    },
    ink: {
      primary: moonDark.bulma,
      secondary: moonDark.trunks,
    },
    white: moonDark.goten,
    black: moonDark.popo,
    hover: {
      primary: moonDark.jiren,
      secondary: moonDark.heles,
      tertiary: moonDark.zeno,
    },
    support: supportColors,
  },
};
