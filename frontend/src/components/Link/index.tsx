import {useLinkDestination} from './hooks';
import {LinkProps} from './types';
import {Link as RouterLink} from "react-router-dom";
import {cn} from "@/libs/tailwind/utils.ts";

export const Link = ({children, to, href, className, ...props}: LinkProps) => {
  const {reloadDocument, destination} = useLinkDestination({to, href});

  return (
    <RouterLink className={cn("hover:underline", className)} to={destination}
                reloadDocument={reloadDocument} {...props}>
      {children}
    </RouterLink>
  );
};
