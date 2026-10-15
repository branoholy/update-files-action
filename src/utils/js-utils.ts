const definedProperty = <ObjectT extends Record<string, unknown>, EmptyValueT>(
  object: ObjectT,
  emptyValue?: EmptyValueT,
) =>
  Object.values(object)[0] === emptyValue
    ? ({} as Record<string, never>)
    : (object as Record<keyof ObjectT, Exclude<ObjectT[keyof ObjectT], EmptyValueT>>);

export const JsUtils = {
  definedProperty,
};

export const dp = definedProperty;
