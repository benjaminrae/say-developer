import {useGetPronunciationPreSignedUrlById} from "../../domains/pronunciations/hooks.ts";
import {Pronunciation} from "../../domains/pronunciations/types.ts";

export const useHandlePronunciationPlay = () => {
  const {mutateAsync: getPreSignedUrl} = useGetPronunciationPreSignedUrlById();

  const play = async (pronunciation: Pronunciation) => {
    const preSignedUrl = await getPreSignedUrl(pronunciation.id);

    const audio = new Audio(preSignedUrl);

    await audio.play();
  }

  return {play}
}
