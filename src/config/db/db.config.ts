import { Sequelize } from 'sequelize';

export const db = {
  connection: null as null | Sequelize,

  async init() {
    this.connection = new Sequelize(process.env.DB_CONNECTION as string, {
      dialect: 'postgres',
    });

    await this.connection.authenticate();
    return this.connection;
  },
};

export const sequelize: Sequelize = db.connection as Sequelize;
