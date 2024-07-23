import {useSearchParams} from 'react-router-dom';
import {Page} from '@/components/Page';
import {NewTermForm} from "@/pages/NewTermPage/NewTermForm.tsx";


export const NewTermPage = () => {
  const [searchParams] = useSearchParams();

  const searchedTerm = searchParams.get('term');

  return (
    <Page pageTitle="New term">
      <NewTermForm newTerm={searchedTerm ?? ''}/>
    </Page>
  );
};
