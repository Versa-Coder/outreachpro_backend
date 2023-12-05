"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor() { }
    doLogin(authData) {
        const stat = {
            loggedIn: true,
            accessToken: 'hello',
            refreshToken: '',
            time: '',
        };
        return stat;
    }
    isLoggedInForGraphQL(req) {
        if (req.headers.token) {
            console.log(req.headers.token);
            console.log({ token: req.headers.token.accessToken });
        }
        else {
            console.log('>>>>>>>>>', req.headers.accesstoken);
        }
        return req.headers.accesstoken === 'hello';
    }
}
exports.AuthController = AuthController;
