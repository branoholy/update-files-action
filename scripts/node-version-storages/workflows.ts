import * as FileSystem from 'fs';
import * as Path from 'path';

import { NodeVersionsStorage } from './node-version-storage';

const directory = '.github/workflows/';

const getWorkflowNodeVersions = (path: string) => {
  const content = FileSystem.readFileSync(path).toString();
  const lines = content.split('\n');

  return lines.reduce<string[]>((versions, line) => {
    const [fieldName, fieldValue] = line.split(':');

    if (fieldName?.trim() === 'node-version' && fieldValue) {
      versions.push(fieldValue.trim());
    }

    return versions;
  }, []);
};

const setWorkflowNodeVersion = (path: string, version: string) => {
  const content = FileSystem.readFileSync(path).toString();
  const lines = content.split('\n');

  const nextLines = lines.map((line) => {
    const [fieldName, fieldValue] = line.trim().split(':');

    if (fieldName === 'node-version' && fieldValue?.trim() !== version) {
      const indentSize = line.indexOf(fieldName[0] ?? 'n');

      return `${' '.repeat(indentSize)}${fieldName}: ${version}`;
    }

    return line;
  });

  const nextContent = nextLines.join('\n');
  if (content !== nextContent) {
    FileSystem.writeFileSync(path, nextContent);
  }
};

const getWorkflowPaths = () =>
  FileSystem.readdirSync(directory).map<string>((fileName) => Path.join(directory, fileName));

const getNodeVersions = () =>
  getWorkflowPaths().reduce<string[]>((versions, path) => {
    versions.push(...getWorkflowNodeVersions(path));
    return versions;
  }, []);

const setNodeVersion = (version: string) => getWorkflowPaths().forEach((path) => setWorkflowNodeVersion(path, version));

export const WorkflowsStorage: NodeVersionsStorage = {
  getNodeVersions,
  setNodeVersion
};
