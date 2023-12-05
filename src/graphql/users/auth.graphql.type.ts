import { GraphQLBoolean, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

export const GraphQLAuthLoginHeaderType = new GraphQLObjectType({
  name: 'AuthLoginHeader',
  description: 'Authed login',
  fields: {
    Authorization: {
      type: GraphQLString,
    },
  },
});

export const GraphQLAuthLoginDetailType = new GraphQLObjectType({
  name: 'AuthLoginDetail',
  description: 'Login informations',

  fields: {
    userName: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

export const GraphQLAuthLoginSuccessType = new GraphQLObjectType({
  name: 'AuthLoginSuccess',
  description: 'Login informations',

  fields: {
    loggedIn: { type: GraphQLBoolean },
    token: { type: GraphQLString },
    time: { type: GraphQLString },
  },
});
