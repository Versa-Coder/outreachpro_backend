import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from 'graphql';

export const GraphQLListInfoType = new GraphQLObjectType({
  name: 'ListInfo',
  description: 'Individual list basic info and settings',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    forEmail: { type: GraphQLBoolean },
    forPhone: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
});
