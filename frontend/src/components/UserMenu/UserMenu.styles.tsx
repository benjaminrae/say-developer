import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  position: relative;
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Username = styled.span`
  font-weight: 600;
`;

export const UserMenuDrawer = styled.div`
  margin-top: 0.5rem;
  position: absolute;
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.md};
  padding: 0.5rem;
  z-index: 30;
  box-shadow: ${({ theme }) => theme.sizes.shadow.xl};
`;

export const UserMenuContent = styled.div`
  display: flex;
  flex-direction: column;
`;
