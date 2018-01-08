import UserRoute from './user';
import PersonRoute from './person';

class Routes {
  static setRouteObjects() {
    this.user = new UserRoute();
    this.person = new PersonRoute();
  }

  static init(app) {
    this.app = app;

    this.setRouteObjects();

    this.app.use('/users', this.user.init());
    this.app.use('/persons', this.person.init());
  }
}

export default Routes;
