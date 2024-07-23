import {Term} from "@/domains/terms/types.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import {Heading, Large, Lead} from "@/shared/Typography";
import {Badge} from "@/components/ui/badge.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Link} from "@/components/Link";

type TermCardProps = {
  term: Term;
}
export const TermCard = ({term}: TermCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Heading level={1}>
            {term.raw}
          </Heading>
        </CardTitle>
        <Large>{term.phonetic}</Large>
        {term.aliases && (
          <ul>
            {term.aliases.map((alias) => (
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
          <Lead>{term.description}</Lead>
        </CardDescription>
      </CardContent>
      <Separator className="my-2"/>
      <CardFooter className="flex flex-col items-start">
        <p>Know how to pronounce {term.raw}?</p>
        <Link className="font-extrabold" to={`/pronounce/${encodeURIComponent(term.raw!)}`}>Submit
          your pronunciation
          for {term.raw}</Link>
      </CardFooter>
    </Card>
  );
};
