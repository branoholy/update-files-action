import * as ActionsCore from '@actions/core';

import { StringUtils } from './string-utils';

export interface RequiredInputOptions extends ActionsCore.InputOptions {
  readonly required: true;
}

export interface NonRequiredInputOptions extends ActionsCore.InputOptions {
  readonly required?: false;
}

export type InputOptions = RequiredInputOptions | NonRequiredInputOptions;

const getInput = (name: string, options?: InputOptions) => {
  const input = ActionsCore.getInput(name, options);

  if (!options?.required && input === '') {
    return null;
  }

  return input;
};

function getInputAsBoolean(name: string): boolean | null;
function getInputAsBoolean(name: string, options: RequiredInputOptions): boolean;
function getInputAsBoolean(name: string, options: NonRequiredInputOptions): boolean | null;

function getInputAsBoolean(name: string, options?: InputOptions): boolean | null {
  const input = getInput(name, options);

  if (input === 'true') {
    return true;
  }

  if (input === 'false') {
    return false;
  }

  return null;
}

function getInputAsInteger(name: string): number | null;
function getInputAsInteger(name: string, options: RequiredInputOptions): number;
function getInputAsInteger(name: string, options: NonRequiredInputOptions): number | null;

function getInputAsInteger(name: string, options?: InputOptions): number | null {
  const input = getInput(name, options);

  if (typeof input === 'string') {
    return parseInt(input, 10);
  }

  return null;
}

function getInputAsString(name: string): string | null;
function getInputAsString(name: string, options: RequiredInputOptions): string;
function getInputAsString(name: string, options: NonRequiredInputOptions): string | null;

function getInputAsString(name: string, options?: InputOptions): string | null {
  return getInput(name, options);
}

function getInputAsStrings(name: string): string[] | null;
function getInputAsStrings(name: string, options: RequiredInputOptions): string[];
function getInputAsStrings(name: string, options: NonRequiredInputOptions): string[] | null;

function getInputAsStrings(name: string, options?: InputOptions): string[] | null {
  return StringUtils.parseList(getInput(name, options));
}

const hasInput = (name: string) => getInput(name) !== null;

export const ActionUtils = {
  getInputAsBoolean,
  getInputAsInteger,
  getInputAsString,
  getInputAsStrings,

  hasInput
};
