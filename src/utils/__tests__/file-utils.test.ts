import { execSync } from 'child_process';

import { FileUtils } from '../file-utils';
import { TestUtils } from '../test-utils';

jest.mock('child_process');

const execSyncMock = TestUtils.asMockedFunction(execSync);

describe('FileUtils', () => {
  describe('isFileUntracked', () => {
    const path = 'path/to/file.txt';

    beforeEach(() => {
      execSyncMock.mockClear();
    });

    it('should return true if the input path is untracked', () => {
      execSyncMock.mockReturnValue(Buffer.from('1\n'));

      expect(FileUtils.isFileUntracked(path)).toBe(true);
      expect(execSyncMock).toBeCalledWith(`git ls-files --exclude-standard --others ${path} | wc -l`);
    });

    it('should return false if the input path is not untracked', () => {
      execSyncMock.mockReturnValue(Buffer.from('0\n'));

      expect(FileUtils.isFileUntracked(path)).toBe(false);
      expect(execSyncMock).toBeCalledWith(`git ls-files --exclude-standard --others ${path} | wc -l`);
    });
  });

  describe('isFileChanged', () => {
    const path = 'path/to/file.txt';

    beforeEach(() => {
      execSyncMock.mockClear();
    });

    it('should return true if the input path is modified', () => {
      execSyncMock.mockReturnValue(Buffer.from('1\n'));

      expect(FileUtils.isFileChanged(path)).toBe(true);
      expect(execSyncMock).toBeCalledWith(`git diff --shortstat ${path} | wc -l`);
    });

    it('should return false if the input path is not modified', () => {
      execSyncMock.mockReturnValue(Buffer.from('0\n'));

      expect(FileUtils.isFileChanged(path)).toBe(false);
      expect(execSyncMock).toBeCalledWith(`git diff --shortstat ${path} | wc -l`);
    });
  });
});
