import {Outlet} from 'react-router-dom';
import {Footer} from '../Footer';
import {Header} from '../Header';
import {MainContainer} from '../MainContainer/MainContainer.tsx';
import {Separator} from "@/components/ui/separator.tsx";

export const MainLayout = () => {
  return (
    <MainContainer>
      <Header/>
      <Separator className="my-2"/>
      <Outlet/>
      <Footer/>
    </MainContainer>
  );
};
