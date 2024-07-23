import {useHandlePronunciationPlay} from "@/pages/TermPage/hooks.ts";
import {Pronunciation} from "@/domains/pronunciations/types.ts";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Play} from "@/shared/Icons/Play.tsx";

type PronunciationListProps = {
  pronunciations: Pronunciation[];
}
const PronunciationList = ({pronunciations}: PronunciationListProps) => {
  const {play} = useHandlePronunciationPlay()


  const handlePlayPronunciation = (pronunciation: Pronunciation) => {
    play(pronunciation)
  }

  return (
    <ul>
      {pronunciations.map((pronunciation) => (
        <li key={pronunciation.id}>
          <Card>
            <CardHeader>
              <CardTitle>
                <span>{pronunciation.fileName} by {pronunciation.createdBy}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" onClick={() => handlePlayPronunciation(pronunciation)}
                      aria-label="Play">
                <Play color="currentColor" size="xl"/>
              </Button>
            </CardContent>
            <CardFooter>
              <Button>
                Upvote
              </Button>
              <Button>
                Downvote
              </Button>
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
};
export default PronunciationList;
