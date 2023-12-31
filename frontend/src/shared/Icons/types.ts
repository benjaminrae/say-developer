import React from 'react';

export type IconProps = Record<string, unknown>;

export type Icon =
  | React.FC<IconProps>
  | React.MemoExoticComponent<(props: IconProps) => JSX.Element>;
