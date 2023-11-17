import { COMMON_ERROR_TYPE } from '../../types';

export const DB_ERR_READY_METHOD_NOT_FOUND = (modelName: string) =>
  ({
    code: 500,
    type: 'DB_ERR_READY_METHOD_NOT_FOUND',
    message: `static method ready() is missing in your model ${modelName}`,
    support_message: `Decleare a ready method for your model, which will take Sequelize instance as parameter  and will execute Model.init() method`,
  }) as COMMON_ERROR_TYPE;
