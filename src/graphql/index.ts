import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { ListGraphQLQueryType } from './list/list.graphql.query';
import { ListGraphQLMutationTypes } from './list/list.graphql.mutation';

const rootQuery = new GraphQLObjectType({
  name: 'AppQueryType',
  description: 'Explore all the queries for the app',

  fields: {
    ListQuery: {
      type: ListGraphQLQueryType,
    },
  },
});

const rootMutations = new GraphQLObjectType({
  name: 'AppMutationType',
  description: 'List of all the mutations',
  fields: {
    ListMutation: {
      type: ListGraphQLMutationTypes,
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
