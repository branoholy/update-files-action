import { describe, expect, it } from 'vitest';

import { JsUtils } from '../js-utils.ts';

describe('JsUtils', () => {
  describe('definedProperties', () => {
    it('should return an empty object when the field contains the empty value', () => {
      const result = JsUtils.definedProperties({ key: null }, null);
      expect(Object.keys(result)).toHaveLength(0);
    });

    it('should return the input object when the field contains a non-empty value', () => {
      const input = { key: 'value' };

      const result = JsUtils.definedProperties(input, null);
      expect(result).toStrictEqual(input);
    });
  });
});
