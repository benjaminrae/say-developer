import { Outlet } from 'react-router-dom';
import { Divider } from '../../shared/Divider';
import { Header } from '../Header';
import { MainLayoutStyled } from './MainLayout.styled';

export const MainLayout = () => {
  return (
    <MainLayoutStyled>
      <Header />
      <Divider />
      <Outlet />
    </MainLayoutStyled>
  );
};
