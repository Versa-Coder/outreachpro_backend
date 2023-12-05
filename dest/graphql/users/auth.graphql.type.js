"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLAuthLoginSuccessType = exports.GraphQLAuthLoginDetailType = exports.GraphQLAuthLoginHeaderType = void 0;
const graphql_1 = require("graphql");
exports.GraphQLAuthLoginHeaderType = new graphql_1.GraphQLObjectType({
    name: 'AuthLoginHeader',
    description: 'Authed login',
    fields: {
        Authorization: {
            type: graphql_1.GraphQLString,
        },
    },
});
exports.GraphQLAuthLoginDetailType = new graphql_1.GraphQLObjectType({
    name: 'AuthLoginDetail',
    description: 'Login informations',
    fields: {
        userName: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
    },
});
exports.GraphQLAuthLoginSuccessType = new graphql_1.GraphQLObjectType({
    name: 'AuthLoginSuccess',
    description: 'Login informations',
    fields: {
        loggedIn: { type: graphql_1.GraphQLBoolean },
        accessToken: { type: graphql_1.GraphQLString },
        refreshToken: { type: graphql_1.GraphQLString },
        time: { type: graphql_1.GraphQLString },
    },
});
