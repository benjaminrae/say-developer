import {useParams} from 'react-router-dom';
import {Page} from '../../components/Page';
import {VoiceRecorder} from '../../components/VoiceRecorder';
import {Divider} from "../../shared/Divider";
import {Spacer} from "../../shared/Spacer";
import {Button} from "../../shared/Button";
import {useForm} from "react-hook-form";
import {NewPronunciation} from "../../domains/pronunciations/types.ts";
import {useGetTerm} from "../../domains/terms/hooks.ts";
import {useHandleFormSubmit} from "./hooks.ts";
import {useMicrophone} from "../../components/VoiceRecorder/hooks.ts";

export const PronouncePage = () => {
  const {term} = useParams();
  const microphone = useMicrophone();

  const {data} = useGetTerm(term!);

  const mimeType = "audio/wav";
  const fileName = `${term}-${Date.now()}.wav`;
  const {handleSubmit} = useForm<NewPronunciation>({
    defaultValues: {
      fileName: fileName,
      mimeType: mimeType
    }
  })

  const {save} = useHandleFormSubmit();

  const saveWithAudio = async (pronunciation: NewPronunciation) => {
    const file = new File([microphone.audio!], fileName)

    await save({...pronunciation, file, termId: data!.id})
  }


  return (
    <Page pageTitle={`Pronounce "${term}"`}>
      <form onSubmit={handleSubmit(saveWithAudio)}>
        <h1>Pronounce "{term}"</h1>
        <Divider/>
        <VoiceRecorder microphone={microphone}/>
        <Spacer size="xl"/>
        <Button>
          Save Pronunciation
        </Button>
      </form>
    </Page>
  );
}
