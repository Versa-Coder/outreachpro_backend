import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';
import { GQL_LIST_INFO_TYPE } from './list.graphql.type';
import { ListController } from '../../controllers';
import { LIST_INFO_MODEL_OPTIONAL_ID_TYPE } from '../../models';

export const ListGraphQLMutationTypes = new GraphQLObjectType({
  name: 'ListMutations',
  description: "List of all 'List' related mutations",

  fields: () => ({
    createList: {
      type: GQL_LIST_INFO_TYPE,

      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        forEmail: { type: GraphQLBoolean },
        forPhone: { type: GraphQLBoolean },
      },

      resolve(parent, args: LIST_INFO_MODEL_OPTIONAL_ID_TYPE) {
        console.log({ args });
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
