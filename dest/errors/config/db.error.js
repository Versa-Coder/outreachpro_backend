"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_ERR_READY_METHOD_NOT_FOUND = void 0;
const DB_ERR_READY_METHOD_NOT_FOUND = (modelName) => ({
    code: 500,
    type: 'DB_ERR_READY_METHOD_NOT_FOUND',
    message: `static method ready() is missing in your model ${modelName}`,
    support_message: `Decleare a ready method for your model, which will take Sequelize instance as parameter  and will execute Model.init() method`,
});
exports.DB_ERR_READY_METHOD_NOT_FOUND = DB_ERR_READY_METHOD_NOT_FOUND;
