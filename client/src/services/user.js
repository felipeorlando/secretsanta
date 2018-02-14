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

  create(params) {
    return this.http.post(`${this.api}/users`, params);
  }
}

export default UserService;
