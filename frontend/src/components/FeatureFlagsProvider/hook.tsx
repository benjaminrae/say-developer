import {useContext} from "react";
import {FeatureFlagsContext} from "@/components/FeatureFlagsProvider/FeatureFlagsContext.ts";
import {Features} from "@/components/FeatureFlagsProvider/features.ts";

export const useFeatureFlags = () => {
  const featureFlags = useContext(FeatureFlagsContext);

  const isActive = (featureName: Features): boolean => {
    return featureFlags.get(featureName) ?? false;
  }

  return {featureFlags, isActive};
}
