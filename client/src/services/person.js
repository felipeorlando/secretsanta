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
}

export default PersonService;
