import {createContext} from "react";
import {FeatureFlagsSettings} from "./features";


export const FeatureFlagsContext = createContext<FeatureFlagsSettings>({} as FeatureFlagsSettings);
