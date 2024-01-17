import styled from 'styled-components';

export const WordAutoCarouselStyled = styled.div`
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  display: inline-block;
  position: relative;
  max-width: 100%;
  vertical-align: middle;
  overflow: hidden;
`;

export const WordAutoCarouselInner = styled.span`
  position: absolute;
  white-space: nowrap;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const WordAutoCarouselInnerSlideOut = styled(WordAutoCarouselInner)`
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
    }
  }

  animation: slideOut 0.5s forwards;
`;

export const WordAutoCarouselInnerSlideIn = styled(WordAutoCarouselInner)`
  @keyframes slideIn {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slideIn 0.5s forwards;
`;
