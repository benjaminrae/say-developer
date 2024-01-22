import { LinkStyled } from './Link.styles';
import { useLinkDestination } from './hooks';
import { LinkProps } from './types';

export const Link = ({ children, to, href, ...props }: LinkProps) => {
  const { reloadDocument, destination } = useLinkDestination({ to, href });

  return (
    <LinkStyled to={destination} reloadDocument={reloadDocument} {...props}>
      {children}
    </LinkStyled>
  );
};
