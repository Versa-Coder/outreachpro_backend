"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGraphQLMutations = void 0;
const graphql_1 = require("graphql");
exports.AuthGraphQLMutations = new graphql_1.GraphQLObjectType({
    name: 'AuthMutations',
    description: 'List of mutations to authenticate',
    fields: {
        signup: {
            type: graphql_1.GraphQLString,
        },
    },
});