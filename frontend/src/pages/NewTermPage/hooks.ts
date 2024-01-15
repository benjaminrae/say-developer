import { useNavigate } from 'react-router-dom';
import { useCreateTerm } from '../../domains/terms/hooks';
import { NewTerm } from '../../domains/terms/types';

export const useHandleFormSubmit = () => {
  const { mutateAsync: createTerm, isLoading } = useCreateTerm();
  const navigate = useNavigate();

  const save = async (newTerm: NewTerm) => {
    try {
      await createTerm(newTerm);
      //navigate to new word
      navigate('/');
    } catch (error) {
      //handleError
      console.error(error);
    }
  };

  return { save, isLoading };
};
