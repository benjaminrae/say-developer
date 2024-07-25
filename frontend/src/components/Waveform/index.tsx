import React, {useEffect} from 'react';
import {animateBars} from './logic.helper';
import {WaveFormProps} from './types';
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
      // required to update waveform
      // eslint-disable-next-line no-self-assign
      canvas.width = canvas.width;
      animateBars({analyzer, canvas, canvasCtx, dataArray, bufferLength, color});
    };

    animate();
  }, [dataArray, analyzer, bufferLength, theme.colors.accent.secondary, canvas, canvasCtx]);

  return (
    <canvas
      ref={canvasRef}
    />
  );
};
