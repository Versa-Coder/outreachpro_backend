export type COMMON_ERROR_TYPE = {
  code: number;
  type: string;
  message: string | ((...args: unknown[]) => string);
  support_message?: string;
};
