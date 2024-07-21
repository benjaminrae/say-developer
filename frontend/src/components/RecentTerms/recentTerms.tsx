import {useGetRecentTerms} from "@/domains/terms/hooks.ts";

export const RecentTerms = () => {
  const {data} = useGetRecentTerms();
  return (
    <>
      {data && data.map((term) => (
        <div key={term}>{term}</div>
      ))}
    </>
  )
};
