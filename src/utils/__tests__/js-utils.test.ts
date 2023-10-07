import { describe, expect, it } from 'vitest';

import { JsUtils } from '../js-utils';

describe('JsUtils', () => {
  describe('definedProperty', () => {
    it('should return an empty object when the field contains the empty value', () => {
      const result = JsUtils.definedProperty({ key: null }, null);
      expect(Object.keys(result)).toHaveLength(0);
    });

    it('should return the input object when the field contains a non-empty value', () => {
      const input = { key: 'value' };

      const result = JsUtils.definedProperty(input, null);
      expect(result).toBe(input);
    });
  });
});
