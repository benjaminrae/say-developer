import styled from 'styled-components';

export const AvatarImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const AvatarFallback = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.accent.primary};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  font-weight: 700;
  height: 50px;
  justify-content: center;
  width: 50px;
`;
