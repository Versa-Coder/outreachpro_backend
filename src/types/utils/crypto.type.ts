export type GENERATE_RANDOM_STRING_OPTIONS_TYPE = {
  length: number;
  specialChar: false;
  secured: false;
};

export type GENERATE_RANDOM_STRING_METHOD_TYPE = (
  length: number,
  options: Omit<GENERATE_RANDOM_STRING_OPTIONS_TYPE, 'length'>,
) => Promise<string>;

export type GENERATE_RANDOM_STRING_WORKER_METHOD_TYPE = (
  length: number,
  options: Omit<GENERATE_RANDOM_STRING_OPTIONS_TYPE, 'length'>,
) => string;

export type WORKER_POST_MESSAGE_TYPE<T> = {
  type: string;
  data: T;
};
