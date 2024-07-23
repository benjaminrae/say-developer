import {PageTitle} from '../PageTitle';
import {PageProps} from './types';

export const Page = ({children, pageTitle}: PageProps) => {
  return (
    <div className="py-4">
      <PageTitle title={pageTitle}/>
      {children}
    </div>
  );
};

export const CentredPage = ({children, pageTitle}: PageProps) => {
  return (
    <div className="py-4 flex justify-center">
      <PageTitle title={pageTitle}/>
      {children}
    </div>
  );
}
