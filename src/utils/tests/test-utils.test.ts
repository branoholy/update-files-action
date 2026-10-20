import { describe, expect, it, type MockedClass, type MockedFunction, vi } from 'vitest';

import { TestUtils } from '../test-utils.ts';

describe('TestUtils', () => {
  describe('asMockedFunction', () => {
    // Typing check for (T) => jest.MockedFunction<T>.
    it('should return the same function and cast to a mocked function type', () => {
      const function_ = (n: number) => n.toString();
      const functionMock: MockedFunction<typeof function_> = TestUtils.asMockedFunction(function_);

      expect(functionMock).toBe(function_);
    });
  });

  describe('asMockedClass', () => {
    // Typing check for (T) => jest.MockedClass<T> & { mock: { instances: [{ getNum: jest.MockedFunction }] } }
    it('should return the same class and cast to a mocked class type', () => {
      class Cls {
        constructor(private value: number) {}
        getNum() {
          return this.value;
        }
      }

      const ClsMock = TestUtils.asMockedClass(Cls);
      const ClsMockWithType: MockedClass<typeof Cls> = ClsMock;

      const getNumberMock = ClsMock.mock?.instances[0]?.getNum.mock;

      expect(ClsMock).toBe(Cls);
      expect(ClsMockWithType).toBe(Cls);
      expect(getNumberMock).toBeUndefined();
    });
  });

  describe('expectToBeCalled', () => {
    it('should check that a function has been called only 2 times with the specified args', () => {
      const function_ = vi.fn();

      function_(4, 2);
      function_(42);

      TestUtils.expectToBeCalled(function_, [[4, 2], [42]]);
      expect.assertions(3);
    });
  });
});
