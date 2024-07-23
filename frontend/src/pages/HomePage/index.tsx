import {TermSearch} from '@/components/TermSearch';
import {WordAutoCarousel} from '@/components/WordAutoCarousel';
import {useBreakpoints} from '@/hooks/useBreakpoints.ts';
import {Flex} from '@/shared/Flex';
import {HomePageTitle} from './HomePageStyled';
import {Page} from "@/components/Page";
import {FeaturedTerms} from "@/components/FeaturedTerms/FeaturedTerms.tsx";

export const HomePage = () => {
  const {isPhone} = useBreakpoints();

  return (
    <Page pageTitle="Home">
      <Flex
        flexDirection="column"
        justifyContent="center"
        style={{margin: '0 auto', width: '90%', height: '100%'}}
      >
        <Flex justifyContent="center" alignItems="center" style={{height: '25vh'}}>
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
        <TermSearch/>
        <FeaturedTerms className="mt-12 self-center" delay={10000}/>
      </Flex>
    </Page>
  );
};

