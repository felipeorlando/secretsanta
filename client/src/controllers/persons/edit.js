class PersonEditController {
  constructor(Person, $stateParams, $scope) {
    'ngInject';

    this.id = $stateParams.id;

    Person.find(this.id).then(res => {
      if (res.data.person && !res.data.error) {
        this.person = res.data.person;
      }
    });
  }
}

export default PersonEditController;
