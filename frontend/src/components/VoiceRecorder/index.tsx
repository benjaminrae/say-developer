import { Button } from '../../shared/Button';
import { useMicrophone } from './hooks';

export const VoiceRecorder = () => {
  const { isRecording, startRecording, stopRecording, audioURL, hasPermission } = useMicrophone();

  return (
    <>
      {!hasPermission && <div>You need to give permission</div>}
      <Button onClick={startRecording}>Start Recording</Button>
      <Button onClick={stopRecording}>Stop Recording</Button>
      <div>{isRecording ? 'Recording' : 'Not Recording'}</div>
      {audioURL && (
        <audio controls>
          <source src={audioURL} />
        </audio>
      )}
    </>
  );
};
