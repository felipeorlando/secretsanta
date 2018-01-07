import express from 'express';
import PersonController from '../controllers/person';

class PersonRoute {
  constructor() {
    this.router = express.Router();
    this.personController = new PersonController();
  }

  init() {
    return this.router
      .get('/', this.personController.index)
      .post('/', this.personController.create)
      .get('/:id', this.personController.show)
      .put('/:id', this.personController.update)
      .delete('/:id', this.personController.delete)
      .post('/match', this.personController.match);
  }
}

export default PersonRoute;
