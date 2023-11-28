"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQL_AUTH_LOGIN_SUCEESS = exports.GQL_AUTH_LOGIN_DETAIL = exports.GQL_AUTH_LOGIN_HEADER = void 0;
const graphql_1 = require("graphql");
exports.GQL_AUTH_LOGIN_HEADER = new graphql_1.GraphQLObjectType({
    name: 'GQL_AUTHED_LOGIN_HEADER',
    description: 'Authed login',
    fields: {
        Authorization: {
            type: graphql_1.GraphQLString,
        },
    },
});
exports.GQL_AUTH_LOGIN_DETAIL = new graphql_1.GraphQLObjectType({
    name: 'GQL_AUTH_LOGIN_DETAIL',
    description: 'Login informations',
    fields: {
        userName: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
});
exports.GQL_AUTH_LOGIN_SUCEESS = new graphql_1.GraphQLObjectType({
    name: 'GQL_AUTH_LOGIN_DETAIL',
    description: 'Login informations',
    fields: {
        loggedIn: { type: graphql_1.GraphQLBoolean },
        token: { type: graphql_1.GraphQLString },
        time: { type: graphql_1.GraphQLString },
    },
});
