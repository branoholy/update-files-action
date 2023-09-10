import { execSync } from 'child_process';

const isFileUntracked = (path: string) => {
  return execSync(`git ls-files --exclude-standard --others ${path} | wc -l`).toString().trim() === '1';
};

const isFileChanged = (path: string) => {
  return execSync(`git diff --shortstat ${path} | wc -l`).toString().trim() === '1';
};

export const FileUtils = {
  isFileUntracked,
  isFileChanged
};
