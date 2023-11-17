"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
class UserModel extends sequelize_1.Model {
    static ready(sequelize) {
        UserModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            uid: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            token: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true,
            },
        }, {
            sequelize,
            modelName: 'User',
            tableName: 'users',
            schema: 'profile',
        });
    }
}
exports.UserModel = UserModel;
exports.default = UserModel;
