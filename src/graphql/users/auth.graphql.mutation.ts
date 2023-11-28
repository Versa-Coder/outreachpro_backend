import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GQL_AUTH_LOGIN_DETAIL } from './auth.graphql.type';
import { AuthController } from '../../controllers/users/auth.controller';

export const AuthGraphQLMutations = new GraphQLObjectType({
  name: 'AuthMutations',

  description: 'List of mutations to authenticate',

  fields: {
    signup: {
      type: GQL_AUTH_LOGIN_DETAIL,

      args: {
        userName: { type: GraphQLString },
        password: { type: GraphQLString },
      },

      resolve(root, args) {
        return new AuthController().doLogin({
          userName: args.userName as string,
          password: args.password as string,
        });
      },
    },
  },
});
