import styled from 'styled-components';

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.border};
  width: 100%;
  margin: 0.5rem 0;
`;
