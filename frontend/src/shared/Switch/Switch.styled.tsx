import styled, { Size, css } from 'styled-components';
import { SwitchStyledProps } from './types';

export const SwitchStyled = styled.div<SwitchStyledProps>``;

export const SwitchInput = styled.input`
  display: none;
  height: 0;
  width: 0;

  &:checked + label::before {
    margin-left: 50%;
  }
`;

export const SwitchLabel = styled.label<{ size: Size; $isOn: boolean }>`
  background-color: ${(props) =>
    props.$isOn ? props.theme.colors.accent.primary : props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 100px;
  position: relative;
  transition: background-color .2s;

  ${(props) => {
    switch (props.size) {
      case 'xs':
      case 'sm':
        return {
          height: '16px',
          width: '28px',
        };
      case 'md':
        return {
          height: '24px',
          width: '44px',
        };
      case 'lg':
      case 'xl':
        return {
          width: '60px',
          height: '32px',
        };
    }
  }}

    &::before {
      content: "";
      display: inline-block;
      height: 80%;
      aspect-ratio: 1;
      border-radius: 50%;
      transition: all 0.2s ease;
      background-color: white;
      margin-left: 5%;
    }

    &::after {
        content: "",
        position: 'absolute',
        top: 1.5,
        left: 1.5,
        display: 'inline-block',
        width: 22,
        height: 22,
        borderRadius: 100%,
        transform: 'translate(1px, 1px)',
        transition: 'all 0.2s ease',

    } 
`;

const switchChildWrapper = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const SwitchOn = styled.span`
  ${switchChildWrapper}
`;

export const SwitchOff = styled.span`
  ${switchChildWrapper}
  right: 0;
`;

export const SwitchButton = styled.span`
  // height: 90%;
  // background-color: ${(props) => props.theme.colors.white};
  // aspect-ratio: 1;
  // border-radius: 50% */;
`;
