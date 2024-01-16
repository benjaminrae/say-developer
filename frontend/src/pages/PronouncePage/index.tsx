import { useParams } from 'react-router-dom';
import { Page } from '../../components/Page';
import { VoiceRecorder } from '../../components/VoiceRecorder';

export const PronouncePage = () => {
  const { term } = useParams();

  return (
    <Page pageTitle={`Pronounce "${term}"`}>
      <h1>Pronounce "{term}"</h1>
      <VoiceRecorder />
    </Page>
  );
};
