import { execFileSync } from 'node:child_process';

const isFileUntracked = (path: string) =>
  execFileSync('git', ['--literal-pathspecs', 'ls-files', '--exclude-standard', '--others', '--', path]).length > 0;

const isFileChanged = (path: string) =>
  execFileSync('git', ['--literal-pathspecs', 'diff', '--shortstat', '--', path]).length > 0;

export const FileUtils = {
  isFileUntracked,
  isFileChanged,
};
