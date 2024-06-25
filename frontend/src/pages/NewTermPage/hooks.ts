import { useNavigate } from 'react-router-dom';
import { useCreateTerm } from '../../domains/terms/hooks';
import { NewTerm } from '../../domains/terms/types';
import {useToast} from "../../hooks/useToast.tsx";
import {DomainError} from "../../domains/shared/errors/DomainError.ts";

export const useHandleFormSubmit = () => {
  const { mutateAsync: createTerm, isLoading } = useCreateTerm();
  const navigate = useNavigate();
  const {successToast, failureToast} = useToast();

  const save = async (newTerm: NewTerm) => {
    try {
      await createTerm(newTerm);
      successToast(`Successfully created "${newTerm.raw}"`)
      navigate(`/term/${newTerm.raw}`);
    } catch (error) {
      if (DomainError.isDomainError(error)) {
        failureToast(error.message)
        return;
      }

      failureToast("Unable to create term");
    }
  };

  return { save, isLoading };
};
