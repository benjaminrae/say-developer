import styled from 'styled-components';

export const WordAutoCarouselStyled = styled.span`
  .Typewriter {
    display: inline-block;
  }
  .cursor {
    color: ${(props) => props.theme.colors.ink.secondary};
    animation: blink 1s infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;
