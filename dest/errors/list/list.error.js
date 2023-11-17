"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LIST_ERR_EMAIL_OR_PHONE_MISSING = exports.LIST_ERR_TITLE_MISSING = void 0;
exports.LIST_ERR_TITLE_MISSING = {
    code: 400,
    type: 'LIST_ERR_TITLE_MISSING',
    message: 'Title should not be empty',
    support_message: 'Pease provide a valid title',
};
exports.LIST_ERR_EMAIL_OR_PHONE_MISSING = {
    code: 400,
    type: 'LIST_ERR_EMAIL_OR_PHONE_MISSING',
    message: 'Please choose a purpose for making the list, choose either "email" or "phone" or both',
    support_message: 'Choose either "email" or "phone" or both',
};
