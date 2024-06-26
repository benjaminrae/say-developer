import {Link, useParams} from 'react-router-dom';
import {Page} from '../../components/Page';
import {useGetTermWithPronunciations} from '../../domains/terms/hooks';
import {Button} from "../../shared/Button";
import {Play} from "../../shared/Icons/Play.tsx";
import {Pronunciation} from "../../domains/pronunciations/types.ts";
import {useHandlePronunciationPlay} from "./hooks.ts";

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
          <h1>{termWithPronunciations.raw}</h1>
          <p>{termWithPronunciations.description}</p>
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
                  <Button variant="ghost" onClick={() => handlePlayPronunciation(pronunciation)}>
                    <Play color="currentColor" size="sm" />
                  </Button>
                  <span>{pronunciation.fileName} by {pronunciation.createdBy}</span>
                </li>
              ))}

            </ul>)
          }
          <p>Know how to pronounce {term}?</p>
          <Link to={`/pronounce/${term}`}>Submit your pronunciation for {term}</Link>
        </>
      )}
    </Page>
  );
};
