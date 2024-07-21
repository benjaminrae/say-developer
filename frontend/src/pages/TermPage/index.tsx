import {Link, useParams} from 'react-router-dom';
import {Page} from '@/components/Page';
import {useGetTermWithPronunciations} from '@/domains/terms/hooks.ts';
import {Play} from "../../shared/Icons/Play.tsx";
import {Pronunciation} from "@/domains/pronunciations/types.ts";
import {useHandlePronunciationPlay} from "./hooks.ts";
import {Button} from "@/components/ui/button.tsx";
import {Heading, Lead} from "@/shared/Typography";

export const TermPage = () => {
  const {term} = useParams();

  const {data: termWithPronunciations} = useGetTermWithPronunciations(term ?? '');
  const {play} = useHandlePronunciationPlay()


  const handlePlayPronunciation = (pronunciation: Pronunciation) => {
    play(pronunciation)
  }


  return (
    <Page pageTitle={term}>
      {termWithPronunciations && (
        <>
          <Heading level={1}>
            {termWithPronunciations.raw}
          </Heading>
          <Lead>{termWithPronunciations.description}</Lead>
          {termWithPronunciations.aliases && (
            <ul>
              {termWithPronunciations.aliases.map((alias) => (
                <li key={alias}>{alias}</li>
              ))}
            </ul>
          )}
          {
            termWithPronunciations.pronunciations && (<ul>
              {termWithPronunciations.pronunciations.map((pronunciation) => (
                <li key={pronunciation.id}>
                  <Button variant="ghost" onClick={() => handlePlayPronunciation(pronunciation)}
                          aria-label="Play">
                    <Play color="currentColor" size="sm"/>
                  </Button>
                  <span>{pronunciation.fileName} by {pronunciation.createdBy}</span>
                </li>
              ))}

            </ul>)
          }
          <p>Know how to pronounce {term}?</p>
          <Link className="text-bold" to={`/pronounce/${term}`}>Submit your pronunciation
            for {term}</Link>
        </>
      )}
    </Page>
  );
};
