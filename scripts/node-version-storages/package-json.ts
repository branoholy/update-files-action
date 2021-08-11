import * as FileSystem from 'fs';

import { NodeVersionStorage } from './node-version-storage';

const path = 'package.json';

interface PackageJson {
  engines?: {
    node?: string;
  };
}

const loadPackageJson = (): PackageJson => JSON.parse(FileSystem.readFileSync(path).toString());

const getNodeVersion = () => loadPackageJson().engines?.node ?? '';

const setNodeVersion = (version: string) => {
  const packageJson = loadPackageJson();

  if (packageJson.engines?.node !== version) {
    const nextPackageJson: PackageJson = {
      ...packageJson,
      engines: {
        ...packageJson.engines,
        node: version
      }
    };

    const nextContent = JSON.stringify(nextPackageJson, null, 2) + '\n';

    FileSystem.writeFileSync(path, nextContent);
  }
};

export const PackageJsonStorage: NodeVersionStorage = {
  getNodeVersion,
  setNodeVersion
};
