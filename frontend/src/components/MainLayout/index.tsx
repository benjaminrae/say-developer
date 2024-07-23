import {Outlet} from 'react-router-dom';
import {Footer} from '../Footer';
import {Header} from '../Header';
import {MainContainer} from '../MainContainer/MainContainer.tsx';
import {Separator} from "@/components/ui/separator.tsx";
import {Navigation} from "@/components/Navigation";
import {FeatureFlag} from "@/components/FeatureFlag/FeatureFlag.tsx";
import {Features} from "@/components/FeatureFlagsProvider/features.ts";

export const MainLayout = () => {
  return (
    <MainContainer>
      <Header/>
      <FeatureFlag featureName={Features.navigationMenu}>
        <Navigation/>
        <Separator className="my-2"/>
      </FeatureFlag>
      <div className="flex-1">
        <Outlet/>
      </div>
      <Footer/>
    </MainContainer>
  );
};
