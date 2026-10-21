import type {
  ExcludeFieldTypes,
  ObjectCombinations,
  PickExactValuesOf,
  PickValuesOf,
  SimplifyObject,
} from './type-utils.ts';

type NonEmptyFields<ObjectT extends Record<string, unknown>, EmptyValueT = undefined> = PickExactValuesOf<
  ObjectT,
  Exclude<ObjectT[keyof ObjectT], EmptyValueT>
>;

type MaybeEmptyFields<ObjectT extends Record<string, unknown>, EmptyValueT = undefined> = ExcludeFieldTypes<
  Omit<PickValuesOf<ObjectT, EmptyValueT>, keyof PickExactValuesOf<ObjectT, EmptyValueT>>,
  EmptyValueT
>;

type DefinedProperties<ObjectT extends Record<string, unknown>, EmptyValueT = undefined> = SimplifyObject<
  NonEmptyFields<ObjectT, EmptyValueT> & ObjectCombinations<MaybeEmptyFields<ObjectT, EmptyValueT>>
>;

export const definedProperties = <ObjectT extends Record<string, unknown>, EmptyValueT = undefined>(
  object: ObjectT,
  emptyValue?: EmptyValueT,
) =>
  Object.fromEntries(Object.entries(object).filter(([, value]) => value !== emptyValue)) as DefinedProperties<
    ObjectT,
    EmptyValueT
  >;

export const JsUtils = {
  definedProperties,
};

export const dp = definedProperties;
