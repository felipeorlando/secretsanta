class UserEditController {
  constructor(User, $stateParams, $scope) {
    'ngInject';

    this.id = $stateParams.id;

    User.find(this.id).then(res => {
      if (res.data.user && !res.data.error) {
        this.user = res.data.user;
      }
    });
  }
}

export default UserEditController;
