import styled from 'styled-components';

export const VoiceRecorderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const OnAir = styled.div<{ isRecording: boolean }>`
  background-color: ${({ theme, isRecording }) => {
    return isRecording ? theme.colors.support.red.strong : theme.colors.support.orange.strong;
  }};
  border-radius: 50%;
  height: 10vh;
  width: 10vh;
`;
