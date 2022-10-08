const definedProperty = <ObjectT extends Record<string, unknown>, EmptyValueT>(
  obj: ObjectT,
  emptyValue?: EmptyValueT
) =>
  Object.values(obj)[0] === emptyValue
    ? ({} as Record<string, never>)
    : (obj as Record<keyof ObjectT, Exclude<ObjectT[keyof ObjectT], EmptyValueT>>);

export const JsUtils = {
  definedProperty
};

export const dp = definedProperty;
