import {PropsWithChildren} from 'react';

export type PageProps = PropsWithChildren & {
  pageTitle?: string;
  className?: string;
};
