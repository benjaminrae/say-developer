import {useParams} from 'react-router-dom';
import {Page} from '@/components/Page';
import {useGetTermWithPronunciations} from '@/domains/terms/hooks.ts';
import {Play} from "../../shared/Icons/Play.tsx";
import {Pronunciation} from "@/domains/pronunciations/types.ts";
import {useHandlePronunciationPlay} from "./hooks.ts";
import {Button} from "@/components/ui/button.tsx";
import {Heading, Large, Lead} from "@/shared/Typography";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {Link} from "@/components/Link";

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
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>
                <Heading level={1}>
                  {termWithPronunciations.raw}
                </Heading>
              </CardTitle>
              <Large>{termWithPronunciations.phonetic}</Large>
              {termWithPronunciations.aliases && (
                <ul>
                  {termWithPronunciations.aliases.map((alias) => (
                    <li key={alias}>
                      <Badge>
                        {alias}
                      </Badge>
                    </li>
                  ))}
                </ul>
              )}
            </CardHeader>
            <CardContent>
              <CardDescription>
                <Lead>{termWithPronunciations.description}</Lead>
              </CardDescription>
            </CardContent>
            <Separator className="my-2"/>
            <CardFooter className="flex flex-col items-start">
              <p>Know how to pronounce {term}?</p>
              <Link className="font-extrabold" to={`/pronounce/${encodeURIComponent(term!)}`}>Submit
                your pronunciation
                for {term}</Link>
            </CardFooter>
          </Card>
          {
            termWithPronunciations.pronunciations && (<ul>
              {termWithPronunciations.pronunciations.map((pronunciation) => (
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
            </ul>)
          }
        </div>
      )}
    </Page>
  );
};
