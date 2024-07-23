import {Page} from "@/components/Page";
import {Large} from "@/shared/Typography";
import {Link} from "@/components/Link";

export const NotFoundPage = () => {
  return (
    <Page className="flex flex-col items-center justify-center" pageTitle='Nothing to "Say" here'>
      <Large className="text-2xl font-extrabold">
        Nothing to "Say" here
      </Large>
      <Link className="font-bold" to="/pronounce">Find something to say</Link>
    </Page>
  );
};

