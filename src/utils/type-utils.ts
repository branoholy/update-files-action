export type ExtractCallable<T> = T extends (...args: never[]) => unknown
  ? (...args: Parameters<T>) => ReturnType<T>
  : never;

export type OptionalChain<T, Props extends unknown[]> = Props extends [infer Prop, ...infer RestProps]
  ? Prop extends keyof T
    ? OptionalChain<Exclude<T[Prop], undefined>, RestProps>
    : never
  : T;
