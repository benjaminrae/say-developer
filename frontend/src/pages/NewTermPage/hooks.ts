import { useNavigate } from 'react-router-dom';
import { useCreateTerm } from '../../domains/terms/hooks';
import { NewTerm } from '../../domains/terms/types';
import {useToast} from "../../hooks/useToast.tsx";

export const useHandleFormSubmit = () => {
  const { mutateAsync: createTerm, isLoading } = useCreateTerm();
  const navigate = useNavigate();
  const {successToast} = useToast();

  const save = async (newTerm: NewTerm) => {
    try {
      await createTerm(newTerm);
      successToast(`Successfully created "${newTerm.raw}"`)
      navigate(`/term/${newTerm.raw}`);
    } catch (error) {
      //handleError
      console.error(error);
    }
  };

  return { save, isLoading };
};
