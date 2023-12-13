import type { Request } from 'express';
import { UserModel } from '../../models';
import { UUIDV4 } from 'sequelize';

export class AuthController {
  constructor() {}

  doRegister(uid: string) {
    UserModel.create({
      uid: uid,
    });
  }

  doLogin(authData: { userName: string; password: string }) {
    UserModel.findOne({
      attributes: ['sessionToken'],
    });
    const stat = {
      loggedIn: true,
      accessToken: 'hello',
      refreshToken: '',
      time: '',
    };

    return stat;
  }

  isLoggedInForGraphQL(req: Request) {
    type token = { accessToken: string };
    if (req.headers.token) {
      console.log(req.headers.token);
      console.log({ token: (req.headers.token as unknown as token).accessToken });
    } else {
      console.log('>>>>>>>>>', req.headers.accesstoken);
    }
    return req.headers.accesstoken === 'hello';
  }
}
