import { useEffect, useState } from 'react';
import { WordAutoCarouselInner, WordAutoCarouselStyled } from './WordAutoCarouselStyled';

export type WordAutoCarouselProps = {
  words: string[];
  speed?: number;
};

export const WordAutoCarousel = ({ words, speed }: WordAutoCarouselProps) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, speed || 1000);

    return () => clearInterval(interval);
  }, [wordIndex, words, speed]);

  return (
    <WordAutoCarouselStyled>
      {words.map((word, index) => (
        <WordAutoCarouselInner key={word} className={wordIndex === index ? 'visible' : 'hidden'}>
          {word}
        </WordAutoCarouselInner>
      ))}
    </WordAutoCarouselStyled>
  );
};
