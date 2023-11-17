"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQL_LIST_INFO_TYPE = void 0;
const graphql_1 = require("graphql");
exports.GQL_LIST_INFO_TYPE = new graphql_1.GraphQLObjectType({
    name: 'ListInfo',
    description: 'Individual list basic info and settings',
    fields: () => ({
        id: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        forEmail: { type: graphql_1.GraphQLBoolean },
        forPhone: { type: graphql_1.GraphQLBoolean },
        createdAt: { type: graphql_1.GraphQLString },
        updatedAt: { type: graphql_1.GraphQLString },
    }),
});
