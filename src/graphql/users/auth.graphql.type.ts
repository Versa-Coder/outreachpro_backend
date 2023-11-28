import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const GQL_AUTH_LOGIN_HEADER = new GraphQLObjectType({
  name: 'GQL_AUTHED_LOGIN_HEADER',
  description: 'Authed login',
  fields: {
    Authorization: {
      type: GraphQLString,
    },
  },
});

export const GQL_AUTH_LOGIN_DETAIL = new GraphQLObjectType({
  name: 'GQL_AUTH_LOGIN_DETAIL',
  description: 'Login informations',

  fields: {
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

export const GQL_AUTH_LOGIN_SUCEESS = new GraphQLObjectType({
  name: 'GQL_AUTH_LOGIN_DETAIL',
  description: 'Login informations',

  fields: {
    loggedIn: { type: GraphQLBoolean },
    token: { type: GraphQLString },
    time: { type: GraphQLString },
  },
});
