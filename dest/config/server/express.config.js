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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressConfig = void 0;
const express_1 = __importDefault(require("express"));
const logger_util_1 = require("../../utils/logger.util");
const graphql_config_1 = require("./graphql.config");
const auth_controller_1 = require("../../controllers/users/auth.controller");
exports.expressConfig = {
    app: (0, express_1.default)(),
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setupGraphQL();
            yield this.listen();
        });
    },
    getWildCardRoutes() {
        return ['login'];
    },
    setupGraphQL() {
        return __awaiter(this, void 0, void 0, function* () {
            let authed = yield graphql_config_1.graphqlConfig.init(true);
            let noneAuthed = yield graphql_config_1.graphqlConfig.init(false);
            let authController = new auth_controller_1.AuthController();
            this.app.all('/graphql', express_1.default.json(), (req, res, next) => __awaiter(this, void 0, void 0, function* () {
                let stat = yield authController.isLoggedInForGraphQL(req);
                stat ? authed(req, res, next) : noneAuthed(req, res, next);
            }));
        });
    },
    listen() {
        var _a;
        let port = parseInt((_a = process.env.SERVER_PORT) === null || _a === void 0 ? void 0 : _a.trim());
        this.app.listen(port, () => {
            var _a;
            logger_util_1.loggerUtil.success(`✅ Server started: http://${(_a = process.env.SERVER_HOST) === null || _a === void 0 ? void 0 : _a.trim()}:${port}`);
        });
    },
};
