import { createContext } from 'react';
import { AuthStore } from './types';

export const AuthContext = createContext({} as AuthStore);
