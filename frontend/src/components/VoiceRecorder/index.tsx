import {useRef} from 'react';
import {MicrophoneIcon} from '../../shared/Icons/MicrophoneIcon.tsx';
import {Spacer} from '@/shared/Spacer';
import {WaveForm} from '../Waveform';
import {useAnalyzer} from '../Waveform/hooks';
import {VoiceRecorderWrapper} from './VoiceRecorder.styles';
import {Microphone} from "./hooks.ts";
import {Play} from "../../shared/Icons/Play.tsx";
import {Flex} from '@/shared/Flex';
import {Button} from "@/components/ui/button.tsx";

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
          <Button type="button" arial-label="stop recording" variant="destructive"
                  onClick={stopRecording}>
            <MicrophoneIcon color="currentColor" size="xl"/>
          </Button>
        ) : (
          <Button type="button" variant="default" aria-label="start recording"
                  onClick={handleRecordingStart}
                  disabled={!hasPermission}>
            <MicrophoneIcon color="currentColor" size="xl"/>
          </Button>
        )}
        <Button disabled={audioURL === null} type="button" variant="default"
                aria-label="preview recording" onClick={() => {
          const audio = new Audio(audioURL!);

          audio.play();
        }}>
          <Play color="currentColor" size="xl"/>
        </Button>
      </Flex>
    </VoiceRecorderWrapper>
  );
};
