import type { Request, Response, NextFunction } from 'express';

import express from 'express';
import { loggerUtil } from '../../utils/logger.util';
import { graphqlConfig } from './graphql.config';
import { AuthController } from '../../controllers/users/auth.controller';

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
    let authed = await graphqlConfig.init(true);
    let noneAuthed = await graphqlConfig.init(false);
    let authController = new AuthController();

    this.app.all('/graphql', express.json(), async (req, res, next) => {
      let stat = await authController.isLoggedInForGraphQL(req);
      stat ? authed(req, res, next) : noneAuthed(req, res, next);
    });
  },

  listen() {
    let port = parseInt(process.env.SERVER_PORT?.trim() as string);

    this.app.listen(port, () => {
      loggerUtil.success(`✅ Server started: http://${process.env.SERVER_HOST?.trim()}:${port}`);
    });
  },
};
