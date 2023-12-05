"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
//Imported models
const models_1 = require("../../models");
const db_error_1 = require("../../errors/config/db.error");
const logger_util_1 = require("../../utils/logger.util");
const list_info_model_1 = require("../../models/list_info.model");
exports.db = {
    connection: null,
    //Initiation sequelize connection and other process
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = new sequelize_1.Sequelize(process.env.DB_CONNECTION, {
                dialect: 'postgres',
            });
            yield this.connection.authenticate();
            yield this.defineSchema();
            yield this.sync();
            //If no error clear console
            //console.clear();
            logger_util_1.loggerUtil.success('✅ DB & Models configured successfully');
            return this.connection;
        });
    },
    sync() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.ready();
            yield this.defineAssociations();
            yield ((_a = this.connection) === null || _a === void 0 ? void 0 : _a.sync());
        });
    },
    /**
     * Calls the ready method for each model, which basicically calls the Sequelize model init() method
     */
    ready() {
        let models = [models_1.UserModel, list_info_model_1.ListInfoModel]; //Add all the models here to sync
        models.forEach((model) => {
            if (typeof model.ready === 'function') {
                model.ready(this.connection);
            }
            else {
                throw (0, db_error_1.DB_ERR_READY_METHOD_NOT_FOUND)(model.name);
            }
        });
    },
    //Define all the Postgres schema here
    defineSchema() {
        return __awaiter(this, void 0, void 0, function* () {
            const schems = ['profile', 'config', 'list', 'cleaner'];
            const conn = this.connection;
            for (let i in schems) {
                let stat = yield conn.query(`CREATE SCHEMA IF NOT EXISTS "${schems[i]}"`);
            }
        });
    },
    //Define associations
    defineAssociations() {
        return __awaiter(this, void 0, void 0, function* () {
            models_1.UserModel.hasOne(list_info_model_1.ListInfoModel, {
                foreignKey: 'userId',
            });
            list_info_model_1.ListInfoModel.belongsTo(models_1.UserModel, {
                foreignKey: 'userId',
            });
        });
    },
};
