class PersonsController {
  constructor(Person, $scope) {
    'ngInject';

    Person.all().then(res => {
      this.persons = res.data.persons;
    });
  }
}

export default PersonsController;
