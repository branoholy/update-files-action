import * as ActionsCore from '@actions/core';

import { NvmrcStorage } from './node-version-storages/nvmrc';
import { PackageJsonStorage } from './node-version-storages/package-json';
import { WorkflowsStorage } from './node-version-storages/workflows';
import { TypeUtils } from './utils/type-utils';

const nodeReleasesUrl = 'https://nodejs.org/dist/index.json';

interface NodeRelease {
  readonly version: string;
}

const isNodeRelease = TypeUtils.createTypeValidator<NodeRelease>((value) => typeof value.version === 'string');

const fetchLatestNodeRelease = async () => {
  const { default: fetch } = await import('node-fetch');
  const response = await fetch(nodeReleasesUrl);
  const data = await response.json();

  if (Array.isArray(data) && isNodeRelease(data[0])) {
    return data[0];
  }

  return undefined;
};

const fetchLatestNodeVersion = async () => {
  const release = await fetchLatestNodeRelease();
  const version = release?.version;

  if (version) {
    return version.startsWith('v') ? version.substr(1) : version;
  }

  return undefined;
};

const main = async () => {
  try {
    const version = await fetchLatestNodeVersion();
    if (!version) {
      console.error('Error: Unknown latest Node.js version');
      return 1;
    }

    console.info(`Info: Trying to update Node.js versions to ${version}`);

    NvmrcStorage.setNodeVersion(version);
    PackageJsonStorage.setNodeVersion(version);
    WorkflowsStorage.setNodeVersion(version);

    console.info('Info: Update successful');

    if (process.env.GITHUB_ACTIONS === 'true') {
      ActionsCore.setOutput('version', version);
    }

    return 0;
  } catch (error) {
    console.error('Error: Cannot update Node.js versions');
    console.error(error);

    return 1;
  }
};

main().then((code) => process.exit(code));
