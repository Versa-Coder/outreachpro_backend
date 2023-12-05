import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import { ListGraphQLQueries } from './list/list.graphql.query';
import { ListGraphQLMutations } from './list/list.graphql.mutation';
import { AuthGraphQLMutations } from './users/auth.graphql.mutation';

const rootQuery = new GraphQLObjectType({
  name: 'AppQuery',
  description: 'Explore all the queries for the app',

  fields: {
    ListQuery: {
      type: ListGraphQLQueries,
      resolve: (root, args) => {
        return 'GetListsQuery';
      },
    },
  },
});

const rootMutations = new GraphQLObjectType({
  name: 'AppMutation',
  description: 'List of all the mutations',
  fields: {
    ListMutation: {
      type: ListGraphQLMutations,
      resolve(a, b) {
        return 'ok';
      },
    },
    AuthMutation: {
      type: AuthGraphQLMutations,
      resolve(a, b) {
        return 'ok';
      },
    },
  },
});

const noneAuthMutatons = new GraphQLObjectType({
  name: 'auth',
  description: 'Authentication',

  fields: {
    exec: {
      type: AuthGraphQLMutations,
      resolve(a, b) {
        return 'Ok';
      },
    },
  },
});

const noneAuthedQueries = new GraphQLObjectType({
  name: 'authQueries',
  description: 'Authentication',

  fields: {
    exec: {
      type: GraphQLString,
      resolve(a, b) {
        return 'Use auth mutations to continue';
      },
    },
  },
});

export function getGraphQLSchema(authed: boolean = false) {
  const schema = authed
    ? {
        query: rootQuery,
        mutation: rootMutations,
      }
    : {
        query: noneAuthedQueries,
        mutation: noneAuthMutatons,
      };

  return new GraphQLSchema(schema);
}
