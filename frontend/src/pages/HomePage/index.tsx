import {TermSearch} from '../../components/TermSearch';
import {WordAutoCarousel} from '../../components/WordAutoCarousel';
import {useBreakpoints} from '../../hooks/useBreakpoints';
import {Flex} from '../../shared/Flex';
import {HomePageStyled, HomePageTitle} from './HomePageStyled';
import {RecentTerms} from "@/components/RecentTerms/recentTerms.tsx";

export const HomePage = () => {
  const { isPhone } = useBreakpoints();

  return (
    <HomePageStyled pageTitle="Home">
      <Flex
        flexDirection="column"
        justifyContent="center"
        style={{ margin: '0 auto', width: '90%', height: '100%' }}
      >
        <Flex justifyContent="center" alignItems="center" style={{ height: '25vh' }}>
          <HomePageTitle size={isPhone ? 'sm' : 'lg'}>
            <span>How do you say </span>
            <WordAutoCarousel
              words={[
                'polymorphism?',
                'inheritance?',
                'asynchronous?',
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
      <RecentTerms />
    </HomePageStyled>
  );
};
