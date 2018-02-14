class UserService {
  constructor(AppConstants, $http) {
    'ngInject';

    this.api = AppConstants.api;
    this.http = $http;
  }

  all() {
    return this.http.get(`${this.api}/users`);
  }

  find(id) {
    return this.http.get(`${this.api}/users/${id}`);
  }
}

export default UserService;
