import UserRoute from './user';

class Routes {
  constructor(app) {
    this.app = app;
    this.user = new UserRoute();
  }

  registerRoutes() {
    this.app.use('/users', this.user.init());
  }
}

export default Routes;
