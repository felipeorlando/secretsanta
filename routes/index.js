import AuthRoute from './auth';
import UserRoute from './user';
import PersonRoute from './person';

class Routes {
  static setRouteObjects() {
    this.auth = new AuthRoute();
    this.user = new UserRoute();
    this.person = new PersonRoute();
  }

  static init(app) {
    this.app = app;

    this.setRouteObjects();

    this.app.use('/auth', this.auth.init());
    this.app.use('/users', this.user.init());
    this.app.use('/persons', this.person.init());
  }
}

export default Routes;
