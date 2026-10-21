import { execFileSync } from 'node:child_process';

import { beforeEach, describe, expect, it, vi } from 'vitest';

import { FileUtils } from '../file-utils.ts';
import { TestUtils } from '../test-utils.ts';

vi.mock('node:child_process');

const execFileSyncMock = TestUtils.asMockedFunction(execFileSync);

const paths = [
  'file.txt',
  'file with spaces.txt',
  'file\'with"quotes.txt',
  'file; touch injected; #.txt',
  'file$(touch injected).txt',
  'file`touch injected`.txt',
  '--output=injected',
  '*.txt',
  'file[1].txt',
  ':(glob)*',
  'file\nwith newline.txt',
];

describe('FileUtils', () => {
  describe('isFileUntracked', () => {
    const path = 'path/to/file.txt';

    beforeEach(() => {
      execFileSyncMock.mockReset();
    });

    it('should return true if the input path is untracked', () => {
      execFileSyncMock.mockReturnValue(Buffer.from(`${path}\n`));
      expect(FileUtils.isFileUntracked(path)).toBe(true);
    });

    it('should return false if the input path is not untracked', () => {
      execFileSyncMock.mockReturnValue(Buffer.from(''));
      expect(FileUtils.isFileUntracked(path)).toBe(false);
    });

    it.each(paths)('should pass %j as a single literal path argument', (inputPath) => {
      execFileSyncMock.mockReturnValue(Buffer.from(`${inputPath}\n`));

      expect(FileUtils.isFileUntracked(inputPath)).toBe(true);
      expect(execFileSyncMock).toBeCalledTimes(1);
      expect(execFileSyncMock).toBeCalledWith('git', [
        '--literal-pathspecs',
        'ls-files',
        '--exclude-standard',
        '--others',
        '--',
        inputPath,
      ]);
    });

    it('should propagate Git errors', () => {
      const error = new Error('Git failed');
      execFileSyncMock.mockImplementation(() => {
        throw error;
      });

      expect(() => FileUtils.isFileUntracked(path)).toThrow(error);
    });
  });

  describe('isFileChanged', () => {
    const path = 'path/to/file.txt';

    beforeEach(() => {
      execFileSyncMock.mockReset();
    });

    it('should return true if the input path is modified', () => {
      execFileSyncMock.mockReturnValue(Buffer.from(' 1 file changed, 1 insertion(+)\n'));
      expect(FileUtils.isFileChanged(path)).toBe(true);
    });

    it('should return false if the input path is not modified', () => {
      execFileSyncMock.mockReturnValue(Buffer.from(''));
      expect(FileUtils.isFileChanged(path)).toBe(false);
    });

    it.each(paths)('should pass %j as a single literal path argument', (inputPath) => {
      execFileSyncMock.mockReturnValue(Buffer.from(' 1 file changed, 1 insertion(+)\n'));

      expect(FileUtils.isFileChanged(inputPath)).toBe(true);
      expect(execFileSyncMock).toBeCalledTimes(1);
      expect(execFileSyncMock).toBeCalledWith('git', ['--literal-pathspecs', 'diff', '--shortstat', '--', inputPath]);
    });

    it('should propagate Git errors', () => {
      const error = new Error('Git failed');
      execFileSyncMock.mockImplementation(() => {
        throw error;
      });

      expect(() => FileUtils.isFileChanged(path)).toThrow(error);
    });
  });
});
