import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

export type FlexProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  display?: 'flex' | 'inline-flex';
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'left'
    | 'right'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'initial'
    | 'inherit';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  alignItems?:
    | 'stretch'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'baseline'
    | 'initial'
    | 'inherit';
  flexGrow?: number;
  flexShrink?: number;
  height?: string | number;
  width?: string | number;
  flex?: CSSProperties['flex'];
  gap?: string;
};

export const Flex = styled.div<FlexProps>(({ style = {}, ...props }) => ({
  display: props.display || 'flex',
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  flexWrap: props.flexWrap,
  alignItems: props.alignItems,
  flexGrow: props.flexGrow,
  flexShrink: props.flexShrink,
  height: props.height,
  width: props.width,
  flex: props.flex,
  gap: props.gap,
  ...style,
}));
