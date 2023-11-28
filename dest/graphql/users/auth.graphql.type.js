"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GQL_AUTHED_LOGIN_HEADER = void 0;
const graphql_1 = require("graphql");
exports.GQL_AUTHED_LOGIN_HEADER = new graphql_1.GraphQLObjectType({
    name: 'GQL_AUTHED_LOGIN_HEADER',
    description: 'Authed login',
    fields: {
        Authorization: {
            type: graphql_1.GraphQLString,
        },
    },
});
