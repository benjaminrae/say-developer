import {useState} from 'react';
import {Spacer} from '@/shared/Spacer';
import {useAuth} from '../AuthProvider/hooks';
import {Avatar} from '../Avatar';
import {LogoutButton} from '../LogoutButton';
import {ThemeToggle} from '../ThemeToggle';
import {
  UserMenuContent,
  UserMenuDrawer,
  UserMenuWrapper,
  Username,
  UserProfile,
} from './UserMenu.styles';
import {Separator} from "@/components/ui/separator.tsx";

export const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth();

  return (
    <UserMenuWrapper>
      <UserProfile onClick={() => setIsOpen(true)}>
        <Username>{user?.nickName}</Username>
        <Spacer size="xs"/>
        <Avatar/>
      </UserProfile>
      {isOpen && (
        <UserMenuDrawer onMouseLeave={() => setIsOpen(false)}>
          <UserMenuContent>
            <ThemeToggle/>
            <Separator className="my-2"/>
            <LogoutButton/>
          </UserMenuContent>
        </UserMenuDrawer>
      )}
    </UserMenuWrapper>
  );
};
