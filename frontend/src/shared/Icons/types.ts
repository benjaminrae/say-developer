import React from 'react';
import { Size } from 'styled-components';

export type IconProps = {
  size?: Size;
  color?: string;
};

export type Icon =
  | React.FC<IconProps>
  | React.MemoExoticComponent<(props: IconProps) => JSX.Element>;
