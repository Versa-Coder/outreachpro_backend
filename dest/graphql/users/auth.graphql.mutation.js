"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGraphQLMutations = void 0;
const graphql_1 = require("graphql");
const auth_graphql_type_1 = require("./auth.graphql.type");
const auth_controller_1 = require("../../controllers/users/auth.controller");
exports.AuthGraphQLMutations = new graphql_1.GraphQLObjectType({
    name: 'AuthMutations',
    description: 'List of mutations to authenticate',
    fields: {
        signin: {
            type: auth_graphql_type_1.GraphQLAuthLoginSuccessType,
            args: {
                userName: { type: graphql_1.GraphQLString },
                password: { type: graphql_1.GraphQLString },
            },
            resolve(root, args) {
                return new auth_controller_1.AuthController().doLogin({
                    userName: args.userName,
                    password: args.password,
                });
            },
        },
    },
});
