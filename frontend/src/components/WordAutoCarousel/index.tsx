import Typewriter from 'typewriter-effect';
import { WordAutoCarouselStyled } from './WordAutoCarouselStyled';

export type WordAutoCarouselProps = {
  words: string[];
  typingSpeed: number;
  deleteSpeed: number;
  loop: boolean;
};

export const WordAutoCarousel = ({
  words,
  typingSpeed,
  deleteSpeed,
  loop,
}: WordAutoCarouselProps) => {
  return (
    <WordAutoCarouselStyled>
      <Typewriter
        options={{
          strings: words,
          loop,
          deleteSpeed,
          delay: typingSpeed,
          autoStart: true,
          cursorClassName: 'cursor',
        }}
      />
    </WordAutoCarouselStyled>
  );
};
