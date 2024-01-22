import { LinkProps } from './types';

export const useLinkDestination = ({ to, href }: Pick<LinkProps, 'to' | 'href'>) => {
  const destination = to || href || '';

  return {
    reloadDocument: destination !== to,
    destination,
  };
};
