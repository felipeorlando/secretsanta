class PersonsController {
  constructor(Person, $mdToast, $scope) {
    'ngInject';

    Person.all().then(res => {
      this.persons = res.data.persons;
    });

    this.destroy = (id) => {
      Person.destroy(id).then(res => {
        const index = this.persons.findIndex((person) => {
          return person._id === id;
        });

        this.persons.splice(index, 1);
      });
    }
  }
}

export default PersonsController;
