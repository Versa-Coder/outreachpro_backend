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
exports.sequelize = exports.db = void 0;
const sequelize_1 = require("sequelize");
exports.db = {
    connection: null,
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = new sequelize_1.Sequelize(process.env.DB_CONNECTION, {
                dialect: 'postgres',
            });
            yield this.connection.authenticate();
            return this.connection;
        });
    },
};
exports.sequelize = exports.db.connection;
