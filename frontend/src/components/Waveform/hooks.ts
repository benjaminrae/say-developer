import { useEffect, useState } from 'react';
import { Analyzer } from './types';

export const useAnalyzer = (): [Uint8Array, Analyzer | null, number] => {
  const [dataArray, setDataArray] = useState<Uint8Array>(new Uint8Array());
  const [analyzer, setAnalyzer] = useState<Analyzer | null>(null);
  const [bufferLength, setBufferLength] = useState<number>(0);

  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.AudioContext)();
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        setBufferLength(analyser.frequencyBinCount);
        setAnalyzer(analyser);
        const dataArray = new Uint8Array(analyser.frequencyBinCount);
        setDataArray(dataArray);
        source.connect(analyser);
        analyser.getByteFrequencyData(dataArray);
      })
      .catch((err) => console.error(err));
  }, []);

  return [dataArray, analyzer, bufferLength];
};
