import { GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLAuthLoginSuccessType } from './auth.graphql.type';
import { AuthController } from '../../controllers/users/auth.controller';

export const AuthGraphQLMutations = new GraphQLObjectType({
  name: 'AuthMutations',

  description: 'List of mutations to authenticate',

  fields: {
    signin: {
      type: GraphQLAuthLoginSuccessType,

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
