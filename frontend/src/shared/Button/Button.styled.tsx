import styled, {css} from 'styled-components';
import {fontSizes} from '../../styles/partials/fontSizes';
import paddings from '../../styles/partials/paddings';
import {ButtonStyledProps} from './types';

const buttonStyle = css`
  cursor: pointer;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;

  outline: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const buttonSizes = css<ButtonStyledProps>`
  border-radius: ${({size, theme: {sizes}}) => sizes.borderRadius[size ?? 'md']};

  ${paddings}
`;

const buttonColors = css<ButtonStyledProps>`
  border: 1px solid;

  ${(props) => {
  switch (props.variant) {
    case 'primary':
      return {
        color: props.theme.colors.white,
        backgroundColor: props.theme.colors.accent.primary,
        borderColor: props.theme.colors.accent.primary,
      };
    case 'secondary':
      return {
        color: props.theme.colors.white,
        backgroundColor: props.theme.colors.accent.secondary,
        borderColor: props.theme.colors.accent.secondary,
      };
    case 'ghost':
      return {
        color: props.theme.colors.ink.secondary,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      };
    case 'stroke':
      return {
        color: props.theme.colors.ink.primary,
        backgroundColor: 'transparent',
        borderColor: props.theme.colors.border,
      };
    case 'danger':
      return {
        color: props.theme.colors.support.red.strong,
        backgroundColor: props.theme.colors.support.red.weak
      }
    default:
      return props.theme.colors.white;
  }
}};

  &:focus {
       ${(props) => {
  switch (props.variant) {
    case 'primary':
      return `
         outline: 5px solid ${props.theme.colors.hover.primary};
         filter: drop-shadow(0 0 5px ${props.theme.colors.accent.primary});
      `;
    case 'secondary':
      return `
            color: ${props.theme.colors.accent.secondary};
            background-color: ${props.theme.colors.hover.secondary};
          `;
    case 'ghost':
      return `
            color: ${props.theme.colors.black};
            background-color: ${props.theme.colors.hover.primary};
            border: 1px solid transparent;
          `;
    case 'stroke':
      return `
            background-color: ${props.theme.colors.hover};
            border: 1px solid ${props.theme.colors.black};
          `;

  }
}};
  }

  &:hover {
    ${(props) => {
  switch (props.variant) {
    case 'primary':
      return `
         color: ${props.theme.colors.accent.primary};
         background-color: ${props.theme.colors.hover.primary};
      `;
    case 'secondary':
      return `
            color: ${props.theme.colors.accent.secondary};
            background-color: ${props.theme.colors.hover.secondary};
          `;
    case 'ghost':
      return `
            color: ${props.theme.colors.black};
            background-color: ${props.theme.colors.hover.primary};
            border: 1px solid transparent;
          `;
    case 'stroke':
      return `
            background-color: ${props.theme.colors.hover};
            border: 1px solid ${props.theme.colors.black};
          `;
    case 'danger':
      return `
            background-color: ${props.theme.colors.support.red.mid};
            color: ${props.theme.colors.white};
            border: 1px solid ${props.theme.colors.black};
      `;
  }
}};
  }
`;

const buttonAnimations = css<ButtonStyledProps>`
 ${(props) => {
  if (props.animation === "pulse") {
    return `
    animation-name: pulse;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    `
  }
}};

@keyframes pulse{
	0%{
		box-shadow: 0px 0px 5px 0px currentColor;
	}
	100%{
		box-shadow: 0px 0px 5px 10px currentColor;
	}
`;

const iconStyle = css<ButtonStyledProps>``;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${buttonStyle}
  ${iconStyle}
  ${buttonSizes}
  ${buttonColors}
  ${fontSizes}
  ${buttonAnimations}
`;
