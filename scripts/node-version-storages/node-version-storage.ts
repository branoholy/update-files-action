interface BaseNodeVersionStorage {
  setNodeVersion: (version: string) => void;
}

export interface NodeVersionStorage extends BaseNodeVersionStorage {
  getNodeVersion: () => string;
}

export interface NodeVersionsStorage extends BaseNodeVersionStorage {
  getNodeVersions: () => string[];
}
