import {useRef} from 'react';
import {Button} from '../../shared/Button';
import {MicrophoneIcon} from '../../shared/Icons/MicrophoneIcon.tsx';
import {Spacer} from '../../shared/Spacer';
import {WaveForm} from '../Waveform';
import {useAnalyzer} from '../Waveform/hooks';
import {VoiceRecorderWrapper} from './VoiceRecorder.styles';
import {Microphone} from "./hooks.ts";
import {Play} from "../../shared/Icons/Play.tsx";
import {Flex} from '../../shared/Flex/index.tsx';

export type VoiceRecorderProps = {
  microphone: Microphone;
  recordingTime: number;
}

export const VoiceRecorder = ({microphone, recordingTime = 3000}: VoiceRecorderProps) => {
  const {
    isRecording,
    startRecording,
    stopRecording,
    audioURL,
    hasPermission,
  } = microphone;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waveFormData, analyzer, bufferLength] = useAnalyzer();

  const handleRecordingStart = () => {
    startRecording();

    setTimeout(() => {
      stopRecording();
    }, recordingTime)
  };

  return (
    <VoiceRecorderWrapper>
      {!hasPermission && <div>You need to give permission</div>}
      {/*<OnAir isRecording={isRecording}/>*/}
      <WaveForm
        canvas={canvasRef.current!}
        canvasCtx={(canvasRef.current ? canvasRef.current.getContext('2d') : undefined)!}
        canvasRef={canvasRef}
        analyzer={analyzer!}
        bufferLength={bufferLength}
        dataArray={waveFormData}
      />
      <Spacer size="xs"/>
      <Flex gap="1rem">
        {isRecording ? (
          <Button type="button" arial-label="stop recording" size="xl" animation="pulse"
                  onClick={stopRecording}>
            <MicrophoneIcon color="currentColor" size="xl"/>
          </Button>
        ) : (
          <Button type="button" variant="primary" aria-label="start recording"
                  onClick={handleRecordingStart}
                  disabled={!hasPermission} size="xl">
            <MicrophoneIcon color="currentColor" size="xl"/>
          </Button>
        )}
        <Button disabled={audioURL === null} type="button" variant="primary"
                aria-label="preview recording" size="xl" onClick={() => {
          const audio = new Audio(audioURL!);

          audio.play();
        }}>
          <Play color="currentColor" size="xl"/>
        </Button>
      </Flex>
    </VoiceRecorderWrapper>
  );
};
