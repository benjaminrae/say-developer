import {forwardRef, memo} from 'react';
import {Spacer} from '../Spacer';
import {ButtonStyled} from './Button.styled';
import {ButtonProps} from './types';

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        variant = 'primary',
        size = 'md',
        leftIcon: LeftIcon,
        rightIcon: RightIcon,
        children,
        ...props
      },
      ref
    ) => {
      return (
        <ButtonStyled variant={variant} size={size} {...props} ref={ref}>
          {LeftIcon && (
            <>
              <LeftIcon size={size} color="currentColor"/>
              <Spacer size={'xs'}/>
            </>
          )}
          {children}
          {RightIcon && (
            <>
              <Spacer size={'xs'}/>
              <RightIcon size={size} color="currentColor"/>
            </>
          )}
        </ButtonStyled>
      );
    }
  )
);

