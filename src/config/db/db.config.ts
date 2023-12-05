import { Sequelize } from 'sequelize';
import { SEQUELIZE_BOOTSTRAP_INIT_FN } from '../../types';

//Imported models
import { UserModel } from '../../models';
import { DB_ERR_READY_METHOD_NOT_FOUND } from '../../errors/config/db.error';
import { loggerUtil } from '../../utils/logger.util';
import { ListInfoModel } from '../../models/list_info.model';

export const db = {
  connection: null as null | Sequelize,

  //Initiation sequelize connection and other process
  async init() {
    this.connection = new Sequelize(process.env.DB_CONNECTION as string, {
      dialect: 'postgres',
    });

    await this.connection.authenticate();
    await this.defineSchema();
    await this.sync();

    //If no error clear console
    //console.clear();
    loggerUtil.success('✅ DB & Models configured successfully');
    return this.connection;
  },

  async sync() {
    this.ready();
    await this.defineAssociations();
    await this.connection?.sync();
  },

  /**
   * Calls the ready method for each model, which basicically calls the Sequelize model init() method
   */
  ready() {
    let models = [UserModel, ListInfoModel]; //Add all the models here to sync

    models.forEach((model) => {
      if (typeof model.ready === 'function') {
        model.ready(this.connection as Sequelize);
      } else {
        throw DB_ERR_READY_METHOD_NOT_FOUND(model.name);
      }
    });
  },

  //Define all the Postgres schema here
  async defineSchema() {
    const schems = ['profile', 'config', 'list', 'cleaner'];
    const conn = this.connection as Sequelize;

    for (let i in schems) {
      let stat = await conn.query(`CREATE SCHEMA IF NOT EXISTS "${schems[i]}"`);
    }
  },

  //Define associations
  async defineAssociations() {
    UserModel.hasOne(ListInfoModel, {
      foreignKey: 'userId',
    });
    ListInfoModel.belongsTo(UserModel, {
      foreignKey: 'userId',
    });
  },
};
