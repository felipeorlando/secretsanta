class UsersController {
  constructor(User, $scope) {
    'ngInject';

    const self = this;

    User.all().then(res => {
      this.users = res.data.users;
    });
  }
}

export default UsersController;
