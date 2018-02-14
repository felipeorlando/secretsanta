class UserNewController {
  constructor(User, $stateParams, $location, $mdToast, $scope) {
    'ngInject';

    this.id = $stateParams.id;

    this.submit = () => {
      let user = this.user;

      User.create({ user }).then(res => {
        $location.path('/users');

        $mdToast.show($mdToast.newUser());
      });
    };
  }
}

export default UserNewController;
