class UserService {
  constructor(AppConstants, $http) {
    'ngInject';

    this.api = AppConstants.api;
    this.http = $http;
  }

  all() {
    return this.http.get(`${this.api}/users`);
  }
}

export default UserService;
