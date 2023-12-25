import { useContext } from 'react';
import { AuthContext } from './context';

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
