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

  update(id, params) {
    return this.http.put(`${this.api}/users/${id}`, params);
  }

  destroy(id) {
    return this.http.delete(`${this.api}/users/${id}`);
  }
}

export default UserService;
