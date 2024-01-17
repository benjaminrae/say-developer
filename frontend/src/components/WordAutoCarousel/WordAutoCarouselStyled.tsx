import styled from 'styled-components';

export const WordAutoCarouselStyled = styled.span`
  font-size: inherit;
  font-weight: inherit;
  display: inline;
  position: relative;

  .visible {
    animation: appear 1s forwards;
    position: relative;
  }

  .hidden {
    animation: slideOut 1s forwards;
    position: absolute;
  }

  @keyframes slideOut {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
      display: none;
    }
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const WordAutoCarouselInner = styled.span`
  position: absolute;
  white-space: nowrap;
`;
