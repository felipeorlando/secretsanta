class JWT {
  constructor(AppConstants, $window) {
    'ngInject';

    this.appConstants = AppConstants;
    this.window = $window;
  }

  save(token) {
    this.window.localStorage[this.appConstants.jwtKey] = token;
  }

  get() {
    return this.window.localStorage[this.appConstants.jwtKey];
  }

  destroy() {
    this.window.localStorage.removeItem(this.appConstants.jwtKey);
  }
}

export default JWT;
