export type ExtractCallable<T> = T extends (...args: never[]) => unknown
  ? (...args: Parameters<T>) => ReturnType<T>
  : never;

// MARK: - Array

export type TupleCombinations<TupleT extends readonly unknown[]> = TupleT extends [infer HeadT, ...infer RestT]
  ? TupleCombinations<RestT> | [HeadT, ...TupleCombinations<RestT>]
  : [];

// MARK: - Object

export type SimplifyObject<ObjectT extends Record<string, unknown>> = ObjectT extends unknown
  ? { [KeyT in keyof ObjectT]: ObjectT[KeyT] }
  : never;

export type ExcludeFieldTypes<ObjectT, ExcludedT> = {
  [K in keyof ObjectT]: Exclude<ObjectT[K], ExcludedT>;
};

export type PickPropertyKeys<ObjectT, KeysT extends readonly PropertyKey[]> = KeysT extends [
  infer H extends keyof ObjectT,
  ...infer R extends PropertyKey[],
]
  ? SimplifyObject<Pick<ObjectT, H> & PickPropertyKeys<ObjectT, R>>
  : {};

export type PickValuesOf<T, V> = {
  [K in keyof T as V extends T[K] ? K : never]: T[K];
};

export type PickExactValuesOf<T, V> = {
  [K in keyof T as T[K] extends V ? K : never]: T[K];
};

export type ObjectCombinations<ObjectT extends Record<string, unknown>> =
  TupleCombinations<UnionToTuple<keyof ObjectT>> extends infer K
    ? K extends readonly PropertyKey[]
      ? PickPropertyKeys<ObjectT, K>
      : never
    : never;

// MARK: - Union

export type UnionToIntersection<UnionT> = (UnionT extends unknown ? (x: UnionT) => void : never) extends (
  x: infer IntersectionT,
) => void
  ? IntersectionT
  : never;

export type LastOfUnion<UnionT> =
  UnionToIntersection<UnionT extends unknown ? (x: UnionT) => void : never> extends (x: infer LastT) => void
    ? LastT
    : never;

type _UnionToTuple<UnionT, TupleT extends unknown[] = []> = [UnionT] extends [never]
  ? TupleT
  : _UnionToTuple<Exclude<UnionT, LastOfUnion<UnionT>>, [LastOfUnion<UnionT>, ...TupleT]>;

export type UnionToTuple<UnionT> = _UnionToTuple<UnionT>;
