import { describe, expect, it, MockedClass, MockedFunction, vi } from 'vitest';

import { TestUtils } from '../test-utils';

describe('TestUtils', () => {
  describe('asMockedFunction', () => {
    // Typing check for (T) => jest.MockedFunction<T>.
    it('should return the same function and cast to a mocked function type', () => {
      const fn = (n: number) => `${n}`;
      const fnMock: MockedFunction<typeof fn> = TestUtils.asMockedFunction(fn);

      expect(fnMock).toBe(fn);
    });
  });

  describe('asMockedClass', () => {
    // Typing check for (T) => jest.MockedClass<T> & { mock: { instances: [{ getNum: jest.MockedFunction }] } }
    it('should return the same class and cast to a mocked class type', () => {
      class Cls {
        constructor(private num: number) {}
        getNum() {
          return this.num;
        }
      }

      const ClsMock = TestUtils.asMockedClass(Cls);
      const ClsMockWithType: MockedClass<typeof Cls> = ClsMock;

      const getNumMock = ClsMock.mock?.instances[0]?.getNum;

      expect(ClsMock).toBe(Cls);
      expect(ClsMockWithType).toBe(Cls);
      expect(getNumMock).toBeUndefined();
    });
  });

  describe('expectToBeCalled', () => {
    it('should check that a function has been called only 2 times with the specified args', () => {
      const fn = vi.fn();

      fn(4, 2);
      fn(42);

      TestUtils.expectToBeCalled(fn, [[4, 2], [42]]);
      expect.assertions(3);
    });
  });
});
