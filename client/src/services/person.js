class PersonService {
  constructor(AppConstants, $http) {
    "ngInject";

    this.api = AppConstants.api;
    this.http = $http;
  }

  all() {
    return this.http.get(`${this.api}/persons`);
  }

  find(id) {
    return this.http.get(`${this.api}/persons/${id}`);
  }

  create(params) {
    return this.http.post(`${this.api}/persons`, params);
  }

  update(id, params) {
    return this.http.put(`${this.api}/persons/${id}`, params);
  }
}

export default PersonService;
