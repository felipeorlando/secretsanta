class UsersController {
  constructor(User, $scope) {
    'ngInject';

    User.all().then(res => {
      this.users = res.data.users;
    });
  }
}

export default UsersController;
