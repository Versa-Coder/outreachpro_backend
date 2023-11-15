import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

export const userModel = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  uid: {
    type: DataTypes.STRING,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },

  token: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
