class UsersController {
  constructor(User, $scope) {
    'ngInject';

    User.all().then(res => {
      this.users = res.data.users;
    });

    this.destroy = (id) => {
      User.destroy(id).then(res => {
        const index = this.users.findIndex((user) => {
          return user._id === id;
        });

        this.users.splice(index, 1);
      });
    }
  }
}

export default UsersController;
