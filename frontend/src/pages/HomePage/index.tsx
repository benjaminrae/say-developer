import { TermSearch } from '../../components/TermSearch';
import { WordAutoCarousel } from '../../components/WordAutoCarousel';
import { Flex } from '../../shared/Flex';
import { HomePageStyled, HomePageTitle } from './HomePageStyled';

export const HomePage = () => {
  return (
    <HomePageStyled pageTitle="Home">
      <Flex
        flexDirection="column"
        justifyContent="center"
        style={{ margin: '0 auto', width: '90%', height: '100%' }}
      >
        <Flex justifyContent="center" alignItems="center" style={{ height: '25vh' }}>
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
        </Flex>
        <TermSearch />
      </Flex>
    </HomePageStyled>
  );
};
