import { useCallback } from 'react';
import { useAuthRedirect } from '@/domains/sessions/hooks.ts';
import { useAuth } from '../AuthProvider/hooks';
import {Button, ButtonProps} from "@/components/ui/button.tsx";

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
    <Button variant="destructive" onClick={handleLogout} {...props}>
      Logout
    </Button>
  );
};
