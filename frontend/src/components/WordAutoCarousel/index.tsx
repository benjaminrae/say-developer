import { useEffect, useState } from 'react';
import {
  WordAutoCarouselInnerSlideIn,
  WordAutoCarouselInnerSlideOut,
  WordAutoCarouselStyled,
} from './WordAutoCarouselStyled';

export type WordAutoCarouselProps = {
  words: string[];
  speed?: number;
};

export const WordAutoCarousel = ({ words, speed }: WordAutoCarouselProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [previousWordIndex, setPreviousWordIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousWordIndex(wordIndex);
      setWordIndex((prev) => (prev + 1) % words.length);
    }, speed || 1000);

    return () => clearInterval(interval);
  }, [wordIndex, words, speed]);

  return (
    <WordAutoCarouselStyled>
      {previousWordIndex >= 0 && (
        <WordAutoCarouselInnerSlideOut key={`slideOut${previousWordIndex}`} className="slideOut">
          {words[previousWordIndex]}
        </WordAutoCarouselInnerSlideOut>
      )}
      <WordAutoCarouselInnerSlideIn className="slideIn" key={`slideIn${wordIndex}`}>
        {words[wordIndex]}
      </WordAutoCarouselInnerSlideIn>
    </WordAutoCarouselStyled>
  );
};
