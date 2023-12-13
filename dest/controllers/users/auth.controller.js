"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const models_1 = require("../../models");
class AuthController {
    constructor() { }
    doRegister(uid) {
        models_1.UserModel.create({
            uid: uid,
        });
    }
    doLogin(authData) {
        models_1.UserModel.findOne({
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
