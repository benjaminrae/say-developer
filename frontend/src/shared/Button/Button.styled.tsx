import styled, { css } from 'styled-components';
import { fontSizes } from '../../styles/partials/fontSizes';
import paddings from '../../styles/partials/paddings';
import { ButtonStyledProps } from './types';

const buttonStyle = css`
  cursor: pointer;
  font-weight: 600;

  outline: none;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const buttonSizes = css<ButtonStyledProps>`
  border-radius: ${({ size, theme: { sizes } }) => sizes.borderRadius[size ?? 'md']};

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
          border: props.theme.colors.ink.secondary,
        };
      default:
        return props.theme.colors.white;
    }
  }};

  &:hover {
    ${(props) => {
      switch (props.variant) {
        case 'primary':
          return {};
        case 'secondary':
          return `
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
            backgroun-color: ${props.theme.colors.hover};
            border: 1px solid ${props.theme.colors.black};
          `;
      }
    }};
  }
`;

const iconStyle = css<ButtonStyledProps>``;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${buttonStyle}
  ${iconStyle}
  ${buttonSizes}
  ${buttonColors}
  ${fontSizes}
`;
