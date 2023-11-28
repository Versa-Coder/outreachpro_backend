import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { ListGraphQLQueries } from './list/list.graphql.query';
import { ListGraphQLMutations } from './list/list.graphql.mutation';

const rootQuery = new GraphQLObjectType({
  name: 'AppQueryType',
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
  name: 'AppMutationType',
  description: 'List of all the mutations',
  fields: {
    ListMutation: {
      type: ListGraphQLMutations,
      resolve(a, b) {
        return 'ok';
      },
    },
  },
});

export const graphQLSchema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutations,
});
