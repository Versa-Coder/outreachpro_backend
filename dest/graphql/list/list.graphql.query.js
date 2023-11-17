"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGraphQLQueryType = void 0;
const graphql_1 = require("graphql");
const list_graphql_type_1 = require("./list.graphql.type");
const controllers_1 = require("../../controllers");
const logger_util_1 = require("../../utils/logger.util");
exports.ListGraphQLQueryType = new graphql_1.GraphQLObjectType({
    name: 'List_Queries',
    description: 'Get lists for an user',
    fields: () => ({
        getLists: {
            type: new graphql_1.GraphQLList(list_graphql_type_1.GQL_LIST_INFO_TYPE),
            args: {
                userId: { type: graphql_1.GraphQLString },
            },
            resolve(root, args) {
                logger_util_1.loggerUtil.log({ args });
                return new controllers_1.ListController().getListsForUser(args.userId);
            },
        },
        getLists2: {
            type: new graphql_1.GraphQLList(list_graphql_type_1.GQL_LIST_INFO_TYPE),
            args: {
                userId: { type: graphql_1.GraphQLString },
            },
            resolve(root, args) {
                logger_util_1.loggerUtil.log({ args });
                return new controllers_1.ListController().getListsForUser(args.userId);
            },
        },
    }),
});
