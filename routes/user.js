// import express from 'express';
// import UserController from '../controllers/user';

// const router = express.Router();
// const userController = new UserController();

// router
//   .get('/', userController.index)
//   .post('/', userController.create)
//   .get('/:id', userController.show)
//   .put('/:id', userController.update)
//   .delete('/:id', userController.delete);

// export default { init: router };


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
