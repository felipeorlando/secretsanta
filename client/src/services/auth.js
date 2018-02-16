import dialog from '../components/dialog';

class AuthService {
  constructor(
    AppConstants,
    User,
    JWT,
    $http,
    $state,
    $q,
    $mdDialog,
    $rootScope
  ) {
    'ngInject';

    this.api = AppConstants.api;
    this.jwt = JWT;
    this.user = User;
    this.http = $http;
    this.state = $state;
    this.q = $q;
    this.mdDialog = $mdDialog;

    this.loggedTrully = () => {
      $rootScope.logged = true;
    }

    this.loggedFalsy = () => {
      $rootScope.logged = false;
    }
  }

  attempt(user) {
    return this.http
      .post(`${this.api}/auth/login`, { user })
      .then(res => {
        this.jwt.save(res.data.user.token);
        this.user.current = res.data.user.email;

        return res;
      });
  }

  logout() {
    this.user.current = null;
    this.jwt.destroy();
    this.state.go(this.state.$current, null, { reload: true });
  }

  verifyAuth() {
    let deferred = this.q.defer();

    if (!this.jwt.get()) {
      deferred.resolve(false);
      return deferred.promise;
    }

    if (this.user.current) {
      deferred.resolve(true);
    } else {
      const tokenJWT = this.jwt.get();
      const user = { token: tokenJWT };

      this.http.post(`${this.api}/auth/check`, { user })
      .then((res) => {
        deferred.resolve(true);
      }, (err) => {
        this.jwt.destroy();

        deferred.resolve(false);
      })
    }

    return deferred.promise;
  }

  ensureAuthIs(bool) {
    let deferred = this.q.defer();

    this.verifyAuth().then((authValid) => {
      if (authValid !== bool) {
        dialog(
          'Wait! ⛔️',
          'You\'re not logged in!',
          this.mdDialog
        );

        this.state.go('app.authLogin');
        deferred.resolve(false);
      } else {
        deferred.resolve(true);
      }
    });

    return deferred.promise;
  }

  isLogged() {
    let deferred = this.q.defer();

    this.verifyAuth().then((authValid) => {
      if (authValid) {
        deferred.resolve(true);
      } else {
        deferred.resolve(false);
      }
    });

    return deferred.promise;
  }
}

export default AuthService;
