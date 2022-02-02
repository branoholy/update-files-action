import OS from 'os';

import { StringUtils } from '../string-utils';

describe('StringUtils', () => {
  describe('parseList', () => {
    // Typing check for (null) => null.
    it('should return null if the input is null', () => {
      expect<null>(StringUtils.parseList(null)).toBeNull();
    });

    // Typing check for (string) => string[].
    it('should return an empty array if the input is an empty string', () => {
      expect<string[]>(StringUtils.parseList('')).toStrictEqual([]);
    });

    // Typing check for (string | null) => string[] | null.
    it('should return an empty array if the input is an EOL', () => {
      let output = StringUtils.parseList(OS.EOL as string | null);
      expect(output).toStrictEqual([]);

      output = null;
      output = [''];
    });

    it('should return an array with a single element containing the input if the input does not contain an EOL', () => {
      expect(StringUtils.parseList('abc')).toStrictEqual(['abc']);
    });

    it('should return an array with two elements if the input contains an EOL', () => {
      expect(StringUtils.parseList(`abc${OS.EOL}def`)).toStrictEqual(['abc', 'def']);
    });

    it('should return an array with two elements if the input contains two EOL and one of them is at the end', () => {
      expect(StringUtils.parseList(`abc${OS.EOL}def${OS.EOL}`)).toStrictEqual(['abc', 'def']);
    });

    it('should return an array with trimmed elements if the input contains spaces', () => {
      expect(StringUtils.parseList(` ab c ${OS.EOL} def `)).toStrictEqual(['ab c', 'def']);
    });
  });
});
