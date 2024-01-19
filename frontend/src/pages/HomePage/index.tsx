import { TermSearch } from '../../components/TermSearch';
import { WordAutoCarousel } from '../../components/WordAutoCarousel';
import { HomePageStyled, HomePageTitle } from './HomePageStyled';

export const HomePage = () => {
  return (
    <HomePageStyled pageTitle="Home">
      <div style={{ margin: '0 auto', width: '90%' }}>
        <HomePageTitle>
          <span>How do you say </span>
          <WordAutoCarousel
            words={[
              'polymorphism?',
              'inheritance?',
              'asyncronous?',
              'multithreading?',
              'instantiation?',
              'recursion?',
              'encapsulation?',
            ]}
            deleteSpeed={50}
            loop={true}
            typingSpeed={100}
          />
        </HomePageTitle>
      </div>
      <TermSearch />
    </HomePageStyled>
  );
};
