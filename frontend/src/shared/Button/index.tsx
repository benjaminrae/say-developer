import { forwardRef, memo } from 'react';
import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './types';

export const Button = memo(forwardRef<HTMLButtonElement, ButtonProps> (({
  variant = "primary",
  size = "md", 
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  children,
  ...props
}, ref) => {
  return <ButtonStyled variant={variant} size={size} {...props} ref={ref}>
  {
    LeftIcon && (
      <LeftIcon />
    )
  }
    {children}
  {
    RightIcon && (
      <RightIcon />
    )
  }
  </ButtonStyled>;
}));
