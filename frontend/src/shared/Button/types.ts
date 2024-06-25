import { Size } from 'styled-components';
import { Variant } from '../../styles/types';
import { Icon } from '../Icons/types';

export type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type Animations = "pulse"

export type ButtonProps = NativeButtonProps & {
  variant?: Variant;
  leftIcon?: Icon;
  rightIcon?: Icon;
  size?: Size;
  animation?: Animations;
};

export type ButtonStyledProps = ButtonProps;
