"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphQLSchema = void 0;
const graphql_1 = require("graphql");
const list_graphql_query_1 = require("./list/list.graphql.query");
const list_graphql_mutation_1 = require("./list/list.graphql.mutation");
const rootQuery = new graphql_1.GraphQLObjectType({
    name: 'AppQuery',
    description: 'Explore all the queries for the app',
    fields: {
        ListQuery: {
            type: list_graphql_query_1.ListGraphQLQueries,
            resolve: (root, args) => {
                return 'GetListsQuery';
            },
        },
    },
});
const rootMutations = new graphql_1.GraphQLObjectType({
    name: 'AppMutation',
    description: 'List of all the mutations',
    fields: {
        ListMutation: {
            type: list_graphql_mutation_1.ListGraphQLMutations,
            resolve(a, b) {
                return 'ok';
            },
        },
    },
});
exports.graphQLSchema = new graphql_1.GraphQLSchema({
    query: rootQuery,
    mutation: rootMutations,
});
