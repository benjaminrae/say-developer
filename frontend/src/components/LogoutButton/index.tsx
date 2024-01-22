import { useCallback } from 'react';
import { useAuthRedirect } from '../../domains/sessions/hooks';
import { Button } from '../../shared/Button';
import { useAuth } from '../AuthProvider/hooks';

export const LogoutButton = () => {
  const { user } = useAuth();
  const { logoutProvider } = useAuthRedirect();

  const handleLogout = useCallback(() => {
    console.log(user);
    if (user?.provider) {
      logoutProvider(user.provider);
    }
  }, [logoutProvider, user]);

  return <Button onClick={handleLogout}>Logout</Button>;
};
