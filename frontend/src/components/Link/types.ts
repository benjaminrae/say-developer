import { LinkProps as RouterLinkProps } from 'react-router-dom';
import { WithOptional } from '../../types';

export type LinkProps = WithOptional<RouterLinkProps, 'to'> & {
  href?: string;
};
