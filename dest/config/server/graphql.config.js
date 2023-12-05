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
exports.graphqlConfig = void 0;
const server_1 = require("@apollo/server");
const graphql_1 = require("../../graphql");
const express4_1 = require("@apollo/server/express4");
const graphql_error_1 = require("../../errors/config/graphql.error");
const logger_util_1 = require("../../utils/logger.util");
exports.graphqlConfig = {
    createServer(authed) {
        return new server_1.ApolloServer({
            schema: (0, graphql_1.getGraphQLSchema)(authed),
            formatError: handleGQLError,
        });
    },
    init(authed = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const server = this.createServer(authed);
            yield server.start();
            return (0, express4_1.expressMiddleware)(server);
        });
    },
};
function handleGQLError(formattedError, error) {
    if (!(typeof error === 'object' && error.code)) {
        logger_util_1.loggerUtil.error(error).notify();
        return graphql_error_1.GRAPHQL_ERR_UNKNOWN;
    }
    return error;
}
