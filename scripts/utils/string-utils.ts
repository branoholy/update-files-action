const capitalize = (value: string) => {
  const [firstLetter] = value;
  if (!firstLetter) {
    return value;
  }

  return `${firstLetter.toUpperCase()}${value.substr(1)}`;
};

export const StringUtils = {
  capitalize
};
