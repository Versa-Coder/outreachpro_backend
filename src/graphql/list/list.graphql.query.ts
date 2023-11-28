import { GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { GQL_LIST_INFO_TYPE } from './list.graphql.type';
import { ListController } from '../../controllers';
import { loggerUtil } from '../../utils/logger.util';

export const ListGraphQLQueries = new GraphQLObjectType({
  name: 'List_Queries',
  description: 'Get lists for an user',

  fields: () => ({
    getLists: {
      type: new GraphQLList(GQL_LIST_INFO_TYPE),
      args: {
        userId: { type: GraphQLString },
      },
      resolve(root, args) {
        return new ListController().getListsForUser(args.userId);
      },
    },

    getLists2: {
      type: new GraphQLList(GQL_LIST_INFO_TYPE),
      args: {
        userId: { type: GraphQLString },
      },
      resolve(root, args) {
        return new ListController().getListsForUser(args.userId);
      },
    },
  }),
});
