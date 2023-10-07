import { Constructable, expect, Mocked, MockedClass, MockedFunction, SpyInstance } from 'vitest';

const asMockedFunction = <T extends (...args: never[]) => unknown>(fn: T) => fn as MockedFunction<T>;

const asMockedClass = <T extends Constructable>(cls: T) =>
  cls as MockedClass<T> & {
    mock: {
      instances: Mocked<InstanceType<T>>[];
    };
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const expectToBeCalled = <T extends (...args: any[]) => unknown>(
  fn: MockedFunction<T> | SpyInstance<Parameters<T>, ReturnType<T>> | undefined,
  params: Parameters<T>[]
) => {
  params.forEach((param, index) => expect(fn).nthCalledWith(index + 1, ...param));
  expect(fn).toBeCalledTimes(params.length);
};

export const TestUtils = {
  asMockedFunction,
  asMockedClass,
  expectToBeCalled
};
