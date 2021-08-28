export const E2EMocks = {
  consoleInfo: jest.spyOn(console, 'info'),
  consoleError: jest.spyOn(console, 'error').mockImplementation(),

  processExit: jest.spyOn(process, 'exit'),
  processStdoutWrite: jest.spyOn(process.stdout, 'write')
};
