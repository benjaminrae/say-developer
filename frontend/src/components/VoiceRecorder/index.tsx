import {useRef} from 'react';
import {Button} from '../../shared/Button';
import {MicrophoneIcon} from '../../shared/Icons/MicrophoneIcon.tsx';
import {Spacer} from '../../shared/Spacer';
import {WaveForm} from '../Waveform';
import {useAnalyzer} from '../Waveform/hooks';
import {OnAir, VoiceRecorderWrapper} from './VoiceRecorder.styles';
import {Microphone} from "./hooks.ts";

export type VoiceRecorderProps = {
  microphone: Microphone;
}

export const VoiceRecorder = ({microphone}: VoiceRecorderProps) => {
  const {
    isRecording,
    startRecording,
    stopRecording,
    audioURL,
    hasPermission,
  } = microphone;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waveFormData, analyzer, bufferLength] = useAnalyzer();


  return (
    <VoiceRecorderWrapper>
      {!hasPermission && <div>You need to give permission</div>}
      <OnAir isRecording={isRecording}/>
      <WaveForm
        canvas={canvasRef.current!}
        canvasCtx={(canvasRef.current ? canvasRef.current.getContext('2d') : undefined)!}
        canvasRef={canvasRef}
        analyzer={analyzer!}
        bufferLength={bufferLength}
        dataArray={waveFormData}
      />
      <div>{isRecording ? 'Recording' : 'Not Recording'}</div>
      <Spacer size="xs"/>
      {isRecording ? (
        <Button type="button" leftIcon={MicrophoneIcon} onClick={stopRecording}>
          Stop Recording
        </Button>
      ) : (
        <Button type="button" leftIcon={MicrophoneIcon} onClick={startRecording}
                disabled={!hasPermission}>
          Start Recording
        </Button>
      )}
      {audioURL && (
        <audio controls>
          <source src={audioURL}/>
        </audio>
      )}
    </VoiceRecorderWrapper>
  );
};
