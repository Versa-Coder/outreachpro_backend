import { COMMON_CALLBACK_TYPE } from '../common.type';

export type GENERATE_RANDOM_STRING_OPTIONS_TYPE = {
  length: number;
  specialChar: false;
  secured: false;
};

export type GENERATE_RANDOM_STRING_METHOD_TYPE = (
  length: number,
  options: Omit<GENERATE_RANDOM_STRING_OPTIONS_TYPE, 'length'> | COMMON_CALLBACK_TYPE,
  cb?: COMMON_CALLBACK_TYPE,
) => Promise<string>;

export type GENERATE_RANDOM_STRING_WORKER_METHOD_TYPE = (
  length: number,
  options: Omit<GENERATE_RANDOM_STRING_OPTIONS_TYPE, 'length'>,
) => string;

export type WORKER_POST_MESSAGE_TYPE<T> = {
  type: string;
  data: T;
};
