import { Helmet } from 'react-helmet-async';

export type PageTitleProps = {
  title?: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  const base = 'Say Developer';

  return (
    <Helmet>
      <title>
        {title ? `${title} | ` : ''}
        {base}
      </title>
    </Helmet>
  );
};
