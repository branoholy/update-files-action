import OS from 'os';

function parseList(listString: null): null;
function parseList(listString: string): string[];
function parseList(listString: string | null): string[] | null;

function parseList(listString: string | null): string[] | null {
  if (listString === null) {
    return null;
  }

  return listString
    .split(OS.EOL)
    .map((item) => item.trim())
    .filter(Boolean);
}

export const StringUtils = {
  parseList
};
