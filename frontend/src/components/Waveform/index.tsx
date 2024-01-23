import { useEffect } from 'react';
import { animateBars } from './logic.helper';
import { WaveFormProps } from './types';

export const WaveForm: React.FC<WaveFormProps> = ({
  analyzer,
  canvas,
  canvasCtx,
  canvasRef,
  dataArray,
  bufferLength,
}) => {
  useEffect(() => {
    if (!canvas || !analyzer) return;
    const animate = () => {
      requestAnimationFrame(animate);
      canvas.width = canvas.width;
      animateBars({ analyzer, canvas, canvasCtx, dataArray, bufferLength });
    };

    animate();
  }, [dataArray, analyzer, bufferLength]);

  return (
    <canvas
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-10',
      }}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};
