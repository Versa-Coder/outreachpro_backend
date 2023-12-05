import { GraphQLFormattedError } from 'graphql';
import { ApolloServer } from '@apollo/server';
import { getGraphQLSchema } from '../../graphql';
import { expressMiddleware } from '@apollo/server/express4';
import { COMMON_ERROR_TYPE } from '../../types';
import { GRAPHQL_ERR_UNKNOWN } from '../../errors/config/graphql.error';
import { loggerUtil } from '../../utils/logger.util';

export const graphqlConfig = {
  createServer(authed: boolean) {
    return new ApolloServer({
      schema: getGraphQLSchema(authed),
      formatError: handleGQLError,
    });
  },

  async init(authed: boolean = false) {
    const server = this.createServer(authed);
    await server.start();
    return expressMiddleware(server);
  },
};

function handleGQLError(formattedError: GraphQLFormattedError, error: unknown): GraphQLFormattedError {
  if (!(typeof error === 'object' && (error as COMMON_ERROR_TYPE).code)) {
    loggerUtil.error(error).notify();
    return GRAPHQL_ERR_UNKNOWN as GraphQLFormattedError;
  }
  return error as GraphQLFormattedError;
}
