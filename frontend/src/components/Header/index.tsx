import {useContext} from 'react';
import {Flex} from '@/shared/Flex';
import {AuthContext} from '../AuthProvider/context';
import {GithubLoginButton} from '../GithubLoginButton';
import {UserMenu} from '../UserMenu';
import {Link} from "@/components/Link";

export const Header = () => {
  const {user} = useContext(AuthContext);

  return (
    <header className="flex justify-between items-center py-4">
      <div>
        <Link to="/" className="text-3xl font-extrabold">Say.dev</Link>
      </div>
      <Flex gap="8px" alignItems="center">
        {user ? <UserMenu/> : <GithubLoginButton/>}
      </Flex>
    </header>
  );
};
