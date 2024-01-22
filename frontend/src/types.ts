export type WithOptional<Type, Key extends keyof Type> = {
  [Property in Key]+?: Type[Property];
} & Omit<Type, Key>;
