class UsersController {
  constructor($scope) {
    'ngInject';

    this.users = [
      {name: 'Felipe', email: 'fobsouza@gmail.com'},
      {name: 'Orlando', email: 'fobsouza@gmail.com'},
      {name: 'Maria', email: 'fobsouza@gmail.com'},
    ];
  }
}

export default UsersController;
