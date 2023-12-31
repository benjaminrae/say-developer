import { Size } from 'styled-components';
import { Icon } from '../Icons/types';


export type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = NativeButtonProps & {
  variant?: ButtonVariant;
  leftIcon?: Icon;
  rightIcon?: Icon;
  size?: Size;
};

export type ButtonStyledProps = ButtonProps;

export type ButtonVariant = 'primary' | 'secondary' | 'stroke' | 'ghost';
