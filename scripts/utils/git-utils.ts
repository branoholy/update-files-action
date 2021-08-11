import { StringUtils } from './string-utils';

const parseCommitMessage = (message: string) => {
  const firstColonPosition = message.search(':');

  const prefix = message.substr(0, firstColonPosition).trim();
  const content = message.substr(firstColonPosition + 1).trim();

  return { prefix, content };
};

const formatCommitMessage = (message: string) => {
  const { prefix, content } = parseCommitMessage(message);

  if (!prefix || !content) {
    return message;
  }

  return `${prefix.trim()}: ${StringUtils.capitalize(content.trim())}`;
};

export const GitUtils = {
  formatCommitMessage
};
