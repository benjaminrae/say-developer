import {PageTitle} from '../PageTitle';
import {PageProps} from './types';
import {cn} from "@/libs/tailwind/utils.ts";

export const Page = ({children, pageTitle, className}: PageProps) => {
  return (
    <div className={cn("py-4", className)}>
      <PageTitle title={pageTitle}/>
      {children}
    </div>
  );
};
