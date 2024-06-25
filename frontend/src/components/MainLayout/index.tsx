import { Outlet } from 'react-router-dom';
import { Divider } from '../../shared/Divider';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MainContainer } from '../MainContainer/MainContainer.tsx';

export const MainLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Divider />
      <Outlet />
      <Footer />
    </MainContainer>
  );
};
