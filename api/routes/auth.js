import express from 'express';
import AuthController from '../controllers/auth';

class AuthRoute {
  constructor() {
    this.router = express.Router();
    this.authController = new AuthController();
  }

  init() {
    return this.router
      .post('/login', this.authController.login);
  }
}

export default AuthRoute;
