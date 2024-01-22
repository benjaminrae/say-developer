import { useAuth } from '../AuthProvider/hooks';
import { AvatarFallback } from './Avatar.styles';
import { useInitials } from './hooks';

export const Avatar = () => {
  const { user } = useAuth();
  const initials = useInitials(user?.name ?? '');

  return (
    <div>
      {/* {user?.avatarUrl && (
        <AvatarImage height="50px" width="50ox" src={user?.avatarUrl} alt="avatar" />
      )} */}
      {user?.avatarUrl && <AvatarFallback>{initials}</AvatarFallback>}
    </div>
  );
};
