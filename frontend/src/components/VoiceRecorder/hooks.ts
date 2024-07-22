import {useCallback, useEffect, useState} from 'react';

export type Microphone =
  {
    isRecording: boolean;
    recorder: MediaRecorder | undefined;
    audioURL: string | null;
    startRecording: () => void;
    hasPermission: boolean;
    audio: Blob | null;
    error: Error | null;
    stopRecording: () => void;
    resetMicrophone: () => void;
  }

export const useMicrophone = (): Microphone => {
  const [hasPermission, setHasPermission] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setMediaRecorder] = useState<MediaRecorder>();
  const [audio, setAudio] = useState<Blob | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  useEffect(() => {
    if ('MediaRecorder' in window) {
      navigator.mediaDevices
        .getUserMedia({
          audio: true,
          video: false,
        })
        .then((stream) => {
          setHasPermission(true);
          const mediaRecorder = new MediaRecorder(stream, {});
          setMediaRecorder(mediaRecorder);
          const chunks: Blob[] = [];

          mediaRecorder.onstart = (event) => {
            console.log(event);
          };
          mediaRecorder.onstop = () => {
            const recordedBlob = new Blob(chunks, {type: 'audio/wav'});
            setAudioURL(URL.createObjectURL(recordedBlob));
            setAudio(recordedBlob);
          };

          mediaRecorder.ondataavailable = (event) => {
            chunks.push(event.data);
          };
        })
        .catch((error) => {
          setError(error as Error);
        });
    } else {
      setError(new Error('MediaRecorder not supported in browser'));
    }
  }, []);

  const startRecording = useCallback(() => {
    setAudioURL(null);
    setIsRecording(true);
    recorder?.start();
  }, [recorder]);

  const stopRecording = useCallback(() => {
    setIsRecording(false);
    recorder?.stop();
  }, [recorder]);

  const resetMicrophone = useCallback(() => {
    stopRecording()
    setAudioURL(null);
    setAudio(null);
  }, [stopRecording])

  return {
    hasPermission,
    error,
    isRecording,
    startRecording,
    recorder,
    stopRecording,
    audioURL,
    audio,
    resetMicrophone
  };
};

export const useAudioContext = () => {
  return new AudioContext();
};
