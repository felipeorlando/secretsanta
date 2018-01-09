import jwt from 'express-jwt';
import configs from '../configs';

class AuthService {
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
      getToken: AuthService.getTokenFromHeader,
    });
  }
}

export default AuthService;
