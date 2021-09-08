const definedProperty = <T>(obj: T, emptyValue?: unknown) => (Object.values(obj)[0] === emptyValue ? {} : obj);

export const JsUtils = {
  definedProperty
};

export const dp = definedProperty;
