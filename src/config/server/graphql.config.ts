import { ApolloServer } from '@apollo/server';
import { graphQLSchema } from '../../graphql';
import { expressMiddleware } from '@apollo/server/express4';

export const graphqlConfig = {
  server: new ApolloServer({
    schema: graphQLSchema,
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
