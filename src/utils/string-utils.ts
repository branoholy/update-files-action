function parseList(listString: null): null;
function parseList(listString: string): string[];
function parseList(listString: string | null): string[] | null;

function parseList(listString: string | null): string[] | null {
  if (listString === null) {
    return null;
  }

  return listString.split(',').map((item) => item.trim());
}

export const StringUtils = {
  parseList
};
