import { TermSearch } from '../../components/TermSearch';
import { WordAutoCarousel } from '../../components/WordAutoCarousel';
import { HomePageStyled, HomePageTitle } from './HomePageStyled';

export const HomePage = () => {
  return (
    <HomePageStyled pageTitle="Home">
      <HomePageTitle>
        Pronounce
        <WordAutoCarousel
          words={[
            'polymorphism',
            'inheritance',
            'asyncronous',
            'multithreading',
            'instantiation',
            'recursion',
            'encapsulation',
          ]}
          speed={3000}
        />
      </HomePageTitle>
      <TermSearch />
    </HomePageStyled>
  );
};
