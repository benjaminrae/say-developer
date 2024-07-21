import {useGetRecentTerms} from "@/domains/terms/hooks.ts";
import {Link} from "@/components/Link";
import {Heading} from "@/shared/Typography";

export const RecentTerms = () => {
  const {data} = useGetRecentTerms();
  return (
    <>
      <Heading level={2}>Recently added</Heading>
      {data && data.map((term) => (
        <div key={term}>
          <Link to={`/term/${term}`}>
            {term}
          </Link>
        </div>
      ))}
    </>
  )
};
