import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';

export const useBreakpoints = () => {
  const { breakpoints } = useTheme();

  const getQuery = (query: string) => query.replace('@media ', '');

  const isPhone = useMediaQuery({ query: getQuery(breakpoints.phone) });
  const isTablet = useMediaQuery({ query: getQuery(breakpoints.tablet) });
  const isDesktop = useMediaQuery({ query: getQuery(breakpoints.desktop) });
  const isWidescreen = useMediaQuery({ query: getQuery(breakpoints.widescreen) });

  return {
    isDesktop,
    isPhone,
    isTablet,
    isWidescreen,
  };
};
