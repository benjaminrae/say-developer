import {useCreatePronunciation} from "../../domains/pronunciations/hooks.ts";
import {NewPronunciation} from "../../domains/pronunciations/types.ts";
import {useToast} from "../../hooks/useToast.tsx";
import {useNavigate} from "react-router-dom";

export const useHandleFormSubmit = () => {
  const {mutateAsync: createPronunciation, isLoading} = useCreatePronunciation();
  const {successToast, failureToast} = useToast();
  const navigate = useNavigate();


  const save = async (newPronunciation: NewPronunciation) => {

    try {
      await createPronunciation(newPronunciation);
      successToast(`Successfully saved pronunciation for "${newPronunciation.rawTerm}"`)
      navigate(`/term/${newPronunciation.rawTerm}`)
    } catch {
      failureToast("Unable to save pronunciation")
    }
  }

  return {save, isLoading};
}
