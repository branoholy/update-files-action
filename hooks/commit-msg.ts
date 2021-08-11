import { readFileSync, writeFileSync } from 'fs';

import { GitUtils } from '../scripts/utils/git-utils';

const main = ([commitMessagePath]: string[]) => {
  try {
    if (!commitMessagePath) {
      throw new Error('Missing commit message path.');
    }

    const commitMessage = readFileSync(commitMessagePath).toString();
    const formattedCommitMessage = GitUtils.formatCommitMessage(commitMessage);

    if (formattedCommitMessage !== commitMessage) {
      writeFileSync(commitMessagePath, formattedCommitMessage);
    }
  } catch (error) {
    console.warn('Warning: Cannot create commit message prefix');

    if (error instanceof Error) {
      console.warn(error.message);
    }
  }

  return 0;
};

process.exit(main(process.argv.slice(2)));
