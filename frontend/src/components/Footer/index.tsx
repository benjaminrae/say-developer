import {Flex} from '@/shared/Flex';
import {Link} from '../Link';


export const Footer = () => {
  return (
    // <footer className="fixed bottom-0 left-0 w-full px-4 py-2">
    <footer className="py-2">
      <Flex justifyContent="center" alignItems="center">
        <span>
          Made by{' '}
          <Link href="https://benjaminrae.dev" target="_blank">
            Benjamin Rae
          </Link>{' '}
          © {new Date().getFullYear()}
        </span>
      </Flex>
    </footer>
  );
};
