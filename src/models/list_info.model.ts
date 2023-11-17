import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import UserModel from './user.model';
import { COMMON_TABLE_TYPE } from '../types';

export type LIST_INFO_MODEL_TYPE = {
  id: number;
  userId: number;
  title: string;
  description: string;
  forEmail: boolean;
  forPhone: boolean;
};

export type LIST_INFO_MODEL_OPTIONAL_ID_TYPE = Optional<
  LIST_INFO_MODEL_TYPE,
  'id' | 'description' | 'forEmail' | 'forPhone'
>;

export class ListInfoModel extends Model<LIST_INFO_MODEL_TYPE, LIST_INFO_MODEL_OPTIONAL_ID_TYPE> {
  declare id: number;
  declare userId: number;
  declare title: string;
  declare description: string;
  declare forEmail: boolean;
  declare forPhone: boolean;

  static ready(sequelize: Sequelize) {
    ListInfoModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        userId: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: UserModel,
            key: `id`,
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },

        title: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },

        description: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },

        forEmail: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },

        forPhone: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
        modelName: 'ListInfo',
        tableName: 'list_info',
        schema: 'list',
      },
    );
  }
}
