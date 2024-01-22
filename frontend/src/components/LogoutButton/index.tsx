import { useCallback } from 'react';
import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Button } from '../../shared/Button';
import { ButtonProps } from '../../shared/Button/types';
import { useAuth } from '../AuthProvider/hooks';

export const LogoutButton = ({ ...props }: Omit<ButtonProps, 'onClick' | 'ref'>) => {
  const { user } = useAuth();
  const { logoutProvider } = useAuthRedirect();

  const handleLogout = useCallback(() => {
    console.log(user);
    if (user?.provider) {
      logoutProvider(user.provider);
    }
  }, [logoutProvider, user]);

  return (
    <Button onClick={handleLogout} {...props}>
      Logout
    </Button>
  );
};
