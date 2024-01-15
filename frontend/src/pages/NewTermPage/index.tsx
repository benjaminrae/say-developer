import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { Page } from '../../components/Page';
import { NewTerm } from '../../domains/terms/types';
import { Button } from '../../shared/Button';
import { Flex } from '../../shared/Flex';
import { useHandleFormSubmit } from './hooks';

export const NewTermPage = () => {
  const [searchParams] = useSearchParams();
  const { save } = useHandleFormSubmit();

  const searchedTerm = searchParams.get('term');

  const { register, handleSubmit } = useForm<NewTerm>({
    defaultValues: {
      raw: searchedTerm ?? '',
    },
  });

  return (
    <Page pageTitle="New term">
      <form onSubmit={handleSubmit(save)}>
        <Flex flexDirection="column" gap="1rem">
          <Flex flexDirection="column">
            <label htmlFor="raw">Term</label>
            <input type="text" id="raw" {...register('raw')} />
          </Flex>
          <Flex flexDirection="column">
            <label htmlFor="description">Definition</label>
            <textarea id="description" {...register('description')} />
          </Flex>
          <Button type="submit">Add term</Button>
        </Flex>
      </form>
    </Page>
  );
};
