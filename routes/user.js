import express from 'express';
import UserController from '../controllers/user';

class UserRoute {
  constructor() {
    this.router = express.Router();
    this.userController = new UserController();
  }

  init() {
    return this.router
      .get('/', this.userController.index)
      .post('/', this.userController.create)
      .get('/:id', this.userController.show)
      .put('/:id', this.userController.update)
      .delete('/:id', this.userController.delete);
  }
}

export default UserRoute;
