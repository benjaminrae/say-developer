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
import {Flex} from "../../shared/Flex";
import {XMark} from "../../shared/Icons/XMark.tsx";
import {Tick} from "../../shared/Icons/Tick.tsx";

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

  const recordingTimeInMs = 3000;
  const handleCancelClick = () => {
    microphone.resetMicrophone();

  }
  return (
    <Page pageTitle={`Pronounce "${term}"`}>
      <form onSubmit={handleSubmit(saveWithAudio)}>
        <h1>Pronounce "{term}"</h1>
        <Divider/>
        <Flex flexDirection="column" alignItems="center">
          <VoiceRecorder microphone={microphone} recordingTime={recordingTimeInMs}/>
          <Spacer size="xl"/>
          <Flex gap="1rem">
            <Button type="button" variant="danger" leftIcon={XMark} onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button disabled={microphone.audio === null} leftIcon={Tick} style={{}}>
              Save
            </Button>
          </Flex>
        </Flex>
      </form>
    </Page>
  );
}
