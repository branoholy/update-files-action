import * as FileSystem from 'fs';

import { NodeVersionStorage } from './node-version-storage';

const path = '.nvmrc';

const getNodeVersion = () => {
  const content = FileSystem.readFileSync(path).toString().trim();
  return content.startsWith('v') ? content.substr(1) : content;
};

const setNodeVersion = (version: string) => {
  const content = FileSystem.readFileSync(path).toString();
  const nextContent = `v${version}\n`;

  if (content !== nextContent) {
    FileSystem.writeFileSync(path, nextContent);
  }
};

export const NvmrcStorage: NodeVersionStorage = {
  getNodeVersion,
  setNodeVersion
};
