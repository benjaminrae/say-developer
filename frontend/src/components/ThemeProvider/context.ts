import React from 'react';
import { ThemeStore } from './types';

export const ThemeContext = React.createContext<ThemeStore>({} as ThemeStore);
