import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';
import { GraphQLListInfoType } from './list.graphql.type';
import { ListController } from '../../controllers';
import { LIST_INFO_MODEL_OPTIONAL_ID_TYPE } from '../../models';

export const ListGraphQLMutations = new GraphQLObjectType({
  name: 'ListMutations',
  description: "List of all 'List' related mutations",

  fields: () => ({
    createList: {
      type: GraphQLListInfoType,

      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        forEmail: { type: GraphQLBoolean },
        forPhone: { type: GraphQLBoolean },
      },

      resolve(parent, args: LIST_INFO_MODEL_OPTIONAL_ID_TYPE) {
        return new ListController().createList({
          userId: 1,
          title: args.title,
          description: args.description,
          forEmail: args.forEmail,
          forPhone: args.forPhone,
        });
      },
    },
  }),
});
