import { NvmrcStorage } from './node-version-storages/nvmrc';
import { PackageJsonStorage } from './node-version-storages/package-json';
import { WorkflowsStorage } from './node-version-storages/workflows';

const main = () => {
  try {
    const versions = [
      NvmrcStorage.getNodeVersion(),
      PackageJsonStorage.getNodeVersion(),
      ...WorkflowsStorage.getNodeVersions()
    ];

    const versionsSynced = new Set(versions).size === 1;
    if (!versionsSynced) {
      console.error('Error: Node.js versions are not synced, run the node-versions-update script');
      return 1;
    }

    console.info('Info: All Node.js versions are the same');

    return 0;
  } catch (error) {
    console.error('Error: Cannot compare Node.js versions');
    console.error(error);

    return 1;
  }
};

process.exit(main());
