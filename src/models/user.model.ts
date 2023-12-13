import { DataTypes, Model, Optional, Sequelize, UUIDV4 } from 'sequelize';

type UserModelAttributeType = {
  id: Number;
  uid: String;
  sessionToken: String;
  authToken: String;
};

type UserModelAttributeTypeIdOptional = Optional<UserModelAttributeType, 'id' | 'authToken' | 'sessionToken'>;

export class UserModel extends Model<UserModelAttributeType, UserModelAttributeTypeIdOptional> {
  declare id: string;
  declare uid: string;
  declare sessionToken: string;
  declare authToken: string;

  static ready(sequelize: Sequelize) {
    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },

        uid: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        sessionToken: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },

        authToken: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        schema: 'profile',
      },
    );
  }
}

export default UserModel;
