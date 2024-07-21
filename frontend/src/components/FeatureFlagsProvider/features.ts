export enum Features {
  navigationMenu = "NAVIGATION_MENU",
}

export type FeatureFlagsSettings = Map<Features, boolean>

export const featureFlagsSettings: FeatureFlagsSettings = new Map([
  [Features.navigationMenu, false]
])
