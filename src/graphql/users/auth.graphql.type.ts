import { GraphQLObjectType, GraphQLString } from 'graphql';

export const GQL_AUTHED_LOGIN_HEADER = new GraphQLObjectType({
  name: 'GQL_AUTHED_LOGIN_HEADER',
  description: 'Authed login',
  fields: {
    Authorization: {
      type: GraphQLString,
    },
  },
});
