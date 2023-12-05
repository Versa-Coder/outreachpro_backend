"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGraphQLSchema = void 0;
const graphql_1 = require("graphql");
const list_graphql_query_1 = require("./list/list.graphql.query");
const list_graphql_mutation_1 = require("./list/list.graphql.mutation");
const auth_graphql_mutation_1 = require("./users/auth.graphql.mutation");
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
        AuthMutation: {
            type: auth_graphql_mutation_1.AuthGraphQLMutations,
            resolve(a, b) {
                return 'ok';
            },
        },
    },
});
const noneAuthMutatons = new graphql_1.GraphQLObjectType({
    name: 'auth',
    description: 'Authentication',
    fields: {
        exec: {
            type: auth_graphql_mutation_1.AuthGraphQLMutations,
            resolve(a, b) {
                return 'Ok';
            },
        },
    },
});
const noneAuthedQueries = new graphql_1.GraphQLObjectType({
    name: 'authQueries',
    description: 'Authentication',
    fields: {
        exec: {
            type: graphql_1.GraphQLString,
            resolve(a, b) {
                return 'Use auth mutations to continue';
            },
        },
    },
});
function getGraphQLSchema(authed = false) {
    const schema = authed
        ? {
            query: rootQuery,
            mutation: rootMutations,
        }
        : {
            query: noneAuthedQueries,
            mutation: noneAuthMutatons,
        };
    return new graphql_1.GraphQLSchema(schema);
}
exports.getGraphQLSchema = getGraphQLSchema;
