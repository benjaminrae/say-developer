import {BarProps} from './types';

export const animateBars = ({analyzer, canvas, canvasCtx, dataArray, bufferLength, color}: BarProps) => {
  analyzer.getByteFrequencyData(dataArray);
  canvasCtx.fillStyle = '#000';
  const HEIGHT = canvas.height / 2;
  let barWidth = Math.ceil(canvas.width / bufferLength) * 2.5;
  let barHeight: number;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = (dataArray[i] / 255) * HEIGHT;
    canvasCtx.fillStyle = color;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

    x += barWidth + 1;
  }
};
