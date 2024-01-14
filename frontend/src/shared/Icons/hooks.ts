import { Size } from 'styled-components';
import { mainTheme } from '../../styles/themes/mainTheme';

export const useIconSize = (size: Size): string => {
  return mainTheme.typography.sizes[size];
};

export const useIconClass = (className?: string): string => {
  return `icon${className ? ` ${className}` : ''}`;
};
