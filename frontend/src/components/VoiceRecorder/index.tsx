import { useRef } from 'react';
import { Button } from '../../shared/Button';
import { Microphone } from '../../shared/Icons/Microphone';
import { Spacer } from '../../shared/Spacer';
import { WaveForm } from '../Waveform';
import { useAnalyzer } from '../Waveform/hooks';
import { OnAir, VoiceRecorderWrapper } from './VoiceRecorder.styles';
import { useMicrophone } from './hooks';

export const VoiceRecorder = () => {
  const { isRecording, startRecording, stopRecording, audioURL, hasPermission } = useMicrophone();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waveFormData, analyzer, bufferLength] = useAnalyzer();

  return (
    <VoiceRecorderWrapper>
      {!hasPermission && <div>You need to give permission</div>}
      <OnAir isRecording={isRecording} />
      <WaveForm
        canvas={canvasRef.current!}
        canvasCtx={canvasRef.current?.getContext('2d')!}
        canvasRef={canvasRef}
        analyzer={analyzer!}
        bufferLength={bufferLength}
        dataArray={waveFormData}
      />
      <div>{isRecording ? 'Recording' : 'Not Recording'}</div>
      <Spacer size="xs" />
      {isRecording ? (
        <Button leftIcon={Microphone} onClick={stopRecording}>
          Stop Recording
        </Button>
      ) : (
        <Button leftIcon={Microphone} onClick={startRecording} disabled={!hasPermission}>
          Start Recording
        </Button>
      )}
      {audioURL && (
        <audio controls>
          <source src={audioURL} />
        </audio>
      )}
    </VoiceRecorderWrapper>
  );
};
