import { COMMON_ERROR_TYPE } from '../../types';

export const LIST_ERR_TITLE_MISSING: COMMON_ERROR_TYPE = {
  code: 400,
  type: 'LIST_ERR_TITLE_MISSING',
  message: 'Title should not be empty',
  support_message: 'Pease provide a valid title',
};

export const LIST_ERR_EMAIL_OR_PHONE_MISSING: COMMON_ERROR_TYPE = {
  code: 400,
  type: 'LIST_ERR_EMAIL_OR_PHONE_MISSING',
  message: 'Please choose a purpose for making the list, choose either "email" or "phone" or both',
  support_message: 'Choose either "email" or "phone" or both',
};
