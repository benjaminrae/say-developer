import {PropsWithChildren} from "react";
import {FeatureFlagsContext} from "@/components/FeatureFlagsProvider/FeatureFlagsContext.ts";
import {featureFlagsSettings} from "@/components/FeatureFlagsProvider/features.ts";


export const FeatureFlagsProvider = ({children}: PropsWithChildren) => {
  return (
    <FeatureFlagsContext.Provider value={featureFlagsSettings}>
      {children}
    </FeatureFlagsContext.Provider>
  )
}
