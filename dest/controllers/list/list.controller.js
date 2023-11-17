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
exports.ListController = void 0;
const errors_1 = require("../../errors");
const models_1 = require("../../models");
class ListController {
    constructor(MAX_ROW_PER_PAGE = parseInt(process.env.MAX_RECORDS_PER_PAGE)) {
        this.MAX_ROW_PER_PAGE = MAX_ROW_PER_PAGE;
    }
    createList(info) {
        return __awaiter(this, void 0, void 0, function* () {
            if (info.title.length < 0) {
                throw errors_1.LIST_ERR_TITLE_MISSING;
            }
            else if (!(info.forEmail || info.forPhone)) {
                throw errors_1.LIST_ERR_EMAIL_OR_PHONE_MISSING;
            }
            const stat = yield models_1.ListInfoModel.create(info);
            return {
                id: stat.id,
                title: stat.title,
                description: stat.description,
                forEmail: stat.forEmail,
                forPhone: stat.forPhone,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
        });
    }
    getListsForUser(userId, page = 1, filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            let offset = page * this.MAX_ROW_PER_PAGE - this.MAX_ROW_PER_PAGE;
            let order = [['id', 'DESC']];
            if (Array.isArray(filter.order) && filter.order.length > 0) {
                order.pop();
                filter.order.forEach((o) => {
                    order.push([o.field, o.type]);
                });
            }
            const lists = yield models_1.ListInfoModel.findAll({
                where: {
                    userId,
                },
                order,
                offset,
                limit: this.MAX_ROW_PER_PAGE,
            });
            return lists;
        });
    }
}
exports.ListController = ListController;
