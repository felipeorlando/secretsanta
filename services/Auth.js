import jwt from 'express-jwt';
import configs from '../configs';

class Auth {
  static getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }

    return null;
  }

  static authenticate() {
    return jwt({
      secret: configs.app.jwtSecret,
      userProperty: 'payload',
      getToken: this.getTokenFromHeader,
    });
  }
}

export default Auth;
