import {PropsWithChildren} from "react";
import {cn} from "@/libs/tailwind/utils.ts";

type TypographyProps = PropsWithChildren & {
  className?: string;
};

type HeadingProps = TypographyProps & {
  level: 1 | 2 | 3 | 4;
}

export const Heading = ({children, level, className}: HeadingProps) => {
  switch (level) {
    case 1 :
      return <H1 className={className}>{children}</H1>;
    case 2 :
      return <H2 className={className}>{children}</H2>;
    case 3 :
      return <H3 className={className}>{children}</H3>;
    case 4:
      return <H4 className={className}>{children}</H4>;
    default:
      return <H1 className={className}>{children}</H1>;
  }
}

export const H1 = ({children, className}: TypographyProps) => (
  <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
    {children}
  </h1>
);

export const H2 = ({children, className}: TypographyProps) => (
  <h2
    className={cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>
    {children}
  </h2>
);

export const H3 = ({children, className}: TypographyProps) => (
  <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
    {children}
  </h3>
);

export const H4 = ({children, className}: TypographyProps) => (
  <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
    {children}
  </h4>
);

export const Paragraph = ({children, className}: TypographyProps) => (
  <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>
    {children}
  </p>
);

export const Lead = ({children, className}: TypographyProps) => (
  <p className={cn("text-xl text-muted-foreground", className)}>
    {children}
  </p>
);

export const Large = ({children, className}: TypographyProps) => <p
  className={cn("text-lg font-semibold", className)}>{children}</p>;
