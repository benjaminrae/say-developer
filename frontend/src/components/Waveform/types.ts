export type Analyzer = {
  fftSize: number;
  frequencyBinCount: number;
  getByteFrequencyData: (dataArray: Uint8Array) => void;
};

export type WaveFormProps = {
  analyzer: Analyzer;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvas: HTMLCanvasElement;
  canvasCtx: CanvasRenderingContext2D;
  dataArray: Uint8Array;
  bufferLength: number;
};

export type BarProps = {
  analyzer: Analyzer;
  canvas: HTMLCanvasElement;
  canvasCtx: CanvasRenderingContext2D;
  dataArray: Uint8Array;
  bufferLength: number;
};
