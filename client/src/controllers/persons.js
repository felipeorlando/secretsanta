class PersonsController {
  constructor(Person, $scope) {
    'ngInject';

    const self = this;

    Person.all().then(res => {
      this.persons = res.data.persons;
    });
  }
}

export default PersonsController;
