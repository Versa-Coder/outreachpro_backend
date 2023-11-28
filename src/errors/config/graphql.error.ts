import { COMMON_ERROR_TYPE } from '../../types';

export const GRAPHQL_ERR_UNKNOWN: COMMON_ERROR_TYPE = {
  code: 500,
  type: 'GRAPHQL_ERR_UNKNOWN',
  message: 'Unknown error occurred',
  support_message: 'There something happened wrong at the server end, please contact admin',
};
