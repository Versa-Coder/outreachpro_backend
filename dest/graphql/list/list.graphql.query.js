"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGraphQLQueries = void 0;
const graphql_1 = require("graphql");
const list_graphql_type_1 = require("./list.graphql.type");
const controllers_1 = require("../../controllers");
exports.ListGraphQLQueries = new graphql_1.GraphQLObjectType({
    name: 'List_Queries',
    description: 'Get lists for an user',
    fields: () => ({
        getLists: {
            type: new graphql_1.GraphQLList(list_graphql_type_1.GraphQLListInfoType),
            args: {
                userId: { type: graphql_1.GraphQLString },
            },
            resolve(root, args) {
                return new controllers_1.ListController().getListsForUser(args.userId);
            },
        },
        getLists2: {
            type: new graphql_1.GraphQLList(list_graphql_type_1.GraphQLListInfoType),
            args: {
                userId: { type: graphql_1.GraphQLString },
            },
            resolve(root, args) {
                return new controllers_1.ListController().getListsForUser(args.userId);
            },
        },
    }),
});
