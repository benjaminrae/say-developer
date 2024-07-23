import {useNavigate} from 'react-router-dom';
import {useCreateTerm} from '../../domains/terms/hooks';
import {useToast} from "../../hooks/useToast.tsx";
import {DomainError} from "../../domains/shared/errors/DomainError.ts";
import z from "zod";
import {newTermSchema} from "@/pages/NewTermPage/NewTermForm.tsx";
import {NewTerm} from "@/domains/terms/types.ts";

export const useHandleFormSubmit = () => {
  const {mutateAsync: createTerm, isLoading} = useCreateTerm();
  const navigate = useNavigate();
  const {successToast, failureToast} = useToast();

  const save = async (rawNewTerm: z.infer<typeof newTermSchema>) => {
    try {
      const newTerm: NewTerm = {
        ...rawNewTerm,
        aliases: rawNewTerm.aliases!.split(/,\s*/)
      }
      await createTerm(newTerm);
      successToast(`Successfully created "${rawNewTerm.raw}"`)
      navigate(`/term/${encodeURIComponent(rawNewTerm.raw)}`);
    } catch (error) {
      if (DomainError.isDomainError(error)) {
        failureToast(error.message)
        return;
      }

      failureToast("Unable to create term");
    }
  };

  return {save, isLoading};
};
