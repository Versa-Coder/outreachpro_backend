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
const config_1 = require("./config");
const config_2 = require("./config");
const logger_util_1 = require("./utils/logger.util");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield new config_1.EnvConfig().init();
            yield config_2.db.init();
            yield config_1.expressConfig.init();
        }
        catch (err) {
            logger_util_1.loggerUtil.error(err);
        }
    });
})();
