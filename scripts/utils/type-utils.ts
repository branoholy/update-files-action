const createTypeValidator =
  <T>(validator: (value: Partial<Record<keyof T, unknown>>) => boolean) =>
  (value: unknown): value is T =>
    typeof value === 'object' && value !== null && validator(value);

export const TypeUtils = {
  createTypeValidator
};
