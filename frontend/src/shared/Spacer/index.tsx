import styled, { Size } from 'styled-components';

export const Spacer = styled.div<{ size: Size }>`
  height: ${({ theme, size }) => theme.typography.sizes[size]};
  width: ${({ theme, size }) => theme.typography.sizes[size]};
`;
