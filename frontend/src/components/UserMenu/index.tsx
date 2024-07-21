import { useState } from 'react';
import { Divider } from '@/shared/Divider';
import { Spacer } from '@/shared/Spacer';
import { useAuth } from '../AuthProvider/hooks';
import { Avatar } from '../Avatar';
import { LogoutButton } from '../LogoutButton';
import { ThemeToggle } from '../ThemeToggle';
import {
  UserMenuContent,
  UserMenuDrawer,
  UserMenuWrapper,
  UserProfile,
  Username,
} from './UserMenu.styles';

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserProfile onClick={() => setIsOpen(true)}>
        <Username>{user?.nickName}</Username>
        <Spacer size="xs" />
        <Avatar />
      </UserProfile>
      {isOpen && (
        <UserMenuDrawer onMouseLeave={() => setIsOpen(false)}>
          <UserMenuContent>
            <ThemeToggle />
            <Divider />
            <LogoutButton />
          </UserMenuContent>
        </UserMenuDrawer>
      )}
    </UserMenuWrapper>
  );
};
