"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGraphQLMutations = void 0;
const graphql_1 = require("graphql");
const list_graphql_type_1 = require("./list.graphql.type");
const controllers_1 = require("../../controllers");
exports.ListGraphQLMutations = new graphql_1.GraphQLObjectType({
    name: 'ListMutations',
    description: "List of all 'List' related mutations",
    fields: () => ({
        createList: {
            type: list_graphql_type_1.GQL_LIST_INFO_TYPE,
            args: {
                title: { type: graphql_1.GraphQLString },
                description: { type: graphql_1.GraphQLString },
                forEmail: { type: graphql_1.GraphQLBoolean },
                forPhone: { type: graphql_1.GraphQLBoolean },
            },
            resolve(parent, args) {
                console.log({ args });
                return new controllers_1.ListController().createList({
                    userId: 1,
                    title: args.title,
                    description: args.description,
                    forEmail: args.forEmail,
                    forPhone: args.forPhone,
                });
            },
        },
    }),
});
