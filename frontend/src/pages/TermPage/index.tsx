import {useParams} from 'react-router-dom';
import {Page} from '@/components/Page';
import {useGetTermWithPronunciations} from '@/domains/terms/hooks.ts';
import PronunciationList from "@/components/PronunciationList/PronunciationList.tsx";
import {TermCard} from "@/components/TermCard/TermCard.tsx";

export const TermPage = () => {
  const {term} = useParams();

  const {data: termWithPronunciations} = useGetTermWithPronunciations(term ?? '');


  return (
    <Page pageTitle={term}>
      {termWithPronunciations && (
        <div className="flex flex-col gap-4">
          <TermCard term={termWithPronunciations}/>
          {
            termWithPronunciations.pronunciations && (
              <PronunciationList pronunciations={termWithPronunciations.pronunciations}/>
            )
          }
        </div>
      )}
    </Page>
  );
};


