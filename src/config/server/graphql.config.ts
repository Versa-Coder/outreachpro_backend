import { GraphQLFormattedError } from 'graphql';
import { ApolloServer } from '@apollo/server';
import { graphQLSchema } from '../../graphql';
import { expressMiddleware } from '@apollo/server/express4';
import { COMMON_ERROR_TYPE } from '../../types';
import { GRAPHQL_ERR_UNKNOWN } from '../../errors/config/graphql.error';
import { loggerUtil } from '../../utils/logger.util';

export const graphqlConfig = {
  server: new ApolloServer({
    schema: graphQLSchema,
    formatError: handleGQLError,
  }),

  async init() {
    await this.start();
    return this.getExpressMiddleware();
  },

  async start() {
    await this.server.start();
  },

  getExpressMiddleware() {
    return expressMiddleware(this.server);
  },
};

function handleGQLError(formattedError: GraphQLFormattedError, error: unknown): GraphQLFormattedError {
  if (!(typeof error === 'object' && (error as COMMON_ERROR_TYPE).code)) {
    loggerUtil.error(error).notify();
    return GRAPHQL_ERR_UNKNOWN as GraphQLFormattedError;
  }
  return error as GraphQLFormattedError;
}
