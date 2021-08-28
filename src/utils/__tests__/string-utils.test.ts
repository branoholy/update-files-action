import { StringUtils } from '../string-utils';

describe('StringUtils', () => {
  describe('parseList', () => {
    // Typing check for (null) => null.
    it('should return null if the input is null', () => {
      expect<null>(StringUtils.parseList(null)).toBeNull();
    });

    // Typing check for (string) => string[].
    it('should return an array with an empty string if the input is an empty string', () => {
      expect<string[]>(StringUtils.parseList('')).toStrictEqual(['']);
    });

    // Typing check for (string | null) => string[] | null.
    it('should return an array with two empty strings if the input is a comma', () => {
      let output = StringUtils.parseList(',' as string | null);
      expect(output).toStrictEqual(['', '']);

      output = null;
      output = [''];
    });

    it('should return an array with a single element containing the input if the input does not contain a comma', () => {
      expect(StringUtils.parseList('abc')).toStrictEqual(['abc']);
    });

    it('should return an array with two elements if the input contains a comma', () => {
      expect(StringUtils.parseList('abc,def')).toStrictEqual(['abc', 'def']);
    });

    it('should return an array with trimmed elements if the input contains spaces', () => {
      expect(StringUtils.parseList(' ab c , def ')).toStrictEqual(['ab c', 'def']);
    });
  });
});
