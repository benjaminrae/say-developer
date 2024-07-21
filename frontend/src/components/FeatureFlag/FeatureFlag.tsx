import {useFeatureFlags} from "@/components/FeatureFlagsProvider/hook.tsx";
import {Features} from "@/components/FeatureFlagsProvider/features.ts";
import {PropsWithChildren} from "react";

export type FeatureFlagProps = PropsWithChildren & {
  featureName: Features
}

export const FeatureFlag = ({featureName, children}: FeatureFlagProps) => {
  const {isActive} = useFeatureFlags();

  if (!isActive(featureName)) {
    return null;
  }

  return children;
}
