"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModel = void 0;
const sequelize_1 = require("sequelize");
class ListModel extends sequelize_1.Model {
    ready() {
        ListModel.init({}, {});
    }
}
exports.ListModel = ListModel;
