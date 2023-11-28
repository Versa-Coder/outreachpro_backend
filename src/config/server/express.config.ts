import express from 'express';
import { loggerUtil } from '../../utils/logger.util';
import { graphqlConfig } from './graphql.config';

export const expressConfig = {
  app: express(),

  async init() {
    await this.setupGraphQL();
    await this.listen();
  },

  getWildCardRoutes() {
    return ['login'];
  },

  async setupGraphQL() {
    this.app.all('/graphql', express.json(), await graphqlConfig.init());
  },

  listen() {
    let port = parseInt(process.env.SERVER_PORT?.trim() as string);
    this.app.listen(port, () => {
      loggerUtil.success(`✅ Server started: http://${process.env.SERVER_HOST?.trim()}:${port}`);
    });
  },
};
