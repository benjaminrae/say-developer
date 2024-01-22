import { useAuth } from '../AuthProvider/hooks';

export const Avatar = () => {
  const { user } = useAuth();

  return <div>{user?.name}</div>;
};
