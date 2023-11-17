import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

type UserModelAttributeType = {
  id: Number;
  uid: String;
  token: String;
};

type UserModelAttributeTypeIdOptional = Optional<UserModelAttributeType, 'id'>;

export class UserModel extends Model<UserModelAttributeType, UserModelAttributeTypeIdOptional> {
  declare id: string;
  declare uid: string;
  declare token: string;

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

        token: {
          type: DataTypes.STRING,
          allowNull: true,
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
