import React, {useEffect} from 'react';
import {animateBars} from './logic.helper';
import {WaveFormProps} from './types';
import {WaveformCanvas} from "./Waveform.styled.tsx";
import {useTheme} from "styled-components";

export const WaveForm: React.FC<WaveFormProps> = (
  {
    analyzer,
    canvas,
    canvasCtx,
    canvasRef,
    dataArray,
    bufferLength,
  }) => {
  const theme = useTheme()
  useEffect(() => {
    const color = theme.colors.accent.secondary;
    if (!canvas || !analyzer) return;
    const animate = () => {
      requestAnimationFrame(animate);
      canvas.width = canvas.width;
      animateBars({analyzer, canvas, canvasCtx, dataArray, bufferLength, color});
    };

    animate();
  }, [dataArray, analyzer, bufferLength]);

  return (
    <WaveformCanvas
      ref={canvasRef}
    />
  );
};
