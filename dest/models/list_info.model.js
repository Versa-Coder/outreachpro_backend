"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListInfoModel = void 0;
const sequelize_1 = require("sequelize");
const user_model_1 = __importDefault(require("./user.model"));
class ListInfoModel extends sequelize_1.Model {
    static ready(sequelize) {
        ListInfoModel.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                references: {
                    model: user_model_1.default,
                    key: `id`,
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            title: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true,
            },
            forEmail: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            forPhone: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        }, {
            sequelize,
            modelName: 'ListInfo',
            tableName: 'list_info',
            schema: 'list',
        });
    }
}
exports.ListInfoModel = ListInfoModel;
