import express from 'express';
import PersonController from '../controllers/person';
import AuthService from '../services/auth';

class PersonRoute {
  constructor() {
    this.router = express.Router();
    this.personController = new PersonController();
  }

  init() {
    return this.router
      .use(AuthService.authenticate())
      .get('/', this.personController.index)
      .post('/', this.personController.create)
      .get('/:id', this.personController.show)
      .put('/:id', this.personController.update)
      .delete('/:id', this.personController.delete)
      .post('/match', this.personController.match);
  }
}

export default PersonRoute;
