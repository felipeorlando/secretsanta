import UserRoute from './user';
import PersonRoute from './person';

class Routes {
  constructor(app) {
    this.app = app;
    this.user = new UserRoute();
    this.person = new PersonRoute();
  }

  registerRoutes() {
    this.app.use('/users', this.user.init());
    this.app.use('/persons', this.person.init());
  }
}

export default Routes;
