class PersonsController {
  constructor($scope) {
    'ngInject';

    this.persons = [
      {name: 'Felipe', email: 'fobsouza@gmail.com'},
      {name: 'Orlando', email: 'fobsouza@gmail.com'},
      {name: 'Maria', email: 'fobsouza@gmail.com'},
    ];
  }
}

export default PersonsController;
