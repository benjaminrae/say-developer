import {useCreatePronunciation} from "../../domains/pronunciations/hooks.ts";
import {NewPronunciation} from "../../domains/pronunciations/types.ts";

export const useHandleFormSubmit = () => {
  const {mutateAsync: createPronunciation, isLoading} = useCreatePronunciation();

  const save = async (newPronunciation: NewPronunciation) => {
    await createPronunciation(newPronunciation);
  }

  return {save, isLoading};
}
