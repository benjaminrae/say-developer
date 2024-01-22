import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(RouterLink)`
  color: ${(props) => props.theme.colors.ink.primary};
  font-weight: bold;
`;
