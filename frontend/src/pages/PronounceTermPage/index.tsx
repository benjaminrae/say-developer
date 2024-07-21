import {useParams} from 'react-router-dom';
import {Page} from '@/components/Page';
import {VoiceRecorder} from '@/components/VoiceRecorder';
import {Spacer} from "@/shared/Spacer";
import {useForm} from "react-hook-form";
import {NewPronunciation} from "@/domains/pronunciations/types.ts";
import {useGetTerm} from "@/domains/terms/hooks.ts";
import {useHandleFormSubmit} from "./hooks.ts";
import {useMicrophone} from "@/components/VoiceRecorder/hooks.ts";
import {Flex} from "@/shared/Flex";
import {XMark} from "../../shared/Icons/XMark.tsx";
import {Tick} from "../../shared/Icons/Tick.tsx";
import {Button} from '@/components/ui/button.tsx';
import {Separator} from "@/components/ui/separator.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion.tsx";
import {Heading} from "@/shared/Typography";

export const PronounceTermPage = () => {
  const {term} = useParams();
  const microphone = useMicrophone();

  const {data} = useGetTerm(term!);

  const mimeType = "audio/wav";
  const fileName = `${term}-${Date.now()}.wav`;
  const {handleSubmit} = useForm<NewPronunciation>({
    defaultValues: {
      rawTerm: term,
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
        <Heading level={1}>
          Pronounce "{term}"
        </Heading>
        <Separator className="my-2"/>
        <Flex flexDirection="column" alignItems="center">
          <VoiceRecorder microphone={microphone} recordingTime={recordingTimeInMs}/>
          <Spacer size="xl"/>
          <Flex gap="1rem">
            <Button type="button" variant="destructive" onClick={handleCancelClick}
                    className="flex flex-row gap-2 justify-center items-center">
              <XMark color="currentColor" size="xl"/>
              Cancel
            </Button>
            <Button disabled={microphone.audio === null} variant="default"
                    className="flex flex-row gap-2 justify-center items-center">
              <Tick color="currentColor" size="xl"/> Save
            </Button>
          </Flex>
        </Flex>
      </form>
      <aside>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I record?</AccordionTrigger>
            <AccordionContent>
              You need to click on "Allow" when the browser asks for permission to use the
              microphone.
              <br/>
              <br/>
              Then, click on the microphone icon to start recording. The recording will stop
              automatically after 3 seconds.
              <br/>
              <br/>
              You can cancel the recording by clicking on the "Cancel" button.
              <br/>
              <br/>
              Listen to the recording by clicking on the play button.
              <br/>
              <br/>
              If you're happy with the recording, click on the "Save" button.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
    </Page>
  );
}
