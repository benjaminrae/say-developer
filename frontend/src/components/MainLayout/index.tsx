import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { MainLayoutStyled } from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <Header />
      <Outlet />
    </MainLayoutStyled>
  );
};
