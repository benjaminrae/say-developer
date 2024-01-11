import { Size } from 'styled-components';
import { mainTheme } from '../../styles/themes/mainTheme';

export const useIconSize = (size: Size): string => {
  return mainTheme.typography.sizes[size];
};
