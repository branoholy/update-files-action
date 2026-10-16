import { expect, type Mocked, type MockedClass, type MockedFunction, type MockInstance } from 'vitest';

interface Constructable {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): any;
}

const asMockedFunction = <T extends (...args: never[]) => unknown>(function_: T) => function_ as MockedFunction<T>;

const asMockedClass = <T extends Constructable>(cls: T) =>
  cls as MockedClass<T> & {
    mock: {
      instances: Mocked<InstanceType<T>>[];
    };
  };

const expectToBeCalled = <T extends ((...args: never[]) => unknown) | Constructable>(
  function_: MockInstance<T> | undefined,
  params: MockInstance<T>['mock']['calls'],
) => {
  for (const [index, param] of params.entries()) expect(function_).nthCalledWith(index + 1, ...param);
  expect(function_).toHaveBeenCalledTimes(params.length);
};

export const TestUtils = {
  asMockedFunction,
  asMockedClass,
  expectToBeCalled,
};
