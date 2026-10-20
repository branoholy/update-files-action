import { vi } from 'vitest';

const consoleInfo = vi.spyOn(console, 'info').mockReset();
const consoleError = vi.spyOn(console, 'error').mockReset();

const processExit = vi.spyOn(process, 'exit').mockReset();
const processStdoutWrite = vi.spyOn(process.stdout, 'write').mockReset();

export const E2EMocks = {
  consoleInfo,
  consoleError,
  processExit,
  processStdoutWrite,

  mockReset: () => {
    consoleInfo.mockReset().mockImplementation(() => {});
    consoleError.mockReset().mockImplementation(() => {});
    processExit.mockReset().mockImplementation(() => undefined as never);
    processStdoutWrite.mockReset().mockImplementation(() => true);
  },
};
