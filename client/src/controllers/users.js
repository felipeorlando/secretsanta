class UsersController {
  constructor($scope) {
    'ngInject';

    this.users = [
      {name: 'Felipe'},
      {name: 'Orlando'},
      {name: 'Maria'},
    ];
  }
}

export default UsersController;
