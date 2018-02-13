class PersonsController {
  constructor($scope) {
    'ngInject';

    this.persons = [
      {name: 'Felipe'},
      {name: 'Orlando'},
      {name: 'Maria'},
    ];
  }
}

export default PersonsController;
