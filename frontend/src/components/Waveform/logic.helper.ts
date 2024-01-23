import { BarProps } from './types';

export const animateBars = ({ analyzer, canvas, canvasCtx, dataArray, bufferLength }: BarProps) => {
  analyzer.getByteFrequencyData(dataArray);
  canvasCtx.fillStyle = '#000';
  const HEIGHT = canvas.height / 2;
  let barWidth = Math.ceil(canvas.width / bufferLength) * 2.5;
  let barHeight: number;
  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    barHeight = (dataArray[i] / 255) * HEIGHT;
    const r = 242 + Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    const g = 104 + Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    const b = 65 + Math.floor(Math.random() * (10 - -10 + 1)) + -10;
    canvasCtx.fillStyle = `rgb(${r},${g},${b})`;
    canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  }
};
