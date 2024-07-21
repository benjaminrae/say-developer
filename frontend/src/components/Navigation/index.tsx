import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../ui/navigation-menu';
import React from "react";
import {cn} from "@/libs/tailwind/utils.ts";

export type NavigationLinkInformation = {
  href: string;
  title: string;
  description: string;
}

export type NavigationInformation = {
  [key: string]: NavigationLinkInformation[];
}

const navigationInformation: NavigationInformation = {
  Pronunciation: [
    {
      href: "/vocabulary",
      title: "Vocabulary",
      description: "Dive into our comprehensive glossary tailored for programmers. Explore definitions and phonetic pronunciations of essential programming terms, enhancing your understanding and communication within the tech community."
    },
    {
      href: "/phrases",
      title: "Phrases",
      description: "Our collection of commonly used phrases in software development, helps you sound confident in discussions and interviews."
    },
    {
      href: "/open-source",
      title: "Open Source",
      description: "Our collection of your favourite open source projects, helping you know and share how to pronounce them."
    }
  ]
}

export const Navigation = () => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(navigationInformation).map(([key, links]) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuTrigger>{key}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                {links.map(({href, title, description}, index) => (
                  index === 0 ?
                    <FeaturedListItem href={href} title={title}>
                      {description}
                    </FeaturedListItem> :
                    <ListItem href={href} title={title}>
                      {description}
                    </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})


const FeaturedListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) =>
  <li
    className="row-span-3">
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
        href={props.href}
      >
        <div className="mb-2 mt-4 text-lg font-medium">
          {title}
        </div>
        <p className="text-sm leading-tight text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>);
