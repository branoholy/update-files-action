const consoleInfo = jest.spyOn(console, 'info');
const consoleError = jest.spyOn(console, 'error');

const processExit = jest.spyOn(process, 'exit');
const processStdoutWrite = jest.spyOn(process.stdout, 'write');

export const E2EMocks = {
  consoleInfo,
  consoleError,
  processExit,
  processStdoutWrite,

  mockImplementation: () => {
    consoleInfo.mockImplementation();
    consoleError.mockImplementation();
    processExit.mockImplementation();
    processStdoutWrite.mockImplementation();
  }
};
