import { GraphQLObjectType, GraphQLString } from 'graphql';

export const AuthGraphQLMutations = new GraphQLObjectType({
  name: 'AuthMutations',

  description: 'List of mutations to authenticate',

  fields: {
    signup: {
      type: GraphQLString,
    },
  },
});
